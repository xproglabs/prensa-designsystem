import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subjects'

export const TEASER_TOP_TOP = CreateTeaser({
  box: {
    align: ['column', 'column'],
    background: 'white',
  },
  box_wrap: {
    align: ['column', 'column'],
    mb: [1, 2],
    ml: [2, 2],
    mr: [2, 2],
    mt: [1, 2],
    width: ['calc(100% - 32px)', 'calc(100% - 32px)'],
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_6,
      tokensFonts.NEWS_TITLE_6
    )
  },
  image: {
    enabled: true,
    dimension: ['2x1', '2x1'],
    height: ['auto', '194px'],
    layout: ['fixed', 'responsive'],
    width: ['100%', '100%'],
    wrap_width: ['100%', '100%'],
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})