import { CreateTeaser } from 'prensa'

import { parseResponsiveFont, NEWS_TITLE_TOKENS } from '../fonts'
import { SUBJECT_DEFAULT } from '../subject'

export const TEASER_LIST = CreateTeaser({
  box: {
    align: ['row', 'row'],
    background: 'primary1'
  },
  title: {
    enabled: true,
    ...parseResponsiveFont(
      NEWS_TITLE_TOKENS.NEWS_TITLE_4, // token para mobile
      NEWS_TITLE_TOKENS.NEWS_TITLE_2 // token para desktop
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})