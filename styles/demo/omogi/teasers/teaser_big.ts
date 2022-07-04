import { BORDER_DEFAULT } from '../border'
import { parseResponsiveFont, NEWS_TITLE_TOKENS } from '../fonts'
import { SUBJECT_FILLED } from '../subject'
import { CreateTeaser } from '../../../teasers'

export const TEASER_BIG = CreateTeaser({
  box: {
    align: ['column', 'column'],
    background: 'white',
    mb: [0, 1],
    pt: [0, 0],
    pb: [2, 2],
    ...BORDER_DEFAULT
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    ml: [2, 2],
    mt: [2, 2],
    width: [
      'calc(100% - 32px - 16px - 80px)',
      'calc(100% - 32px)'
    ]
  },
  date_time: {
    enabled: true,
  },
  title: {
    enabled: true,
    mb: [1, 3],
    ...parseResponsiveFont(
      NEWS_TITLE_TOKENS.NEWS_TITLE_5,
      NEWS_TITLE_TOKENS.NEWS_TITLE_4
    )
  },
  image: {
    enabled: true,
    dimension: ['2x1', '2x1'],
    height: ['196px', '196px'],
    width: ['300px', '300px'],
    wrap_width: [
      'calc(100%)',
      'calc(100%)'
    ],
    ml: [0, 0],
    mr: [0, 0],
    mt: [0, 0]
  },
  subject: {
    ...SUBJECT_FILLED,
    mb: [1, 2]
  }
})
