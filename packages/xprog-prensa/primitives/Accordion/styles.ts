import { VariantProps } from '@stitches/react'

import { PrensaEngine } from '../../prensa.default.config'

export const AccordionGroup = PrensaEngine.styled('div', {
  borderColor: '$neutral2',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '$alternative',

  variants: {
    size: {
      maxContent: { width: '$accordion$sizeMaxContent' },
      sm: { width: '$accordion$sizeSm' },
      md: { width: '$accordion$sizeMd' },
      lg: { width: '$accordion$sizeLg' },
      fullWidth: { width: '$accordion$sizeFullWidth' }
    }
  }
})

export const AccordionContent = PrensaEngine.styled('section', {
  variants: {
    innerSpace: {
      sm: { p: '$4' },
      md: { p: '$6' },
      lg: { p: '$8' }
    }
  }
})

export type AccordionGroupVariants = VariantProps<typeof AccordionGroup>
export type AccordionContentVariants = VariantProps<typeof AccordionContent>