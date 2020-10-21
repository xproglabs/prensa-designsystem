import React from 'react';

import Block from '../components/Block';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Block',
  component: Block,
  decorators: [sassWrapper]
};

export const Default = args => {

  const propsBlock = {
    align: 'col center between',
    bg: 'color-primary-2',
    fc: 'color-white',
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
    <Block {...args} {...propsBlock}>
      <Block>teste</Block>
      <Block>teste</Block>
      <Block>teste</Block>
    </Block>
  );
};