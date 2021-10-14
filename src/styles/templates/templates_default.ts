import { CreateTemplate } from './createFunction'

export const TEMPLATES_DEFAULT = CreateTemplate({
  slot100: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_default', 'teaser_default'],
      3: ['teaser_default', 'teaser_default', 'teaser_default'],
      4: ['teaser_default', 'teaser_default', 'teaser_default', 'teaser_default'],
    },
    spaces: [0, 1, 2, 3],
  },
  
  slot70: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_image_top', 'teaser_image_top'],
      3: ['teaser_image_top', 'teaser_image_top', 'teaser_image_top'],
      4: ['teaser_image_medium', 'teaser_image_medium', 'teaser_image_medium', 'teaser_image_medium'],
    },
    spaces: [0, 1, 2, 1],
  },
  slot50: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_image_top_medium', 'teaser_image_top_medium'],
      3: ['teaser_image_top_large', 'teaser_image_top_large', 'teaser_image_top_large'],
      4: ['teaser_image_top_small', 'teaser_image_top_small', 'teaser_image_top_small', 'teaser_image_top_small'],
    },
    spaces: [0, 1, 2, 1],
  },
  slot30: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_image_top'],
      1: ['teaser_image_top'],
      2: ['teaser_image_small', 'teaser_image_small'],
      3: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
      4: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
    },
    spaces: [0, 0, 0, 0],
  }
})