import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import MainTopbar from '../components/Topbar';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Topbar',
  component: Topbar,
  decorators: [withKnobs, sassWrapper]
};

export const Topbar = () => {
  
  const dataTopbar = {
    functions: {
      handleMenuClick: () => null
    },
    status: {
      loading: boolean('loading', false),
      error: boolean('loading', false)
    }
  };
  return (
    <>
      <MainTopbar {...dataTopbar} />
    </>
  );
};