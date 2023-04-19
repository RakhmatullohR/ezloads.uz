import styled, { css } from 'styled-components';
import { Divider, Menu, Popover } from 'antd';
import { ReactComponent as Chat } from '../../assets/icons/time.svg';
import { ReactComponent as ExpandRight } from '../../assets/icons/arrow-right-s-line.svg';
import { ReactComponent as Help } from '../../assets/icons/time.svg';
import { ReactComponent as Logout } from '../../assets/icons/time.svg';
import { ReactComponent as Settings } from '../../assets/icons/time.svg';
import { ReactComponent as Arrows } from '../../assets/icons/sidebar-burger.svg';
import { ReactComponent as Time } from '../../assets/icons/time.svg';
import { ReactComponent as UserAvatar } from '../../assets/icons/time.svg';

const scroll = css`
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;

    border-radius: 1px;
    background-color: lightgray;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
  @media (max-width: 1400px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;

      border-radius: 1px;
      background-color: lightgray;
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  .ant-menu-submenu-popup > .ant-menu {
    background-color: #21242c !important;
  }
  .ant-popover-placement-right,
  .ant-popover-placement-rightTop,
  .ant-popover-placement-rightBottom {
    height: 230px;
  }
  ul.ant-menu.ant-menu-sub.ant-menu-vertical {
    background-color: #21242c !important;
    .ant-menu-submenu-popup > .ant-menu {
      background-color: #21242c !important;
    }
  }
`;

const SidebarWrapper = styled.div`
  display: flex;
  min-width: ${({ open }) => open === 'true' && '250px'};
  /* width: ${({ open }) => (open ? '288px' : '80px')}; */
  flex-direction: column;
  background: #21242c;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  transition: 0.35s;
  .ant-popover-inner-content {
    background-color: transparent !important;
  }
  .ant-popover.ant-popover-placement-rightBottom .ant-popover-inner {
    background: #21242c;
  }
  ${scroll}
  .ant-popover.ant-popover-placement-rightBottom .ant-popover-inner {
    background: #21242c !important;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #2c303a !important;
  }
  .ant-menu:not(.ant-menu-vertical) .ant-menu-item-selected {
    background-color: #2c303a !important;
  }
  .ant-menu-sub.ant-menu-inline {
    padding: 0;
    background: #21242c;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background: #2c303a;
    color: #1893ff;
  }
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:active {
    color: #1890ff;
  }
  .ant-menu-submenu-popup > .ant-menu {
    background-color: #21242c !important;
  }
  .ant-menu .ant-menu-sub .ant-menu-vertical {
    background: #21242c !important;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #2c303a !important;
  }
  background-color: #21242c !important;
  .ant-menu-submenu-popup > .ant-menu {
    background-color: #21242c !important;
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none !important;
  }

  .ant-popover-inner-content {
    background-color: transparent !important;
  }
  .ant-popover.ant-popover-placement-rightBottom .ant-popover-inner {
    background: transparent !important;
  }
`;

