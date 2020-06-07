import React from 'react';

import Typography from '../src/Typography';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Typography',
  component: Typography,
  decorators: [sassWrapper]
};

export const Default = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 40}}>
      <Typography title size='md'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography subtitle size='md'>
        The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  );
};