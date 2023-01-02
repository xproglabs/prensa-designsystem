import React from 'react'

import { LeftArrowIcon } from './LeftArrowIcon'
import { RightArrowIcon } from './RightArrowIcon'
import { ButtonLeft, ButtonRight } from './styled'
import { ControlButtonProps } from './types'

const ControlButton = ({
  isNext,
  onClick,
  ...otherProps
}: ControlButtonProps) => {
  const renderIcon = () => {
    if (isNext) return <RightArrowIcon />
    return <LeftArrowIcon />
  }

  const ButtonElement = isNext ? ButtonRight : ButtonLeft

  return (
    <ButtonElement
      type='button'
      aria-label={isNext ? 'Avançar' : 'Retroceder'}
      onClick={onClick}
      {...otherProps}
    >
      {renderIcon()}
    </ButtonElement>
  )
}

export { ControlButton }
