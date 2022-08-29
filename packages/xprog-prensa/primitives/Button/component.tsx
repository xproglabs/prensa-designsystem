import React from 'react'

import { Typography } from '../Typography'
import { StyledButton } from './styles'
import { ButtonProps } from './props'

export const Button: React.FC<ButtonProps> = ({
  children,
  color,
  css,
  labelSpacing,
  iconLeft,
  iconRight,
  variant,
  textColor,
  textVariant,
  ...otherProps
}) => {

  // variants css defintion
  let css_label_spacing = { px: `$${labelSpacing}` }
  let css_variant = {}

  switch (variant) {
    case 'filled':
      css_variant = {
        backgroundColor: `$${color}`,
        borderColor: `$${color}`,
        color: `$${textColor ? textColor : 'basicWhite'}`,
        'svg': { fill: `$${textColor ? textColor : 'basicWhite'}` },
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

  let button_css = { ...css_variant }
  let label_css = { ...css_label_spacing }

  if (css && css.button) {
    button_css = { ...button_css, ...css.button }
  }
  if (css && css.label) {
    label_css = { ...label_css, ...css.label }
  }

  const renderChildren = () => {
    if (typeof children === 'string') {
      return (
        <Typography
          as='span'
          variant={textVariant}
          css={label_css}
        >
          {children}
        </Typography>
      )
    } else {
      return (
        <>
          {children}
        </>
      )
    }
  }

  return (
    <StyledButton
      className='pds-Button-root'
      css={button_css}
      {...otherProps}
    >
      {iconLeft && iconLeft}
      {renderChildren()}
      {iconRight && iconRight}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'brandNeutral600',
  labelSpacing: '3',
  size: 'md',
  textVariant: 'default-texts-sm',
  variant: 'filled',
}