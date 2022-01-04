import { Block, Link } from 'prensa'
import React from 'react'

import { IcLeftPagination } from '../../src/icons/IcLeftPagination'
import { IcRightPagination } from '../../src/icons/IcRightPagination'
import { ArrowButtonProps } from './types'

const ArrowButton = ({
  borderColor,
  color,
  direction,
  height,
  radius,
  width
}: ArrowButtonProps) => {

  const aria_label_string = direction === 'left' ? 'Anterior' : 'Próximo'

  const RenderIcon = () => {
    if (direction === 'left') {
      return <IcLeftPagination color={color} />
    } else {
      return <IcRightPagination color={color} />
    }
  }

  return (
    <Link
      aria-label={aria_label_string}
      path='/'
      rel='noreferrer'
      target='_blank'
      title={aria_label_string}
    >
      <Block
        align='column'
        alignx='center'
        aligny='middle'
        b='1px'
        borderColor={borderColor}
        height={height}
        mr={2}
        radius={radius}
        width={width}
      >
        <RenderIcon/>
      </Block>
    </Link>
  )
}

ArrowButton.defaultProps = {
  borderColor: 'neutral5',
  color: 'neutral5',
  height: '40px',
  radius: 'circle',
  width: '40px'
}

export { ArrowButton }