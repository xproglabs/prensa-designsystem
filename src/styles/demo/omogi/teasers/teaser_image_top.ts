import { LayoutProps } from '../../../../components/Teaser/types'
import { parseFonts, tokensFonts } from '../configs/fonts'
import { SUBJECT_DEFAULT } from '../configs/subject'

export const TEASER_IMAGE_TOP: LayoutProps = {
  box: {
    align: ['column', 'column'],
    pb: [0, 0],
    pt: [0, 0]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mt: [2, 2],
    mr: [0, 0],
    mb: [2, 2],
    ml: [0, 0],
    width: ['100%', '100%']
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_5,
      tokensFonts.NEWS_TITLE_5
    )
  },
  image: {
    enabled: true,
    dimension: ['2x1', '2x1'],
    layout: ['responsive', 'responsive'],
    height: ['200px', '200px'],
    width: ['400px', '400px']
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}