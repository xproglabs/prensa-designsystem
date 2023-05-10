import { ComponentProps, VariantProps } from '@stitches/react'
import { PrensaEngine } from '@xprog/prensa-system'

const AccordionGroup = PrensaEngine.styled('div', {
  borderColor: '$brandNeutral500',
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

export default AccordionGroup
export interface IAccordionGroup extends ComponentProps<typeof AccordionGroup> {}
export type AccordionGroupVariants = VariantProps<typeof AccordionGroup>