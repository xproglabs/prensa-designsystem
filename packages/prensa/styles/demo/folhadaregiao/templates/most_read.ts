import { CreateTemplate } from 'prensa'

export const TEMPLATES_MOST_READ = CreateTemplate({
  slot70: {
    min_height: ['auto', '500px'],
    related: {
      enabled: false
    },
    layout: {
      0: ['news_right_left']
    },
    more_button: {
      color: 'primary_main',
      fontSize: 14,
      border: 'primary_main',
      variant: 'filled',
      width: '100%'
    },
    spaces: [0, 1, 2, 1],
    space_bottom: [1, 1]
  },
  slot30: {
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    layout: {
      0: ['news_most_read']
    },
    spaces: [0, 0, 0, 0],
    space_bottom: [1, 1]
  }
})