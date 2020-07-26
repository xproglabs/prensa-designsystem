import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import SideMenuItems from '../components/Menus/SideItems';
import SideMenu from '../components/Menus/SideMenu';
import MainTopbar from '../components/Topbar';
import navigation from '../mockup/navigation';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Navigator',
  component: Default,
  decorators: [withKnobs, sassWrapper]
};

export const Default = () => {
  
  const [isSideMenuOpened, toggleSideMenu] = React.useState(false);

  const sideMenuItemsProps = {
    content: {
      items: navigation.side
    },
    functions: {
      onMenuItem: () => toggleSideMenu(!isSideMenuOpened)
    }
  };
  const dataTopbar = {
    functions: {
      handleMenuClick: () => toggleSideMenu(!isSideMenuOpened)
    },
    status: {
      loading: boolean('loading', false),
      error: boolean('loading', false)
    }
  };
  const dataSideMenu = {
    children: <SideMenuItems {...sideMenuItemsProps} />,
    functions: {
      onCloseModal: () => toggleSideMenu(!isSideMenuOpened)
    },
    status: {
      opened: isSideMenuOpened
    }
  };
  return (
    <>
      <MainTopbar {...dataTopbar} />
      <SideMenu {...dataSideMenu} />
    </>
  );
};