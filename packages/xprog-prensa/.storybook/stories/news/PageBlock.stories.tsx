import React from 'react'

import { PageBlock, Teaser } from '../../../news'
import { PageBlockTypes } from '../../../types'
import { LayoutProvider } from '../../../providers/LayoutProvider'
import { layouts, templates } from '../../../providers/LayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

import {
  getArgsTableForPageBlock,
  getArgTypesForPageBlock,
  getSlotsMockForPageBlock
} from './PageBlock.controls'
import { get } from 'lodash'

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
          templateBgColor={args?.templateBgColor}
          slotLayouts={layouts}
          templates={templates}
        />
      </LayoutProvider>
    </PrensaThemeProvider>
  )
}

export const Template100: { args: PageBlockTypes.PageBlockProps } = Template.bind({})
Template100.args = {
  slotTemplate: 'Template100',
  slotLeftLayout: 'LayoutFeatured',
  slotLeftBgColor: 'basicSuccess400',
  slotCenterLayout: 'LayoutFeatured',
  slotRightLayout: 'LayoutFeatured',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1,
  templateBgColor: 'basicError300'
}

export const Template7030: { args: PageBlockTypes.PageBlockProps } = Template.bind({})
Template7030.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutFeatured',
  slotCenterLayout: 'LayoutFeatured',
  slotRightLayout: 'LayoutFeatured',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const Playground: { args: PageBlockTypes.PageBlockProps } = Template.bind({})
Playground.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutFeatured',
  slotCenterLayout: 'LayoutFeatured',
  slotRightLayout: 'LayoutFeatured',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}

export const MostRead: { args: PageBlockTypes.PageBlockProps } = Template.bind({})
MostRead.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutFeatured',
  slotCenterLayout: 'LayoutMostRead',
  slotRightLayout: 'LayoutMostRead',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}
