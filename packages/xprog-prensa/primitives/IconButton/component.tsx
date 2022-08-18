import React from 'react'

import { StyledIconButton } from './styles'
import { IconButtonProps } from './props'

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  color,
  icon,
  iconColor,
  variant,
  viewBox,
  ...otherProps
}) => {

  let css = {}
  switch (variant) {
    case 'filled':
      css = {
        backgroundColor: `$${color}`,
        borderColor: `$${color}`,
        'svg': { fill: `$${iconColor ? iconColor : 'white'}` },
      }
      break
    case 'outlined':
      css = {
        backgroundColor: 'transparent',
        borderColor: `$${color}`,
        color: `$${iconColor ? iconColor : color}`,
        'svg': { fill: `$${iconColor ? iconColor : color}` },
        '&:hover': { opacity: '0.8' }
      }
      break
    case 'ghost':
      css = {
        backgroundColor: 'transparent',
        borderColor: `transparent`,
        color: `$${iconColor ? iconColor : color}`,
        'svg': { fill: `$${iconColor ? iconColor : color}` },
        '&:hover': { opacity: '0.8' }
      }
  }

  return (
    <StyledIconButton className='pds-IconButton-root' css={css} {...otherProps}>
      {children ? <svg viewBox={viewBox}>{children}</svg> : icon}
    </StyledIconButton>
  )
}

IconButton.defaultProps = {
  color: 'neutral2',
  size: 'md',
  variant: 'filled',
  viewBox: '0 0 48 48'
}