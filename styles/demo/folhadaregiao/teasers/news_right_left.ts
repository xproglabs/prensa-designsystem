import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subjects'
import { CreateTeaser } from '../../../../styles/teasers'

export const TEASER_NEWS_RIGHT_LEFT = CreateTeaser({
  box: {
    align: ['row-reverse', 'row'],
    background: 'white',
    radius: 'alternative'
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: [2, 2],
    mr: [2, 2],
    ml: [2, 2],
    mt: [2, 2],
    width: ['calc(100% - 136px)', 'calc(100% - 272px)']
  },
  date_time: {
    enabled: false,
    format: 'time_formatted',
    fontFamily: 'secondary',
    fontSize: '12px',
  },
  title: {
    color: 'neutral2',
    element: 'h3',
    enabled: true,
    font_weight: 900,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_7,
      tokensFonts.NEWS_TITLE_5
    ),
    mb: ['4px', '4px']
  },
  image: {
    custom_class: 'image-with-radius-bottom-lg image-with-radius-top-lg',
    enabled: true,
    dimension: ['1x1', '2x1'],
    height: ['104px', '180px'],
    width: ['104px', '240px'],
    wrap_width: ['104px', '240px'],
  },
  related: {
    enabled: false
  },
  subject: SUBJECT_DEFAULT
})
