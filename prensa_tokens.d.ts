/** 
 * Autosuggestion types
 */
type ColorTokens =
  'primary1' |
  'primary2' |
  'primary3' |
  'secondary1' |
  'secondary2' |
  'secondary3' |
  'primary2'

type FontTokens =
  'primary' | 'secondary'

type QuerieTokens =
  'xs' | 'sm' | 'md' | 'lg' | 'xl'

type RadiusTokens =
  'unset' | 'default' | 'alternative'

type TeaserCartridges =
  'default'

type TemplateCartridges =
  'default'

type IconTokens = 
 'icon_info' | 
 'icon_done'

/**
 * Public types that are providing typing and autosuggestion to all components (can be rewritten in frontend)
 */
export type Colors = {
  [key in ColorTokens]: string;
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

export type Factors = {
  dimensions: number;
  padding: number;
  margin: number;
}
