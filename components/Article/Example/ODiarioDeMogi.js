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
            value: 'Da Redação'
          },
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
          fontFamily: 'secondary',
          fontSize: ['38px', '20px'],
          fontWeight: 700,
          lineHeight: ['42px', '42px'],
          mb: ['5', '3'],
          value: 'Título interno da matéria'
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['20px', '20px'],
          lineHeight: ['42px', '42px'],
          mb: ['1', '2']
        }}
        subject={{
          mb: ['3', '3'],
          transform: 'uppercase',
          value: 'O Diário de Mogi',
        }}
        subtitle={{
          color: 'neutral3',
          mb: ['5', '5'],
          value: 'Valor já foi pago ao município e deverá ajudar cerca de 120 mil pessoas.'
        }}
        title={{
          color: 'neutral2',
          fontSize: ['38px', '62px'],
          lineHeight: ['42px', '66px'],
          mb: ['4', '3'],
          value: 'Adiamento das eleições para 15 e 29 de novembro é aprovado no Senado'
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontSize: ['14px', '14px'],
            lineHeight: ['18px', '18px'],
            px: ['3', '3'],
            py: ['3', '3'],
            show: true,
            value: 'O advogado detalha que direitos afetados pela instalação do pedágio na Mogi-Dutra e Mogi-Bertioga / Divulgação/ PMMC',
            width: 'calc(100% - 48px)'
          },
          mb: ['5', '4'],
          value: 'https://www.odiariodemogi.net.br/image/policy:1.15230.1621460050:1621460050/image.jpg?f=2x1&w=1000'
        }}
      />
    </ThemeProvider>
  );
};

export default ArticleOM;