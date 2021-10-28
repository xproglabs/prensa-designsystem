import { ColorTokens, FontTokens, RadiusTokens } from '@prensa_tokens'
import { get } from 'lodash'
import { Block, Typography } from 'prensa'
import React from 'react'

import { SpacingType, LayoutProps } from './types'

type ContainerProps = {
  align?: string;
  alignx?: string;
  aligny?: string;
  bgColor?: ColorTokens;
  b?: string;
  bt?: string;
  br?: string;
  bb?: string;
  bl?: string;
  borderColor?: ColorTokens;
  borderStyle?: string;
  height: string;
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  radius?: RadiusTokens;
  width: string;
}
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
  containerProps?: ContainerProps;
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
  number: number;
}

const RenderNumber = ({ layout, number }: RenderNumberProps) => {

  const layout_data: NumberLayout = get(layout, 'number', {})
  const containerProps = get(layout_data, 'containerProps', {})
  const textProps = get(layout_data, 'textProps', {})

  return (
    <Block
      align='column'
      alignx='center'
      aligny='middle'
      {...containerProps}
    >
      <Typography element='span' {...textProps}>
        {number}
      </Typography>
    </Block>
  )
}

export { RenderNumber }