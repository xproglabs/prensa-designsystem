import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as ovale} from '../../../styles/demo/ovale';
import Article from '../Article';

const ArticleOV = () => {
  return (
    <ThemeProvider theme={ovale}>
      <Article
        intertitle={{
          value: 'Jornalismo'
        }}
        subject={{
          bgColor: 'primary1',
          color: 'white',
          mb: ['3', '3'],
          transform: 'uppercase',
          value: 'Especial'
        }}
        subtitle={{
          fontSize: ['20px', '20px'], 
          mb: ['5', '10'],
          value: 'Veículo líder em toda a RMVale, nas mídias impressas e digitais, jornal recebeu do GNI (Google News Iniciative), do Google, financiamento de cerca de R$ 80 mil para investimento exclusivo na ampliação da cobertura jornalística durante a pandemia do novo coronavírus.'
        }}
        title={{
          fontSize: ['38px', '62px'],
          mb: ['3', '3'],
          value: 'Líder no jornalismo, OVALE é selecionado em programa global do Google'
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['18px', '20px'],
          lineHeight: ['190%', '190%'],
        }}
        topimage={{
          amp: false,
          image: true,
          caption: {
            fontSize: ['14px', '14px'],
            lineHeight: ['130%', '130%'],
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

export default ArticleOV;