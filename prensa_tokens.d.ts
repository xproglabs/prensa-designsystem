/** 
 * PRENSA TOKEN TYPES
 * 
 * Types for Prensa Token Language.
 * This file is a default model.
 * You can rewrite tokens values inside each type entity for customized use!
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
  'default' 

type TemplateCartridges =
  'default'

type IconTokens =
  'IconMenu'

/**
 * PRENSA THEME TYPES
 * 
 * Types for Prensa theme properties.
 * This file is a default model.
 * You can rewrite properties inside of IPrensaTheme interfaces for customized use!
 */
export type IPrensaThemeColors = {
  [key in ColorTokens]: string;
}
export type IPrensaThemeFactors = {
  dimensions?: number;
  fontSize?: number;
  lineHeight?: number;
  letterSpacing?: number;
  margin?: number;
  padding?: number;
}
export type IPrensaThemeFonts = {
  [key in FontTokens]: string;
}
export type IPrensaThemeQueries = {
  [key in QuerieTokens]: string;
}
export type IPrensaThemeRadius = {
  [key in RadiusTokens]: string;
}
export type IPrensaThemeTeasers = {
  [key in TeaserCartridges];
}
export type IPrensaThemeTemplates = {
  [key in TemplateCartridges];
}
export interface IPrensaThemeProps {
  fonts?: IPrensaThemeFonts;
  factors?: IPrensaThemeFactors;
  queries?: IPrensaThemeQueries;
  radius?: IPrensaThemeRadius;
  teasers?: IPrensaThemeTeasers;
  templates?: IPrensaThemeTemplates;
}