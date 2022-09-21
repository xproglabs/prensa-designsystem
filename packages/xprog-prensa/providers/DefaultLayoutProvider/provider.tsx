import React from 'react'

import * as data from './data'
import { DefaultLayoutProviderProps } from './props'

export const DefaultLayoutProvider = (props: DefaultLayoutProviderProps) => {
  const { children, ...otherProps } = props
  return (
    <div className={'defaultLayoutProvider'}>
      {React.Children.map(children, (item: any) =>
        React.cloneElement(item, { ...data, ...otherProps })
      )}
    </div>
  )
}
