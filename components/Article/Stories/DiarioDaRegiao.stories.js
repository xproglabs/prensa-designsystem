import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as diariodaregiao} from '../../../styles/demo/diariodaregiao';
import Article from '../Article';

export default {
  title: 'Article/DiarioDaRegiao',
  component: Article,
};

export const ArticleDR = () => {
  return (
    <ThemeProvider theme={diariodaregiao}>
      <Article
        subject={{
          bgColor: 'activeColor',
          color: 'white',
          value: 'Diário da Região'
        }}
      />
    </ThemeProvider>
  );
};