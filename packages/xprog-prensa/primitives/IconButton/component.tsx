import React from 'react'

import { StyledIconButton } from './styles'
import { IconButtonProps } from './props'

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

  let css_variant = {}
  switch (variant) {
    case 'filled':
      css_variant = {
        backgroundColor: `$${color}`,
        borderColor: `$${color}`,
        'svg': { fill: `$${iconColor ? iconColor : 'white'}` },
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

  return (
    <StyledIconButton
      className='pds-IconButton-root'
      css={{ ...css_variant, ...css }}
      {...otherProps}
    >
      {children ? <svg viewBox={viewBox}>{children}</svg> : icon}
    </StyledIconButton>
  )
}

IconButton.defaultProps = {
  color: 'basicBlackAlpha500',
  size: 'md',
  variant: 'filled',
  viewBox: '0 0 48 48'
}