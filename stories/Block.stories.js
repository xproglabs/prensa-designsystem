import {text, boolean, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Block from '../src/Block';
import {BreakingNews} from '../src/Blocks';
import Grid from '../src/Grid';
import {Teaser} from '../src/Teasers';
import {sassWrapper} from '../utils/SassWrapper';

export default {
  title: 'Components | Block',
  component: Block,
  decorators: [withKnobs, sassWrapper]
};

export const QuatroManchetes = () => {
  return (
    <Block row style='4-col'>
      <Grid xs={100} md={50} columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid xs={100} md={50} columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid xs={100} md={50} columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid xs={100} md={50} columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
    </Block>
  );
};

export const TresManchetes = () => {
  return (
    <Block row style='3-col'>
      <Grid xs={100} md={33} columns={4}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid xs={100} md={33} columns={4}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid xs={100} md={33} columns={4}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
    </Block>
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