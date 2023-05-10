import { ComponentProps } from '@stitches/react'
import { PrensaEngine } from '@xprog/prensa-system'

const Block = PrensaEngine.styled('div', {})

export const S = { Block }
export type BlockTypeof = ComponentProps<typeof S.Block>