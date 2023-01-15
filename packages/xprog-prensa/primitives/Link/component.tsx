import React from 'react'

import { StyledA } from './styled'
import { LinkProps } from './types'

export const Link = React.forwardRef<React.ElementRef<typeof StyledA>, LinkProps>(({
  children,
  bypass = false,
  component: CustomLink,
  componentProps,
  componentOptions,
  ...rest
}, ref: any) => {

  if (bypass === true) {
    return children
  }

  if (CustomLink) {
    return (
      <CustomLink {...rest} {...componentProps}>
        {componentOptions?.renderOnlyCustomLink ?
          <React.Fragment>
            {children}
          </React.Fragment>
          :
          <StyledA ref={ref} {...rest}>
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