import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Block from '../components/Block';
import ColumnHeader from '../components/Column/Header';
import pageheader from '../mockup/pageheader';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Column Header',
  component: DefaultComponent,
  decorators: [withKnobs, sassWrapper]
};

export const DefaultComponent = () => {
  const propsBlock = {align: 'center', mb: '4', w: '80p'};
  return (
    <Block {...propsBlock}>
      <ColumnHeader item={pageheader} />
    </Block>
  );
};
