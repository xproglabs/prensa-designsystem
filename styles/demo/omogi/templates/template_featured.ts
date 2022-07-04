import { CreateTemplate } from '../../../templates'

export const TEMPLATE_FEATURED = CreateTemplate({
  slot30: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['default'],
      1: ['featured'],
      2: ['big', 'default'],
    },
    spaces: [0, 0, 0, 0],
    space_bottom: [1, 1]
  },
  slot70: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['featured'],
    },
    spaces: [0],
    space_bottom: [1, 1]
  },
  slot100: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['featured'],
    },
    spaces: [0],
    space_bottom: [1, 1]
  }
})