const ReactMenu = styled(Menu)`
  background: #21242c;
  width: 250px;
  max-width: 250px;
  &.ant-menu-inline-collapsed {
    width: 44px;
  }
  .ant-menu .ant-menu-sub .ant-menu-vertical {
    background-color: #21242c !important;
  }
  .ant-menu-submenu-popup > .ant-menu {
    background-color: #21242c !important;
  }
  .ant-menu-submenu
    .ant-menu-submenu-popup
    .ant-menu
    .ant-menu-light
    .ant-menu-submenu-placement-rightTop {
    background: #21242c !important;
  }
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none !important;
  }
  & > .ant-menu-item.custom-menu-item {
    padding: ${({ inlineCollapsed }) =>
      inlineCollapsed ? '0 12px' : '0 12px'} !important;
    transition: border-color 0.3s, background 0.3s,
      padding 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) !important;

    &.ant-menu-item-active {
      background: #2c303a;
    }
  }
  & > .ant-menu-submenu .ant-menu-submenu-title {
    padding: ${({ inlineCollapsed }) =>
      inlineCollapsed ? '0 12px' : '0 12px'};
    transition: border-color 0.3s, background 0.3s,
      padding 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) !important;
    border: none !important;
    outline: none !important;
  }
  & > .ant-menu-submenu.ant-menu-submenu-active {
    background: #2c303a;
  }

  .ant-menu-item,
  .ant-menu-submenu .ant-menu-submenu-title {
    padding: 0 12px;
    padding-left: 12px !important;
    display: flex;
    align-items: center;
  }
  .ant-menu-submenu .ant-menu-item {
    padding-left: 24px !important;
  }
  .ant-menu-submenu .ant-menu-submenu .ant-menu-submenu-title {
    padding-left: 24px !important;
  }
  .ant-menu-submenu .ant-menu-submenu .ant-menu-item {
    padding-left: 36px !important;
  }

  .icon.ant-menu-item-icon {
    min-width: 20px;
    min-height: 20px;
    width: 20px;
    height: 20px;
    path {
      transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), margin 0.3s,
        color 0.3s, fill 0.3s;
      fill: #8b94a7;
    }
  }

  .ant-menu-title-content,
  .ant-menu-submenu-arrow {
    color: #8b94a7;
  }

  .ant-menu-submenu-selected,
  .ant-menu-submenu-active {
    & > .ant-menu-submenu-title {
      svg {
        path {
          fill: #1893ff;
        }
      }
      & > .ant-menu-title-content,
      & > .ant-menu-submenu-arrow {
        color: #1893ff;
      }
    }
  }
  .ant-menu-item-selected,
  .ant-menu-item-active {
    svg {
      path {
        fill: #1893ff !important;
      }
    }
    .ant-menu-title-content,
    .ant-menu-submenu-arrow {
      color: #1893ff;
    }
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 9;
  background: #21242c;
  height: 65px;
  padding: ${({ close }) =>
    close === 'true' ? '16px 13px 16px 16px' : '16px 0px 16px 0px'};
  align-items: center;
  justify-content: space-between;
  transition: all 0.35s;
  border-bottom: 1px solid #586174;
`;

const Logo = styled('div')`
  height: ${({ close }) => (close !== 'true' ? '34px' : '34px')};
  cursor: pointer;
  background-position: left;
  width: ${({ close }) => (close !== 'true' ? '41px' : '157px')};
  transition: all 0.35s;
  overflow: hidden;
  img {
    /* object-fit: cover;
    object-position: left center; */
    /* width: 100%; */
    height: 100%;
    margin-left: 5px;
  }
`;

const MinimizeBtn = styled.div`
  width: 36px;
  height: 36px;
  /* background: #ffffff; */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04), 0px 2px 3px rgba(0, 0, 0, 0.04),
    0px 1px 8px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  width: ${({ close }) => (close !== 'true' ? '0' : '36px')};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: width 0.35s;
  opacity: ${({ close }) => (close !== 'true' ? '0' : '1')};
  cursor: pointer;
  /* &:hover svg path {
    fill: #2074b9;
  } */
`;

MinimizeBtn.Img = styled(Arrows)`
  width: 24px;
  height: 24px;
  &:hover {
    path {
      stroke: #1893ff;
    }
  }
`;

const User = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 64px;
  min-height: 44px;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.04), 0px -2px 3px rgba(0, 0, 0, 0.04),
    0px -1px 8px rgba(0, 0, 0, 0.04);
  background: #21242c;
  padding-left: ${({ close }) => (close !== 'true' ? '6px' : '14px')};
  color: #8b94a7;
  transition: all 0.35s;
  .ant-popover.ant-popover-placement-rightBottom .ant-popover-inner {
    background: #21242c;
  }
  .ant-popover.ant-popover-placement-rightBottom .ant-popover-inner {
    background: transparent !important;
  }
`;

User.Box = styled.div`
  background-color: #2c303a;
  width: 32px;
  height: 32px;
  /* border-radius: 5px; */
  color: #fff;
  font-size: 16px;
  line-height: 32px;
  font-weight: 600;
  border-radius: 100%;
  align-items: center;
  text-align: center;
`;
User.BoxContent = styled.div`
  transition: all 0.35s;
  flex: 1;
  display: grid;
  grid-template-columns: 1.5fr 0.2fr;
  grid-gap: 5px;
  margin-left: ${({ close }) => (close !== 'true' ? '0px' : '15px')};
  opacity: ${({ close }) => (close !== 'true' ? '0' : '1')};
  font-size: 16px;
  color: #8b94a7;
  width: ${({ close }) => (close !== 'true' ? '0px' : '160px')};
  overflow: hidden;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
