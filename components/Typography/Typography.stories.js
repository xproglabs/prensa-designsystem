import React from 'react';

import {sassWrapper} from '../../utils/SassWrapper';
import Typography from './index';

export default {
  title: 'Typography',
  component: Typography,
  decorators: [sassWrapper],
};

const Template = (args) => <Typography {...args} />;

export const Article = Template.bind({});

Article.args = {
  variant: 'subject',
  size: 3,
  weight: 'bold',
  children: 'Testando um componente de texto'
};