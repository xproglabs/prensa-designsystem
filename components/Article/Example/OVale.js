import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as ovale} from '../../../styles/demo/ovale';
import Article from '../Article';

const ArticleOV = () => {
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

export default ArticleOV;