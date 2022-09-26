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
        max: 8
      }
    },
    slotCenterItems: {
      control: {
        type: 'range',
        min: 0,
        max: 8
      }
    },
    slotRightItems: {
      control: {
        type: 'range',
        min: 0,
        max: 8
      }
    }
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
    slotAutoLeftElements.push(itemObject)
  }
  for (let i = 0; i < slotCenterItems; i++) {
    slotAutoCenterElements.push(itemObject)
  }
  for (let i = 0; i < slotRightItems; i++) {
    slotAutoRightElements.push(itemObject)
  }
  return {
    slotAutoLeftElements,
    slotAutoCenterElements,
    slotAutoRightElements
  }
}

export {
  getArgsTableForPageBlock,
  getArgTypesForPageBlock,
  getSlotsMockForPageBlock
}