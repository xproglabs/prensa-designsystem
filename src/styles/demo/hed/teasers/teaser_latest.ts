import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_LATEST = CreateTeaser({
  box: {
    align: ['row-reverse', 'row'],
    background: 'white',
    pt: [0, 0]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: [2, '0px'],
    ml: [2, 3],
    mr: [2, '0px'],
    mt: [2, 3],
    width: ['calc(100% - 96px)', 'calc(100% - 344px)']
  },
  date_time: { enabled: true },
  image: {
    enabled: true,
    dimension: ['1x1', '2x1'],
    height: ['80px', '160px'],
    mb: '0px',
    mr: '0px',
    width: ['80px', '320px'],
    wrap_width: ['80px', '320px'],
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_5
    ),
    mb: 2
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})