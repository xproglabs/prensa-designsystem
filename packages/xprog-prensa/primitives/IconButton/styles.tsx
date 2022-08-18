import { PrensaEngine } from '../../prensa.default.config'

export const StyledIconButton = PrensaEngine.styled('button', {
  align: ['row', 'center', 'middle'],
  padding: '$0',
  borderStyle: 'solid',
  borderWidth: '1px',
  cursor: 'pointer',

  variants: {
    roundedCorners: {
      true: { borderRadius: '$default' },
      false: { borderRadius: '$unset' }
    },
    size: {
      xs: { 'svg': { height: '$2', width: '$2' } },
      sm: { 'svg': { height: '$4', width: '$4' } },
      md: { 'svg': { height: '$6', width: '$6' } },
      lg: { 'svg': { height: '$8', width: '$8' } },
      xl: { 'svg': { height: '$10', width: '$10' } },
    }
  }
})

export type StyledIconButtonTypes = typeof StyledIconButton