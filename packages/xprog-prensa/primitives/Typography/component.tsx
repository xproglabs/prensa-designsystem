import React from 'react'

import { S } from './styled'
import { ITypography } from './types'

export const Typography: React.FC<ITypography> = ({ children, css, variant, ...otherProps }) => {

  function generateVariantCss() {
    if (variant !== undefined && typeof variant === 'string') {
      return {
        fontFamily: '$primary',
        fontSize: `$${variant}`,
        fontWeight: `$${variant}`,
        lineHeight: `$${variant}`
      }
    }
  }

  const cssRouter = { ...generateVariantCss(), ...css }

  return (
    <S.Typography css={cssRouter} {...otherProps}>
      {children}
    </S.Typography>
  )
}