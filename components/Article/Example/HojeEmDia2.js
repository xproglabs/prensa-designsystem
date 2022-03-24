import React from 'react'
import { ThemeProvider } from 'styled-components'

import { hojeemdia_theme } from '../../../styles/demo/hed'
import Article from '../Article'

const textbody = `
  <p><em><strong>Conteúdo de inteira responsabilidade da Cantina Do Lucas</strong></em></p>

  <p><strong><em>Conteúdo de inteira responsabilidade da Cantina Do Lucas</em></strong></p>

  <p><em>Conteúdo de inteira responsabilidade da Cantina Do Lucas</em></p>

  <p><strong>Conteúdo de inteira responsabilidade da Cantina Do Lucas</strong></p>
  
  <p>A taxa de transmissão da Covid-19, o chamado índice RT, voltou a aumentar em Belo Horizonte. De acordo com o Boletim Epidemiológico divulgado pela Prefeitura de Belo Horizonte (PBH) nesta terça-feira (30), a taxa está em 0,96, ou seja, 100 pessoas infectadas pelo coronavírus podem contaminar outras 96.</p>

  <p>Já a taxa de ocupação de leitos de UTI destinados à Covid caiu de 40% na última segunda (29) para 34,1% nesta terça. Os leitos de enfermaria exclusivos para pacientes com coronavírus teve uma pequena alta, passando de 46,2% para 46,6%, conforme os dados da PBH.</p>

  <p>Até o momento, a capital registra 292.884 casos confirmados da doença, com 897 em acompanhamento. O número de pacientes recuperados chega a 284.963 e as mortes estão em 7.024.</p>

  <p>O boletim aponta ainda que 83,7% dos belo-horizontinos acima de 12 anos já receberam uma dose da vacina contra Covid-19 ou a dose única (Janssen). Quando se trata da segunda dose (incluindo também a da Janssen), o percentual de imunizados em BH está em 72,6%.</p>

  <p>Foram aplicadas na cidade 2.135.046 primeiras doses, 1.843.621 segundas doses, 60.882 doses únicas e 336.178 doses de reforço.</p>

  <p>Casos suspeitos de contágio simultâneo pelos vírus que provocam a Covid e a gripe, chamados de Flurona, são preocupantes e de alto risco para a população mais vulnerável. Médicos alertam que a dupla infecção reforça a obrigatoriedade para uso da máscara de proteção, distanciamento social e higienização das mãos, além da vacinação para quem ainda não completou o ciclo.</p>

  <p>Clique <a href="https://www.hojeemdia.com.br/horizontes/trabalhadores-do-ensino-fundamental-de-bh-recebem-a-dose-de-refor%C3%A7o-contra-a-covid-nesta-quarta-1.870632" target="_blank">aqui </a>e saiba quem vacina hoje</p>
  
  <p>Três notificações são investigadas em Juiz de Fora, na Zona da Mata. No entanto, não há informações sobre idade, sexo e estado de saúde dos pacientes. Conforme a prefeitura, análises epidemiológicas estão sendo feitas. A Secretaria de Estado de Saúde (SES-MG) ainda não foi comunicada sobre as suspeitas.</p>
  
  <p>Em Belo Horizonte, não há casos. No Brasil, houve registros em São Paulo, Rio de Janeiro e no Ceará. Há também notificações em outros países, como Estados Unidos e Israel.&nbsp;</p>
  
  <p><a class="p-smartembed" data-attr-f="3x2" data-attr-q="0.3" data-attr-w="400" data-onecms-id="policy:1.816166" data-onecms-type="image" href="javascript:window.parent.actionEventData({$contentId:'1.816166', $action:'view', $target:'work'})" polopoly:contentid="policy:1.816166"><img src="/image/policy:1.816166/image/image.jpg?f=3x2&amp;w=400&amp;q=0.3" /></a></p>
  
  <p>O cenário já era esperado, segundo o infectologista e membro do Comitê de Enfrentamento à Covid em Belo Horizonte, Unaí Tupinambás. “Tivemos quase dois anos sem circulação viral e, infelizmente, a procura pelo imunizante (da gripe) foi muito pequena. Era esperado que acontecesse no nosso outono, mas antecipou para o verão”, disse.</p>
  
  <p><a id="https://www.youtube.com/watch?v=i8dmFGu0QA8" name="https://www.youtube.com/watch?v=i8dmFGu0QA8"></a></p>
  
  <p>Conforme o médico, o risco é maior principalmente para pessoas não vacinadas e dos grupos de risco. “Ou seja, crianças e também adultos como gestantes, idosos e aqueles com comorbidades que, mesmo imunizados, têm vulnerabilidade maior diante das duas infecções”, alerta o infectologista.</p>
  
  <p><strong>Proteção</strong></p>
  
  <p>A imunização contra a Covid-19, como mostram as pesquisas e os números, é eficaz contra a doença e as formas mais graves. No entanto, é imprescindível seguir as demais medidas de proteção contra o coronavírus.&nbsp;</p>
  
  <p>Já a vacina contra a gripe não protege contra a nova cepa do vírus, H3N2 Darwin, mas garante imunização contra as outras variantes por ser do tipo trivalente.</p>
  
  <p><strong>Leia mais:</strong><br />
  <a class="p-smartembed" data-onecms-id="policy:1.865478" data-onecms-type="article" href="javascript:window.parent.actionEventData({$contentId:'1.865478', $action:'view', $target:'work'})" polopoly:contentid="policy:1.865478">[[(standard.Article) Taxa de transmissão da Covid-19 em BH volta a crescer]]</a><br />
  <a class="p-smartembed" data-onecms-id="policy:1.825220" data-onecms-type="article" href="javascript:window.parent.actionEventData({$contentId:'1.825220', $action:'view', $target:'work'})" polopoly:contentid="policy:1.825220">[[(standard.Article) Suposto ato de vandalismo pode ter estragado vacinas de Covid-19 no ES]]</a></p>
    
  <p><strong>Leia mais:</strong></p>

  <p><strong><a href="https://www.hojeemdia.com.br/horizontes/sa%C3%BAde/avan%C3%A7o-na-vacina%C3%A7%C3%A3o-faz-mortes-por-covid-19-cair-15-vezes-em-minas-1.865358" target="_blank">Avanço na vacinação faz mortes por Covid-19 cair 15 vezes em Minas</a><br />
  <a href="https://www.hojeemdia.com.br/horizontes/resultado-de-suspeita-de-variante-%C3%B4micron-em-bh-sai-at%C3%A9-sexta-paciente-esteve-na-%C3%A1frica-e-na-europa-1.865459" target="_blank">Resultado de suspeita de variante Ômicron em BH sai até sexta; paciente esteve na África e na Europa</a><br />
  <a href="https://www.hojeemdia.com.br/horizontes/jovens-de-bh-com-13-anos-recebem-a-segunda-dose-da-vacina-contra-a-covid-19-da-pfizer-nesta-ter%C3%A7a-1.865353" target="_blank">Jovens de BH com 13 anos recebem a segunda dose da vacina contra a Covid-19, da Pfizer, nesta terça</a></strong></p>
`

