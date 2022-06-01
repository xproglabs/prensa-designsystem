/** 
 * Autosuggestion types
 */
type ColorTokens =
  'primary1' |
  'primary2' |
  'primary3' |
  'primary_main' |
  'primary_dark' |
  'primary_light' |
  'secondary1' |
  'secondary2' |
  'secondary3' |
  'secondary_main' |
  'secondary_dark' |
  'secondary_light' |
  'black' |
  'neutral1' |
  'neutral2' |
  'neutral3' |
  'neutral4' |
  'neutral5' |
  'neutral6' |
  'neutral7' |
  'neutral8' |
  'neutral9' |
  'neutral10' |
  'neutral11' |
  'white'

type FontTokens =
  'primary' | 'secondary'

type QuerieTokens =
  'xs' | 'sm' | 'md' | 'lg' | 'xl'

type RadiusTokens =
  'unset' | 'default' | 'alternative' | 'rounded' | 'circle'

type TeaserCartridges =
  'default' | 'news_background' | 'news_most_read' | 'news_right_left' | 'news_right_right' | 'news_right_top' | 'news_top_top'


type TemplateCartridges =
  'default'

type IconTokens =
  'IconMenu'

/**
 * Public types that are providing typing and autosuggestion to all components (can be rewritten in frontend)
 */
export type Colors = {
  [key in ColorTokens]: string;
}

export type Factors = {
  dimensions: number;
  padding: number;
  margin: number;
}

export type Fonts = {
  [key in FontTokens]: string;
}

export type Queries = {
  [key in QuerieTokens]: string;
}

export type Radius = {
  [key in RadiusTokens]: string;
}

export type Teasers = {
  [key in TeaserCartridges];
}

export type Templates = {
  [key in TemplateCartridges];
}