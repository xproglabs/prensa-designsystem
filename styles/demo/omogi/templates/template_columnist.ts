import { CreateTemplate } from '../../../templates'

export const TEMPLATE_COLUMNIST = CreateTemplate({
  slot30: {
    layout: {
      0: ['default'],
      1: ['big'],
      2: ['big', 'default'],
      3: ['default'],
      4: ['default'],
    },
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    spaces: [0, 0, 0, 0],
    space_bottom: [1, 1],
  },
  slot70: {
    layout: {
      0: ['default']
    },
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    spaces: [2],
    space_bottom: [1, 1],
  },
  slot100: {
    layout: {
      0: ['default']
    },
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    spaces: [2],
    space_bottom: [1, 1],
  }
})