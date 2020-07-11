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
    'def': {
      bgColor: 'secondary-1',
    }, 
    'md': {
      bgColor: 'secondary-2',
    },
    'lg': {
      bgColor: 'secondary-3',
    }
  };
  return (
    <Block {...propsBlock}>teste</Block>
  );
};