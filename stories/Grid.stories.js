import React from 'react';

import Block from '../src/Block';
import Grid from '../src/Grid';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Grid',
  component: Grid,
  decorators: [sassWrapper]
};

export const Primary = () => {
  return (
    <Block row alignBetween>
      <Grid columns={8}>
        <div style={{width: '100%', height: 50, backgroundColor: 'red'}} />
        <div style={{width: '100%', height: 50, backgroundColor: 'blue'}} />
      </Grid>
      <Grid columns={4}>
        <div style={{width: '100%', height: 50, backgroundColor: 'red'}} />
      </Grid>
    </Block>
  );
};