import { LayoutProps } from '../../../../components/Teaser/types'
import { parseFonts, tokensFonts } from '../configs/fonts'
import { SUBJECT_DEFAULT } from '../configs/subject'

export const TEASER_DEFAULT: LayoutProps = {
  box: {
    align: ['column', 'row']
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4, // token para mobile
      tokensFonts.NEWS_TITLE_2 // token para desktop
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}