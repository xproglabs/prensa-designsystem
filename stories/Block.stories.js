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
  const propsMain = {
    align: 'row center middle',
    mb: '10',
    'md': {
      align: 'top'
    }
  };
  const propsBlock = {
    align: 'row middle evenly',
    bg: 'primary-2',
    color: 'white',
    h: '6',
    m: '0',
    w: '50p',
    'md': {
      align: 'evenly right',
      color: 'black',
      h: '6',
      pb: '0',
      pt: '0',
      mt: '0',
      pl: '5',
      w: '100p-5'
    }
  };
  const propsBlockA = {
    bg: 'primary-3',
  };
  return (
    <>
      <Block {...propsMain}>
        <Block {...propsBlock}>
          <span>teste</span>
          <span>teste</span>
          <span>teste</span>
        </Block>
        <Block {...propsBlock} {...propsBlockA}>teste</Block>
      </Block>
    </>
  );
};