import { CreateTeaser } from 'prensa'

import { parseResponsiveFont } from '../../../parsers/parseFonts'
import { tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_NEWS_TOP = CreateTeaser({
  box: {
    align: ['column', 'column'],
    background: 'white',
    mb: [0, 0],
    pt: [2, 2],
    pb: [2, 2],
    width: ['calc(100%)', 'calc(100%)']
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    width: ['calc(100%)', 'calc(100%)']
  },
  date_time: {
    enabled: true,
  },
  title: {
    enabled: true,
    mb: ['4px', '4px'],
    ...parseResponsiveFont(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_6
    )
  },
  image: {
    enabled: true,
    dimension: ['1x1', '1x1'],
    height: ['80px', '80px'],
    ml: [2, 2],
    mr: [2, 2],
    width: ['80px', '80px'],
    wrap_width: ['calc(100%)', 'calc(100%)']
  },
  subject: SUBJECT_DEFAULT
})
