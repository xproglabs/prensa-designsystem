import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subjects'

export const TEASER_TOP_TOP = CreateTeaser({
  box: {
    align: ['row-reverse', 'column'],
    background: 'white',
  },
  box_wrap: {
    align: ['column', 'column'],
    mb: [1, 2],
    ml: [1, 2],
    mr: [1, 2],
    mt: [1, 2],
    width: ['calc(100% - 96px)', 'calc(100% - 32px)']
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_6
    )
  },
  image: {
    enabled: true,
    dimension: ['1x1', '2x1'],
    height: ['80px', '194px'],
    layout: ['responsive', 'responsive'],
    width: ['80px', '100%'],
    wrap_width: ['80px', '100%'],
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})