import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Article from '../components/Article';
import articledata from '../mockup/articledata.json';
import {sassWrapper} from '../utils/SassWrapper';


export default {
  title: 'Components | Article',
  component: Article,
  decorators: [withKnobs, sassWrapper]
};

export const ArticleTeste = () => <Article content={articledata} />;