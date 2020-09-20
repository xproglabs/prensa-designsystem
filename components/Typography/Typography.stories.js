import React from 'react';

import {sassWrapper} from '../../utils/SassWrapper';
import {SubjectTypography} from './index';

export default {
  title: 'Typography',
  component: SubjectTypography,
  decorators: [sassWrapper],
};

const Template = (args) => <SubjectTypography {...args} />;

export const Article = Template.bind({});

Article.args = {
  size: 3,
  children: 'Testando um componente de texto'
};