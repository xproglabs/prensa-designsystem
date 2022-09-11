import React from 'react'

import { StyledIconButton } from './styles'
import { IconButtonProps } from './types'

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  color,
  css,
  icon,
  iconColor,
  variant,
  viewBox,
  ...otherProps
}) => {

  let css_button = {}
  let css_icon = {}
  let css_variant = {}

  switch (variant) {
    case 'filled':
      css_variant = {
        backgroundColor: `$${color}`,
        borderColor: `$${color}`,
        'svg': { fill: `$${iconColor ? iconColor : 'basicWhite'}` },
        '&:hover': { opacity: '0.8' }
      }
      break
    case 'outlined':
      css_variant = {
        backgroundColor: 'transparent',
        borderColor: `$${color}`,
        color: `$${iconColor ? iconColor : color}`,
        'svg': { fill: `$${iconColor ? iconColor : color}` },
        '&:hover': { opacity: '0.8' }
      }
      break
    case 'ghost':
      css_variant = {
        backgroundColor: 'transparent',
        borderColor: `transparent`,
        color: `$${iconColor ? iconColor : color}`,
        'svg': { fill: `$${iconColor ? iconColor : color}` },
        '&:hover': { opacity: '0.8' }
      }
  }

  if (css) {
    if (css.button) {
      css_button = { ...css.button }
    }
    if (css.icon) {
      css_icon = { 'svg': { ...css.icon } }
    }
  }

  return (
    <StyledIconButton
      className='pds-IconButton-root'
      css={{ ...css_variant, ...css_button, ...css_icon }}
      {...otherProps}
    >
      {children ? <svg viewBox={viewBox}>{children}</svg> : icon}
    </StyledIconButton>
  )
}

IconButton.defaultProps = {
  color: 'brandNeutral500',
  size: 'md',
  variant: 'filled',
  viewBox: '0 0 48 48'
}