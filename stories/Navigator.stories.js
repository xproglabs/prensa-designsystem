import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import navigation from '../mockup/navigation';
import MainTopbar from '../src/Navigator/MainTopbar';
import MenuLeft from '../src/Navigator/MenuLeft';
import MenuLeftItems from '../src/Navigator/MenuLeftItems';
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
  const dataMenuLeft = {
    children: <MenuLeftItems {...menuLeftItemsProps} />,
    status: {
      error: boolean('loading', false),
      loading: boolean('loading', false),
      opened: boolean('opened', true)
    }
  };
  return <MenuLeft {...dataMenuLeft} />;
};

export const Topbar = () => {
  
  const [isMenuLeftOpened, toggleMenuLeft] = React.useState(false);

  const menuLeftItemsProps = {
    content: {
      items: navigation.side
    },
    functions: {
      onMenuItem: () => toggleMenuLeft(!isMenuLeftOpened)
    }
  };
  const dataMainTopbar = {
    functions: {
      onLeftIcon: () => toggleMenuLeft(!isMenuLeftOpened)
    },
    status: {
      loading: boolean('loading', false),
      error: boolean('loading', false)
    }
  };
  const dataMenuLeft = {
    children: <MenuLeftItems {...menuLeftItemsProps} />,
    functions: {
      onCloseModal: () => toggleMenuLeft(!isMenuLeftOpened)
    },
    status: {
      opened: isMenuLeftOpened
    }
  };
  return (
    <>
      <MainTopbar {...dataMainTopbar} />
      <MenuLeft {...dataMenuLeft} />
    </>
  );
};