import React from 'react';

import Block from '../src/Block';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Block',
  component: Block,
  decorators: [sassWrapper]
};

export const Default = () => {
  return (
    <Block row alignBetween>
      <div style={{width: '100%', height: 50, backgroundColor: 'red'}} />
    </Block>
  );
};