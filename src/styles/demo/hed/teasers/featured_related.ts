import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT_FEATURED } from '../tokens/subject'

export const FEATURED_RELATED = CreateTeaser({
  box: {
    background: 'white',
    pt: [5, 8],
    pb: [3, 6]
  },
  box_wrap: {
    mr: ['0px', '0px'],
    ml: [2, 2],
    width: ['calc(100% - 32px)', 'calc(100% - 32px)']
  },
  related: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_7,
      tokensFonts.NEWS_TITLE_6
    ),
    font_weight: 700,
    line_height: ['110%', '110%'],
    icon: {   
      icon: 'IconRelacionadas',
      mr: 3,
      width: '24px'
    },
    mr: 2,
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4, // token para mobile
      tokensFonts.NEWS_TITLE_3 // token para desktop
    ),
    mb: [3, 3]
  },
  subject: SUBJECT_DEFAULT_FEATURED
})