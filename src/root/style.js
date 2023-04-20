import styled from 'styled-components';
import { Colors } from '../css/color';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  background-color: ${Colors.Background};
  overflow: auto;
  min-width: 1200px;
  padding: 5px;
`;

export const SidebarWrapper = styled.div`
  display: flex;
`;
