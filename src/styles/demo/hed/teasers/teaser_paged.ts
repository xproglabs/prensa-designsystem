import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_PAGED: LayoutProps = {
  box: {
    align: ['row-reverse', 'row'],
    mb: [2, 2],
    pt: [0, 0]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: ['0px', '0px'],
    ml: ['0px', 3],
    mr: [2, '0px'],
    mt: ['0px', '0px'],
    width: ['calc(100% - 96px)', 'calc(100% - 344px)']
  },
  datetime_enabled: false,
  image: {
    enabled: true,
    dimension: ['1x1', '2x1'],
    height: ['80px', '160px'],
    mb: '0px',
    mr: '0px',
    width: ['80px', '320px'],
    wrap_width: ['80px', '320px'],
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_5
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}