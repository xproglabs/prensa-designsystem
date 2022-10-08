import { createStitches } from '@stitches/react'
import * as DefaultTokens from '@xprog/prensa-design-tokens/3-themes/default.json'

import Medias from './providers/PrensaThemeProvider/medias'
import Radii from './providers/PrensaThemeProvider/radius'
import Sizes from './providers/PrensaThemeProvider/sizes'
import Spaces from './providers/PrensaThemeProvider/sizes'
import { Utils } from './providers/PrensaThemeProvider/utils'

export const PrensaEngine = createStitches({
  prefix: 'pds',
  media: Medias,
  theme: {
    colors: DefaultTokens.colors,
    fontSizes: DefaultTokens.fontSizes,
    fontWeights: DefaultTokens.fontWeights,
    lineHeights: DefaultTokens.lineHeights,
    radii: Radii,
    sizes: Sizes,
    space: Spaces,
    accordion: {
      sizeMaxContent: 'max-content',
      sizeSm: '320px',
      sizeMd: '340px',
      sizeLg: '360px',
      sizeFullWidth: '100%'
    },
    drawer: {
      sizeMaxcontent: 'max-content',
      sizeSm: '320px',
      sizeMd: '340px',
      sizeLg: '360px',
      sizeFullwidth: '100%',
      innerSpaceSm: '$space$4',
      innerSpaceMd: '$space$6',
      innerSpaceLg: '$space$8',
      backdropZIndex: 10,
      contentZIndex: 100
    },
    iconButton: {
      sizeSmContainerSize: '$space$8',
      sizeMdContainerSize: '$space$10',
      sizeLgContainerSize: '$space$12',
      sizeSmIconSize: '$space$4',
      sizeMdIconSize: '$space$6',
      sizeLgIconSize: '$space$8',
    }
  },
  utils: Utils
})

export type PrensaEngineType = typeof PrensaEngine.config