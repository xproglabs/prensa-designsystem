import { LayoutProps } from 'prensa/components/styles/layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_COLUMNIST: LayoutProps = {
  box: {
    align: ['row-reverse', 'row'],
    pt: [0, 0]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: ['0px', '0px'],
    ml: ['0px', 2],
    mr: [2, '0px'],
    mt: ['0px', '0px'],
    width: ['calc(100% - 96px)', 'calc(100% - 136px)']
  },
  datetime_enabled: false,
  image: {
    enabled: true,
    dimension: ['1x1', '1x1'],
    height: ['80px', '120px'],
    mb: '0px',
    mr: '0px',
    width: ['80px', '120px'],
    wrap_width: ['80px', '120px'],
  },
  image_circle: true,
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