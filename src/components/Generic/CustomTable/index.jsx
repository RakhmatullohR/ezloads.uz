import { CustomLoading } from '@generics';
import React, { useEffect, useRef, useState } from 'react';
import Collapse from './Collapse';
import Row from './Row';
import RowScrolable from './RowScrolable';
import GridFilter from './filter';
import { AntCollapse, AntPanel, GridTable, IconDown } from './styled';

const CustomTable = ({
  columnDefs,
  // openFilter,
  rowData,
  groupRowRendererParams,
  isLoading,
  scrolable,
  isFetching,
  rowCollapsible: PanelRenderer,
  onRowClick,
  rowHeight,
  defaultRowHeight,
  generalStyle,
  headerHeight,
}) => {
  const table = useRef(null);
  const [data, setData] = useState();
  const [rowId, setRowId] = useState();

  let gridTemplateColumns = columnDefs
    ?.map((columnDef) =>
      columnDef?.['flex']
        ? `${columnDef?.['flex']}fr`
        : columnDef?.['width']
        ? `${
            isNaN(columnDef?.['width'])
              ? columnDef?.['width']
              : columnDef?.['width'] + 'px'
          }`
        : '1fr'
    )
    ?.join(' ');
  const minimumWidth = columnDefs?.map((columnDef) =>
    columnDef?.['minWith']
      ? `${
          columnDef?.['minWith']?.endsWith('px')
            ? Number(columnDef?.['minWith']?.replace('px', ''))
            : Number(columnDef?.['minWith'])
        }`
      : 20
  );
  function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
    }, {});
  }

  useEffect(() => {
    function getData() {
      if (groupRowRendererParams?.['groupBy']) {
        let objData = groupBy(rowData, groupRowRendererParams?.['groupBy']);
        let headers = Object.keys(objData);
        groupRowRendererParams?.['firstGroupName']
          ? headers?.unshift(
              headers?.splice(
                headers?.indexOf(groupRowRendererParams?.['firstGroupName']),
                1
              )[0]
            )
          : headers?.unshift(headers?.splice(headers?.indexOf('null'), 1)[0]);
        groupRowRendererParams?.['lastGroupName'] &&
          headers?.push(
            headers?.splice(
              headers?.indexOf(groupRowRendererParams?.['lastGroupName']),
              1
            )[0]
          );
        let data = headers?.map((title) => {
          let obj = {};
          obj[groupRowRendererParams?.['titleField']] = title;
          obj[groupRowRendererParams?.['dataField']] = objData[title];
          return obj;
        });
        setData(data);
      } else {
        setData(rowData);
      }
    }
    getData();
  }, [rowData]);
  const handleCollapse = (id) => {
    setRowId(id);
  };
  const clearActiveOnCell = () => {
    const cells = table?.current?.querySelectorAll('.new-table-cell');
    for (let cell of cells) {
      cell?.classList?.contains('active-cell') &&
        cell?.classList?.remove('active-cell');
    }
  };

  useEffect(() => {
    const resizers = table.current.querySelectorAll('.resizer');
    let templateColumns = gridTemplateColumns;
    resizers.forEach((resizer) => {
      let element = resizer?.closest('.header-cell');
      resizer.addEventListener('mousedown', initResize, false);
      var currentX = 0;
      var currentWidth = 0;

      //Window funtion mousemove & mouseup
      function initResize(e) {
        currentX = e.clientX;
        currentWidth = element.clientWidth;
        document.documentElement.style.cursor = 'col-resize';
        document.documentElement.style.userSelect = 'none';
        document.documentElement.addEventListener('mousemove', Resize, false);
        document.documentElement.addEventListener('mouseup', stopResize, false);
      }

      //resize the element
      function Resize(e) {
        const index = element?.getAttribute('data-index');
        const filter = table.current.querySelector('[filter=true]');
        const rows = table.current.querySelectorAll('.table-row');
        let tempCols = templateColumns.split(' ');
        let newWidth =
          currentWidth + e.clientX - currentX >= minimumWidth[index]
            ? currentWidth + e.clientX - currentX
            : minimumWidth[index];
        tempCols[index] = newWidth + 'px';

        for (let row of rows)
          row.style.gridTemplateColumns = tempCols?.join(' ');
        filter.style.gridTemplateColumns = tempCols?.join(' ');
        templateColumns = tempCols?.join(' ');
        gridTemplateColumns = templateColumns;
      }

      //on mouseup remove windows functions mousemove & mouseup
      function stopResize() {
        document.documentElement.style.cursor = 'auto';
        document.documentElement.style.userSelect = 'auto';
        document.documentElement.removeEventListener(
          'mousemove',
          Resize,
          false
        );
        document.documentElement.removeEventListener(
          'mouseup',
          stopResize,
          false
        );
        // resizer.removeEventListener('mousedown', initResize, false);
      }
    });
  }, [table?.current, isLoading, isFetching]);

  return (
    <GridTable
      ref={table}
      height={table?.current?.offsetTop}
      style={generalStyle}
    >
      <GridTable.Tr
        length={columnDefs?.length}
        gridTemplateColumns={gridTemplateColumns}
        style={{ paddingLeft: PanelRenderer ? '33px' : 0 }}
        header='true'
        height={headerHeight || '28px'}
        className='table-row'
      >
        {columnDefs?.map(
          (
            {
              headerName,
              headerRenderer: HeaderRenderer,
              headerStyle,
              resizable,
            },
            i
          ) => {
            return (
              <GridTable.Th
                key={headerName || `${i}header`}
                style={headerStyle && headerStyle()}
                height={headerHeight || '28px'}
                className='header-cell'
                data-index={i}
              >
                {HeaderRenderer ? (
                  <HeaderRenderer />
                ) : (
                  headerName?.toUpperCase()
                )}
                {resizable && !isLoading && !isFetching ? (
                  <GridTable.Resizer className='resizer' />
                ) : null}
              </GridTable.Th>
            );
          }
        )}
      </GridTable.Tr>

      <GridFilter
        gridTemplateColumns={gridTemplateColumns}
        columnDefs={columnDefs}
        PanelRenderer={PanelRenderer}
      />
      <GridTable.Body>
        {isLoading ? (
          <CustomLoading height={'100%'} />
        ) : rowData?.length < 1 ? (
          <GridTable.Tr>
            <GridTable.Td colSpan={columnDefs?.length}>
              {isFetching ? 'Fetching...' : 'No records'}
            </GridTable.Td>
          </GridTable.Tr>
        ) : groupRowRendererParams ? (
          data?.map((item, i) =>
            item?.[groupRowRendererParams?.['titleField']] !== null ? (
              <Collapse
                key={`${i}collapse`}
                defaultOpenCollapse={i === 0}
                item={item}
                groupRowRendererParams={groupRowRendererParams}
                columnDefs={columnDefs}
                gridTemplateColumns={gridTemplateColumns}
                Header={groupRowRendererParams?.innerRenderer}
                openAllCollapse={groupRowRendererParams?.openAllCollapse}
                scrolable={scrolable}
                onRowClick={onRowClick}
                clearActiveOnCell={clearActiveOnCell}
                rowHeight={rowHeight}
                defaultRowHeight={defaultRowHeight}
              />
            ) : (
              <div className='new-table-collapse' key={i}>
                <div className={'inner-collapse-data'}>
                  {scrolable
                    ? item?.data?.map((item, i) => {
                        return (
                          <RowScrolable
                            key={i}
                            i={i}
                            item={item}
                            rowHeight={rowHeight}
                            onRowClick={onRowClick}
                            columnDefs={columnDefs}
                            gridTemplateColumns={gridTemplateColumns}
                            clearActiveOnCell={clearActiveOnCell}
                          />
                        );
                      })
                    : item?.data?.map((item, i) => {
                        return (
                          <Row
                            key={i}
                            i={i}
                            item={item}
                            rowHeight={rowHeight}
                            onRowClick={onRowClick}
                            columnDefs={columnDefs}
                            gridTemplateColumns={gridTemplateColumns}
                            clearActiveOnCell={clearActiveOnCell}
                          />
                        );
                      })}
                </div>
              </div>
            )
          )
        ) : scrolable ? (
          PanelRenderer ? (
            <AntCollapse
              onChange={handleCollapse}
              rowHeight={
                rowHeight === 'auto' || `${rowHeight}`?.endsWith('px')
                  ? rowHeight
                  : rowHeight
                  ? rowHeight + 'px'
                  : '28px'
              }
              expandIcon={({ isActive }) => (
                <IconDown isactive={isActive ? 'true' : 'false'} />
              )}
              accordion
            >
              {data?.map((item, i) => {
                return (
                  <AntPanel
                    key={i}
                    header={
                      <RowScrolable
                        key={i}
                        i={i}
                        item={item}
                        rowHeight={rowHeight}
                        columnDefs={columnDefs}
                        onRowClick={onRowClick}
                        gridTemplateColumns={gridTemplateColumns}
                        collapsibleRow={!!PanelRenderer}
                        clearActiveOnCell={clearActiveOnCell}
                      />
                    }
                    index={i}
                    className='new-table-collapse-panel'
                  >
                    <div
                      style={{
                        borderBottom: '1px solid #e5e7eb',
                        marginLeft: '33px',
                      }}
                    >
                      <PanelRenderer id={rowId} data={item} />
                    </div>
                  </AntPanel>
                );
              })}
            </AntCollapse>
          ) : (
            data?.map((item, i) => {
              return (
                <RowScrolable
                  key={i}
                  i={i}
                  item={item}
                  rowHeight={rowHeight}
                  defaultRowHeight={defaultRowHeight}
                  onRowClick={onRowClick}
                  columnDefs={columnDefs}
                  gridTemplateColumns={gridTemplateColumns}
                  clearActiveOnCell={clearActiveOnCell}
                />
              );
            })
          )
        ) : PanelRenderer ? (
          <AntCollapse
            onChange={handleCollapse}
            accordion
            rowHeight={
              rowHeight === 'auto' || `${rowHeight}`?.endsWith('px')
                ? rowHeight
                : rowHeight
                ? rowHeight + 'px'
                : '28px'
            }
            expandIcon={({ isActive }) => (
              <IconDown isactive={isActive ? 'true' : 'false'} />
            )}
          >
            {data?.map((item, i) => {
              return (
                <AntPanel
                  key={i}
                  header={
                    <Row
                      key={i}
                      i={i}
                      item={item}
                      rowHeight={rowHeight}
                      columnDefs={columnDefs}
                      gridTemplateColumns={gridTemplateColumns}
                      onRowClick={onRowClick}
                      collapsibleRow={!!PanelRenderer}
                      clearActiveOnCell={clearActiveOnCell}
                    />
                  }
                  index={i}
                  className='new-table-collapse-panel'
                >
                  <div
                    style={{
                      borderBottom: '1px solid #e5e7eb',
                      marginLeft: '33px',
                    }}
                  >
                    <PanelRenderer id={rowId} data={item} />
                  </div>
                </AntPanel>
              );
            })}
          </AntCollapse>
        ) : (
          data?.map((item, i) => {
            return (
              <Row
                key={`${i}row`}
                i={i}
                item={item}
                rowHeight={rowHeight}
                defaultRowHeight={defaultRowHeight}
                columnDefs={columnDefs}
                onRowClick={onRowClick}
                gridTemplateColumns={gridTemplateColumns}
                clearActiveOnCell={clearActiveOnCell}
              />
            );
          })
        )}
      </GridTable.Body>
    </GridTable>
  );
};

export default React.memo(CustomTable);
