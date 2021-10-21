import { LayoutProps } from 'prensa/components/types'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_MOST_READ: LayoutProps = {
  box: {
    align: ['row-reverse', 'row'],
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mr: [2, '0px'],
    ml: ['0px', 2],
    width: ['calc(100% - 96px)', 'calc(100% - 96px)']
  },
  image: {
    enabled: false,
    dimension: ['1x1', '1x1'],
    height: ['80px', '80px'],
    width: ['80px', '80px'],
    wrap_width: ['80px', '80px'],
  },
  most_read_circle: {
    enabled: true,
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT,
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_6
    )
  }
}
