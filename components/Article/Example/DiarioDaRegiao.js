import React from 'react';
import {ThemeProvider} from 'styled-components';

import {theme as diariodaregiao} from '../../../styles/demo/diariodaregiao';
import Article from '../Article';

const ArticleDR = () => {
  return (
    <ThemeProvider theme={diariodaregiao}>
      <Article
        intertitle={{
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
          mb: ['3', '4'],
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eleifend pellentesque. Suspendisse semper gravida fermentum. Integer pulvinar euismod hendrerit.'
        }}
        title={{
          color: 'neutral2',
          fontSize: ['38px', '62px'],
          mb: ['2', '3'],
          value: 'Adiamento das eleições para 15 e 29 de novembro é aprovado no Senado'
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['20px', '20px'],
          lineHeight: ['36px', '42px'],
        }}
        tags={{
          items: ['Tag1', 'Tag2']
        }}
        textbody='<p>Deputada estadual pelo Partido dos Trabalhadores (PT) desde 2003, Beth Sah&atilde;o, uma das maiores lideran&ccedil;as do partido na regi&atilde;o, escondeu o ex-presidente Luis In&aacute;cio Lula da Silva e seu partido em sua primeira propaganda eleitoral para a TV na disputa pela prefeitura de Catanduva.</p><p>A situa&ccedil;&atilde;o j&aacute; tem ocorrido nas redes sociais, cen&aacute;rio em que Beth aparece com as cores azul, branco e laranja em sua campanha. A candidata a prefeita, que disputa a vaga do Executivo da cidade pela quarta vez, tamb&eacute;m reduziu o n&uacute;mero 13, que sempre esteve em evid&ecirc;ncia, nas apari&ccedil;&otilde;es. Este ano, o n&uacute;mero surge menor e grafado em branco.</p><p>Grande marca do partido e tamb&eacute;m j&aacute; utilizada em outras campanhas de Beth, a estrela do PT, s&iacute;mbolo nacional da sigla, tamb&eacute;m n&atilde;o aparece na campanha da ex-deputada, que deixou a condi&ccedil;&atilde;o de parlamentar em agosto ap&oacute;s o titular reaver o mandato. Igualmente preteridos, os partidos da coliga&ccedil;&atilde;o (PT/PTB/SD/Avante/PSB/PSD/PROS) surgiram sem destaque nas imagens de divulga&ccedil;&atilde;o.</p><p>Em 2016, quando Beth ficou em segundo lugar, contra Afonso Macchione (PSB), a ex-parlamentar tamb&eacute;m j&aacute; vinha se afastando da cor vermelha e outros elementos do PT. No entanto, Beth ainda mantinha em evid&ecirc;ncia o n&uacute;mero 13 e a estrela. Outro detalhe que chama aten&ccedil;&atilde;o na campanha da petista &eacute; a presen&ccedil;a do PSB, partido pelo qual Macchione disputou as &uacute;ltimas elei&ccedil;&otilde;es, al&eacute;m do PSD de Gilberto Kassab, que atualmente est&aacute; aliado ao PSDB e ao DEM, rivais hist&oacute;ricos do PT.</p><p>A reportagem procurou Beth, que por meio de sua assessoria disse que Lula vota em S&atilde;o Bernardo e ela &eacute; candidata em Catanduva. Em rela&ccedil;&atilde;o &agrave;s cores da campanha, a prefeitur&aacute;vel disse que o azul e o laranja "propiciaram uma composi&ccedil;&atilde;o mais harmoniosa em termos est&eacute;ticos".</p><p><strong>Em Rio Preto</strong></p><p>Por sua vez, a candidata a prefeita de Rio Preto pelo PT, Celi Regina, contou com a inser&ccedil;&atilde;o do ex-presidente Lula e do ex-ministro Fernando Haddad como trunfos para sua propaganda eleitoral, veiculada no domingo, 12, pedindo votos e declarando seus apoios.</p><p>Ao Di&aacute;rio, Celi garantiu que pretende usar a imagem do ex-presidente, bem como de Haddad novamente e que recebeu muitas mensagens nas redes sociais com a apari&ccedil;&atilde;o dos petistas. "Tenho muito orgulho de ter o Lula e o Haddad na nossa campanha. Muito me honra porque o PT tem um legado muito grande dos governos Lula e Dilma em Rio Preto, principalmente &agrave;s popula&ccedil;&otilde;es mais necessitadas", afirmou ela, que citou obras realizadas pelo ex-prefeito Valdomiro Lopes (PSB) obtidas junto aos governos petistas, como moradias populares, tratamento de esgoto, mobilidade urbana e UBSs.</p><p><strong>Em Bebedouro</strong></p><p>Carlos Orpham, candidato a prefeito pelo PT em Bebedouro, tamb&eacute;m se agarrou ao discurso do partido, mantendo a letra e o n&uacute;mero de sua propaganda em vermelho, bem como exibindo a estrela do partido com evid&ecirc;ncia. O prefeitur&aacute;vel, que disputa a cadeira do Executivo local pela segunda vez, surge nas fotos inclusive com m&aacute;scara vermelha, mas disse que ainda n&atilde;o conseguiu uma grava&ccedil;&atilde;o espec&iacute;fica de apoio de Lula ou Haddad, pois "grandes lideran&ccedil;as partid&aacute;rias est&atilde;o priorizando onde tem TV".</p><p>Orpham, entretanto, afirmou j&aacute; ter recebido v&iacute;deos de apoio de outras figuras pol&iacute;ticas, como Edinho, atual prefeito de Araraquara e ex-ministro de Dilma, e M&aacute;rcia Lia, deputada estadual. O candidato tamb&eacute;m lembrou que em sua propaganda de r&aacute;dio &eacute; veiculada uma fala que Lula gravou em geral pedindo para votarem nos candidatos do PT.</p>'
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

export default ArticleDR;