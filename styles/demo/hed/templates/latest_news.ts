import { CreateTemplate } from 'prensa'

export const TEMPLATE_LATEST_NEWS = CreateTemplate({
  slot70: {
    min_height: ['auto', 'auto'],
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_latest'],
    },
    more_button: {
      color: 'black',
      border: 'black',
      variant: 'filled'
    },
    spaces: [0, 0, 0, 0]
  },
  slot30: {
    min_height: ['auto', 'auto'],
    related: {
      enabled: false
    },
    layout: {
      0: ['teaser_latest']
    },
    spaces: [0, 0, 0, 0]
  }
})