import { CreateTemplate } from '../../../templates'

export const TEMPLATE_DEFAULT = CreateTemplate({
  slot30: {
    layout: {
      0: ['default'],
      1: ['big']
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
    spaces: [3],
    space_bottom: [1, 1],
  }
})