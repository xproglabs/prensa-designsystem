import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_FILLED } from '../tokens/subjects'

export const TEASER_BACKGROUND = CreateTeaser({
  box: {
    aligny: ['bottom', 'bottom'],
    height: ['300px', '396px']
  },
  box_wrap: {
    aligny: ['bottom', 'bottom'],
    content_overlap: true,
    height: ['300px', '396px'],
    pl: [2, 3],
    pr: [2, 3],
    pb: [2, 3],
    mt: ['-300px', '-396px'],
    width: ['calc(100% - 32px)', 'calc(100% - 48px)']
  },
  date_time: {
    enabled: true,
    fontSize: '12px',
    fontFamily: 'secondary',
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
    element: 'h3',
    enabled: true,
    font_weight: 700,
    mb: [1, 1],
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4, // token para mobile
      tokensFonts.NEWS_TITLE_2 // token para desktop
    ),
  },
  subject: SUBJECT_FILLED,
  subtitle: {
    enabled: false
  }
})