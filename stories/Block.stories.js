import {text, withKnobs} from '@storybook/addon-knobs';
import React from 'react';

import Block from '../src/Block';
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
    <Block row>
      <Grid columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
      <Grid columns={3}>
        <Teaser 
          title={text('title', 'The quick brown fox jumps over the lazy dog')}
          subtitle={text('subtitle', 'Lorem ipsum sit dolor amet lorem situation')}
          subject={text('subject', 'Assunto')}
        />
      </Grid>
    </Block>
  );
};