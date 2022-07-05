import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import { RenderOpacityMaskClickArea } from './RenderOpacityMaskClickArea'

const StyledImage = ({
  children,
  image_circle = false,
  height,
}: any) => {
  return (
    <Block
      align={['column', 'column']}
      bgColor='neutral8'
      custom={image_circle ? 'border-radius: 100%;' : ''}
      height={height}
      width='100%'
    >
      {children}
    </Block>
  )
}

const Subject = ({
  children,
  bg_color = 'transparent',
  color,
  font_size,
  line_height,
  mb
}: any) => {
  return (
    <Block 
      align='row'
      alignx='between'
      bgColor={bg_color}
      mb={mb}
      px={bg_color !== 'transparent' ? 1 : 0}
      py={bg_color !== 'transparent' ? 0.5 : 0}
      radius='default'
    >
      <Typography
        color={color}
        element='span'
        fontFamily='secondary'
        fontSize={font_size[0]}
        fontWeight={700}
        lineHeight={line_height[0]}
        lg={{ fontSize: font_size[1], lineHeight: line_height[1] }}
        textTransform='uppercase'
      >
        {children}
      </Typography> 
    </Block>
  )
}

const WrapContent = ({
  children,
  editable,
  item,
  item_path,
  layout,
  opacity_mask,
  wrap_align = ['column', 'column'],
  wrap_alignx,
  wrap_aligny,
  wrap_height,
  wrap_mr = [0, 0],
  wrap_ml = [0, 0],
  wrap_mt = [0, 0],
  wrap_mb = [0, 0],
  wrap_pr = [0, 0],
  wrap_pl = [0, 0],
  wrap_pt = [0, 0],
  wrap_pb = [0, 0],
  wrap_width = ['100%', '100%']
}: any) => {

  if (opacity_mask) {
    return (
      <RenderOpacityMaskClickArea
        align={wrap_align}
        alignx={wrap_alignx}
        aligny={wrap_aligny}
        height={wrap_height}
        mr={wrap_mr}
        ml={wrap_ml}
        mt={wrap_mt}
        mb={wrap_mb}
        pr={wrap_pr}
        pl={wrap_pl}
        pt={wrap_pt}
        pb={wrap_pb}
        width={wrap_width}
        editable={editable}
        item={item}
        item_path={item_path}
        layout={layout}
        opacity_mask={opacity_mask}
      >
        {children}
      </RenderOpacityMaskClickArea>
    )
  }

  return (
    <Block
      align={wrap_align}
      alignx={wrap_alignx}
      aligny={wrap_aligny}
      height={wrap_height}
      mr={wrap_mr}
      ml={wrap_ml}
      mt={wrap_mt}
      mb={wrap_mb}
      pr={wrap_pr}
      pl={wrap_pl}
      pt={wrap_pt}
      pb={wrap_pb}
      width={wrap_width}
    >
      {children}
    </Block>
  )
}

const WrapSubject = ({
  children
}: any) => {
  return (
    <Block 
      align='row'
      alignx='between'
      width='100%'
    >
      {children}
    </Block>
  )
}

export {
  StyledImage,
  Subject,
  WrapContent,
  WrapSubject
}