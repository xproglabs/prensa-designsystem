import React from 'react'

import { S } from './styled'
import { ITypography } from './types'

export const Typography: React.FC<ITypography> = ({ children, className, css, variant, ...otherProps }) => {

  function generateVariantCss() {
    if (variant !== undefined && typeof variant === 'string') {
      return {
        fontFamily: '$primary',
        fontSize: `$${variant}`,
        fontWeight: `$${variant}`,
        lineHeight: `$${variant}`
      }
    } else {
      return {}
    }
  }

  const cssRouter = { ...generateVariantCss(), ...css }

  return (
    <S.Typography
      className={className}
      css={cssRouter}
      {...otherProps}
    >
      {children}
    </S.Typography>
  )
}