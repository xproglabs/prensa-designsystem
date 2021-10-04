import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_LEFT_SMALL: LayoutProps = {
  box: {
    align: ['column', 'row']
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_4,
      tokensFonts.NEWS_TITLE_5
    )
  },
  image: {
    enabled: true,
    dimension: ['2x1', '2x1'],
    height: ['120px', '120px'],
    width: ['120px', '120px']
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
}

export const TEASER_IMAGE_LEFT_MEDIUM: LayoutProps = {
  box: {
    pb: [3, 3],
    pt: [3, 3]
  },
  box_wrap: {
    aligny: ['top', 'top'],
    height: ['auto', 'auto'],
  },
  datetime_enabled: false,
  image: {
    dimension: ['1x1', '2x1'],
    height: ['220px', '320px'],
    width: ['300px', '300px'],
    enabled: true,
    mb: [3, 3]
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_1,
      tokensFonts.NEWS_TITLE_3
    )
  },
  related: {
    enabled: false
  },
  subject: {
    enabled: true
  }
}
