import React from 'react'

import { PageBlock, Teaser } from '../../../news'
import { PageBlockProps } from '../../../news/PageBlock/types'
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
          itemComponent={Teaser}
          slotAutoLeftElements={slotAutoLeftElements}
          slotAutoCenterElements={slotAutoCenterElements}
          slotAutoRightElements={slotAutoRightElements}
        />
      </LayoutProvider>
    </PrensaThemeProvider>
  )
}

export const Template100: { args: PageBlockProps } = Template.bind({})
Template100.args = {
  slotTemplate: 'Template100',
  slotLeftLayout: 'LayoutFeatured',
  slotCenterLayout: 'LayoutFeatured',
  slotRightLayout: 'LayoutFeatured',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Template7030: { args: PageBlockProps } = Template.bind({})
Template7030.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutFeatured',
  slotCenterLayout: 'LayoutFeatured',
  slotRightLayout: 'LayoutFeatured',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Template30: { args: PageBlockProps } = Template.bind({})
Template30.args = {
  slotTemplate: 'Template30',
  slotLeftLayout: 'LayoutFeatured',
  slotCenterLayout: 'LayoutFeatured',
  slotRightLayout: 'LayoutFeatured',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Playground: { args: PageBlockProps } = Template.bind({})
Playground.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutFeatured',
  slotCenterLayout: 'LayoutFeatured',
  slotRightLayout: 'LayoutFeatured',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}
