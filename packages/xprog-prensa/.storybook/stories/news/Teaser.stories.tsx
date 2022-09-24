import React from 'react'

import { LayoutProvider } from '../../../providers/LayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'
import { PageBlock } from '../../../news/PageBlock'
import { Teaser } from '../../../news/Teaser'
import { TeaserProps } from '../../../news/Teaser/types'

import { getArgsTableForTeaser, getArgTypesForTeaser } from './Teaser.controls'

export default {
  title: 'News/Teaser',
  component: Teaser,
  ...getArgTypesForTeaser,
  parameters: { docs: { page: () => getArgsTableForTeaser({ Teaser }) } }
}

const ComponentTeaser: React.FC<TeaserProps> = ({ css, name, path, type }) => {
  const item: TeaserProps = {
    css,
    name,
    path,
    type
  }
  return (
    <PrensaThemeProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template100'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template7030'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template30'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
    </PrensaThemeProvider>
  )
}

export const Teaser100: { args: TeaserProps } = ComponentTeaser.bind({})
Teaser100.args = {
  className: 'Teaser100',
  css: {
    backgroundColor: '$basicBlackAlpha300'
  },
  name: 'Titulo1',
  path: '/',
  type: ''
}

export const Teaser7030: { args: TeaserProps } = ComponentTeaser.bind({})
Teaser7030.args = {
  className: 'Teaser7030',
  name: 'Titulo1',
  path: '/',
  type: ''
}

export const Playground: { args: TeaserProps } = ComponentTeaser.bind({})
Playground.args = {
  className: 'Playground',
  name: 'Titulo1',
  path: '/',
  type: ''
}
