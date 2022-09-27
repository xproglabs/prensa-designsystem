import React from 'react'

import { PageBlock } from '../../../news'
import { PageBlockTypes } from '../../../types'
import { LayoutProvider } from '../../../providers/LayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

import {
  getArgsTableForPageBlock,
  getArgTypesForPageBlock,
  getSlotsMockForPageBlock
} from './PageBlock.controls'

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
      <LayoutProvider>
        <PageBlock
          {...args}
          slotAutoLeftElements={slotAutoLeftElements}
          slotAutoCenterElements={slotAutoCenterElements}
          slotAutoRightElements={slotAutoRightElements}
        />
      </LayoutProvider>
    </PrensaThemeProvider>
  )
}

export const Template100: { args: PageBlockTypes.PageBlockProps } = Template.bind({})
Template100.args = {
  slotTemplate: 'Template100',
  slotLeftLayout: 'LayoutGrid',
  slotCenterLayout: 'LayoutDefault',
  slotRightLayout: 'LayoutDefault',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Template7030: { args: PageBlockTypes.PageBlockProps } = Template.bind({})
Template7030.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutGrid',
  slotCenterLayout: 'LayoutDefault',
  slotRightLayout: 'LayoutDefault',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Playground: { args: PageBlockTypes.PageBlockProps } = Template.bind({})
Playground.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutGrid',
  slotCenterLayout: 'LayoutDefault',
  slotRightLayout: 'LayoutDefault',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}
