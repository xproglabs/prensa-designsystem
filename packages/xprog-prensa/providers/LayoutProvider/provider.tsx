import React from 'react'

import * as data from './data'
import { LayoutProviderProps } from './props'

export const LayoutProvider = (props: LayoutProviderProps) => {
  const { children, ...otherProps } = props
  return (
    <div className={'LayoutProvider'}>
      {React.Children.map(children, (item: any) =>
        React.cloneElement(item, { ...data.pageblockConfig, ...data, ...otherProps })
      )}
    </div>
  )
}
