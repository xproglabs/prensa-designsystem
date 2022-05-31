import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subjects'

export const TEASER_RIGHT_RIGHT = CreateTeaser({
  box: {
    align: ['row-reverse', 'row-reverse'],
    background: 'white',
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: [1, 2],
    ml: [1, 2],
    mr: [1, 2],
    mt: [1, 2],
    width: ['calc(100% - 96px)', 'calc(100% - 152px)']
  },
  image: {
    enabled: true,
    dimension: ['1x1', '1x1'],
    height: ['80px', '120px'],
    mb: '0px',
    mr: '0px',
    width: ['80px', '120px'],
    wrap_width: ['80px', '120px'],
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_7
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})