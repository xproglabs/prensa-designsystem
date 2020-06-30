import React from 'react';

import Button from '../components/Button';
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