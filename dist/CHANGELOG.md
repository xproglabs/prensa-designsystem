# v1.6.95
- Ajuste finos na função boxShadow
# v1.6.94
- Implementa letterSpacing no Typography
- Implementa função boxShadow no Block
# v1.6.93
- Corrige inconsistência ao chegar na última página [Pagination]
- Adiciona botão de compartilhar abaixo das tags
# v1.6.92
- Corrige o espaçamento do TextBody
- Corrige parametrização de margin no groupSubItemProps em AccordionEditorial
# v1.6.91
- Altera uso da propriedade BodyWidth
- Adiciona coluna lateral à direita do texto na página de matéria
- Adiciona o AuthorProfile no teaser que é de colunista
- Implementa função width responsiva
- Implementa função padding responsiva
- Implementa função estilizada margin responsiva
- Otimiza função estilizada "align" para ser responsiva
- Nova função height e responsiveEngine
- Instala addon-docs para evitar exception no Storybook
# v1.6.90
- Remove mb restante dos blocos de 50
# v1.6.89
- Adiciona mb para os slots que tem cor de fundo
# v1.6.88
- Adiciona transform ao Typography de tags
# v1.6.87
- Permite renderização do caption da imagem na web e amp
# v1.6.86
- Insere prop width no componente Link
# v1.6.85
- Adiciona 3 novos slots de publicidade para os pageblocks
# v1.6.84
- Remove os espaços fixos dos templates de capa
- Cria componente de paginação e botão ver mais no slot
- Implementa tratamento para `&nbsp;` nas listas do corpo do texto
- Corrige o path do componente background image
# v1.6.83
- Cria novo componente List e implementa listas ordenada e não ordenada no corpo do texto
# v1.6.82
- Permite ativar/desativar o caption no ImageGallery
# v1.6.81
- Revisar alinhamento lateral dos elementos no topo da matéria
- Ajustar posicionamento do título da Coluna no AuthorProfile
- Remove margin-bottom no author do byline
# v1.6.80
- Corrige null exception no embed do Instagram (ajustes nas funções Twitter, YouTube)
# v1.6.79
- Permite comportamento expandido e nova prop "isExpanded" no Byline em Article
- Adiciona edição da imagem no RenderImage do Teaser
# v1.6.78
- Revisa os types do RenderSubtitle do Teaser
- Adiciona derivativa da imagem no preview dinamico
- Corrige a renderização do Carousel no RenderSlot
# v1.6.77
- Adiciona provider da imagem para o preview interativo
- Viabiliza alguns fluxos de dados para o monitoramento de eventos
- Transforma componente ImageGallery em híbrido (Web/AMP)
# v1.6.76
- Correções no layout dos componentes de colunistas
- Adiciona método para ordenação de lista do slot
- Adiciona link híbrido no botão de voltar da página de erro
# v1.6.75
- Ajusta tamanhos no Embed YouTube
# v1.6.74
- Adiciona novas props nos embeds do Article (ampElementProps e elementProps)
- Adiciona width com cálculo de paddings no corpo do texto em Article (mobile)
- Permite fallbackimage e ajusta o background-position do fallback image
- Permite novo formato de URL no embed do YouTube (youtu.be)
- Cria novos embeds híbridos AMP/WEB para o Article (Facebook, Instagram, Twitter e YouTube)
- Corrige inconsistência na largura do corpo do texto em breakpoint md
- Corrige Pageblock para passar o slotColor no renderSpace
- Adiciona margin bottom no Author do byline
- Corrige altura dos ícones no SocialShare
# v1.6.73
- Corrige breakpoint do layout responsivo em SocialShare
# v1.6.72
- Fix no layout repsonsivo do SocialShare
# v1.6.71
- Espera nova prop containerProps no SocialShare
# v1.6.70
- Fix output css no compartilhamento das redes
# v1.6.69
- Atualiza dependência prensa-docs
- Implementa módulo de compartilhamento de redes sociais híbrido no Article 
# v1.6.68
- Corrige tipagem do Link aplicando tipagem com atributos HTML do AnchorElement
# v1.6.67
- Corrige elemento HTML no Link
# v1.6.66
- Conecta types do Link com HTMLLinkElement
# v1.6.65
- Adiciona props de width no AreaBox do SectionTitle 
# v1.6.64
- Reorganiza templates em pastas individuais e remove TemplateWrap
- Corrige o linter do TemplateLayout no TeaserSuggestion
# v1.6.63
- Permite modelo cid e contentId na renderização da imagem
# v1.6.62
- Realizar ajustes de parametrização no AuthorProfile
- Cria componente AuthorBio
- Adiciona o text-decoration como parametro no link
- Revisa a condição de exibição de imagem no teaser
- O Mogi | Adiciona os estilos para os novos templates e teasers
- Melhorias no componente Link
# v1.6.61
- Entrega as props do block no componente do slot
- Formata matéria exemplo do Correio Popular
# v1.6.60
- Permite width responsivo no SideMenu
- Ajustes de estilo no AccordionEditorial
# v1.6.59
- Otimiza eslint e novos scripts de build
# v1.6.58
- Otimização na engine de publicação
# v1.6.57
- Permite manipular css height no SideMenu
# v1.6.56
- Aplica animações no componente SideMenu
# v1.6.55
- Refatora SideMenu aplicando typescript
# v1.6.54
- Aplica uso do get na função border do styled system
- Corrigir a quebra de linha da palavra quando hyperlink
# v1.6.53
- Otimizações de tipagem e ajustes na doc do templateWrap em HED
# v1.6.52
- Configura template wrap no PageBlock e permite slotWrap nos templates
# v1.6.51
- Nova estrutura de pastas no projeto (remove src)
# v1.6.50
- Permite parametrização de fontFamily no Copyright
# v1.6.49
- Melhorias na função CreateTheme tendo em vista novos tokens de cor
# v1.6.48
- Cria componente AuthorProfile
- Formata exemplo Article A Critica
- Altera espaçamento do px no Body do Article
# v1.6.47
- Parametriza o container da tag
- Parametriza os paddings do box do caption no TopImage
- Adiciona prop font_weight no Title do Teaser
- Altera direction do bloco 50 50 no mobile
- Adaptar a exibição da imagem principal no topo da matéria
# v1.6.46
- Permite nova propriedade site_data no PageBlock
# v1.6.45
- Ajusta types na CreateFunction dos templates
# v1.6.44
- Novas props de cor para o componente Copyright
# v1.6.43
- Aplica fluxo de cores dinâmico no RenderSubject
- Implementa novo fluxo de dados para fallback_image no Teaser
# v1.6.42
- Ajustes para permitir fallback image nos teasers
# v1.6.41
- Corrige undefined excpetion no Related
# v1.6.40
- Corrige undefined excpetion no Related
# v1.6.40
- Corrige lógica de cor para o componente Related em Teaser
- Novo componente RenderNumber no Teaser
- Adiciona os slots de anúncios a partir do slotAds
- Implemmenta nova lógica de renderização no Subject do Article
# v1.6.39
- Correções no Preview Provider e no subject editable
# v1.6.38
- Consolida export da função parseImagePath
- Deprecia export da função path_absolute
- Adiciona novo token a família Radius (circle)
- Permite nova regra fallback_image no Teaser
# v1.6.35
- Consolida export da função path_absolute
# v1.6.34
- Fix na função path_absolute
# v1.6.33
- Corrige alinhamento no TeaserRelated após mudanças no Link
# v1.6.32
- Fix na área de clique e melhoria na tipagem do componente Link
# v1.6.31
- Corrige os warnings do projeto retornados no frontend
- Permite parametrizar min height de cada slot via template
# v1.6.30
- Novo componente Copyright
# v1.6.29
- Reduz z-index no WrapContent do Teaser
# v1.6.28
- Habilita estilo de notícia relacionada no featured
- Corrige a aplicação do custom class no html image
- Adiciona altura no espaço em branco da coluna
- Permite camada com gradiente na imagem do teaser e sombra no componente Typography
# v1.6.27
- Corrige funcionamento do preview
# v1.6.26
- Cria PreviewProvider no projeto
- Corrige espaçamento do teaser no bloco 30 quando desktop (no-background)
- Adequa diagramação da data para ficar responsiva
# v1.6.25
- Fix de layout no componente Copyright
# v1.6.24
- Atualiza dados dos SectionTitles no Template30
# v1.6.23
- Move a definição de domínio para o parseBlock
- Permite seleção de ícone dinâmica e componentes ao invés de conteúdo SVG no componente SectionTitle 
# v1.6.22
- Permite Object genérico como type em CreateTheme
# v1.6.21
- Permite alternar imagem amp e imagem html
- Cria novo fluxo de atualização de ícones dos fronts e permite o uso de ícone no SectionTitle
- Melhoria na função border e implementação no Block
- Transforma componente RenderDateTime para TS e permite customizações de layout
- Implementa o preview dinâmico de blocos e teasers
# v1.6.20
- Customiza Article para receber email e redes sociais do autor.
- Monta novas funções CreateTemplate e CreateTeaser
# v1.6.19
- Condiciona a renderização do SectionTitle "Assuntos" no corpo da matéria
# v1.6.17
- Novo componente ErrorPage
# v1.6.16
- [QA] Nova arquitetura de templates baseado no PageBlock
# v1.6.15
- Fix no componente Copyright #218
# v1.6.14
- Configura paths no tsconfig
- Novo componente Copyright
# v1.6.13
- Adiciona .tgz no npmignore
# v1.6.12
- Ajustes na estrutura e no content do Byline
# v1.6.11
- Corrige reescrita de propriedades na função CreateTheme
- Prensa pipeline CI/CD patch
# v1.6.10
- Novas props "spaceA" e "spaceB" no Teaser 
- Permite altura e largura parametrizada no article topimage 
- Implement new CreateTheme function 
- Feat/improve build 
- Feat/grid related 
- Ajustes no DateLine do Article 
- Adiciona Templates e Teasers no prensa 
- Ajustes no Article 
- Pack de correções no Article 
- Versão 1.6.0
- Remove componente SocialShare web + peerDependecy "react-share"
- Article top medias
- cria Anchor para as Tags no Article
- Otimiza motor de build para aceitar typescript
- Corrige inconsistência nas páginas de matéria 
- Corrige imagem no corpo do texto 
- Corrige a legenda no topimage 
- Novo componente SocialShare para web 
- Fix nos ads TextBody, TopImage e TopBody 
- Adiciona novos blocos de anúncio no Article - TopImage e TopBody 
- Splitta props do SocialShare em itemProps e props do container 
- Separa props do SocialShare em itemProps e props default do container 
- Disponibiliza "align" no styled-system e conecta styled do SocialShare com a função align 
- Ativa itinerantProp na prop size no Article/Share 
- Adiciona min-width nos ícones para evitar quebra nos fronts
- Aplica margin styled function no Article/Share
- Remove margin-right no último ícone em Article/Share
- Altera props específicas por um spread para permitir maior customização
- Adiciona props "url" para permitir compartilhamento com link fixo no SocialShare(Article/Share)
- Otimização na arquitetura do componente Button
- Remove prop name nos títulos do AccordionEditorial
- Realiza otimizações no Typography para um menor CSS final
- Corrige inconsistência de layout no container do Field
- remove margin no svg do AccordionEditorial no arquivo correto
- remove margin no svg do AccordionEditorial
- Permite importar o Article/Share na raíz do prensa como SocialShare
- Redefine o maxWidth dos elementos do textbody
- Aplica novo parse de dimensões no Block
- Corrige inconsistência no estilo de links no corpo do texto
- Parametriza o componente de anuncio no textbody
- Corrige comportamento incorreto na prop fullWidth do Button
- Ajustes no Article e no Button 
- Refatora componente MenuEditorials para AccordionEditorial
- Otimiza componente AdBlock 
- Revert "Ajustes no sideMenu (branche com nova origin)"
- Revisão nas props do componente Icon
- Adiciona função getColor ao styled-system
- Adiciona métodos getImagePath e pathToImage na build Utils
- Fix/amp body enrich (O MOGI)
- Altera props default no Article/Share 
- Altera props default para o componente Share do Article
- Ajustes no sideMenu (branche com nova origin) 
- Configura BUILD para o styled-system do prensa
- Ajustes no SideMenu (items)
- Ajustes no Typography para compatibilidade de <a>
- Ajustes no componente SideMenu e MenuEditorials
- Adiciona tag a no Typography
- Adiciona possibilidade de customizar estilos no MenuEditorials
- Novo componente SideMenu e MenuEditorials
- Ajusta id para embed Tweet no parseBody
- Novo componente Share AMP no módulo Article
- Fix/article colors 
- Altera nome da prop tweetId para url no embed do Twitter
- Feat/aria label button 
- Atualiza componente Medias no Article [Medias v0.1] [styled-system: margin v0.1] 
- Adiciona galeria de imagem no formato amp 
- Ajusta o estilo do embed do vídeo do youtube 
- Adiciona embeds no corpo da matéria AMP
- Habilitar os headings H2, H3 e o H4 no TextBody
- (WIP) Desenvolver módulo Article com suporte ao Amp 
- Criar um componente Dialog para servir ao banner LGPD 
- Adiciona forwardRef no componente Field
- Ajustes no layout responsivo e prop onEnterKey 
# v1.5.4 
- Breaking Change: Adiciona forwardRef no componente Field
- Adiciona prop Size no componente Field
# v1.4.90
- Permite execução da função onEnterKey mediante a presença de uma função na prop
# v1.4.89
- Corrige layout responsivo no Field
- Remove listener no window e adiciona onKeyPress react para o clique na tecla enter em Field
# v1.4.88
- Adiciona parseFontSize no field
- Adiciona prop placeholderColor no Field
- Adiciona listener para a tecla enter no Field
# v1.4.87
- Adiciona testes unitários
- Novas styled functions padding, dimensions e border
- Adiciona dimensions, padding e border no Typography
# v1.4.86
- Ajuste nas peer-dependencies
# v1.4.85
- Ajuste na prop dangerouslySetInnerHTML do Block e Typography
- Adiciona default prop para transform em Typography
# v1.4.84
- Adiciona props dangerouslySetInnerHTML no Block e Typography
- Corrige layout da FieldMessage no Field
# v1.4.83
- Corrige onChange no Field
- Adiciona react-input-mask@next como peer-dependency
# v1.4.79
- Atualiza documentação do Field
# v1.4.78
- Adiciona prop className no Block
- Remove espaçamentos padrão do componente Typography
# v1.4.77
- Adiciona export do Typography no index
# v1.4.76
- Adiciona props de cor no Typography
# v1.4.75
- Remove módulo Typography do DS
- Remove componente Teaser
- Adiciona componente Typography
- Ajuste fino no responsivo da prop variant no Button
# v1.4.72
- Remove px e py do SideMenu
# v1.4.71
- Altera comportamento para SideMenu no mobile (abaixo de md o width é 100%)
# v1.4.70
- Adiciona prop type no Button
- Adiciona prop name no Field
- Corrige itinerant props para o Subject
# v1.4.69
- Adiciona props id no componente Button, Block e MenuItem
# v1.4.68
- Corrige itinerant props no Button
- Corrige fontFamily
# v1.4.67
- Corrige comportamento incorreto na props fontFamily do Button
- Adiciona props custom no Button
# v1.4.66
- DefaultProps de fontFamily passa a ser 'secondary' no componente Button
# v1.4.65
- Adiciona props `on` e `id` no Field
- Props marginTop, marginBottom, marginLeft, marginRight passam a ser mt, mb, ml e mr no Field
# v1.4.64
- Corrige comportamento incorreto nas props responsivas do Block
# v1.4.63
- Adiciona prop fontSize no Button
# v1.4.62
- Corrige comportamento incorreto do fontWeight no Button (só funciona quando queries não são utilizadas)
# v1.4.61
- Ajustes finos em alguns parseProps
- Adiciona prop fontWeight no Button
# v1.4.57
- Remove parseAlign e parseRender do theme (ficarão somente no Block)
- Altera ordem dos parâmetros nas funções de parse (props, theme)
- Adiciona ifs para verificação dos valores nas funções de parse
- Troca função theme.parseColorValue para theme.parseColor
- Adiciona mais um parâmetro na função parseColor [(props, theme, propName')]
- Refatora módulo dimension do componente Block
  > Nova props fullWidth (calcula automaticamente o width final caso exista padding)
  > Nova props fullHeight
  > Corrige erro das props repassadas para o elemento HTML
  > Adiciona props itinerant props $width e $height
- Ajustes finos no componente Button:
  > Remover elemento span quando children não for string
  > Refatora parseProps para melhor desempenho
  > Permite usar py no Button
  > Permite usar px e py nas queries do Button
  > Corrige comportamento incorreto no removeText (leitura incorreta das props no getProps e estilo faltando display: inline no span)
# v1.4.56
- Corrige inconsistência no SideMenu
# v1.4.55
- Corrige comportamento incorreto das cores no Button
# v1.4.53
- Adiciona queries no Button
- Props buttonWidth passa a ser width
- Valor de radius 0 passa a ser String unset
- Adiciona props fontFamily no Button
# v1.4.51
- Fix nos buttons
# v1.4.5
- Remove os exports de: 
  export {default as SearchForm} from './Menus/SearchForm';
  export {default as SearchMenu} from './Menus/Search';
  export {default as SideMenu} from './Menus/SideMenu';
  export {default as SideMenuItems} from './Menus/SideItems';
- Novo componente SideMenu
- Refatora componente Button
- Novo componente AMP/Button
- Refatora componente MenuItem
- Refatora componente Subject

# v1.4.4
- Adiciona componente Blocks styled-components
- Documentação do Blocks
- Adiciona theme
- Adiciona lógica de parseamento dos tokens dentro do theme
# v1.4.2
- Corrige funcionamento dos tamanhos de margin na função getFromProps
- Export da pasta Util passou a ser import from prensa/utils
# v1.4.1
- Adiciona loading no componente Button
- Adiciona função para parse do label no Field
- Adiciona listener para teclas no Button
# v1.4.0
- Adiciona styled-components no Prensa
- Adiciona componente Field

# v1.3.8
- Refatora template Gridnews (Prensa-Templates-Gridnews)
- Refatora template Featured (Prensa-Templates-Featured)
- Refatora template Subjects (Prensa-Templates-Subjects)
- Refatora template Latest (Prensa-Templates-LatestNews)
- Adiciona props customizáveis para o teaser no Gridnews
- Adiciona props customizáveis para o teaser no Featured
- Adiciona props customizáveis para o teaser no Subjects
- Adiciona props customizáveis para o teaser no LatestNews


# v1.3.7
- Adiciona novo template 7030
- Adiciona customização do componente SectionTitle no 7030
- Adiciona props customizáveis para o teaser no 7030
- Novo padrão de class para o nome dos templates (Prensa-Templates-...)

# v1.3.5 (Mon Sep 7 2020)
- Remove componente Grid
- Altera posição de alguns includes
- Altera valores da prop bg no Block
- Altera prop color para fc no Block
- Remove tokens: 
  $q-xs: 360px;
  $q-sm: 560px;
  $q-md: 768px;
  $q-lg: 980px;
  $q-xl: 1120px;

# v1.3.4 (Sun Sep 6 2020)
- Adiciona embed do google Forms

# v1.3.3 (Mon Ago 31 2020)
- Adiciona componente AdBlock
- Adiciona componente Button
- Adiciona template Column
- Adiciona tratamento para as imagens com lazy-load e background
- Adiciona componente de galeria de imagem
- Adiciona utils para tratamento de data
- Adiciona os templates: Columnist, Featured, GridNews, Latest, MostRead, Related
- Ajustes finos no Article e seus filhos
- Ajustes finos no Block
- Corrige inconsistência ao abrir e fechar menus
- Ajustes finos de layout no SocialMedia, SectionTitle e Tags
- Refatora componente Teaser (serve para todos os teasers)
- Remove o componente TeaserFeatured
- Remove o template ListNews

- Adiciona os tokens:
  $column-header-title-fc: $color-neutral-2;
  $column-header-title-ff: $font-primary;
  $column-header-title-size: 24px;
  $column-header-title-height: 28px;
  $column-header-title-size--lg: 32px;
  $column-header-title-height--lg: 36px;
  $column-header-subtitle-fc: $color-neutral-4;
  $column-header-subtitle-ff: $font-secondary;
  $column-header-subtitle-size: 16px;
  $column-header-subtitle-height: 22px;
  $searchmenu-width: 70% !default; 
  $sidemenu-width: 70% !default;
  $teaser-title-color: $color-neutral-2;
  $teaser-subtitle-color: $color-neutral-4;
  $teaser-subtitle-family: $font-secondary;
  $teaser-subtitle-height: 28px;
  $teaser-subtitle-size: 20px;
  $newsgrid-1-teaser-title-height: 28px;
  $newsgrid-1-teaser-title-size: 24px;
  $newsgrid-1-teaser-title-height--lg: 36px;
  $newsgrid-1-teaser-title-size--lg: 32px;
  $newsgrid-2-teaser-title-height: 28px;
  $newsgrid-2-teaser-title-size: 24px;
  $newsgrid-1-teaser-image-height: 246px;
  $newsgrid-1-teaser-image-height--lg: 296px;
  $newsgrid-2-teaser-image-height: 164px;
  $newsgrid-2-teaser-image-height--lg: 140px;
  $latest-1-teaser-image-height: 210px;
  $latest-1-teaser-image-width: 280px;
  $color-subject-black: #080808; 
  $color-subject-blue: #0975B7;
  $color-subject-green: #09B77B; 
  $color-subject-red: #AB001B; 
  $color-subject-yellow: #BFA525;
  $article-title-intro-fc: #ffffff;
  $article-title-intro-fs: 44px !default;
  $article-title-intro-lh: 48px !default;
  $article-title-intro-fs-lg: 62px !default;
  $article-title-intro-lh-lg: 66px !default;
  $article-title-intro-ff: $font-primary !default;
  $article-subtitle-intro-fc: #ffffff;
  $article-subtitle-fs-lg: 20px !default;
  $article-subtitle-lh-lg: 28px !default;
  $article-subtitle-intro-fs: 16px !default;
  $article-subtitle-intro-lh: 22px !default;
  $article-subtitle-intro-fs-lg: 20px !default;
  $article-subtitle-intro-lh-lg: 28px !default;
  $article-subtitle-intro-ff: $font-primary !default;
  $image-gallery-name-fs: 24px !default;
  $image-gallery-name-lh: 28px !default;
  $image-gallery-lead-fs: 16px !default;
  $image-gallery-lead-lh: 22px !default;

- Remove os tokens:
  $newsgrid-2-teaser-title-height: 28px;	
  $newsgrid-2-teaser-title-size: 24px;	
  $newsgrid-1-teaser-image-height: 192px;	
  $newsgrid-1-teaser-image-height--lg: 192px;	
  $newsgrid-2-teaser-image-height: 164px;	
  $newsgrid-2-teaser-image-height--lg: 140px;	
  $listnews-1-teaser-image-height: 210px;

# v1.3.2 (Thu Ago 06 2020)
- Adiciona módulo de ícones
- Adiciona SVGR-cli
- Adiciona comandos no husky para renderização de componentes dos ícones

# v1.3.1 (Mon Jul 29 2020)
- Upgrade nos Templates
- Upgrade nos Teasers

# v1.3.0 (Fri Jul 10 2020)
- Updates no componente Article
- Remove prefixo xp dos tokens
- Remove projeto exemplo
- Remove componente Panel
- Upgrade no Article component
- Upgrade no Block component
- Upgrade no Image component
- Upgrade no Navigator
- Upgrade no NewsList
- Upgrade no Teaser-default
- Permite custom class no Button

# v1.2.1 (Sun Jun 29 2020)
- Adiciona Templates
- Adiciona Teasers
- Adiciona Block
- Adiciona Article
- Adiciona Grid
- Adiciona folder navigator com o SideMenu e TopBar
- Adiciona componente Subject
- Adiciona componente Typography
- Separa build do rollup em três paths: xprog-ds/ xprog-ds/templates xprog-ds/teasers
- Atualiza readme com novo passo para uso nos projetos
- Atualiza .ignores
- Remove componente Icon

# v1.2.0 (Sun Jun 02 2020)
- Add storybook
- Change grayscale colors to neutral

# v1.1.7 (Sun May 16 2020)
- Added alignments classes

# v1.1.6 (Sun May 03 2020)
- Added module wireframes

# v1.1.0 (Sun Apr 06 2020)
- Installed rollup-plugins

# v1.0.2 (Sun Mar 29 2020)
- Corrige diretório incorreto

# v1.0.1 (Sun Mar 29 2020)
- Merge branch 'develop'

#### Authors: 2

- Fernando Bombassaro (fernando.bombassaro@gmail.com)
- Giovanni Bombassaro (giovanni.bombassaro@gmail.com)