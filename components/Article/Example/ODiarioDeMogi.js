import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as odiariodemogi} from '../../../styles/demo/odiariodemogi';
import Article from '../Article';

const ArticleOM = () => {
  return (
    <ThemeProvider theme={odiariodemogi}>      
      <Article 
        subject={{
          transform: 'uppercase',
          px: '1',
          value: 'O Diário de Mogi',
        }}
        subtitle={{
          color: 'neutral3',
          value: 'Felipe, que começou no União e nunca deixou de exaltar a cidade, também conquistou o primeiro título espanhol pelo  Atlético de Madrid. De quebra, o time terminou com a defesa menos vazada.'
        }}
        title={{
          color: 'neutral2',
          value: 'Felipe, de Mogi das Cruzes, é convocado por Tite para a Seleção'
        }}
      />
    </ThemeProvider>
  );
};

export default ArticleOM;