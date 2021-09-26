import { LayoutProps } from '../components/Teaser'
import { merge } from 'lodash'
import { default_theme } from './default'

export type TeaserTypes = {
  featured: LayoutProps;
  featured_related: LayoutProps;
  image_carousel: LayoutProps;
  image_featured: LayoutProps;
  image_four: LayoutProps;
  image_three: LayoutProps;
  image_top: LayoutProps;
  image_two: LayoutProps;
  image_large_left: LayoutProps;
  image_small_left: LayoutProps;
  mostread: LayoutProps;
}

export type ThemeTypes = {
  colors?: object;
  fonts?: object;
  factors?: object;
  queries?: object;
  radius?: object;
  teasers?: TeaserTypes;
}

/**
 * CreateTheme function docs
 * @param {object} data - An object that defines/overrides properties in theme
 */
export function CreateTheme(data: ThemeTypes) {
  return merge(default_theme, data)
}

export const theme = CreateTheme({});