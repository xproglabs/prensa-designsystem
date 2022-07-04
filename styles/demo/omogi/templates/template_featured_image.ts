import { CreateTemplate } from '../../../templates'

export const TEMPLATE_FEATURED_IMAGE = CreateTemplate({
  slot70: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['default'],
      1: ['default'],
      2: ['default', 'hide'],
      3: ['default', 'hide', 'hide'],
      4: ['default', 'hide', 'hide', 'hide']
    },
    spaces: [0, 0, 0, 0]
  },
  slot30: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['default'],
      1: ['default'],
      2: ['default', 'hide'],
      3: ['default', 'hide', 'hide'],
      4: ['default', 'hide', 'hide', 'hide']
    },
    spaces: [0, 0, 0, 0]
  }
})