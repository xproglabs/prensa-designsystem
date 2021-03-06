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
