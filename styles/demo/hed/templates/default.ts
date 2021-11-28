export const TEMPLATES_DEFAULT = {
  slot100: {
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_default', 'teaser_default'],
      3: ['teaser_image_top_medium', 'teaser_image_top_medium', 'teaser_image_top_medium'],
      4: ['teaser_image_top_small', 'teaser_image_top_small', 'teaser_image_top_small', 'teaser_image_top_small'],
    },
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    spaces: [0, 1, 2, 3],
    space_bottom: ['0px', '0px']
  },
  slot70: {
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_image_top_medium', 'teaser_image_top_medium'],
      3: ['teaser_image_top_large', 'teaser_image_top_large', 'teaser_image_top_large'],
      4: ['teaser_image_medium', 'teaser_image_medium', 'teaser_image_medium', 'teaser_image_medium'],
    },
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    spaces: [0, 1, 2, 1],
    space_bottom: ['0px', '0px']
  },
  slot50: {
    layout: {
      0: ['teaser_default'],
      1: ['teaser_default'],
      2: ['teaser_image_top_medium', 'teaser_image_top_medium'],
      3: ['teaser_image_top_large', 'teaser_image_top_large', 'teaser_image_top_large'],
      4: ['teaser_image_top_xsmall', 'teaser_image_top_xsmall', 'teaser_image_top_xsmall', 'teaser_image_top_xsmall'],
    },
    min_height: ['auto', '350px'],
    spaces: [0, 1, 2, 1],
    space_bottom: ['0px', '0px']
  },
  slot30: {
    layout: {
      0: ['teaser_image_top_large'],
      1: ['teaser_image_top_large'],
      2: ['teaser_image_top_medium', 'teaser_image_small'],
      3: ['teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
      4: ['teaser_image_top_medium', 'teaser_image_small', 'teaser_image_small', 'teaser_image_small'],
    },
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    spaces: [0, 0, 0, 0],
    space_bottom: [1, 2]
  }
}