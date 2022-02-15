import { HTMLAttributes } from 'react'

export type BlockHTMLAttributes = Omit<HTMLAttributes<HTMLDivElement>, 'color'> & {
  dangerouslySetInnerHTML?: any;
}