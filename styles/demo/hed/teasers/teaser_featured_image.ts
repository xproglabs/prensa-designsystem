import { CreateTeaser } from 'prensa'

import { SUBJECT_FILLED } from '../tokens/subject'

export const TEASER_FEATURED_IMAGE = CreateTeaser({
  box: {
    aligny: ['bottom', 'bottom'],
    height: ['300px', '396px']
  },
  box_wrap: {
    aligny: ['bottom', 'bottom'],
    content_overlap: true,
    height: ['300px', '396px'],
    ml: [2, 3],
    mr: [2, 3],
    mb: [2, 3],
    mt: ['-300px', '-396px'],
    width: ['calc(100% - 32px)', 'calc(100% - 48px)']
  },
  date_time: {
    enabled: true,
    color: 'white'
  },
  image: {
    enabled: true,
    dimension: ['2x1', '2x1'],
    height: ['300px', '396px'],
    width: ['300px', '396px'],
  },
  opacity_mask: true,
  title: {
    color: 'white',
    element: 'h1',
    enabled: true,
    font_size: ['32px', '44px'],
    line_height: ['36px', '48px']
  },
  subject: SUBJECT_FILLED,
  subtitle: {
    enabled: false
  }
})