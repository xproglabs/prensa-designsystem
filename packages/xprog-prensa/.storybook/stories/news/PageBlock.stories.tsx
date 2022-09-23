import React from 'react'

import { PageBlock } from '../../../news'
import { PageBlockTypes } from '../../../types'
import { DefaultLayoutProvider } from '../../../providers/DefaultLayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

import {
  getArgsTableForPageBlock,
  getArgTypesForPageBlock,
  getSlotsMockForPageBlock
} from './PageBlock.controls.tsx'

export default {
  title: 'News/PageBlock',
  component: PageBlock,
  ...getArgTypesForPageBlock,
  parameters: { docs: { page: () => getArgsTableForPageBlock({ PageBlock }) } }
}

const Template = (args) => {
  const {
    slotAutoLeftElements,
    slotAutoCenterElements,
    slotAutoRightElements
  } = getSlotsMockForPageBlock({
    slotLeftItems: args?.slotLeftItems,
    slotCenterItems: args?.slotCenterItems,
    slotRightItems: args?.slotRightItems
  })
  return (
    <PrensaThemeProvider>
      <DefaultLayoutProvider>
        <PageBlock
          {...args}
          slotAutoLeftElements={slotAutoLeftElements}
          slotAutoCenterElements={slotAutoCenterElements}
          slotAutoRightElements={slotAutoRightElements}
        />
      </DefaultLayoutProvider>
    </PrensaThemeProvider>
  )
}

export const Template100: { args: PageBlockTypes.TemplateProps } = Template.bind({})
Template100.args = {
  slotTemplate: 'Template100',
  slotLeftLayout: 'LayoutGrid',
  slotCenterLayout: 'LayoutDefault',
  slotRightLayout: 'LayoutDefault',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Template7030: { args: PageBlockTypes.TemplateProps } = Template.bind({})
Template7030.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutGrid',
  slotCenterLayout: 'LayoutDefault',
  slotRightLayout: 'LayoutDefault',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Playground: { args: PageBlockTypes.TemplateProps } = Template.bind({})
Playground.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutGrid',
  slotCenterLayout: 'LayoutDefault',
  slotRightLayout: 'LayoutDefault',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}
