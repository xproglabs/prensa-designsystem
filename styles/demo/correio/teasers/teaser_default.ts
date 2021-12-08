import { CreateTeaser } from 'prensa'

import { parseResponsiveFont } from '../../../parsers/parseFonts'
import { tokensFonts } from '../tokens/fonts'

export const TEASER_DEFAULT = CreateTeaser({
  box: {
    align: ['column', 'row'],
    background: 'white',
    mb: [0, 0],
    pb: [6, 3],
    pt: [6, 3],
    pl: [3, 3],
    pr: [3, 3]
  },
  box_wrap: {
    align: ['column', 'column'],
    alignx: ['left', 'left'],
    mt: ['0px', '0px'],
    ml: ['0px', '0px'],
    width: ['calc(100% - 32px - 16px - 80px)', 'calc(100% - 32px - 16px - 80px)']
  },
  date_time: {
    enabled: false
  },
  title: {
    enabled: true,
    font_weight: 900,
    mb: ['8px', '4px'],
    ...parseResponsiveFont(
      tokensFonts.NEWS_TITLE_4,
      tokensFonts.NEWS_TITLE_6
    ),
    line_height: ['110%', '110%'],
  },
  subtitle: {
    enabled: true
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
