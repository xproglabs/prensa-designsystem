import {text, boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import {Teaser, TeaserFeatured} from '../components/Teasers';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Teaser',
  component: Teaser,
  decorators: [withKnobs, sassWrapper]
};

export const Default = () => {
  const hasImage = boolean('image', false);
  const image = {
    imageUrl: null,
    captionAndByline: null
  };
  const content = {
    title: text('title', 'The quick brown fox jumps over the lazy dog'),
    subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
    subject: text('subject', 'Assunto'),
    image: hasImage && image
  };
  const status = {
    loading: boolean('loading', false),
    error: boolean('loading', false)
  };
  return (
    <Teaser content={content} status={status} />
  );
};
export const Featured = () => {
  const hasImage = boolean('image', false);
  const image = {
    imageUrl: null,
    captionAndByline: null
  };
  const content = {
    title: text('title', 'The quick brown fox jumps over the lazy dog'),
    subject: text('subject', 'Assunto'),
    image: hasImage && image
  };
  const status = {
    loading: boolean('loading', false),
    error: boolean('loading', false)
  };
  return (
    <TeaserFeatured content={content} status={status} />
  );
};