import { PrensaEngine } from '../../prensa.default.config'

export const StyledIconButton = PrensaEngine.styled('button', {
  align: ['row', 'center', 'middle'],
  padding: '$0',
  borderStyle: 'solid',
  borderWidth: '1px',
  cursor: 'pointer',

  variants: {
    roundedCorners: {
      unset: { borderRadius: '$unset' },
      default: { borderRadius: '$default' },
      alternative: { borderRadius: '$alternative' },
      rounded: { borderRadius: '$rounded' },
      circle: { borderRadius: '$circle' }
    },
    size: {
      sm: {
        height: '$iconButton$sizeSmContainerSize',
        width: '$iconButton$sizeSmContainerSize',
        'svg': {
          height: '$iconButton$sizeSmIconSize',
          width: '$iconButton$sizeSmIconSize'
        }
      },
      md: {
        height: '$iconButton$sizeMdContainerSize',
        width: '$iconButton$sizeMdContainerSize',
        'svg': {
          height: '$iconButton$sizeMdIconSize',
          width: '$iconButton$sizeMdIconSize'
        }
      },
      lg: {
        height: '$iconButton$sizeLgContainerSize',
        width: '$iconButton$sizeLgContainerSize',
        'svg': {
          height: '$iconButton$sizeLgIconSize',
          width: '$iconButton$sizeLgIconSize'
        }
      },
    }
  }
})

export type StyledIconButtonTypes = typeof StyledIconButton