import { CreateTemplate } from 'prensa'

export const TEMPLATE_FEATURED = CreateTemplate({
  slot30: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      1: ['featured']
    },
    spaces: [0, 0, 0, 0]
  },
  slot70: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      1: ['featured']
    },
    spaces: [0, 0, 0, 0]
  },
  slot100: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      1: ['featured']
    },
    spaces: [0, 0, 0, 0]
  }
})