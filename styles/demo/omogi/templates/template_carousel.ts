import { CreateTemplate } from 'prensa'

export const TEMPLATE_CAROUSEL = CreateTemplate({
  slot30: {
    autoplay: '',
    delay: '6000',
    layout: {
      0: ['hide'],
      1: ['featured'],
      2: ['featured', 'featured'],
      3: ['featured', 'featured', 'featured'],
      4: ['featured', 'featured', 'featured', 'featured'],
    },
    min_height: ['auto', '350px'],
    related: {
      enabled: false
    },
    spaces: [0, 0, 0, 0],
  }
})