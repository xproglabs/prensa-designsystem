import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_IMAGE_CIRCLE = CreateTeaser({
  box: {
    align: ['row-reverse', 'row'],
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    width: ['calc(100% - 80px)', 'calc(100% - 120px)']
  },
  date_time: { 
    enabled: false
  },
  image: {
    enabled: true,
    dimension: ['1x1', '1x1'],
    height: ['80px', '120px'],
    mr: ['0px', 2],
    width: ['80px', '120px'],
    wrap_width: ['80px', '120px']
  },
  image_circle: true,
  profile_image: {
    enabled: true
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_6
    )
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})