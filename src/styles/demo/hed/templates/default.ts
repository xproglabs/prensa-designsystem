export const TEMPLATES_DEFAULT = {
  slot100: {
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_default', 'teaser_default'],
      3: ['teaser_image_top_medium', 'teaser_image_top_medium', 'teaser_image_top_medium'],
      4: ['teaser_image_top_small', 'teaser_image_top_small', 'teaser_image_top_small', 'teaser_image_top_small'],
    },
    spaces: [0, 1, 2, 3],
  },
  slot70: {
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_image_top_medium', 'teaser_image_top_medium'],
      3: ['teaser_image_top_large', 'teaser_image_top_large', 'teaser_image_top_large'],
      4: ['teaser_image_medium', 'teaser_image_medium', 'teaser_image_medium', 'teaser_image_medium'],
    },
    spaces: [0, 1, 2, 1],
  },
  slot50: {
    min_height: ['auto', '350px'],
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_image_top_medium', 'teaser_image_top_medium'],
      3: ['teaser_image_top_large', 'teaser_image_top_large', 'teaser_image_top_large'],
      4: ['teaser_image_top_xsmall', 'teaser_image_top_xsmall', 'teaser_image_top_xsmall', 'teaser_image_top_xsmall'],
    },
    spaces: [0, 1, 2, 1],
  },
  slot30: {
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_image_top_large'],
      1: ['teaser_image_top_large'],
      2: ['teaser_image_top_medium', 'teaser_image_small'],
      3: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
      4: ['teaser_image_top_medium', 'teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
    },
    spaces: [0, 0, 0, 0],
  },
  slotWrap: {
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_image_circle'],
      1: ['teaser_image_circle'],
      2: ['teaser_image_circle', 'teaser_image_circle'],
      3: ['teaser_image_circle', 'teaser_image_circle', 'teaser_image_circle'],
      4: ['teaser_image_circle', 'teaser_image_circle', 'teaser_image_circle', 'teaser_image_circle'],
    },
    spaces: [3, 3, 3, 3],
  }
}