const ArticleHojeEmDia2 = () => {
  return (
    <ThemeProvider theme={hojeemdia_theme}>
      <Article
        amp={false}
        bodyWidth='660px'
        hasColumnRight={true}
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
          }
        }}
        citation={{
          color: 'neutral5',
          fontFamily: 'primary',
          fontSize: ['20px', '20px'],
          lineHeight: ['160%', '160%'],
          pl: ['2', '3'],
          fontWeight: 400
        }}
        gallery={{
          captionProps: {
            enabled: true
          },
          items: [
            {
              caption: 'Mariane criou empresa com foco na economia sustentável (Fotos: Divulgação)',
              contentId: '1.816166',
              value: 'http://polopoly.hojeemdia.com.br/image/policy:1.3658/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'O cabeleireiro Douglas Negrett montou salão para valorizar estética negra (Guilherme Baffi 7/5/2021)',
              contentId: '1.34636',
              value: 'http://polopoly.hojeemdia.com.br/image/policy:1.34636/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'Isadora, filha da médica Luciana Casseb, com camiseta da marca ',
              contentId: '1.34723',
              value: 'http://polopoly.hojeemdia.com.br/image/policy:1.34723/image.jpg?f=2x1&w=1200'
            }
          ]
        }}
        images={{
          items: [
            {
              caption: 'Mariane criou empresa com foco na economia sustentável (Fotos: Divulgação)',
              contentId: '1.816166',
              value: 'http://polopoly.hojeemdia.com.br/image/policy:1.816166/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'O cabeleireiro Douglas Negrett montou salão para valorizar estética negra (Guilherme Baffi 7/5/2021)',
              contentId: '1.34636',
              value: 'http://polopoly.hojeemdia.com.br/image/policy:1.34636/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'Isadora, filha da médica Luciana Casseb, com camiseta da marca ',
              contentId: '1.34723',
              value: 'http://polopoly.hojeemdia.com.br/image/policy:1.34723/image.jpg?f=2x1&w=1200'
            }
          ]
        }}
        paragraph={{
          fontFamily: 'primary',
          fontSize: ['20px', '20px'],
          lineHeight: ['160%', '180%'],
        }}
        share={{
          color: 'primary1',
          facebookUrl: 'https://www.facebook.com/',
          twitterUrl: 'https://www.facebook.com/',
          whatsappUrl: 'https://www.facebook.com/',
          byline: {
            enabled: true,
            facebookProps: { mr: 1 },
            twitterProps: { mr: 1 }
          },
          textBody: {
            enabled: true
          }
        }}
        subject={{
          bgColor: 'primary1',
          color: 'white',
          fontFamily: 'primary',
          fontWeight: 900,
          px: '8px',
          mb: [2, 3],
          transform: 'uppercase',
          value: 'HOJE EM DIA'
        }}
        subtitle={{
          fontFamily: 'primary',
          mb: [4, 4],
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eleifend pellentesque. Suspendisse semper gravida fermentum. Integer pulvinar euismod hendrerit.'
        }}
        tags={{
          color: 'primary1',
          fontFamily: 'primary',
          items: ['Tag1', 'Tag2']
        }}
        textbody={textbody}
        title={{
          color: 'neutral2',
          fontSize: ['38px', '62px'],
          fontWeight: 800,
          mb: [2, 3],
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
        orderedList={{
          color: 'primary1'
        }}
        unorderedList={{
          color: 'primary1'
        }}
        fbappid=''
        url=''
      />
    </ThemeProvider>
  )
}

export default ArticleHojeEmDia2