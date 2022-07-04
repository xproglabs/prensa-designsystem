import { CreateTemplate } from '../../../templates'

export const TEMPLATE_LIST = CreateTemplate({
  slot100: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['default'],
      1: ['default'],
      2: ['default', 'default'],
      3: ['default', 'default', 'default'],
      4: ['default', 'default', 'default', 'default'],
    },
    spaces: [0, 1, 2, 3],
  },
  slot70: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['default'],
      1: ['default'],
      2: ['default', 'default'],
      3: ['default', 'default', 'default'],
      4: ['default', 'default', 'default', 'default'],
    },
    spaces: [0, 1, 2, 1],
  },
  slot30: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['default'],
      1: ['default'],
      2: ['default', 'default'],
      3: ['default', 'default', 'default'],
      4: ['default', 'default', 'default', 'default'],
    },
    spaces: [0, 0, 0, 0],
  }
})