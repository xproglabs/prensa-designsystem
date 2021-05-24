import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as odiariodemogi} from '../../../styles/demo/odiariodemogi';
import Article from '../Article';

const ArticleOM = () => {
  return (
    <ThemeProvider theme={odiariodemogi}>      
      <Article
        byline={{
          author: {
            color: 'neutral4',
            fontFamily: 'primary',
            fontSize: ['14px', '14px'],
            lineHeight: ['16px', '16px'],
            value: 'O Diário'
          },
          customContent: `
            border-left: 8px solid ${odiariodemogi.colors['primary1']};
            padding-left: 8px;
          `,
          datetime: {
            color: 'neutral4',
            fontSize: ['12px', '12px'],
            lineHeight: ['16px', '16px'],
            time_modified: '18 dias atrás',
            time_published: '21/05/2021 às 23:20',
          }
        }}
        intertitle={{
          fontFamily: 'secondary',
          fontSize: ['20px', '20px'],
          fontWeight: 700,
          lineHeight: ['42px', '42px'],
          mb: ['2', '3']
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['20px', '20px'],
          lineHeight: ['42px', '42px'],
          mb: ['1', '2']
        }}
        subject={{
          mb: ['3', '3'],
          px: '1',
          transform: 'uppercase',
          value: 'O Diário de Mogi',
        }}
        subtitle={{
          color: 'neutral3',
          mb: ['3', '3'],
          value: 'Felipe, que começou no União e nunca deixou de exaltar a cidade, também conquistou o primeiro título espanhol pelo  Atlético de Madrid. De quebra, o time terminou com a defesa menos vazada.'
        }}
        title={{
          color: 'neutral2',
          value: 'Felipe, de Mogi das Cruzes, é convocado por Tite para a Seleção'
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontSize: ['14px', '14px'],
            lineHeight: ['18px', '18px'],
            show: true,
            value: 'O advogado detalha que direitos afetados pela instalação do pedágio na Mogi-Dutra e Mogi-Bertioga / Divulgação/ PMMC'
          },
          mb: ['2', '4'],
          value: 'https://www.odiariodemogi.net.br/image/policy:1.15230.1621460050:1621460050/image.jpg?f=2x1&w=1000'
        }}
      />
    </ThemeProvider>
  );
};

export default ArticleOM;