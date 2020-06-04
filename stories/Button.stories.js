import React from 'react';

import Button from '../src/Button';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Button',
  component: Button,
  decorators: [sassWrapper]
};

export const Primary = () => {
  return (
    <Button>label</Button>
  );
};