import { theme as default_theme } from '../../theme'
import { HED_COLORS } from './colors'
import { SECTION_TITLE } from './section_title'
import { teasers } from './teasers'
import { templates } from './templates'
import { icons } from './icons'

export const theme = {
  ...default_theme,
  colors: HED_COLORS,
  domain: 'http://177.107.132.35:3000',
  fonts: {
    primary: 'Lato',
    secondary: 'Lato'
  },
  section_title: SECTION_TITLE,
  templates,
  teasers,
  icons
}