import React from 'react'

import { LeftArrowIcon } from './LeftArrowIcon'
import { RightArrowIcon } from './RightArrowIcon'
import { Button } from './styled'
import { ControlButtonProps } from './types'

const ControlButton = ({ isNext, onClick, ...otherProps }: ControlButtonProps) => {

  const renderIcon = () => {
    if (isNext) return <RightArrowIcon />
    return <LeftArrowIcon />
  }

  return (
    <Button type='button' aria-label={isNext ? 'Avançar' : 'Retroceder'} isNext={isNext} onClick={onClick} {...otherProps}>
      {renderIcon()}
    </Button>
  )
}

export { ControlButton }