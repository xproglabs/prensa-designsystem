import { theme as default_theme } from '../../theme'
import { HED_COLORS } from './colors'
import { icons } from './icons'
import { SECTION_TITLE } from './section_title'
import { teasers } from './teasers'
import { templates } from './templates'

export const theme = {
  ...default_theme,
  colors: HED_COLORS,
  fonts: {
    primary: 'Lato',
    secondary: 'Lato'
  },
  section_title: SECTION_TITLE,
  templates,
  teasers,
  icons
}