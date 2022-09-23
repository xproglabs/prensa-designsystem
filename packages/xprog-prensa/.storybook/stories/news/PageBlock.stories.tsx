import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { PageBlock } from '../../../news'
import { PageBlockTypes } from '../../../types'
import { DefaultLayoutProvider } from '../../../providers/DefaultLayoutProvider'
import {
  slotLayoutArray,
  templatesArray
} from '../../../providers/DefaultLayoutProvider/data'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

export default {
  title: 'News/PageBlock',
  component: PageBlock,
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
        max: 20
      }
    },
    slotCenterItems: {
      control: {
        type: 'range',
        min: 0,
        max: 20
      }
    },
    slotRightItems: {
      control: {
        type: 'range',
        min: 0,
        max: 20
      }
    }
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable components={{ PageBlock }} />
        </>
      )
    }
  }
}

const itemObject = {
  name: 'ImageTop',
  type: 'com.atex.plugins.teaser.TeaserBean',
  path: ''
}

const Template = (args) => {
  const slotAutoLeftElements = []
  const slotAutoCenterElements = []
  const slotAutoRightElements = []
  for (let i = 0; i < args?.slotLeftItems; i++) {
    slotAutoLeftElements.push(itemObject)
  }
  for (let i = 0; i < args?.slotCenterItems; i++) {
    slotAutoCenterElements.push(itemObject)
  }
  for (let i = 0; i < args?.slotRightItems; i++) {
    slotAutoRightElements.push(itemObject)
  }
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

export const Default: { args: PageBlockTypes.TemplateProps } = Template.bind({})
Default.args = {
  slotTemplate: 'Template7030',
  slotLeftLayout: 'LayoutGrid',
  slotCenterLayout: 'LayoutDefault',
  slotRightLayout: 'LayoutDefault',
  slotLeftItems: 1,
  slotCenterItems: 3,
  slotRightItems: 1
}
