import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme as acritica } from '../../../styles/demo/acritica'
import AdPlaceholder from '../../AdBlock/placeholder'
import Article from '../Article'

const dummyImage = (contentId) => `<p><a class="p-smartembed" data-attr-f="3x2" data-attr-q="0.3" data-attr-w="400" data-onecms-id="policy:${contentId}" data-onecms-type="image" href="javascript:window.parent.actionEventData({$contentId:'${contentId}', $action:'view', $target:'work'})" polopoly:contentid="policy:${contentId}"><img src="/image/policy:${contentId}/gui_3224.jpg?f=3x2&amp;w=400&amp;q=0.3" /></a></p>\r\n\r\n`
const dummyTweet = () => '<p><a id="https://twitter.com/UOL/status/1399821735231426566" name="https://twitter.com/UOL/status/1399821735231426566">https://twitter.com/UOL/status/1399821735231426566</a></p>'
const dummyYoutube = () => '<p><a id="https://www.youtube.com/watch?v=uj_K_S1Iqcg" name="https://www.youtube.com/watch?v=uj_K_S1Iqcg">https://www.youtube.com/watch?v=uj_K_S1Iqcg</a></p>'
const dummyYoutubeDesk = () => '<div data-oembed-url="https://youtu.be/3vYeQLJ2as4"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe allow="encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" src="https://www.youtube.com/embed/3vYeQLJ2as4?rel=0" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" tabindex="-1"></iframe></div></div>'

