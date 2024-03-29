import { Colors, Fonts, Factors, Queries, Radius, Teasers, Templates } from '@prensa_tokens'
import merge from 'lodash/merge'

import { default_theme } from './default_theme'

export interface ThemeTypes {
  colors: Colors;
  fonts: Fonts;
  factors: Factors;
  queries: Queries;
  radius: Radius;
  teasers: Teasers;
  templates: Templates;
}

/**
 * CreateTheme function docs
 * @param {object} data - An object that defines/overrides properties in theme
 */
export function CreateTheme(data: ThemeTypes | Object) {
  return merge(default_theme, data)
}

export const theme = CreateTheme({})