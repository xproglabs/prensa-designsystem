import {boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import pagelist from '../mockup/pagelist';
import List from '../src/NewsList';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | NewsList',
  component: Readme,
  decorators: [withKnobs, sassWrapper]
};

export const Readme = () => {
  return (
    <p>
      <h3>NewsList</h3>
    </p>
  );
};

export const Default = () => {
  const dataList = {
    content: {
      items: pagelist
    },
    status: {
      error: boolean('loading', false),
      loading: boolean('loading', false)
    }
  };
  return <List {...dataList} />;
};
