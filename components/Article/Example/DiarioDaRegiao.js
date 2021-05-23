import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as diariodaregiao} from '../../../styles/demo/diariodaregiao';
import Article from '../Article';

const ArticleDR = () => {
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

export default ArticleDR;