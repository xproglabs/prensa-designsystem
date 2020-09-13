import React from 'react';

import {sassWrapper} from '../../utils/SassWrapper';
import Button from './index';

export default {
  title: 'Button',
  component: Button,
  decorators: [sassWrapper],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Avançar',
};

Primary.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['primary', 'secondary']
    }
  }
};