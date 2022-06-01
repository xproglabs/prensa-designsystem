import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subjects'

export const TEASER_NEWS_RIGHT_RIGHT = CreateTeaser({
  box: {
    align: ['row-reverse', 'row-reverse'],
    background: 'white',
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: [2, 2],
    ml: [2, 2],
    mr: [2, 2],
    mt: [2, 2],
    width: ['calc(100% - 136px)', 'calc(100% - 152px)']
  },
  image: {
    enabled: true,
    dimension: ['1x1', '1x1'],
    height: ['104px', '120px'],
    mb: '0px',
    mr: '0px',
    width: ['104px', '120px'],
    wrap_width: ['104px', '120px'],
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_7,
      tokensFonts.NEWS_TITLE_7
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})