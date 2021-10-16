import { merge } from 'lodash'

import { LayoutProps } from '../components/Teaser/types'
import { default_theme } from './default'

export type TeaserTypes = {
  teaser_default?: LayoutProps;
}

export type TemplatesTypes = {
  default?: Object;  
}

export type ThemeTypes = {
  colors?: Object;
  fonts?: Object;
  factors?: Object;
  queries?: Object;
  radius?: Object;
  teasers?: TeaserTypes;
  templates?: TemplatesTypes;
}

/**
 * CreateTheme function docs
 * @param {object} data - An object that defines/overrides properties in theme
 */
export function CreateTheme(data: ThemeTypes) {
  return merge(default_theme, data)
}

export const theme = CreateTheme({})