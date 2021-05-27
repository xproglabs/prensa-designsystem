import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as odiariodemogi} from '../../../styles/demo/odiariodemogi';
import Article from '../Article';

const ArticleOM = () => {
  return (
    <ThemeProvider theme={odiariodemogi}>      
      <Article
        byline={{
          customContent: `
            border-left: 8px solid ${odiariodemogi.colors['primary1']};
            padding-left: 8px;
          `,
          datetime: {
            color: 'neutral4',
            fontSize: ['14px', '14px'],
            lineHeight: ['16px', '16px'],
            time_modified: '18 dias atrás',
            time_published: '21/05/2021 às 23:20',
          }
        }}
        intertitle={{
          fontSize: ['38px', '30px'],
          value: 'Título interno da matéria'
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['20px', '20px'],
          lineHeight: ['190%', '190%'],
        }}
        subject={{
          mb: ['3', '3'],
          transform: 'uppercase',
          value: 'O Diário de Mogi',
        }}
        subtitle={{
          mb: ['5', '5'],
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eleifend pellentesque. Suspendisse semper gravida fermentum. Integer pulvinar euismod hendrerit.'
        }}
        title={{
          fontSize: ['38px', '62px'],
          mb: ['2', '2'],
          value: 'Adiamento das eleições para 15 e 29 de novembro é aprovado no Senado'
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontFamily: 'secondary',
            fontSize: ['14px', '14px'],
            lineHeight: ['130%', '130%'],
            show: true,
            value: 'O advogado detalha que direitos afetados pela instalação do pedágio na Mogi-Dutra e Mogi-Bertioga / Divulgação/ PMMC',
          },
          mb: ['5', '8'],
          value: 'https://www.odiariodemogi.net.br/image/policy:1.15230.1621460050:1621460050/image.jpg?f=2x1&w=1000'
        }}
      />
    </ThemeProvider>
  );
};

export default ArticleOM;