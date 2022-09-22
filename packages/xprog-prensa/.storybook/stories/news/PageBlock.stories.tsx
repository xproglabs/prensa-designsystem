import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { PageBlock } from '../../../news'
import { TemplateProps } from '../../../news/PageBlock/types'
import { DefaultLayoutProvider } from '../../../providers/DefaultLayoutProvider'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

export default {
  title: 'News/PageBlock',
  component: PageBlock,
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

export const Default: { args: TemplateProps } = Template.bind({})
Default.args = {
  customCss: {
    container: {
      backgroundColor: 'rgba(0,0,0,0.04)',
      pt: '$3',
      width: '100%'
    },
    columnHolder: {
      '@lg': {
        align: ['row', 'between', 'top'],
        maxWidth: '1280px',
        width: 'calc(100% - $8)'
      }
    }
  },
  customProps: {},
  className: 'politicsPageBlock',
  slotTemplate: 'Template7030',
  slotAutoLeftElements: [
    {
      name: 'TeaserDefaultImageTop',
      type: 'com.atex.plugins.teaser.TeaserBean',
      path: ''
    }
  ],
  slotAutoCenterElements: [
    {
      name: 'TeaserDefaultImageTop',
      type: 'com.atex.plugins.teaser.TeaserBean',
      path: ''
    }
  ],
  slotAutoRightElements: [
    {
      name: 'TeaserDefaultImageTop',
      type: 'com.atex.plugins.teaser.TeaserBean',
      path: ''
    }
  ],
  slotManualBottomLeft: [],
  slotManualBottomCenter: [],
  slotManualBottomRight: [],
  slotManualExtra: [],
  slotManualTopLeft: [],
  slotManualTopCenter: [],
  slotManualTopRight: [],
  slotLeftComponent: '',
  slotLeftIconValue: '',
  slotLeftReadMoreEnabled: false,
  slotLeftReadMoreLink: '',
  slotLeftReadMoreTitle: '',
  slotLeftTeaserBgColor: 'background1',
  slotLeftTeaserColor: 'editorial1',
  slotLeftTeaserValue: 'LayoutFeatured',
  slotLeftTitleEnabled: false,
  slotLeftTitleLink: '',
  slotLeftTitleValue: '',
  slotCenterComponent: '',
  slotCenterIconValue: '',
  slotCenterReadMoreEnabled: false,
  slotCenterReadMoreLink: '',
  slotCenterReadMoreTitle: '',
  slotCenterTeaserColor: 'editorial1',
  slotCenterTeaserBgColor: 'background1',
  slotCenterTeaserValue: 'LayoutDefault',
  slotCenterTitleEnabled: false,
  slotCenterTitleLink: '',
  slotCenterTitleValue: '',
  slotRightComponent: '',
  slotRightIconValue: '',
  slotRightReadMoreEnabled: false,
  slotRightReadMoreLink: '',
  slotRightReadMoreTitle: '',
  slotRightTeaserBgColor: 'background1',
  slotRightTeaserColor: 'editorial1',
  slotRightTeaserValue: 'LayoutDefault',
  slotRightTitleValue: '',
  slotRightTitleEnabled: false,
  slotRightTitleLink: ''
}
