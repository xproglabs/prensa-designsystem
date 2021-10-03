import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT, SUBJECT_FILLED } from '../tokens/subject'

const TEASER_DEFAULT: LayoutProps = {
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

const TEASER_IMAGE_LEFT: LayoutProps = {
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

const TEASER_FEATURED: LayoutProps = {
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
  subject: SUBJECT_FILLED
}

const FEATURED_RELATED: LayoutProps = {
  datetime_enabled: false,
  related: {
    enabled: true
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_3, // token para mobile
      tokensFonts.NEWS_TITLE_1 // token para desktop
    )
  },
  subject: SUBJECT_FILLED
}

export const teasers = {
  teaser_default: TEASER_DEFAULT,
  teaser_featured: TEASER_FEATURED,
  teaser_image_left: TEASER_IMAGE_LEFT,
  featured_related: FEATURED_RELATED
}