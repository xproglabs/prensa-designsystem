import { CreateTemplate } from 'prensa'

export const TEMPLATE_LATEST_NEWS = CreateTemplate({
  slot70: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_latest']
    },
    spaces: [0, 0, 0, 0]
  },
  slot30: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_image_small']
    },
    spaces: [0, 0, 0, 0],
  }
})