`;
User.BoxLeft = styled.div`
  font-size: 16px;
  color: #8b94a7;
  flex-wrap: nowrap;

  .user {
    font-size: 14px;
  }

  .role {
    font-size: 10px;
  }
`;
User.BoxRight = styled.div`
  font-size: 16px;
  color: #8b94a7;
`;

const ExpandRightIcon = styled(ExpandRight)`
  path {
    fill: #8b94a7;
  }
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  overflow: hidden;
  overflow-y: auto;
  margin: 15px;
  background-color: #21242c;

  ${scroll}
`;

const UsersMenu = styled.div`
  width: 240px;
  /* height: 315px; */
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  background-color: #21242c;
`;

UsersMenu.Name = styled.div`
  p {
    margin-bottom: 0;
  }
`;
UsersMenu.Wrap = styled.div`
  display: flex;
  padding: 20px 12px 30px 0;
  border-bottom: 1px solid rgba(119, 136, 153, 0.1);
  background: #21242c;
`;

UsersMenu.Divider = styled(Divider)`
  margin: 6px 0;
`;

UsersMenu.Icon = styled('img')`
  /* object-fit: cover; */
  width: ${({ width }) => (width ? width : '20px')};
  height: ${({ width }) => (width ? width : '20px')};
  border-radius: 100%;
  overflow: hidden;
  margin: 0;
  /* margin: 0 5px 0 12px; */
`;
UsersMenu.Logo = styled.div``;

UsersMenu.Item = styled.div`
  display: grid;
  grid-template-columns: 40px 1.5fr;
  font-weight: normal;
  align-items: center;
  font-size: 15px;
  letter-spacing: 0.02em;
  color: #8b94a7;
  cursor: pointer;
  background: #21242c;
  border-radius: 4px;
  height: 44px;
  margin: 5px 0;
  padding-left: 10px;
  position: relative;

  svg {
    fill: #8b94a7;

    path[data-svg-path] {
      fill: #8b94a7;
    }

    &[data-svg-icon='stroke'] {
      fill: none;
      path {
        stroke: #8b94a7;
      }
    }
  }

  &:hover {
    span {
      color: #1893ff;
    }
    background: #2c303a;
    z-index: 11;
    outline: none;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
      0 9px 28px 8px rgb(0 0 0 / 5%);
    transition: background 0.3s, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    svg {
      fill: #1893ff;

      path[data-svg-path] {
        fill: #1893ff;
      }
      path {
        fill: #1893ff;
      }

      &[data-svg-icon='stroke'] {
        fill: none;
        path {
          fill: none;
          stroke: #1893ff;
        }
      }
    }
  }
  z-index: 10;
`;

const commonIcon = css`
  width: 24px;
  height: 24px;
`;
const CustomPopover = styled(Popover)`
  display: flex;
  align-items: center;
  background-color: #21242c;
  flex: 1;
  /* height: 100px; */
  cursor: pointer;

  .arrow {
    background: red;
  }
  .ant-popover-inner-content {
    min-width: 180px;
  }
  .ant-popover-content {
    height: 150px;
  }
  .ant-popover.ant-popover-placement-rightBottom .ant-popover-inner {
    background: transparent !important;
  }
`;

const Avatar = styled(UserAvatar)`
  width: 24px;
  height: 24px;
  path {
    fill: #8b94a7;
  }

  &:hover {
    path {
      fill: #1893ff;
    }
  }
`;

UsersMenu.Icon = styled('img')`
  object-fit: cover;
  width: ${({ width }) => (width ? width : '36px')};
  height: ${({ height }) => (height ? height : '36px')};
  border-radius: 100%;
  /* margin: 0 5px 0 12px; */
`;
UsersMenu.Logout = styled(Logout)`
  ${commonIcon}
`;
UsersMenu.Setting = styled(Settings)`
  ${commonIcon}
`;
UsersMenu.Time = styled(Time)`
  ${commonIcon}
`;
UsersMenu.Help = styled(Help)`
  ${commonIcon}
`;

UsersMenu.Chat = styled(Chat)`
  width: 30px;
  height: 30px;
`;

export {
  MainWrapper,
  ReactMenu,
  Logo,
  MinimizeBtn,
  LogoWrapper,
  User,
  SidebarWrapper,
  Body,
  ExpandRightIcon,
  UsersMenu,
  Avatar,
  CustomPopover,
};
