import { CreateTheme } from 'prensa'

import { SECTION_TITLE } from './section_title'
import { teasers } from './teasers'
import { templates } from './templates'
import {
  APP_FONT_TOKENS,
  CORREIO_COLOR_TOKENS
} from './tokens'
import { CORREIO_TOPBAR_LOGO } from './topbar'

export const correio_theme = CreateTheme({
  colors: CORREIO_COLOR_TOKENS,
  fonts: APP_FONT_TOKENS,
  section_title: SECTION_TITLE,
  teasers,
  templates,
  topbar: {
    logo: CORREIO_TOPBAR_LOGO
  }
})