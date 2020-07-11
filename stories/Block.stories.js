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
    bg: 'secondary-1',
    color: 'white',
    p: '2',
    m: '4',
    'md': {
      bg: 'secondary-2',
      color: 'black',
      pt: '6',
      mt: '8',
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