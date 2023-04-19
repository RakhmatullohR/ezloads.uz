import CurrentTrailerInfo from '../components/Trailer management/Trailer/SubPage/CurrentTrailerInfoNew';
import CurrentTrailerMovements from '../components/Trailer management/Trailer/SubPage/CurrentTrailerMovementsNew';
import CurrentTrailerMoves from '../components/Trailer management/Trailer/SubPage/CurrentTrailerMovesNew';
import CurrentTrailerExpenditure from '../components/Trailer management/Trailer/SubPage/CurrentTrailerExpenditureNew';
import CurrentTrailerInspection from '../components/Trailer management/Trailer/SubPage/CurrentTrailerInspectionNew';
import CurrentTrailerRegCard from '../components/Trailer management/Trailer/SubPage/CurrentTrailerRegCardNew';
import CurrentTrailerAccident from '../components/Trailer management/Trailer/SubPage/CurrentTrailerAccidentNew';
import React from 'react';
import { ErrorCircleIconFilled } from '@styledIcons';
import { useTrailerWarningContext } from '@context';
export const trailersDashboard = [

  {
    id: 2,
    component: CurrentTrailerMovements,
    path: '/movements/',
    title: 'Trailer Movements',
  },
  {
    id: 3,
    component: CurrentTrailerMoves,
    path: '/trailermoves/',
    title: 'Trailer Moves',
  },
  {
    id: 4,
    component: CurrentTrailerExpenditure,
    path: '/expenditure/',
    title: 'Expenditure',
  },
  {
    id: 5,
    component: CurrentTrailerInspection,
    path: '/inspections/',
    title: 'Trailer Inspections',
  },
  {
    id: 6,
    component: CurrentTrailerRegCard,
    path: '/reg-card/',
    title: 'Registration Card',
  },
  {
    id: 7,
    component: CurrentTrailerAccident,
    path: '/accident/',
    title: 'Trailer Accident',
  },
];

const CardComponent = () => {
  const [{ warningRegCardList }] = useTrailerWarningContext();
  return (
    <div
      style={{
        position: 'relative',
        color: warningRegCardList?.length > 0 ? 'red' : '#313E47',
      }}
    >
      {warningRegCardList?.length > 0 && (
        <ErrorCircleIconFilled
          position='absolute'
          top='0px'
          right='-15px'
          color='red'
        />
      )}
      Registration card
    </div>
  );
};

const InspectionComponent = () => {
  const [{ warningInspectionList }] = useTrailerWarningContext();
  return (
    <div
      style={{
        position: 'relative',
        color: warningInspectionList ? 'red' : '#313E47',
      }}
    >
      {warningInspectionList && (
        <ErrorCircleIconFilled
          position='absolute'
          top='0px'
          right='-15px'
          color='red'
        />
      )}
      Trailer Inspections
    </div>
  );
};

const MainComponent = () => {
  const [{ warningMaintenanceList }] = useTrailerWarningContext();
  return (
    <div
      style={{
        position: 'relative',
        color: warningMaintenanceList ? 'red' : '#313E47',
      }}
    >
      {warningMaintenanceList && (
        <ErrorCircleIconFilled
          position='absolute'
          top='0px'
          right='-15px'
          color='red'
        />
      )}
      Maintenance
    </div>
  );
};

export const trailersDashboard2 = [
  {
    key: '1',
    children: <CurrentTrailerInfo />,
    label: 'Trailer Info',
    permissionName: 'Trailers',
  },
  {
    key: '2',
    children: <CurrentTrailerMovements />,
    label: 'Trailer Movements',
    permissionName: 'Movement',
  },
  {
    key: '3',
    children: <CurrentTrailerMoves />,
    label: 'Trailer Moves',
    permissionName: 'Trailer Moves',
  },
  {
    key: '4',
    children: <CurrentTrailerExpenditure />,
    label: <MainComponent />,
    permissionName: 'Maintenance',
  },
  {
    key: '5',
    children: <CurrentTrailerInspection />,
    label: <InspectionComponent />,
    permissionName: 'Trailer Inspection',
  },
  {
    key: '6',
    children: <CurrentTrailerRegCard />,
    label: <CardComponent />,
    permissionName: 'Registration Card',
  },
  {
    key: '7',
    children: <CurrentTrailerAccident />,
    label: 'Trailer Accident',
    permissionName: 'Accident',
  },
];
