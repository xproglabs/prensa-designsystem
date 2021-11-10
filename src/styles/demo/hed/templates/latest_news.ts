import { CreateTemplate } from 'prensa'

export const TEMPLATE_LATEST_NEWS = CreateTemplate({
  slot70: {
    related: {
      enabled: false
    },
    layout: {
      0: ['hide'],
      1: ['teaser_latest'],
      2: ['teaser_latest', 'teaser_latest'],
      3: ['teaser_latest', 'teaser_latest', 'teaser_latest'],
      4: ['teaser_latest', 'teaser_latest', 'teaser_latest', 'teaser_latest'],
    },
    spaces: [0, 0, 0, 0]
  },
  slot30: {
    related: {
      enabled: false
    },
    layout: {
      0: ['hide'],
      1: ['teaser_image_small'],
      2: ['teaser_image_small', 'teaser_image_small'],
      3: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
      4: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
    },
    spaces: [0, 0, 0, 0]
  }
})