import { SECTION_TITLE_DEFAULT } from './section_title'
import { teasers } from './teasers'
import { templates } from './templates'
import { FR_COLORS } from './tokens/colors'
import { theme } from '../../theme'

export const folhadaregiao_theme = {
  ...theme,
  colors: FR_COLORS,
  fonts: {
    primary: 'Gelasio',
    secondary: 'Open Sans'
  },
  section_title: SECTION_TITLE_DEFAULT,
  teasers,
  templates
}