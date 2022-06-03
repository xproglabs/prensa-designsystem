import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_FILLED } from '../tokens/subjects'

export const TEASER_NEWS_DEFAULT = CreateTeaser({
  box: {
    aligny: ['middle', 'middle'],
    background: 'white',
    pt: [5, '0px'],
    pb: [5, '0px'],
    mb: [2, '0px'],
    height: ['auto', '392px']
  },
  box_wrap: {
    mb: ['0px', '0px'],
    mr: [2, 3],
    ml: [2, 3],
    width: ['calc(100% - 32px)', 'calc(100% - 48px)']
  },
  date_time: {
    enabled: true,
    fontFamily: 'secondary',
    fontSize: '12px'
  },
  subtitle: {
    color: 'neutral3',
    enabled: true,
    font_size: ['16px', '18px'],
    line_height: ['140%', '140%'],
    mb: ['0px', '0px']
  },
  title: {
    element: 'h3',
    enabled: true,
    font_weight: 700,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4, // token para mobile
      tokensFonts.NEWS_TITLE_2 // token para desktop
    ),
    mb: [1, 1]
  },
  image: {
    enabled: false
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_FILLED
})