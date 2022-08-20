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
      sm: { height: '$8', width: '$8', 'svg': { height: '$4', width: '$4' } },
      md: { height: '$10', width: '$10', 'svg': { height: '$6', width: '$6' } },
      lg: { height: '$12', width: '$12', 'svg': { height: '$8', width: '$8' } },
    }
  }
})

export type StyledIconButtonTypes = typeof StyledIconButton