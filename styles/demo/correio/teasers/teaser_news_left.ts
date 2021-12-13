import { CreateTeaser } from 'prensa'

import { parseResponsiveFont } from '../../../parsers/parseFonts'
import { tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT_SMALL } from '../tokens/subject'

export const TEASER_NEWS_LEFT = CreateTeaser({
  box: {
    align: ['row', 'row'],
    background: 'white',
    mb: [0, 0],
    pb: [1, 2]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mt: [1, 1],
    ml: [2, 2],
    width: ['calc(100% - 16px - 120px)', 'calc(100% - 32px - 16px - 80px)']
  },
  date_time: {
    enabled: true,
    fontSize: '12px'
  },
  title: {
    enabled: true,
    font_weight: 900,
    mb: ['4px', '4px'],
    ...parseResponsiveFont(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_6
    )
  },
  image: {
    enabled: true,
    dimension: ['1x1', '1x1'],
    height: ['120px', '80px'],
    width: ['120px', '80px'],
    wrap_width: ['120px', '80px'],
  },
  subject: SUBJECT_DEFAULT_SMALL
})
