import React from 'react'

export interface UseLinkProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  bypass?: boolean;
  component?: React.ReactElement | React.ReactNode | any;
  componentProps?: any;
}

export function useLink({
  bypass = false,
  component: CustomLink,
  componentProps,
  ...rest
}: UseLinkProps, children) {

  if (bypass === true) {
    return children
  }

  if (CustomLink) {
    return (
      <CustomLink {...rest} {...componentProps}>
        <a {...rest}>
          {children}
        </a>
      </CustomLink>
    )
  }

  return (
    <a {...rest}>
      {children}
    </a>
  )
}