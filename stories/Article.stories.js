import {withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Article from '../components/Article';
import articledata from '../mockup/articledata.json';
import TwitterIcon from '../mockup/twitter-icon.js';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Article',
  component: Article,
  decorators: [withKnobs, sassWrapper]
};

export const ArticleTeste = () => {
  const socialMedias = [
    {
      path: 'https://twitter.com',
      icon: <TwitterIcon />
    },
    {
      path: 'https://twitter.com',
      icon: <TwitterIcon />
    },
    {
      path: 'https://twitter.com',
      icon: <TwitterIcon />
    },
  ];
  return (
    <Article content={articledata} socialMedias={socialMedias} />
  );
};