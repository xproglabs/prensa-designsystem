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
    h: '6',
    pl: '2',
    m: '0',
    w: '50p-2',
    'md': {
      color: 'black',
      h: '6',
      pb: '0',
      pt: '0',
      mt: '0',
      pl: '5',
      w: '100p-5'
    }
  };
  const propsMain = {
    bg: 'secondary-3',
    mb: '10',
  };
  return (
    <>
      <Block {...propsMain}>
        <Block {...propsBlock}>teste</Block>
      </Block>
    </>
  );
};