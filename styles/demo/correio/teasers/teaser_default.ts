import { CreateTeaser } from 'prensa'

import { parseResponsiveFont } from '../../../parsers/parseFonts'
import { tokensFonts } from '../tokens/fonts'

export const TEASER_DEFAULT = CreateTeaser({
  box: {
    align: ['column', 'row'],
    background: 'white',
    mb: [0, 0],
    pb: [5, 5],
    pt: [5, 5],
    pl: [3, 3],
    pr: [3, 3]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mt: ['0px', '0px'],
    ml: ['0px', '0px'],
    width: ['calc(100% - 32px)', 'calc(100% - 32px - 16px - 80px)']
  },
  date_time: {
    enabled: false
  },
  subtitle: {
    enabled: true,
    font_size: ['16px', '18px'],
    line_height: ['140%', '140%']
  },
  title: {
    enabled: true,
    mb: ['8px', '4px'],
    font_weight: 900,
    ...parseResponsiveFont(
      tokensFonts.NEWS_TITLE_4,
      tokensFonts.NEWS_TITLE_2
      ),
  },
  image: {
    enabled: false,
    dimension: ['1x1', '1x1'],
    height: ['80px', '80px'],
    width: ['80px', '80px'],
    wrap_width: ['80px', '80px'],
    ml: [2, 2],
    mr: [2, 2]
  },
  subject: {
    bg_color: 'secondary.main',
    enabled: true,
    font_size: ['12px', '12px'],
    mb: [2, 2],
    variant: 'filled'
  }
})
