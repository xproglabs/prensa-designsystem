import { LayoutProps } from '../../../../components/Teaser/types'
import { parseFonts, tokensFonts } from '../configs/fonts'
import { SUBJECT_DEFAULT } from '../configs/subject'

export const FEATURED_RELATED: LayoutProps = {
  box: {
    background: 'white',
    pt: [5, 9],
    pb: [5, 9]
  },
  box_wrap: {
    mr: [2, 5],
    ml: [2, 5],
    width: ['100% - 32px', '100% - 80px']
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
  subject: SUBJECT_DEFAULT
}