import { CreateTeaser } from 'prensa'

import { parseResponsiveFont, NEWS_TITLE_TOKENS } from '../fonts'
import { SUBJECT_FILLED } from '../subject'

export const TEASER_FEATURED = CreateTeaser({
  box: {
    aligny: ['bottom', 'bottom'],
    height: ['300px', '388px']
  },
  box_wrap: {
    aligny: ['bottom', 'bottom'],
    content_overlap: true,
    height: ['300px', '388px'],
    ml: [2, 3],
    mr: [2, 3],
    mb: [2, 3],
    mt: ['-300px', '-388px'],
    width: ['calc(100% - 32px)', 'calc(100% - 48px)']
  },
  date_time: {
    enabled: true,
    color: 'white'
  },
  image: {
    enabled: true,
    dimension: ['2x1', '2x1'],
    height: ['300px', '388px'],
    width: ['300px', '388px'],
  },
  opacity_mask: true,
  title: {
    color: 'white',
    element: 'h1',
    enabled: true,
    ...parseResponsiveFont(
      NEWS_TITLE_TOKENS.NEWS_TITLE_5,
      NEWS_TITLE_TOKENS.NEWS_TITLE_3
    ),
    mb: [1, 2]
  },
  subject: SUBJECT_FILLED,
  subtitle: {
    enabled: false
  }
})