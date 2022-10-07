import { PrensaEngine } from '../../prensa.default.config'

export const StyledButton = PrensaEngine.styled('button', {
  align: ['row', 'center', 'middle'],
  borderStyle: 'solid',
  borderWidth: '1px',
  cursor: 'pointer',
  py: '$0',
  px: '$3',
  width: 'max-content',
  '&:disabled': {
    backgroundColor: '$brandNeutral300',
    borderColor: '$brandNeutral300',
    color: '$brandNeutral500',
    '&:hover': {
      opacity: 1,
      cursor: 'not-allowed'
    }
  },

  variants: {
    roundedCorners: {
      unset: { borderRadius: '$unset' },
      default: { borderRadius: '$default' },
      alternative: { borderRadius: '$alternative' }
    },
    size: {
      xs: {
        height: '$8',
      },
      sm: {
        height: '$10'
      },
      md: {
        height: '$12'
      },
      lg: {
        height: '$14'
      },
      xl: {
        height: '$16'
      }
    }
  }
})

export type StyledButtonTypes = typeof StyledButton