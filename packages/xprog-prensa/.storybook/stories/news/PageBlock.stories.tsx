import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { PageBlock } from '../../../news'
import { PageBlockProps } from '../../../news/PageBlock/types'
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
      <PageBlock {...args} />
    </PrensaThemeProvider>
  )
}

export const Default: { args: PageBlockProps } = Template.bind({})
Default.args = {
  customCss: {
    columnHolder: {
      "@lg": {
        align: [
          "row",
          "between",
          "top"
        ],
        maxWidth: "1280px",
        width: "calc(100% - $8)"
      }
    },
    container: {
      backgroundColor: "rgba(0,0,0,0.04)",
      pt: "$3",
      width: "100%"
    }
  },
  customProps: {

  },
  name: "Politics Pageblock",
  title: "Economia > Template 50-50/100+S8",
  className: "politicsPageBlock",
  slotTemplate: "template7030",
  slotAutoLeftElements: [
    {
      name: "TeaserDefaultImageTop",
      type: "com.atex.plugins.teaser.TeaserBean",
      path: ""
    }
  ],
  slotAutoCenterElements: [
    {
      name: "TeaserDefaultImageTop",
      type: "com.atex.plugins.teaser.TeaserBean",
      path: ""
    }
  ],
  slotAutoRightElements: [
    {
      name: "TeaserDefaultImageTop",
      type: "com.atex.plugins.teaser.TeaserBean",
      path: ""
    }
  ],
  slotManualBottomLeft: [],
  slotManualBottomCenter: [],
  slotManualBottomRight: [],
  slotManualExtra: [],
  slotManualTopLeft: [],
  slotManualTopCenter: [],
  slotManualTopRight: [],
  slotLeftComponent: "",
  slotLeftIconValue: "",
  slotLeftReadMoreEnabled: false,
  slotLeftReadMoreLink: "",
  slotLeftReadMoreTitle: "",
  slotLeftTeaserBgColor: "background1",
  slotLeftTeaserColor: "editorial1",
  slotLeftTeaserValue: "TeaserFeaturedImageTop",
  slotLeftTitleEnabled: false,
  slotLeftTitleLink: "",
  slotLeftTitleValue: "",
  slotCenterComponent: "",
  slotCenterIconValue: "",
  slotCenterReadMoreEnabled: false,
  slotCenterReadMoreLink: "",
  slotCenterReadMoreTitle: "",
  slotCenterTeaserColor: "editorial1",
  slotCenterTeaserBgColor: "background1",
  slotCenterTeaserValue: "TeaserDefaultImageLeft",
  slotCenterTitleEnabled: false,
  slotCenterTitleLink: "",
  slotCenterTitleValue: "",
  slotRightComponent: "",
  slotRightIconValue: "",
  slotRightReadMoreEnabled: false,
  slotRightReadMoreLink: "",
  slotRightReadMoreTitle: "",
  slotRightTeaserBgColor: "background1",
  slotRightTeaserColor: "editorial1",
  slotRightTeaserValue: "TeaserDefaultImageLeft",
  slotRightTitleValue: "",
  slotRightTitleEnabled: false,
  slotRightTitleLink: "",
}