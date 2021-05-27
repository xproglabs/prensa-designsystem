import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as hojeemdia} from '../../../styles/demo/hojeemdia';
import Article from '../Article';

const ArticleHJD = () => {
  return (
    <ThemeProvider theme={hojeemdia}>
      <Article
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
          value: 'Valor já foi pago ao município e deverá ajudar cerca de 120 mil pessoas.'
        }}
        title={{
          color: 'neutral2',
          fontSize: ['38px', '62px'],
          fontWeight: 800,
          mb: ['2', '3'],
          value: 'Adiamento das eleições para 15 e 29 de novembro é aprovado no Senado'
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontSize: ['14px', '14px'],
            fontFamily: 'primary',
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