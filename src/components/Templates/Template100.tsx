import React from 'react'

import Block from '../Block'
import Carousel from '../Carousel'
import RenderSlot from '../RenderSlot'
import { RenderSlotProps } from '../RenderSlot/types'
import { renderSpaceSlot } from '../RenderSlot/utils'

type ResponsiveHeight = [string, string]

type CarouselProps = {
  enabled: boolean;
  height: ResponsiveHeight;
  querie: string;
}

interface Template100Props {
  carousel?: CarouselProps;
  slot100: RenderSlotProps;
}

const Template100 = ({ carousel, slot100 }: Template100Props) => {
  const renderContent = () => {
    if (carousel && carousel.enabled === true) {
      return (
        <Carousel {...carousel}>
          <RenderSlot {...slot100} />
        </Carousel>
      )
    } else {
      return (
        <RenderSlot {...slot100} />
      )
    }
  }
  return (
    <Block
      align='column'
      alignx='left'
      aligny='top'
      mb={2}
      lg={{
        mb: 3
      }}
      width='100%'>
      {(renderSpaceSlot(slot100.spaceA))}
      <Block
        align='column'
        alignx='center'
        aligny='top'
        lg={{
          align: 'row',
          alignx: 'between',
          aligny: 'top'
        }}
        width='100%'>
        {renderContent()}
      </Block>
      {(renderSpaceSlot(slot100.spaceB))}
    </Block>
  )
}

export { Template100 }