import {text, boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Block from '../components/Block';
import {BreakingNews, ThreeCol, FourCol} from '../components/Templates';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Templates',
  component: Block,
  decorators: [withKnobs, sassWrapper]
};

export const QuatroManchetes = () => {
  const hasImage = boolean('image', false);
  const image = {
    imageUrl: null,
    captionAndByline: null
  };

  //POLOPOLY JSON
  const content = [
    {
      title: text('title', 'The quick brown fox jumps over the lazy dog'),
      subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
      subject: text('subject', 'Assunto'),
      image: hasImage && image
    },
    {
      title: text('title', 'The quick brown fox jumps over the lazy dog'),
      subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
      subject: text('subject', 'Assunto'),
      image: hasImage && image
    },
    {
      title: text('title', 'The quick brown fox jumps over the lazy dog'),
      subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
      subject: text('subject', 'Assunto'),
      image: hasImage && image
    },
    {
      title: text('title', 'The quick brown fox jumps over the lazy dog'),
      subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
      subject: text('subject', 'Assunto'),
      image: hasImage && image
    },
  ];

  const status = {
    loading: boolean('loading', false),
    error: boolean('loading', false)
  };
  
  const blockData = {
    content: content,
    status: status
  };
  return (
    <FourCol blockData={blockData} />
  );
};

export const TresManchetes = () => {
  const hasImage = boolean('image', false);
  const image = {
    imageUrl: null,
    captionAndByline: null
  };

  //POLOPOLY JSON
  const content = [
    {
      title: text('title', 'The quick brown fox jumps over the lazy dog'),
      subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
      subject: text('subject', 'Assunto'),
      image: hasImage && image
    },
    {
      title: text('title', 'The quick brown fox jumps over the lazy dog'),
      subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
      subject: text('subject', 'Assunto'),
      image: hasImage && image
    },
    {
      title: text('title', 'The quick brown fox jumps over the lazy dog'),
      subtitle: text('subtitle', 'Lorem ipsum sit dolor amet lorem situation'),
      subject: text('subject', 'Assunto'),
      image: hasImage && image
    },
  ];

  const status = {
    loading: boolean('loading', false),
    error: boolean('loading', false)
  };
  
  const blockData = {
    content: content,
    status: status
  };
  return (
    <ThreeCol blockData={blockData}/>
  );
};

export const BlocoBreakingNews = () => {
  const hasImage = boolean('image', false);
  
  const status = {
    loading: boolean('loading', true),
    error: boolean('error', false)
  };
  const image = {
    imageUrl: null,
    captionAndByline: null
  };
  const content = {
    title: text('title', 'The quick brown fox jumps over the lazy dog'),
    subject: text('subtitle', 'Lorem ipsum sit'),
    image: hasImage && image
  };
  
  //POLOPOLY JSON
  const blockData = {
    content: [content],
    status: status,
  };
  return (
    <BreakingNews blockData={blockData} />
  );
};