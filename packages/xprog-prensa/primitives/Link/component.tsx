import React from 'react'

import { StyledA } from './styled'
import { LinkProps } from './types'

export const Link = React.forwardRef<React.ElementRef<typeof StyledA>, LinkProps>(({
  children,
  bypass = false,
  component: CustomLink,
  componentProps,
  componentOptions,
  href,
  ...rest
}, ref: any) => {

  if (bypass === true) {
    return children
  }

  if (CustomLink) {
    return (
      <CustomLink href={href} {...componentProps}>
        {componentOptions?.renderOnlyCustomLink ?
          <React.Fragment>
            {children}
          </React.Fragment>
          :
          <StyledA ref={ref} href={href} {...rest}>
            {children}
          </StyledA>
        }
      </CustomLink>
    )
  }

  return (
    <StyledA ref={ref} {...rest}>
      {children}
    </StyledA>
  )
})

Link.displayName = 'Link'