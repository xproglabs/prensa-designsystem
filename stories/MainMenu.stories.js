import React from 'react';

import SideMenuItems from '../components/Menus/SideItems';
import SideMenu from '../components/Menus/SideMenu';
import navigation from '../mockup/navigation';
import {sassWrapper} from '../utils/SassWrapper';


export default {
  title: 'MainMenu',
  component: MainMenu,
  decorators: [sassWrapper]
};

export const MainMenu = () => {
  const menuLeftItemsProps = {
    content: {
      items: navigation.side
    },
    functions: {
      onMenuItem: () => null
    }
  };
  const dataSideMenu = {
    children: <SideMenuItems {...menuLeftItemsProps} />,
    status: {
      error: false,
      loading: false,
      opened: false
    }
  };
  return <SideMenu {...dataSideMenu} />;
};