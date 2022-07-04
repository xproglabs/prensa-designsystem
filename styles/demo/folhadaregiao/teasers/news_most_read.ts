import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subjects'
import { CreateTeaser } from '../../../../styles/teasers'

export const TEASER_NEWS_MOST_READ = CreateTeaser({
  box: {
    align: ['row', 'row'],
    radius: 'default'
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mb: [2, 2],
    mr: [2, 2],
    ml: [2, 2],
    mt: [2, 2],
    width: ['calc(100% - 32px)', 'calc(100% - 32px)']
  },
  date_time: {
    enabled: true,
    fontFamily: 'secondary',
    fontSize: '12px'
  },
  number: {
    enabled: true,
    containerProps: {
      b: '1px',
      borderColor: 'primary_main',
      radius: 'circle',
      ml: 2,
      mt: 2,
      height: '40px',
      width: '40px',
    },
    textProps: {
      color: 'primary_main',
      fontSize: '14px',
      fontWeight: 700,
      fontFamily: 'secondary',
      lineHeight: '110%'
    },
    height: ['max-content', 'max-content'],
    width: ['max-content', 'max-content'],
  },
  image_circle: true,
  subject: SUBJECT_DEFAULT,
  title: {
    element: 'h3',
    enabled: true,
    font_weight: 900,
    mb: ['4px', '4px'],
    ...parseFonts(
      tokensFonts.NEWS_TITLE_7,
      tokensFonts.NEWS_TITLE_7
    )
  }
})