import * as t from '../../../news/PageBlock/types'

const pageblockConfig: t.TemplateConfig = {
  slotAutoLeftElements: [
    {
      name: 'Featured-TDImgTop',
      type: 'com.atex.plugins.teaser.TeaserBean',
      path: ''
    }
  ],
  slotAutoCenterElements: [
    {
      name: 'ImageTop',
      type: 'com.atex.plugins.teaser.TeaserBean',
      path: ''
    },
    {
      name: 'ImageTop',
      type: 'com.atex.plugins.teaser.TeaserBean',
      path: ''
    },
    {
      name: 'ImageTop',
      type: 'com.atex.plugins.teaser.TeaserBean',
      path: ''
    }
  ],
  slotAutoRightElements: [
    {
      name: 'ImageTop',
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
  slotLeftLayout: 'LayoutFeatured',
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
  slotCenterLayout: 'LayoutDefault',
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
  slotRightLayout: 'LayoutDefault',
  slotRightTitleValue: '',
  slotRightTitleEnabled: false,
  slotRightTitleLink: ''
}

export { pageblockConfig }
