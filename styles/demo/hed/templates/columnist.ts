import { CreateTemplate } from 'prensa'

export const TEMPLATE_COLUMNIST = CreateTemplate({
  slotWrap: {
    layout: {
      0: ['teaser_image_circle'],
      1: ['teaser_image_circle'],
      2: ['teaser_image_circle', 'teaser_image_circle'],
      3: ['teaser_image_circle', 'teaser_image_circle', 'teaser_image_circle'],
      4: ['teaser_image_circle', 'teaser_image_circle', 'teaser_image_circle', 'teaser_image_circle']
    },
    min_height: ['auto', '350px'],
    spaces: [3, 3, 3, 3]
  }
})