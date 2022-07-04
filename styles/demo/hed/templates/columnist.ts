import { CreateTemplate } from '../../../templates'

export const TEMPLATE_COLUMNIST = CreateTemplate({
  slot100: {
    layout: {
      0: ['teaser_image_circle']
    },
    min_height: ['auto', '350px'],
    spaces: [3]
  },
  slot70: {
    layout: {
      0: ['teaser_image_circle']
    },
    min_height: ['auto', '350px'],
    spaces: [1]
  },
  slot30: {
    layout: {
      0: ['teaser_image_circle']
    },
    min_height: ['auto', '350px'],
    spaces: [0]
  }
})