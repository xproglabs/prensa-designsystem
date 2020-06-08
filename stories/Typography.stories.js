import React from 'react';

import Typography, {propTypes} from '../src/Typography';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Typography',
  component: Typography,
  decorators: [sassWrapper]
};

export const Default = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: 40}}>
      <Typography title size='xl'>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography subtitle>
        The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography paragraph>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
      </Typography>
    </div>
  );
};

Typography.propTypes = propTypes;