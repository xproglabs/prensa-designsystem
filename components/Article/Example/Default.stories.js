import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme} from '../../../styles/theme';
export {default as DiarioDaRegiao} from './DiarioDaRegiao';
export {default as ODiarioDeMogi} from './ODiarioDeMogi';
export {default as OVale} from './OVale';
export {default as HojeEmDia} from './HojeEmDia';
import Article from '../Article';

export default {
  title: 'Article/Example',
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