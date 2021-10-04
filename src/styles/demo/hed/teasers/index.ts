import { LayoutProps } from '../../../layouts'
import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT, SUBJECT_FILLED } from '../tokens/subject'
import {
  TEASER_IMAGE_LEFT_MEDIUM,
  TEASER_IMAGE_LEFT_SMALL,
} from './teaser_image_left'
import { TEASER_IMAGE_TOP } from './teaser_image_top'

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
  teaser_image_left_medium: TEASER_IMAGE_LEFT_MEDIUM,
  teaser_image_left_small: TEASER_IMAGE_LEFT_SMALL,
  teaser_image_top: TEASER_IMAGE_TOP,
  featured_related: FEATURED_RELATED
}