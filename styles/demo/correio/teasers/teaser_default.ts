import { CreateTeaser } from 'prensa'

import { parseResponsiveFont } from '../../../parsers/parseFonts'
import { tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_DEFAULT = CreateTeaser({
  box: {
    align: ['row', 'row'],
    background: 'white',
    mb: [0, 0],
    pt: [2, 2],
    pb: [2, 2]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    width: ['calc(100% - 32px - 16px - 80px)', 'calc(100% - 32px - 16px - 80px)']
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
    width: ['80px', '80px'],
    wrap_width: ['80px', '80px'],
    ml: [2, 2],
    mr: [2, 2]
  },
  subject: SUBJECT_DEFAULT
})
