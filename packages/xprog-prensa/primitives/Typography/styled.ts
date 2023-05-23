import { ComponentProps } from '@stitches/react'
import { PrensaEngine } from '@xprog/prensa-system'

const Typography = PrensaEngine.styled('p', {})

export const S = { Typography }
export interface ITypographyStyled extends ComponentProps<typeof S.Typography> {}