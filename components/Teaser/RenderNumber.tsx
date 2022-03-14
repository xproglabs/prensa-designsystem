import { ColorTokens, FontTokens } from '@prensa_tokens'
import { get } from 'lodash'
import React from 'react'

import Block from '../NewBlock'
import { BlockProps } from '../NewBlock/props'
import Typography from '../Typography'
import { SpacingType, LayoutProps } from './types'

type NumberProps = {
  color?: ColorTokens;
  fontSize?: string;
  fontFamily?: FontTokens;
  lineHeight?: string;
  fontWeight?: number;
}
export type NumberLayout = {
  align?: [string, string];
  alignx?: [string, string];
  aligny?: [string, string];
  containerProps?: BlockProps;
  enabled?: boolean;
  height?: [string, string];
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  textProps?: NumberProps;
  width?: [string, string];
}
export interface RenderNumberProps {
  layout: LayoutProps;
  color?: ColorTokens;
  number: number;
}

const RenderNumber = ({ layout, number, color }: RenderNumberProps) => {

  const layout_data: NumberLayout = get(layout, 'number', {})
  const containerProps = get(layout_data, 'containerProps', {})
  const textProps = get(layout_data, 'textProps', {})
  return (
    <Block
      {...containerProps}
      align='column'
      alignx='center'
      aligny='middle'
      borderColor={color}
    >
      <Typography {...textProps} color={color} element='span'>
        {number}
      </Typography>
    </Block>
  )
}

export { RenderNumber }