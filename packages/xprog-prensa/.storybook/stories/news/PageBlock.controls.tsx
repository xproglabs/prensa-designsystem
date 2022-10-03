import { ArgsTable, Title } from '@storybook/addon-docs'
import React from 'react'

import { slotLayoutArray, templatesArray } from '../../../providers/LayoutProvider/data'
import { PageBlockTypes as t } from '../../../types'

const getArgsTableForPageBlock = (components) => {
  <>
    <Title />
    <ArgsTable components={components} />
  </>
}

const getArgTypesForPageBlock = {
  argTypes: {
    slotTemplate: {
      control: {
        type: 'select',
        options: templatesArray
      }
    },
    slotLeftLayout: {
      control: {
        type: 'select',
        options: slotLayoutArray
      }
    },
    slotCenterLayout: {
      control: {
        type: 'select',
        options: slotLayoutArray
      }
    },
    slotRightLayout: {
      control: {
        type: 'select',
        options: slotLayoutArray
      }
    },
    slotLeftItems: {
      control: {
        type: 'range',
        min: 0,
        max: 12
      }
    },
    slotCenterItems: {
      control: {
        type: 'range',
        min: 0,
        max: 12
      }
    },
    slotRightItems: {
      control: {
        type: 'range',
        min: 0,
        max: 12
      }
    }
  }
}

const getSlotsMockForPageBlock = ({
  slotLeftItems,
  slotCenterItems,
  slotRightItems
}: MockForPageBlockProps): MockForPageBlock => {
  const itemObject: t.ItemDefaultProps = {
    name: 'ImageTop',
    type: 'com.atex.plugins.teaser.TeaserBean',
    path: ''
  }
  const slotAutoLeftElements: Array<t.ItemProps> = []
  const slotAutoCenterElements: Array<t.ItemProps> = []
  const slotAutoRightElements: Array<t.ItemProps> = []
  for (let i = 0; i < slotLeftItems; i++) {
    slotAutoLeftElements.push(TeaserData)
  }
  for (let i = 0; i < slotCenterItems; i++) {
    slotAutoCenterElements.push(TeaserData)
  }
  for (let i = 0; i < slotRightItems; i++) {
    slotAutoRightElements.push(TeaserData)
  }
  return {
    slotAutoLeftElements,
    slotAutoCenterElements,
    slotAutoRightElements
  }
}

type MockForPageBlock = {
  slotAutoLeftElements?: t.SlotItemsType,
  slotAutoCenterElements?: t.SlotItemsType,
  slotAutoRightElements?: t.SlotItemsType
}

interface MockForPageBlockProps {
  slotLeftItems: Number,
  slotCenterItems: Number,
  slotRightItems
}

export {
  getArgsTableForPageBlock,
  getArgTypesForPageBlock,
  getSlotsMockForPageBlock
}