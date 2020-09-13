import React from 'react';

import Button from '../components/Button';
import {sassWrapper} from '../utils/SassWrapper';

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