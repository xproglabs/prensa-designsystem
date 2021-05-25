import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as diariodaregiao} from '../../../styles/demo/diariodaregiao';
import Article from '../Article';

const ArticleDR = () => {
  return (
    <ThemeProvider theme={diariodaregiao}>
      <Article
        intertitle={{
          fontSize: ['32px', '32px'],
          fontWeight: 700,
          mb: ['5', '5'],
          value: 'Título'
        }}
        subject={{
          bgColor: 'primary1',
          color: 'white',
          mb: ['2', '3'],
          transform: 'uppercase',
          value: 'Diário da Região'
        }}
        subtitle={{
          color: 'neutral3',
          mb: ['3', '4'],
          value: 'Valor já foi pago ao município e deverá ajudar cerca de 120 mil pessoas.'
        }}
        title={{
          color: 'neutral2',
          fontSize: ['38px', '62px'],
          lineHeight: ['42px', '64px'],
          mb: ['2', '3'],
          value: 'Adiamento das eleições para 15 e 29 de novembro é aprovado no Senado'
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['20px', '20px'],
          lineHeight: ['36px', '42px'],
          mb: ['7', '7']
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontSize: ['18px', '14px'],
            lineHeight: ['22px', '20px'],
            px: ['3', '4'],
            py: ['3', '4'],
            show: true,
            value: 'O advogado detalha que direitos afetados pela instalação do pedágio na Mogi-Dutra e Mogi-Bertioga / Divulgação/ PMMC',
            width: ['100%']
          },
          mb: ['5', '8'],
          value: 'https://www.odiariodemogi.net.br/image/policy:1.15230.1621460050:1621460050/image.jpg?f=2x1&w=1000'
        }}
      />
    </ThemeProvider>
  );
};

export default ArticleDR;