import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import MainTopbar from '../src/Navigator/MainTopbar';
import MenuLeft from '../src/Navigator/MenuLeft';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Modules | Navigator',
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
  const dataMenuLeft = {
    status: {
      error: boolean('loading', false),
      loading: boolean('loading', false),
      opened: boolean('opened', true)
    }
  };
  return <MenuLeft {...dataMenuLeft} />;
};

export const Topbar = () => {
  const dataMainTopbar = {
    functions: {
      onLeftIcon: () => null
    }, 
    status: {
      loading: boolean('loading', false),
      error: boolean('loading', false)
    }
  };
  return (
    <MainTopbar {...dataMainTopbar} />
  );
};
  
export const TopbarFull = () => {
  
  const [isMenuLeftOpened, toggleMenuLeft] = React.useState(false);

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