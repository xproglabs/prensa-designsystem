import React from 'react'

import { Typography } from '../Typography'
import { StyledButton } from './styles'
import { ButtonProps } from './props'

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  css,
  iconLeft,
  iconRight,
  variant,
  textColor,
  textVariant,
  ...otherProps
}) => {

  let css_variant = {}
  switch (variant) {
    case 'filled':
      css_variant = {
        backgroundColor: `$${color}`,
        borderColor: `$${color}`,
        color: `$${textColor ? textColor : 'white'}`,
        'svg': { fill: `$${textColor ? textColor : 'white'}` },
        '&:hover': { opacity: '0.8' }
      }
      break
    case 'outlined':
      css_variant = {
        backgroundColor: 'transparent',
        borderColor: `$${color}`,
        color: `$${textColor ? textColor : color}`,
        'svg': { fill: `$${textColor ? textColor : color}` },
        '&:hover': { opacity: '0.8' }
      }
      break
    case 'ghost':
      css_variant = {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: `$${textColor ? textColor : color}`,
        'svg': { fill: `$${textColor ? textColor : color}` },
        '&:hover': { opacity: '0.8' }
      }
  }

  return (
    <StyledButton
      className='pds-Button-root'
      css={{ ...css_variant, ...css }}
      {...otherProps}
    >
      {iconLeft && iconLeft}
      <Typography as='span' variant={textVariant}>
        {children}
      </Typography>
      {iconRight && iconRight}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'neutral2',
  size: 'md',
  textVariant: 'default-texts-sm',
  variant: 'filled',
}