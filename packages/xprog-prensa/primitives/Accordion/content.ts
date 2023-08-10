import { ComponentProps, VariantProps } from '@stitches/react'
import { PrensaEngine } from '@xprog/prensa-system'

const AccordionContent = PrensaEngine.styled('section', {
  variants: {
    innerSpace: {
      sm: { p: '$4' },
      md: { p: '$6' },
      lg: { p: '$8' }
    }
  }
})

export default AccordionContent
export interface IAccordionContent extends ComponentProps<typeof AccordionContent> {}
export type AccordionContentVariants = VariantProps<typeof AccordionContent>