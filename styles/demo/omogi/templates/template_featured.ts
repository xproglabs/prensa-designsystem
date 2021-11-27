import { CreateTemplate } from 'prensa'

export const TEMPLATE_FEATURED = CreateTemplate({
  slot30: {
    related: {
      enabled: false
    },
    min_height: ['auto', 'auto'],
    layout: {
      0: ['hide'],
      1: ['default'],
      2: ['default', 'default'],
      3: ['default', 'default', 'default'],
      4: ['hide', 'hide', 'hide', 'hide'],
    },
    spaces: [0, 0, 0, 0]
  }
})