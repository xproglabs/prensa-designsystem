import { CreateTeaser } from 'prensa'

import { BORDER_DEFAULT } from '../border'
import { parseResponsiveFont, NEWS_TITLE_TOKENS } from '../fonts'
import { SUBJECT_DEFAULT } from '../subject'

export const TEASER_DEFAULT = CreateTeaser({
  box: {
    align: ['row', 'row'],
    background: 'white',
    mb: [0, 0],
    pt: [2, 2],
    pb: [2, 2],
    ...BORDER_DEFAULT
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
      NEWS_TITLE_TOKENS.NEWS_TITLE_8,
      NEWS_TITLE_TOKENS.NEWS_TITLE_6
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
