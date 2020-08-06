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
    align: 'col center between',
    bg: 'primary-2',
    color: 'white',
    h: '10',
    pl: '6',
    w: '100p-6',
    'md': {
      pl: '0',
      align: 'row between',
      w: '100p'
    }
  };

  return (
    <Block {...propsBlock}>
      <Block>teste</Block>
      <Block>teste</Block>
      <Block>teste</Block>
    </Block>
  );
};