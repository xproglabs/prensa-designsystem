import React from 'react'

import { LayoutProvider } from '../../../providers/LayoutProvider'
import { PageBlock } from '../../../news/PageBlock'
import { Teaser } from '../../../news/Teaser'
import { TeaserProps } from '../../../news/Teaser/types'
import { teasers as T } from '../../../providers/LayoutProvider/data/teasers'

import {
  getArgsTableForTeaser,
  getArgTypesForTeaser,
  getDataForTeaser
} from './Teaser.controls'

export default {
  title: 'News/Teaser',
  component: Teaser,
  parameters: { docs: { page: () => getArgsTableForTeaser({ Teaser }) } },
  ...getArgTypesForTeaser
}

const ComponentTeaser: React.FC<TeaserProps> = (props) => {
  const item: TeaserProps = props
  return (
    <>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template30'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template7030'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
      <LayoutProvider>
        <PageBlock
          slotTemplate='Template100'
          slotAutoLeftElements={[item]}
          itemComponent={Teaser}
        />
      </LayoutProvider>
    </>
  )
}

const TeaserData = getDataForTeaser

export const TeaserHeadlineSm: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadlineSm.args = {
  ...T.TeaserHeadlineSm,
  ...TeaserData
}

export const TeaserHeadlineLg: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadlineLg.args = {
  ...T.TeaserHeadlineLg,
  ...TeaserData
}

export const TeaserImageBottom: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageBottom.args = {
  ...T.TeaserImageBottom,
  ...TeaserData
}

export const TeaserImageLeft: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageLeft.args = {
  ...T.TeaserImageLeft,
  ...TeaserData
}

export const TeaserImageRight: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageRight.args = {
  ...T.TeaserImageRight,
  ...TeaserData
}

export const TeaserImageRightLg: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageRightLg.args = {
  ...T.TeaserImageRightLg,
  ...TeaserData
}

export const TeaserImageTop: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserImageTop.args = {
  ...T.TeaserImageTop,
  ...TeaserData
}

export const TeaserRelated: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserRelated.args = {
  ...T.TeaserRelated,
  ...TeaserData
}

export const TeaserNumberDefault: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserNumberDefault.args = {
  ...T.TeaserNumber,
  ...TeaserData,
  numberColor: 'basicSuccess800',
  numberVariant: 'default',
  numberValue: '1'
}

export const TeaserNumberFilled: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserNumberFilled.args = {
  ...T.TeaserNumber,
  ...TeaserData,
  numberBgColor: 'basicError300',
  numberColor: 'basicWhiteAlpha800',
  numberVariant: 'filled',
  numberValue: '2'
}

export const TeaserHeadlineImageSm: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadlineImageSm.args = {
  ...T.TeaserHeadlineImageSm,
  ...TeaserData
}

export const TeaserHeadlineImageMd: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadlineImageMd.args = {
  ...T.TeaserHeadlineImageMd,
  ...TeaserData
}

export const TeaserHeadlineImageLg: { args: TeaserProps } = ComponentTeaser.bind({})
TeaserHeadlineImageLg.args = {
  ...T.TeaserHeadlineImageLg,
  ...TeaserData
}
