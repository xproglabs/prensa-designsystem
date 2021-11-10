import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_COLUMNIST = CreateTeaser({
  box: {
    align: ['row', 'row'],
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    ml: [2, 2],
    mr: [2, 2],
    width: ['calc(100% - 80px - 16px)', 'calc(100% - 120px - 16px)'],
  },
  date_time: { enabled: false },
  image: {
    enabled: true,
    dimension: ['1x1', '1x1'],
    height: ['80px', '120px'],
    mb: '0px',
    mr: '0px',
    width: ['80px', '120px'],
    wrap_width: ['80px', '120px'],
  },
  image_circle: true,
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_6
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})