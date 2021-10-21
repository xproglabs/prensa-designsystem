import { CreateTeaser } from 'prensa'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT_FEATURED } from '../tokens/subject'

export const FEATURED_RELATED = CreateTeaser({
  box: {
    aligny: ['top', 'center'],
    background: 'white',
  },
  box_wrap: {
    mr: ['0px', '0px'],
    width: ['calc(100% - 32px)', '100%']
  },
  related: {
    color: 'neutral3',
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_7,
      tokensFonts.NEWS_TITLE_6
    ),
    font_weight: 700,
    icon: {
      icon: 'IconAtletico',
      mr: 1
    },
    mr: 2,
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4, // token para mobile
      tokensFonts.NEWS_TITLE_3 // token para desktop
    ),
    mb: [3, 3]
  },
  subject: SUBJECT_DEFAULT_FEATURED
})