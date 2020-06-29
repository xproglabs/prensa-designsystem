import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import MainTopbar from '../components/Navigator/MainTopbar';
import SideMenu from '../components/Navigator/SideMenu';
import SideMenuItems from '../components/Navigator/SideMenuItems';
import navigation from '../mockup/navigation';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Navigator',
  component: Readme,
  decorators: [withKnobs, sassWrapper]
};

export const Readme = () => {
  return (
    <p>
      <h3>Modelo de payload JSON</h3><br />
      <a href="https://pastebin.com/MqNVQ6uR" 
        rel="noopener noreferrer"
        target="_blank">
        https://pastebin.com/MqNVQ6uR
      </a>
    </p>
  );
};


export const MainMenu = () => {
  const menuLeftItemsProps = {
    content: {
      items: navigation.side
    }
  };
  const dataSideMenu = {
    children: <SideMenuItems {...menuLeftItemsProps} />,
    status: {
      error: boolean('loading', false),
      loading: boolean('loading', false),
      opened: boolean('opened', true)
    }
  };
  return <SideMenu {...dataSideMenu} />;
};

export const Topbar = () => {
  
  const [isSideMenuOpened, toggleSideMenu] = React.useState(false);

  const sideMenuItemsProps = {
    content: {
      items: navigation.side
    },
    functions: {
      onMenuItem: () => toggleSideMenu(!isSideMenuOpened)
    }
  };
  const dataMainTopbar = {
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
      <MainTopbar {...dataMainTopbar} />
      <SideMenu {...dataSideMenu} />
    </>
  );
};