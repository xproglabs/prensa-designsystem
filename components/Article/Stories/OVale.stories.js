import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as ovale} from '../../../styles/demo/ovale';
import Article from '../Article';

export default {
  title: 'Article/OVale',
  component: Article,
};

export const ArticleOV = () => {
  return (
    <ThemeProvider theme={ovale}>
      <Article 
        subject={{
          transform: 'uppercase',
          value: 'O Vale'
        }}
      />
    </ThemeProvider>
  );
};