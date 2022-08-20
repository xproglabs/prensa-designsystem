export const TEMPLATES_FEATURED_TOP = {
  slot100: {
    layout: {
      0: ['news_default']
    },
    min_height: ['auto', '368px'],
    related: {
      enabled: false
    },
    spaces: [0, 1, 2, 3],
    space_bottom: ['0px', '0px']
  },
  slot70: {
    layout: {
      0: ['news_default'],
    },
    min_height: ['auto', '368px'],
    related: {
      enabled: false
    },
    spaces: [0, 1, 2, 1],
    space_bottom: ['0px', '0px']
  },
  slot30: {
    related: {
      enabled: false
    },
    layout: {
      0: ['news_right_right'],
      1: ['news_top_top'],
      2: ['news_right_right', 'news_right_right'],
      3: ['news_right_right', 'news_right_right', 'news_right_right'],
      4: ['news_right_right', 'news_right_right', 'news_right_right', 'news_right_right'],
    },
    spaces: [0, 0, 0, 0],
    space_bottom: [1, 2],
    space_bottom_column: [2, 1]
  }
}