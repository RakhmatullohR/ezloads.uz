import React, { useState } from 'react';
import { GridTable } from './styled';

let gridOpenFilter = () => {};
const GridFilter = ({ gridTemplateColumns, columnDefs, PanelRenderer }) => {
  const [openFilter, setOpenFilter] = useState(false);

  gridOpenFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  return (
    <GridTable.Filter
      filter='true'
      openfilter={openFilter?.toString()}
      gridTemplateColumns={gridTemplateColumns}
      style={{ paddingLeft: PanelRenderer ? '33px' : 0 }}
    >
      {columnDefs?.map(({ floatingFilterComponent: Filter }, index) => (
        <GridTable.Th key={index} filter='true' openfilter={openFilter}>
          {Filter && <Filter openFilter={openFilter} />}
        </GridTable.Th>
      ))}
    </GridTable.Filter>
  );
};

export { gridOpenFilter };
export default React.memo(GridFilter);
