import React from 'react'

import { StyledButton } from './styles'
import { ButtonProps } from './props'

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  iconLeft,
  iconRight,
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
        color: `$${textColor ? textColor : 'white'}`,
        'svg': {
          fill: `$${textColor ? textColor : 'white'}`,
        },
        '&:hover': {
          opacity: '0.8'
        }
      }
      break
    case 'outlined':
      css = {
        backgroundColor: 'transparent',
        borderColor: `$${color}`,
        color: `$${textColor ? textColor : color}`,
        'svg': {
          fill: `$${textColor ? textColor : color}`,
        },
        '&:hover': {
          opacity: '0.8'
        }
      }
      break
    case 'ghost':
      css = {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: `$${textColor ? textColor : color}`,
        'svg': {
          fill: `$${textColor ? textColor : color}`,
        },
        '&:hover': {
          opacity: '0.8'
        }
      }
  }

  return (
    <StyledButton className='pds-button' {...otherProps} css={css}>
      {iconLeft && iconLeft}
      {children}
      {iconRight && iconRight}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'neutral2',
  size: 'md',
  variant: 'filled'
}