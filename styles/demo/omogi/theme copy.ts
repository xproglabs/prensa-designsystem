import { CreateTheme } from 'prensa'
import { TOPBAR_BRAND } from 'styles/topbar'
import { MOGI_COLORS } from 'styles/colors'
import { teasers } from 'styles/teasers'
import { templates } from 'styles/templates'

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
  templates
})