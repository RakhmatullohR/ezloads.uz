import styled from 'styled-components';

import { ReactComponent as Delete } from '../../assets/icons/delete.svg';
import { ReactComponent as Edit } from '../../assets/icons/pen.svg';
import { ReactComponent as ParentRoute } from '../../assets/icons/parent-route-option.svg';
import { ReactComponent as Route } from '../../assets/icons/route-option.svg';

const ParentRouteOption = styled(ParentRoute)`
  width: ${({ width }) => width || 'var(--appTableIconSize)'};
  height: ${({ height }) => height || 'var(--appTableIconSize)'};
  cursor: pointer;
  cursor: pointer;
  rect {
    stroke: ${({ color }) => color || 'var(--appIconDefaultColor)'};
  }
  &:hover {
    rect {
      stroke: ${({ color }) => color || 'var(--appIconDefaultColor)'};
    }
  }
`;
const RouteOption = styled(Route)`
  width: ${({ width }) => width || 'var(--appTableIconSize)'};
  height: ${({ height }) => height || 'var(--appTableIconSize)'};
  cursor: pointer;
  cursor: pointer;
  path {
    fill: ${({ color }) => color || 'var(--appIconDefaultColor)'};
  }
  &:hover {
    path {
      fill: var(--appIconDeleteColor);
    }
  }
`;
const DeleteIcon = styled(Delete)`
  width: ${({ width }) => width || 'var(--appTableIconSize)'};
  height: ${({ height }) => height || 'var(--appTableIconSize)'};
  cursor: pointer;
  cursor: pointer;
  path {
    fill: ${({ color }) => color || 'var(--appIconDefaultColor)'};
  }
  &:hover {
    path {
      fill: var(--appIconDeleteColor);
    }
  }
`;
const EditIcon = styled(Edit)`
  width: ${({ width }) => width || 'var(--appTableIconSize)'};
  height: ${({ height }) => height || 'var(--appTableIconSize)'};
  cursor: pointer;
  cursor: pointer;
  path {
    fill: ${({ color }) => color || 'var(--appIconDefaultColor)'};
  }
  &:hover {
    path {
      fill: ${({ hovercolor }) => hovercolor || 'var(--appIconEditColor)'};
    }
  }
`;

export { ParentRouteOption, RouteOption, DeleteIcon, EditIcon };
