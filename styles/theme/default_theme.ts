
//TODO: Move parsers to styled-system
import { ICONS } from '../icons'
import { parseColor, parseBgColor, parseFontColor } from '../parsers/parseColors'
import { parseCustom, parseCustomDef } from '../parsers/parseCustom'
import { parseFontFamily } from '../parsers/parseFontFamily'
import { parseMargin } from '../parsers/parseMargin'
import { parsePadding } from '../parsers/parsePadding'
import { parseRadius } from '../parsers/parseRadius'

export const default_theme = {
  fonts: {
    primary: 'Work Sans',
    secondary: 'Nunito Sans'
  },
  factors: {
    dimensions: 10,
    padding: 8,
    margin: 8,
  },
  icons: ICONS,
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  },
  radius: {
    unset: '0px',
    default: '3px',
    alternative: '5px',
    rounded: '99px',
    circle: '50%'
  },
  teasers: {},
  templates: {},
  parseBgColor,
  parseCustom,
  parseCustomDef,
  parseFontColor,
  parseFontFamily,
  parseMargin,
  parsePadding,
  parseRadius,
  parseColor,
}