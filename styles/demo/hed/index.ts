import { theme } from 'prensa'

import { icons } from './icons'
import {
  HED_FOOTER_LOGO,
  DISTRIBUTION_COPYRIGHT,
  ITEMS_HED_COPYRIGHT,
  ITEMS_HED_LEFT,
  ITEMS_HED_RIGHT,
} from './layouts/footer'
import { HED_SIDEMENU_LOGO } from './layouts/sidemenu'
import { SOCIAL_MEDIAS_HED } from './layouts/social_medias'
import { HED_BUTTON_DAY_EDITION, HED_TOPBAR_LOGO } from './layouts/topbar'
import { SECTION_TITLE_DEFAULT } from './section_title'
import { teasers } from './teasers'
import { templates } from './templates'
import { HED_COLORS } from './tokens/colors'

export const hojeemdia_theme = {
  ...theme,
  colors: HED_COLORS,
  fonts: {
    primary: 'Lato',
    secondary: 'Lato'
  },
  teasers,
  templates,
  icons,

  /**
   * config dos componentes
   */
  footer: {
    distribution_copyright: DISTRIBUTION_COPYRIGHT,
    items_copyright: ITEMS_HED_COPYRIGHT,
    items_left: ITEMS_HED_LEFT,
    items_right: ITEMS_HED_RIGHT,
    logo: HED_FOOTER_LOGO,
  },
  section_title: SECTION_TITLE_DEFAULT,
  sidemenu: {
    logo: HED_SIDEMENU_LOGO
  },
  social_medias: {
    items: SOCIAL_MEDIAS_HED
  },
  topbar: {
    buttons: {
      button_day_edition: HED_BUTTON_DAY_EDITION
    },
    logo: HED_TOPBAR_LOGO,
  }
}