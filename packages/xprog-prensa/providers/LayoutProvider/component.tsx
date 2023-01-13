import React from 'react'

import { LayoutProviderDefaults } from './data'
import { LayoutProviderProps } from './types'

export const LayoutProvider = ({ children, ...otherProps }: LayoutProviderProps) => {
  return (
    <div className='pds-LayoutProvider-root'>
      {React.Children.map(children, (item: any) => React.cloneElement(item, {
        layouts: LayoutProviderDefaults.layouts,
        teasers: LayoutProviderDefaults.teasers,
        templates: LayoutProviderDefaults.templates,
        pageBlockConfig: LayoutProviderDefaults.pageBlock,
        ...otherProps
      }))}
    </div>
  )
}
