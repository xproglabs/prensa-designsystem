import { MOGI_COLORS } from './colors'
import { teasers } from './teasers'
import { templates } from './templates'
import { SECTION_TITLE } from './titles'
import { TOPBAR_BRAND } from './topbar'
import { CreateTheme } from '../../theme'

export const theme = CreateTheme({
  buttons: {
    size: '40px'
  },
  colors: MOGI_COLORS,
  fonts: {
    primary: 'PT Sans',
    secondary: 'Nunito Sans'
  },
  topbar: {
    height: '70px',
    brand: TOPBAR_BRAND
  },
  teasers,
  templates,
  section_title: SECTION_TITLE,
})