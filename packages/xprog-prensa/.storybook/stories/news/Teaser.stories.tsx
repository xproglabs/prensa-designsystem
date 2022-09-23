import React from 'react'

import { PageBlock, Teaser } from '../../../news'
import { TeaserTypes } from '../../../types'
import { DefaultLayoutProvider } from '../../../providers/DefaultLayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

import { getArgsTableForTeaser, getArgTypesForTeaser } from './Teaser.controls'
import { ItemDefaultProps } from '../../../news/PageBlock/Item/types'

export default {
  title: 'News/Teaser',
  component: Teaser,
  ...getArgTypesForTeaser,
  parameters: { docs: { page: () => getArgsTableForTeaser({ Teaser }) } }
}

const ComponentTeaser: React.FC<TeaserTypes.TeaserProps> = ({
  css,
  name,
  path,
  type
}) => {
  const item: TeaserTypes.TeaserDefaultProps = {
    name,
    path,
    type
  }
  return (
    <PrensaThemeProvider>
      <DefaultLayoutProvider>
        <PageBlock
          slotTemplate='Template100'
          slotAutoLeftElements={[item]}
          slotLeftLayout={'teaser'}
          slotLayouts={[{
            default: {
              backgroundColor: '$basicBlackAlpha400'
            }
          }]}
          itemComponent={Teaser}
        />
      </DefaultLayoutProvider>
      <DefaultLayoutProvider>
        <PageBlock
          slotTemplate='Template7030'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </DefaultLayoutProvider>
      <DefaultLayoutProvider>
        <PageBlock
          slotTemplate='Template30'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </DefaultLayoutProvider>
    </PrensaThemeProvider>
  )
}

export const Teaser100: { args: TeaserTypes.TeaserProps } =
  ComponentTeaser.bind({})
Teaser100.args = {
  className: 'Teaser100',
  css: {
    backgroundColor: '$basicBlackAlpha300'
  },
  name: 'Titulo1',
  path: '/',
  type: ''
}

export const Teaser7030: { args: TeaserTypes.TeaserProps } =
  ComponentTeaser.bind({})
Teaser7030.args = {
  className: 'Teaser7030',
  name: 'Titulo1',
  path: '/',
  type: ''
}

export const Playground: { args: TeaserTypes.TeaserProps } =
  ComponentTeaser.bind({})
Playground.args = {
  className: 'Playground',
  name: 'Titulo1',
  path: '/',
  type: ''
}
