import { theme as default_theme } from '../../theme'
import { HED_COLORS } from './colors'
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
  icons: {
    'icon_info': `
      <path d="M0 0h24v24H0V0z" fill="none"></path>
      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    `,
    'icon_done': `
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
    `,
  },
  templates,
  teasers
}