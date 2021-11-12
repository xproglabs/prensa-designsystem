import { CreateTeaser } from 'prensa'

import { parseFonts, tokensFonts } from '../tokens/fonts'
import { SUBJECT_DEFAULT } from '../tokens/subject'

export const TEASER_MOST_READ = CreateTeaser({
  box: {
    align: ['row', 'row'],
  },
  number: {
    enabled: true,
    mr: [2, 2],
    containerProps: {
      b: '1px',
      borderColor: 'primary1',
      radius: 'circle',
      height: '40px',
      width: '40px',
    },
    textProps: {
      color: 'primary1',
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '110%'
    },
    height: ['max-content', 'max-content'],
    width: ['max-content', 'max-content'],
  },
  subject: SUBJECT_DEFAULT,
  title: {
    enabled: true,
    ...parseFonts(
      tokensFonts.NEWS_TITLE_8,
      tokensFonts.NEWS_TITLE_6
    )
  }
})
