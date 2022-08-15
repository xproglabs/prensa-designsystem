import { PrensaEngine } from '../../prensa.default.config'

export const StyledButton = PrensaEngine.styled('button', {
  borderStyle: 'solid',
  borderWidth: '1px',
  cursor: 'pointer',
  px: '$4',
  width: 'max-content',
  '&:disabled': {
    backgroundColor: '$neutral10',
    borderColor: '$neutral10',
    color: '$neutral7',
    '&:hover': {
      opacity: 1,
      cursor: 'not-allowed'
    }
  },

  variants: {
    roundedCorners: {
      true: {
        borderRadius: '$default'
      },
      false: {
        borderRadius: '$unset'
      }
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