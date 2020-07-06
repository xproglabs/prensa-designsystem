import React from 'react';

import Typography from '../components/Typography';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Typography',
  component: Typography,
  decorators: [sassWrapper]
};

export const Default = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 40}}>
      <Typography tokenVariant='title' size='xl'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tokenVariant='subtitle'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography tokenVariant='paragraph'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
      </Typography>
    </div>
  );
};