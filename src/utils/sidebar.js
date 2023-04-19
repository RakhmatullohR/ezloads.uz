// Auth Pages
import SignInPage from '../Pages/AuthPages/Signin';
import SignUpPage from '../Pages/AuthPages/Signup';
import RegisteredPage from '../Pages/AuthPages/Registered';
// Single Pages
import MainPage from '../Pages/Main';
// Parent One Children
import ChildOnePage from '../Pages/ParentOne/ChildOne';
import ChildTwoPage from '../Pages/ParentOne/ChildTwo';
// Parent Two Children
import FirstChildPage from '../Pages/ParentTwo/FirstChild';
import SecondChildPage from '../Pages/ParentTwo/SecondChild';

// icons

import { RouteOption } from '../assets/IconStyle';
import { ReactComponent as arrowDown } from '../assets/icons/arrow-down.svg';
import { ReactComponent as arrowUp } from '../assets/icons/arrow-up.svg';

export const sidebarDataList = [
  // auth
  {
    id: 1,
    Component: SignInPage,
    title: 'Signin',
    Icon: null,
    pathname: '/signin',
    search: '?',
    hidden: true,
    child: [],
  },
  {
    id: 2,
    Component: SignUpPage,
    title: 'Signup',
    Icon: null,
    pathname: '/signup',
    search: '?',
    hidden: true,
    child: [],
  },
  {
    id: 3,
    Component: RegisteredPage,
    title: 'Registered',
    Icon: null,
    pathname: '/registered',
    search: '?',
    hidden: true,
    child: [],
  },
  // Pages
  {
    id: 4,
    Component: MainPage,
    title: 'Main',
    Icon: RouteOption,
    pathname: '/main',
    search: '?',
    hidden: false,
    selectable: true,
    child: [],
  },
  {
    id: 5,
    // Component: Parent One,
    title: 'Parent One',
    Icon: RouteOption,
    pathname: '/parent-one',
    search: '?',
    IconClosed: arrowDown,
    IconOpened: arrowUp,
    hidden: false,
    selectable: false,
    child: [
      {
        id: 51,
        prId: 5,
        Component: ChildOnePage,
        title: 'Child One',
        pathname: '/parent-one/child-one',
        search: '?',
        Icon: RouteOption,
        child: [],
        hidden: false,
        selectable: true,
      },
      {
        id: 52,
        prId: 5,
        Component: ChildTwoPage,
        title: 'Child Two',
        pathname: '/parent-one/child-two',
        search: '?',
        Icon: RouteOption,
        pageable: true,
        hidden: false,
        selectable: false,
        child: [
          {
            id: 521,
            prId: 52,
            Component: FirstChildPage,
            title: 'Child One',
            pathname: '/parent-one/child-two/child-one',
            search: '?',
            Icon: RouteOption,
            child: [],
            hidden: false,
            selectable: true,
          },
          {
            id: 522,
            prId: 52,
            Component: SecondChildPage,
            title: 'Child Two',
            pathname: '/parent-one/child-two/child-two',
            search: '?',
            Icon: RouteOption,
            pageable: true,
            hidden: false,
            selectable: true,
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    // Component: Parent Two,
    title: 'Parent Two',
    Icon: RouteOption,
    pathname: '/parent-two',
    search: '?',
    IconClosed: arrowDown,
    IconOpened: arrowUp,
    hidden: false,
    selectable: false,
    child: [
      {
        id: 61,
        prId: 6,
        Component: FirstChildPage,
        title: 'Child One',
        pathname: '/parent-two/child-one',
        search: '?',
        Icon: RouteOption,
        child: [],
        hidden: false,
        selectable: true,
      },
      {
        id: 62,
        prId: 6,
        Component: SecondChildPage,
        title: 'Child Two',
        pathname: '/parent-two/child-two',
        search: '?',
        Icon: RouteOption,
        pageable: true,
        hidden: false,
        selectable: true,
        child: [],
      },
    ],
  },
];
