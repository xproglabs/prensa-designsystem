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
  const propsXs = {
    alignCenter: true, 
    bgColor: 'primary-1',
    fColor: 'white',
    full: 'width',
    pb: 'md',
    pt: 'md',
  };
  // const propsBlock = {xs: propsXs}
  return (
    <Block {...propsXs}>teste</Block>
  );
};