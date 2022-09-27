import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subjects'

export const TEASER_NEWS_RIGHT_TOP = CreateTeaser({
  box: {
    align: ['row-reverse', 'column'],
    background: 'white',
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: [2, 2],
    ml: [2, 2],
    mr: [2, 2],
    mt: [2, 2],
    width: ['calc(100% - 136px)', 'calc(100% - 32px)']
  },
  image: {
    enabled: true,
    dimension: ['1x1', '2x1'],
    height: ['104px', '194px'],
    layout: ['fixed', 'responsive'],
    mb: '0px',
    mr: '0px',
    width: ['104px', '100%'],
    wrap_width: ['104px', '100%'],
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_7,
      tokensFonts.NEWS_TITLE_6
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})