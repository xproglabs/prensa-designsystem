import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import SideMenu from '../components/SideMenu';
import SideMenuItems from '../components/SideMenu/Items';
import navigation from '../mockup/navigation';
import {sassWrapper} from '../utils/SassWrapper';


export default {
  title: 'Components | MainMenu',
  component: MainMenu,
  decorators: [withKnobs, sassWrapper]
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