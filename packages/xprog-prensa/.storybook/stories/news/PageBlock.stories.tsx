import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { PageBlock } from '../../../news'
import { PageBlockTypes } from '../../../types'
import { DefaultLayoutProvider } from '../../../providers/DefaultLayoutProvider'
import { templatesArray } from '../../../providers/DefaultLayoutProvider/data'
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

const Template = (args) => {
  return (
    <PrensaThemeProvider>
      <DefaultLayoutProvider>
        <PageBlock {...args} />
      </DefaultLayoutProvider>
    </PrensaThemeProvider>
  )
}

export const Default: { args: PageBlockTypes.TemplateProps } = Template.bind({})
Default.args = {
  slotTemplate: 'Template7030'
}
