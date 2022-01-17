import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_LATEST = CreateTeaser({
  box: {
    align: ['row-reverse', 'row'],
    background: 'white',
    pt: [0, 0]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: [2, 3],
    ml: [2, 2],
    mr: [2, 3],
    mt: [2, 3],
    width: ['calc(100% - 80px - 32px)', 'calc(100% - 300px - 48px)']
  },
  date_time: {
    enabled: true,
    format: 'time_formatted'
  },
  image: {
    enabled: true,
    dimension: ['1x1', '2x1'],
    fallback_image: true,
    height: ['80px', '160px'],
    mb: [2, 3],
    ml: ['0px', 3],
    mt: [2, 3],
    mr: [2, '0px'],
    width: ['80px', '320px'],
    wrap_width: ['80px', '320px'],
  },
  profile_bio: {
    enabled: true,
    height: ['32px', '40px'],
    width: ['32px', '40px']
  },
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_5
    ),
    mb: [1, 1]
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})