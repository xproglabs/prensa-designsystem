import React from 'react';

import {Teaser, TeaserFeatured} from '../src/Teasers';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Teaser',
  component: Teaser,
  decorators: [sassWrapper]
};

export const Default = () => {
  return (
    <Teaser title='The quick brown fox jumps over the lazy dog' subtitle='Lorem ipsum sit dolor amet lorem situation' subject='Subject' />
  );
};
export const Featured = () => {
  const content = {
    title: 'The quick brown fox jumps over the lazy dog',
    subject: 'Subject'
  };
  const status = {
    loading: false,
    error: false
  };
  return (
    <TeaserFeatured getContent={content} getStatus={status} />
  );
};