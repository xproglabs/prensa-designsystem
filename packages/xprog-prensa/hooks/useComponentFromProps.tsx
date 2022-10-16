import React, { cloneElement, isValidElement } from 'react'

export type ComponentFromPropsType = React.ElementType | React.ReactNode | React.FC<any> | any;
export interface UseComponentFromPropsProps {
  bypass?: boolean;
  component?: ComponentFromPropsType;
  componentProps?: any;
}

export function useComponentFromProps({
  bypass = false,
  component,
  componentProps,
  ...rest
}: UseComponentFromPropsProps, children = null) {

  const CustomComponent = component
  const isReactElement = isValidElement(CustomComponent)

  if (bypass === true) {
    return children
  }

  if (isReactElement) {
    return cloneElement(CustomComponent, componentProps, children)
  }

  if (typeof CustomComponent === 'function') {
    return (
      <CustomComponent {...rest} {...componentProps}>
        {children}
      </CustomComponent>
    )
  }
}