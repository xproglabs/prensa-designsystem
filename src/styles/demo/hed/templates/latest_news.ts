export const TEMPLATE_LATEST_NEWS = {
  slot100: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_latest'],
      1: ['teaser_latest'],
      2: ['teaser_latest', 'teaser_latest'],
      3: ['teaser_latest', 'teaser_latest', 'teaser_latest'],
      4: ['teaser_latest', 'teaser_latest', 'teaser_latest', 'teaser_latest'],
    },
    spaces: [0, 1, 2, 3],
  },
  slot70: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_latest']
    },
    spaces: false,
  },
  slot30: {
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_image_top_large'],
      1: ['teaser_image_small'],
      2: ['teaser_image_small', 'teaser_image_small'],
      3: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
      4: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
    },
    spaces: [0, 0, 0, 0],
  }
}