import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import articledata from '../mockup/articledata';
import Article from '../src/Article';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Article',
  component: Readme,
  decorators: [withKnobs, sassWrapper]
};

export const Readme = () => {
  return (
    <p>
      <h3>Article</h3>
    </p>
  );
};

export const Default = () => {
  const dataList = {
    content: articledata,
    status: {
      error: boolean('loading', false),
      loading: boolean('loading', false)
    }
  };
  return <Article {...dataList} />;
};
