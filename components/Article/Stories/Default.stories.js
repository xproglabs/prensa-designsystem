import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from '../../../styles/theme';
import Article from '../Article';

export default {
  title: 'Article/Default',
  component: Article,
};

export const ArticleDefault = () => {
  return (
    <ThemeProvider theme={theme}>
      <Article
        subject={{
          bgColor: 'neutral3',
          color: 'white',
          value: 'ASSUNTO'
        }}
      />
    </ThemeProvider>
  );
};