const ArticleACritica = () => {
  const isFeatured = false
  return (
    <ThemeProvider theme={acritica}>
      <Article
        amp={false}
        AdPlaceholder={AdPlaceholder}
        bodyWidth='768px'
        byline={{
          author: {
            color: 'neutral2',
            email: 'jornalista@acritica.com',
            fontFamily: 'secondary',
            fontSize: ['14px', '14px'],
            lineHeight: ['16px', '16px'],
            value: 'Redação A Crítica'
          },
          datetime: {
            color: 'neutral4',
            fontFamily: 'secondary',
            fontSize: ['12px', '12px'],
            fontWeight: 400,
            lineHeight: ['16px', '16px'],
            time_modified: '18/10/2021 às 12:44',
            time_published: '18/10/2021 às 08:49'
          }
        }}
        citation={{
          customCite: `
            border-left: 4px solid ${acritica.colors['primary1']};
          `,
          color: 'neutral3',
          fontSize: ['18px', '18px'],
          fontWeight: 400,
          lineHeight: ['160%', '180%'],
          pl: ['2', '3'],
        }}
        featured={{
          enabled: isFeatured
        }}
        gallery={{
          items: [
            {
              caption: 'Mariane criou empresa com foco na economia sustentável (Fotos: Divulgação)',
              contentId: '1.3658',
              value: 'http://qa.diariodaregiao.com.br/image/policy:1.3658/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'O cabeleireiro Douglas Negrett montou salão para valorizar estética negra (Guilherme Baffi 7/5/2021)',
              contentId: '1.34636',
              value: 'http://qa.diariodaregiao.com.br/image/policy:1.34636/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'Isadora, filha da médica Luciana Casseb, com camiseta da marca ',
              contentId: '1.34723',
              value: 'http://qa.diariodaregiao.com.br/image/policy:1.34723/image.jpg?f=2x1&w=1200'
            }
          ]
        }}
        hyperlink='primary3'
        images={{
          items: [
            {
              caption: 'Mariane criou empresa com foco na economia sustentável (Fotos: Divulgação)',
              contentId: '1.3658',
              value: 'http://qa.diariodaregiao.com.br/image/policy:1.3658/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'O cabeleireiro Douglas Negrett montou salão para valorizar estética negra (Guilherme Baffi 7/5/2021)',
              contentId: '1.34636',
              value: 'http://qa.diariodaregiao.com.br/image/policy:1.34636/image.jpg?f=2x1&w=1200'
            },
            {
              caption: 'Isadora, filha da médica Luciana Casseb, com camiseta da marca ',
              contentId: '1.34723',
              value: 'http://qa.diariodaregiao.com.br/image/policy:1.34723/image.jpg?f=2x1&w=1200'
            }
          ]
        }}
        paragraph={{
          fontFamily: 'secondary',
          fontSize: ['18px', '18px'],
          fontWeight: 400,
          lineHeight: ['180%', '180%'],
        }}
        share={{
          color: 'primary1',
          size: '48px',
          facebookUrl: 'https://www.facebook.com/',
          twitterUrl: 'https://www.facebook.com/',
          whatsappUrl: 'https://www.facebook.com/',
          linkedinUrl: 'https://www.facebook.com/',
          byline: {
            enabled: true,
            facebookProps: { mr: 1 },
            twitterProps: { mr: 1 },
          },
          textBody: {
            twitterProps: { ml: 1 },
            whatsappProps: { ml: 1 },
            enabled: true,
            sectionTitle: true
          }
        }}
        subject={{
          bgColor: 'primary1',
          color: 'white',
          fontSize: ['12px', '12px'],
          mb: ['2', '3'],
          transform: 'uppercase',
          value: 'A Crítica'
        }}
        subtitle={{
          color: isFeatured ? 'white' : 'neutral2',
          mb: ['4', '4'],
          value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra eleifend pellentesque. Suspendisse semper gravida fermentum. Integer pulvinar euismod hendrerit.'
        }}
        sectionTitle={{
          color: 'primary1',
          enabled: true,
          fontFamily: 'secondary',
          fontSize: ['18px', '18px'],
          fontWeight: 700
        }}
        tags={{
          borderColor: 'primary1',
          color: 'primary1',
          items: ['Tag1', 'Tag2'],
          sectionTitle: {
            enabled: true,
            value: 'Assuntos relacionados'
          }
        }}
        title={{
          color: isFeatured ? 'white' : 'neutral2',
          fontSize: ['38px', '62px'],
          fontWeight: 900,
          lineHeight: ['120%', '110%'],
          mb: ['1', '2'],
          value: 'Adiamento das eleições para 15 e 29 de novembro é aprovado no Senado'
        }}
        textbody={`<p>"Estamos vivenciando um cen\u00E1rio onde o apoio a uma causa ou projeto social est\u00E1 deixando de ser uma op\u00E7\u00E3o para neg\u00F3cios que buscam um futuro sustent\u00E1vel, lucrativo e buscam impactar significativamente seus clientes, fornecedores, colaboradores, comunidade local, <a href="http://localhost:3000/1.1130">sociedade e meio ambiente</a>", explica Guilherme Mendes Thomaz, analista de neg\u00F3cios e gestor de projetos do Sebrae de Rio Preto.</p>\r\n\r\n<p><cite>Estamos vivenciando um cen\u00E1rio onde o apoio a uma causa ou projeto social est\u00E1 deixando de ser uma op\u00E7\u00E3o para neg\u00F3cios que buscam um futuro sustent\u00E1vel, lucrativo e buscam impactar significativamente seus clientes</cite></p>\r\n\r\n<p>De acordo com Thomaz, a responsabilidade social n\u00E3o se aplica apenas a empresas segmentadas ou que atuam em um nicho de mercado bem espec\u00EDfico. "Independentemente do porte ou do segmento de atua\u00E7\u00E3o, toda empresa pode adotar um modelo de gest\u00E3o pautado na responsabilidade social. O consumidor est\u00E1 atento e cada vez mais valoriza marcas que t\u00EAm um prop\u00F3sito real e que realmente se preocupam com a sua responsabilidade social", diz.</p>\r\n\r\n${dummyImage('1.34723')}<p>H\u00E1 dois anos e meio, o cabeleireiro Douglas Negrett resolveu abrir seu pr\u00F3prio neg\u00F3cio, o Negrett Cabelos, e virar empres\u00E1rio. Trabalhava em outros sal\u00F5es desde quando se profissionalizou, em 2017. "Sempre tive dificuldade de achar um profissional que soubesse cuidar do meu cabelo e eu decidi me tornar esse profissional. Hoje, sou especializado em cabelos crespos e cacheados. Tanto feminino, quanto masculino".</p>\r\n\r\n<h2>Heading 2</h2>\r\n\r\n<h3>Heading 3</h3>\r\n\r\n<h4 style="padding:5px;">Heading 4</h4>\r\n\r\n<p>Douglas abriu seu sal\u00E3o com a prop\u00F3sito de valorizar a diversidade, a identidade de cada um. "Percebo que meu neg\u00F3cio faz muita diferen\u00E7a. E vejo isso no dia a dia, na felicidade dos meus clientes de encontrar um profissional que valoriza e sabe cuidar dos seus cabelos naturais. Eu atendo fam\u00EDlias inteiras, m\u00E3e, pai, filhos, av\u00F3s, todo mundo. Aqui, a pessoa encontra um lugar em que ela pode se reconhecer e ser quem ela \u00E9. Quando cheguei em Rio Preto, percebi que era uma cidade carente de neg\u00F3cios desse tipo. E ainda s\u00E3o poucos. Costumo dizer que aqui n\u00E3o \u00E9 s\u00F3 um sal\u00E3o, mas um espa\u00E7o onde as pessoas tamb\u00E9m se sentem a vontade pra ser quem elas s\u00E3o", diz o cabeleireiro, que veio de S\u00E3o Paulo.</p>\r\n\r\n${dummyImage('1.34636')}<p>O empres\u00E1rio revela que hoje tem uma renda gra\u00E7as a esse sonho e a ideia \u00E9 manter e crescer. "Ter um prop\u00F3sito faz bem n\u00E3o s\u00F3 para o meu neg\u00F3cio, mas para autoestima de muita gente. Quero crescer e fazer com que essa luta, da est\u00E9tica negra, seja valorizada. Assim como todos os tipos de beleza. Espero que esse tipo de negocio como o meu ainda seja uma refer\u00EAncia n\u00E3o s\u00F3 aqui na regi\u00E3o, mas em todo Pa\u00EDs".</p>\r\n\r\n<p>Al\u00E9m de vender produtos e servi\u00E7os, empres\u00E1rios que desejam manter um neg\u00F3cio com prop\u00F3sito podem apoiar e fazer parcerias com outras marcas, causas, projetos sociais e ONGs que tem valores, interesses e prop\u00F3sitos em comum. "Tamb\u00E9m podem criar oportunidades para ajudar n\u00E3o apenas financeiramente, mas tamb\u00E9m na gest\u00E3o, opera\u00E7\u00E3o, planejamento e estrat\u00E9gias. A responsabilidade social empresarial \u00E9 muito importante, pois \u00E9 uma gest\u00E3o baseada na \u00E9tica, transpar\u00EAncia e preocupa\u00E7\u00E3o com a comunidade e meio ambiente que est\u00E3o inseridos, buscando minimizar seus impactos negativos e maximizar oportunidades para contribuir com melhorias e promover o desenvolvimento local", explica o analista do Sebrae.</p>\r\n\r\n<div data-oembed-url="https://youtu.be/3vYeQLJ2as4">\r\n<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe allow="encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" src="https://www.youtube.com/embed/3vYeQLJ2as4?rel=0" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" tabindex="-1"></iframe></div>\r\n</div>\r\n\r\n<p>H\u00E1 um ano, a terapeuta hol\u00EDstica e artes\u00E3 Mariane Lamana resolveu criar a Vu\u00E1 para investir no fazer manual como forma de economia sustent\u00E1vel e incentivar o empreendedorismo feminino. "Foi com muita vontade e muito frio na barriga que a Vu\u00E1 surgiu e os resultados imediatos foram melhores do que eu esperava. A Vu\u00E1 vem de um desejo de trabalhar alinhado com os valores que eu acredito e tanto a produ\u00E7\u00E3o manual quanto a decora\u00E7\u00E3o afetiva refletem isso. Acredito que ter um neg\u00F3cio com prop\u00F3sito faz a diferen\u00E7a porque prioriza as rela\u00E7\u00F5es humanas nessa 'troca'", explica Mariane.</p>\r\n\r\n${dummyTweet()}<p>Para ela, ao adquirir produ\u00E7\u00F5es artesanais, o cliente movimenta a economia local. "Acredito que cada vez mais pessoas buscam autenticidade e investir em quem, ou, no que elas se identificam. Quando eu pensei a Vu\u00E1, n\u00E3o foi com o objetivo de conseguir p\u00FAblico em quantidade, mas sim em deixar claro o meu prop\u00F3sito e assim alcan\u00E7ar pessoas que se sintonizam comigo e valorizam as mesmas coisas que eu, tanto em rela\u00E7\u00E3o ao meu trabalho quanto \u00E0 minha vis\u00E3o de mundo, at\u00E9 porque essas duas coisas n\u00E3o podem ser separadas", diz.</p>\r\n\r\n${dummyYoutube()}\r\n\r\n<p>"Tenho uma filha afrodescendente. E logo que come\u00E7ou a se socializar, ela sofreu preconceito. Foi quando tive a ideia de criar a marca de camisetas <a href="http://instagram.com/u/igualle">@igualle</a>, com estampas que valorizam o negro e gritam pela igualdade. Foi por amor a ela e por todos que sofrem com o preconceito", explica a m\u00E9dica Luciana Casseb. A Igualle nasceu em novembro de 2020 e, de acordo com Luciana, a raz\u00E3o da exist\u00EAncia da marca \u00E9 a luta contra o preconceito vivido pela filha e por todos que s\u00E3o afetados pela discrimina\u00E7\u00E3o.</p>\r\n\r\n<p>Com o slogan "Quem ama, usa", a marca de camisetas Igualle tem como clientes pessoas que lutam e acreditam na mesma causa. "Tudo que fazemos com prop\u00F3sito, vale a pena, mesmo em nossa sociedade conservadora. Eu acredito em um mundo melhor e pessoas melhores. Por isso a ideia da marca \u00E9 que nossas mensagens 'gritem' o amor para o mundo e que, de alguma forma, toquem os cora\u00E7\u00F5es mais endurecidos", afirma Luciana.</p>\r\n\r\n</p>\r\n\r\n<p>Antes de criar um neg\u00F3cio com prop\u00F3sito, tenha em mente em fazer um compromisso de longo prazo. \u00C9 importante fazer com autenticidade, criando valor para todos. N\u00E3o adianta criar uma a\u00E7\u00E3o focada no prop\u00F3sito uma \u00FAnica vez. Por isso, cuidado com as iniciativas washing (ou lavagem), nome dado para quando uma empresa se faz parecer focada em um prop\u00F3sito, seja por meio de campanhas institucionais ou produtos, quando na verdade ela n\u00E3o \u00E9.</p>\r\n\r\n${dummyYoutubeDesk()}<p>H\u00E1 o greenwashing, que \u00E9 o nome dado para quando uma empresa se faz parecer ambientalmente respons\u00E1vel e sustent\u00E1vel, quando na verdade ela n\u00E3o \u00E9. Outra \u00E9 a lavagem da diversidade (ou diversitywashing), quando a empresa adota algumas pr\u00E1ticas que apoiam a diversidade, mas mant\u00E9m uma cultura machista, por exemplo. H\u00E1 tamb\u00E9m o pinkwashing (ou lavagem rosa, em portugu\u00EAs), termo relacionado \u00E0 apropria\u00E7\u00E3o de movimentos de liberdade sexual e de g\u00EAnero para promover uma organiza\u00E7\u00E3o, mascarando preconceitos e a falta de pol\u00EDticas realmente inclusivas.</p>\r\n${'\n'}`}
        topimage={{
          featured: isFeatured,
          image: true,
          caption: {
            color: 'neutral4',
            fontFamily: 'secondary',
            fontSize: ['12px', '12px'],
            lineHeight: ['130%', '130%'],
            show: !isFeatured,
            value: 'O advogado detalha que direitos afetados pela instalação do pedágio na Mogi-Dutra e Mogi-Bertioga / Divulgação/ PMMC',
          },
          mb: isFeatured ? ['0', '0'] : ['5', '8'],
          px: [2, 2],
          py: [2, 2],
          value: 'http://qa.diariodaregiao.com.br/image/policy:1.3658/image.jpg?f=2x1&w=1200',
          widthBox: ['calc(100% - 32px)', 'calc(100% - 32px)']
        }}
      />
    </ThemeProvider>
  )
}

export default ArticleACritica