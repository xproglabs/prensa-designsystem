import React from 'react'

import { StyledButton } from './styles'
import { ButtonProps } from './props'

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  variant,
  textColor,
  ...otherProps
}) => {

  let css = {}
  switch (variant) {
    case 'filled':
      css = {
        backgroundColor: `$${color}`,
        borderColor: `$${color}`,
        color: `$${textColor}`,
        '&:hover': {
          opacity: '0.8'
        }
      }
      break
    case 'outlined':
      css = {
        backgroundColor: 'transparent',
        borderColor: `$${color}`,
        color: `$${textColor}`,
        '&:hover': {
          opacity: '0.8'
        }
      }
      break
    case 'ghost':
      css = {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: `$${textColor}`,
        '&:hover': {
          opacity: '0.8'
        }
      }
  }

  return (
    <StyledButton {...otherProps} css={css}>
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'neutral2',
  size: 'md',
  textColor: 'white',
  variant: 'filled'
}