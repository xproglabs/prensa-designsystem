import { Block, Link } from 'prensa'
import React from 'react'

import { IcLeftPagination } from '../../icons/IcLeftPagination'
import { IcRightPagination } from '../../icons/IcRightPagination'
import { ArrowProps } from './types'

export const ArrowButton = ({
  borderColor,
  direction,
  height,
  radius,
  width
}: ArrowProps) => {
  const aria_label_string = direction === 'left' ? 'Anterior' : 'Próximo'
  return (
    <Link
      aria-label={aria_label_string}
      path='/'
      rel='noreferrer'
      target='_blank'
      title={aria_label_string}>
      <Block
        align='column'
        alignx='center'
        aligny='middle'
        b='1px'
        borderColor={borderColor}
        height={height}
        radius={radius}
        width={width}>
        {direction == 'left' && (
          <IcLeftPagination />
        )}
        {direction == 'right' && (
          <IcRightPagination />
        )}
      </Block>
    </Link>
  )
}
ArrowButton.defaultProps = {
  borderColor: '#ADB0BC',
  direction: 'right',
  height: '40px',
  radius: 'circle',
  width: '40px'
}