import React from 'react'

import { TypographyProps } from './props'
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  Paragraph,
  Span,
  Label,
  Cite,
  A
} from './styled'

const Typography = (props: TypographyProps) => {
  switch (props.element) {
    case 'h1':
      return <HeadingOne {...props} />
    case 'h2':
      return <HeadingTwo {...props} />
    case 'h3':
      return <HeadingThree {...props} />
    case 'h4':
      return <HeadingFour {...props} />
    case 'h5':
      return <HeadingFive {...props} />
    case 'h6':
      return <HeadingSix {...props} />
    case 'p':
      return <Paragraph {...props} />
    case 'label':
      return <Label {...props} />
    case 'cite':
      return <Cite {...props} />
    case 'a':
      return <A {...props} />
    case 'span':
    default:
      return <Span {...props} />
  }
}

export default Typography