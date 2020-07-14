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
    align: 'col center evenly',
    bg: 'primary-2',
    color: 'white',
    h: '10',
    pl: '6',
    w: '100p-6',
    'md': {
      align: 'row center evenly'
    }
  };

  return (
    <>
      <Block {...propsBlock}>
        <span>teste</span>
        <span>teste</span>
        <span>teste</span>
      </Block>
    </>
  );

};