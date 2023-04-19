import React from 'react';
import EditableCell from './Cell';
import { GridTable } from './styled';

const Row = ({
  i,
  columnDefs,
  gridTemplateColumns,
  item,
  onRowClick,
  clearActiveOnCell,
  collapsibleRow,
  rowHeight,
}) => {
  const onClick = (e) => {
    onRowClick ? onRowClick(item) : e?.stopPropagation();
  };
  return (
    <GridTable.Tr
      index={i}
      height={
        rowHeight === 'auto' || `${rowHeight}`?.endsWith('px')
          ? rowHeight
          : rowHeight
          ? rowHeight + 'px'
          : '28px'
      }
      length={columnDefs?.length}
      gridTemplateColumns={gridTemplateColumns}
      className='new-table-row table-row'
      onClick={onClick}
    >
      {columnDefs?.map((colDefs, j) => (
        <EditableCell
          key={j}
          index={j}
          item={item}
          colDefs={colDefs}
          rowHeight={rowHeight}
          clearActiveOnCell={clearActiveOnCell}
          collapsibleRow={collapsibleRow}
        />
      ))}
    </GridTable.Tr>
  );
};

export default React.memo(Row);
