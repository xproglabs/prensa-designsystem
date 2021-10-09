import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_SMALL: LayoutProps = {
  box: {
    align: ['row', 'row'],
    mb: [3, 3]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mt: ['0px', '0px'],
    mb: ['0px', '0px'],
    width: ['calc(100% - 96px)', 'calc(100% - 96px)']
  },
  title: {
    enabled: true,
    ...parseFonts(
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
    mr: [2, 2]
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}
