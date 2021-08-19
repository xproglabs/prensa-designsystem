import React from 'react'
import Block from '../components/Block'
import RenderSlot from '../components/RenderSlot'

type SlotProps = {
  color: string; 
  column_items: number;
  column_padding: string;
  image_circle: boolean;
  layout: object;
  has_number: boolean;
  slot: Array<any>;
}

interface Props {
  slot70: SlotProps;
  slot30: SlotProps;
}

const Template7030 = ({ slot70, slot30 } : Props) => {
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
      width="100%"
    >
      <Block
        align="column"
        alignx="center"
        lg={{
          width: 'calc(calc(calc(100% - 8px) / 3) * 2)'
        }}
        width="100%"
      >
        <RenderSlot {...slot70} />
      </Block>
      <Block
        align="column"
        alignx="center"
        aligny="top"
        lg={{
          width: 'calc(calc(100% - 32px) / 3)'
        }}
        width="100%"
      >
        <RenderSlot {...slot30} />
      </Block>
    </Block>
  )
}

export {Template7030};