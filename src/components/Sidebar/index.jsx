import logo from '../../assets/icons/ezloads-logo.svg';
import { useEffect, useState } from 'react';
import {
  CustomPopover,
  ExpandRightIcon,
  Logo,
  LogoWrapper,
  MinimizeBtn,
  ReactMenu,
  SidebarWrapper,
  User,
  UsersMenu,
} from './style';
import { useAuth } from '../../context/Auth';
// import { ParentRouteOption, RouteOption } from '../../assets/IconStyle';
import { sidebarDataList } from '../../utils/sidebar';
import { useNavigate } from 'react-router-dom';
function getItem(label, key, Icon, children, type) {
  return {
    label: label,
    key,
    icon: <Icon />,
    children,
    type,
  };
}

const Sidebar = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    // getItem('Option 1', '1', <RouteOption />),
    // getItem('Option 2', '2', <RouteOption />),
    // getItem('Option 3', '3', <RouteOption />),
    // getItem('Navigation One', 'sub1', <ParentRouteOption />, [
    //   getItem('Option 5', '5', <RouteOption />),
    //   getItem('Option 6', '6', <RouteOption />),
    //   getItem('Option 7', '7', <RouteOption />),
    //   getItem('Option 8', '8', <RouteOption />),
    // ]),
    // getItem('Navigation Two', 'sub2', <ParentRouteOption />, [
    //   getItem('Option 9', '9', <RouteOption />),
    //   getItem('Option 10', '10', <RouteOption />),
    //   getItem('Submenu', 'sub3', <ParentRouteOption />, [
    //     getItem('Option 11', '11', <RouteOption />),
    //     getItem('Option 12', '12', <RouteOption />),
    //   ]),
    // ]),
  ]);
  useEffect(() => {
    const recursiveMap = (o) => {
      return (
        !o.hidden &&
        getItem(
          o.title,
          o.pathname,
          o.Icon,
          o.child.length ? o.child.map(recursiveMap) : null,
          o.selectable
        )
      );
    };
    const result = sidebarDataList.map(recursiveMap);
    setItems(result);

    return () => {};
  }, []);

  const [{ role, user }] = useAuth();
  const [visible, setVisible] = useState(false);

  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (collapsed) {
      localStorage.setItem('openKeys', JSON.stringify([]));
    }
    localStorage.setItem('sidebar', collapsed);
  };
  const content = (
    <UsersMenu>
      <UsersMenu.Item>
        <UsersMenu.Icon
          width='32px'
          height='32px'
          src={
            localStorage.getItem('profile-image') !== undefined &&
            `${localStorage.getItem('profile-image')}`
          }
          alt='user-avatar'
          margin='0px'
        />
        <span>Profile</span>
      </UsersMenu.Item>
      <UsersMenu.Item>
        <UsersMenu.Chat />
        <span>Chat</span>
      </UsersMenu.Item>
      <UsersMenu.Item>
        <UsersMenu.Setting />
        <span>Setting </span>
      </UsersMenu.Item>
      <UsersMenu.Item>
        <UsersMenu.Time /> <span>Activity log</span>
      </UsersMenu.Item>

      <UsersMenu.Item>
        <UsersMenu.Help /> <span>Help</span>
      </UsersMenu.Item>
      <UsersMenu.Divider />
      <UsersMenu.Item>
        <UsersMenu.Logout /> <span>Log out</span>
      </UsersMenu.Item>
    </UsersMenu>
  );
  return (
    <SidebarWrapper open={collapsed} tabIndex={-1}>
      <LogoWrapper close={collapsed.toString()}>
        <Logo onClick={toggleCollapsed} close={collapsed.toString()}>
          <img src={logo} alt='' />
        </Logo>
        <MinimizeBtn onClick={toggleCollapsed} close={collapsed.toString()}>
          <MinimizeBtn.Img />
        </MinimizeBtn>
      </LogoWrapper>
      <ReactMenu
        defaultSelectedKeys={[window.location.pathname]}
        // defaultOpenKeys={window.location.pathname}
        onSelect={(data) => {
          console.log(data);
          navigate(data?.key);
        }}
        mode='inline'
        theme='dark'
        inlineCollapsed={!collapsed}
        items={items}
      />
      <div style={{ marginTop: 'auto', position: 'sticky', bottom: 0 }}>
        <User close={collapsed.toString()}>
          <CustomPopover
            placement='rightBottom'
            content={content}
            trigger='click'
            open={visible}
            onOpenChange={(v) => {
              setVisible(v);
            }}
          >
            <User.Box>
              {localStorage.getItem('profile-image') ? (
                <UsersMenu.Icon
                  width='32px'
                  height='32px'
                  src={
                    localStorage.getItem('profile-image') !== undefined &&
                    `${localStorage.getItem('profile-image')}`
                  }
                  alt='user-avatar'
                  margin='0px'
                />
              ) : (
                user?.fullname?.match(/\b(\w)/g)?.join('')
              )}
            </User.Box>

            <User.BoxContent close={collapsed.toString()}>
              <User.BoxLeft>
                <div className='user'>{user?.fullname}</div>
                <div className='role'>{role && role}</div>
              </User.BoxLeft>
              <User.BoxRight>
                <ExpandRightIcon />
              </User.BoxRight>
            </User.BoxContent>
          </CustomPopover>
        </User>
      </div>
    </SidebarWrapper>
  );
};
export default Sidebar;
