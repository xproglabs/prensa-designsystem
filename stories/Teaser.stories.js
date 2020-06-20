import React from 'react';

import {Teaser} from '../src/Teasers';
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