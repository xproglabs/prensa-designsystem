import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_FILLED } from '../tokens/subject'

export const FEATURED_RELATED: LayoutProps = {
  box: {
    background: 'white',
    pt: [5, 9],
    pb: [5, 9]
  },
  box_wrap: {
    mr: [2, 5],
    ml: [2, 5],
    width: ['calc(100% - 32px)', 'calc(100% - 80px)']
  },
  datetime_enabled: false,
  related: {
    enabled: true
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4, // token para mobile
      tokensFonts.NEWS_TITLE_2 // token para desktop
    ),
    mb: [3, 3]
  },
  subject: SUBJECT_FILLED
}