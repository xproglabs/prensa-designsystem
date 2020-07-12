import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Block from '../components/Block';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Block',
  component: Block,
  decorators: [withKnobs, sassWrapper]
};

export const Default = () => {
  const propsBlock = {
    align: 'center middle',
    bg: 'secondary-1',
    color: 'white',
    h: '2',
    p: '2',
    m: '2',
    'md': {
      bg: 'secondary-2',
      color: 'black',
      h: '6',
      pb: '3',
      pt: '3',
      mt: '0',
    },
    'lg': {
      bg: 'primary-1'
    },
    'xl': {
      bg: 'primary-2'
    }
  };
  return (
    <Block {...propsBlock}>teste</Block>
  );
};