import React from 'react'
import Block from '../components/Block'
import RenderSlot from '../components/RenderSlot'
import Carousel from '../components/Carousel'

type ResponsiveHeight = [string, string]

type CarouselProps = {
  enabled: boolean;
  height: ResponsiveHeight;
  querie: string;
}

interface Template100Props {
  carousel: CarouselProps;
  slot100: object;
}

const Template100 = ({ carousel, slot100 }: Template100Props) => {
  return (
    <Block
      align="column"
      alignx="center"
      aligny="top"
      lg={{
        align: 'row',
        alignx: 'between',
        aligny: 'top'
      }}
      width="100%">
      {
        carousel.enabled == true ?
          <Carousel {...carousel}>
            <RenderSlot {...slot100} />
          </Carousel>
          :
          <RenderSlot {...slot100} />
      }
    </Block>
  )
}

export {Template100}