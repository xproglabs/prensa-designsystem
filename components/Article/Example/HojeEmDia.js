import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as hojeemdia} from '../../../styles/demo/hojeemdia';
import Article from '../Article';

const ArticleHJD = () => {
  return (
    <ThemeProvider theme={hojeemdia}>
      <Article
        byline={{
          author: {
            color: 'neutral2',
            fontFamily: 'primary',
            fontSize: ['14px', '14px'],
            lineHeight: ['16px', '16px'],
            value: 'Luiz Augusto Barros'
          },
          datetime: {
            color: 'neutral4',
            fontFamily: 'primary',
            fontSize: ['12px', '12px'],
            lineHeight: ['16px', '16px'],
            time_modified: '18 dias atrás',
            time_published: '21/05/2021 às 23:20'
          },
        }}
        intertitle={{
          value: 'Título',
          fontFamily: 'primary'
        }}
        paragraph={{
          fontFamily: 'primary',
          fontSize: ['20px', '20px'],
          lineHeight: ['36px', '42px'],
        }}
        subject={{
          bgColor: 'primary1',
          color: 'white',
          fontFamily: 'primary',
          mb: ['2', '3'],
          transform: 'uppercase',
          value: 'HOJE EM DIA'
        }}
        subtitle={{
          fontFamily: 'primary',
          mb: ['4', '4'],
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eleifend pellentesque. Suspendisse semper gravida fermentum. Integer pulvinar euismod hendrerit.'
        }}
        title={{
          color: 'neutral2',
          fontSize: ['38px', '62px'],
          fontWeight: 800,
          mb: ['2', '3'],
          value: 'Almost before we knew it, we had left the ground.'
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontFamily: 'primary',
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

export default ArticleHJD;