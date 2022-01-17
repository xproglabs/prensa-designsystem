import { get } from 'lodash'
import React from 'react'
import styled from 'styled-components'

import Block from '../Block'
import Typography from '../Typography'
import { RenderOpacityMaskClickArea } from './RenderOpacityMaskClickArea'

const AreaLink = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  white-space: normal;
  &:hover {
    opacity: 0.9;
  }
`
const Box = ({
  box_align=['column', 'column'],
  box_alignx=['center', 'center'],
  box_aligny,
  box_height,
  box_pt,
  box_pr,
  box_pb,
  box_pl,
  box_mt,
  box_mr,
  box_mb=[2,2],
  box_ml,
  background='transparent',  
  box_bt,
  box_br,
  box_bb,
  box_bl,
  box_b,
  box_borderColor,
  box_borderStyle,
  box_radius,
  children,
  className
}) => {

  const parse_boxwidth = () => {
    if (box_b) {
      return `calc(100% - ${box_b} - ${box_b})`
    }
    if (box_bl && box_br) {
      return `calc(100% - ${box_bl} - ${box_br})`
    }
    if (box_bl) {
      return `calc(100% - ${box_bl})`
    }
    if (box_br) {
      return `calc(100% - ${box_br})`
    }
    return '100%'
  }

  const box_width = parse_boxwidth()

  return (
    <Block
      align={box_align[0]}
      alignx={box_alignx[0]}
      aligny={box_aligny[0]}
      className={className}
      bgColor={background}
      height={box_height[0]}
      pt={box_pt[0]}
      pr={box_pr[0]}
      pb={box_pb[0]}
      pl={box_pl[0]}
      mt={box_mt[0]}
      mr={box_mr[0]}
      mb={box_mb[0]}
      ml={box_ml[0]}
      width={box_width}
      bt={box_bt}
      br={box_br}
      bb={box_bb}
      bl={box_bl}
      b={box_b}
      borderColor={box_borderColor}
      borderStyle={box_borderStyle}
      radius={box_radius}
      lg={{
        align: box_align[1],
        alignx: box_alignx[1],
        aligny: box_aligny[1],
        height: box_height[1],
        pt: box_pt[1],
        pr: box_pr[1],
        pb: box_pb[1],
        pl: box_pl[1],
        mt: box_mt[1],
        mr: box_mr[1],
        mb: box_mb[1],
        ml: box_ml[1],
        width: box_width
      }}
      xl={{
        height: get(box_height, '[2]', box_height[1])
      }}>
      {children}
    </Block>
  )
}

const Image = ({
  children,
  image_circle = false,
  height,
}) => {
  const custom = image_circle ? 'border-radius: 100%;' : ''
  return (
    <Block
      bgColor='neutral8'
      custom={custom}
      height={height[0]}
      width='100%'
      lg={{
        align: 'column',
        height: height[1],
        width: '100%'
      }}>
      {children}
    </Block>
  )
}

const Subject = ({
  children,
  bg_color='transparent',
  color,
  font_size,
  line_height,
  mb
}) => {
  const subject_px = bg_color !== 'transparent' ? 1 : 0
  const subject_py = bg_color !== 'transparent' ? 0.5 : 0
  return (
    <Block 
      align='row'
      alignx='between'
      bgColor={bg_color}
      custom='border-radius: 3px;'
      lg={{
        mb: mb[1]
      }}
      px={subject_px}
      py={subject_py}
      mb={mb[0]}>
      <Typography
        color={color}
        element='h2'
        fontFamily='secondary'
        fontSize={font_size[0]}
        fontWeight={700}
        lineHeight={line_height[0]}
        lg={{
          fontSize: font_size[1],
          lineHeight: line_height[1]
        }}
        transform='uppercase'>
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
  wrap_align=['column', 'column'],
  wrap_alignx,
  wrap_aligny,
  wrap_height,
  wrap_mr=[0, 0],
  wrap_ml=[0, 0],
  wrap_mt=[0, 0],
  wrap_mb=[0, 0],
  wrap_pr=[0, 0],
  wrap_pl=[0, 0],
  wrap_pt=[0, 0],
  wrap_pb=[0, 0],
  wrap_width=['100%', '100%']
}) => {

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
      align={wrap_align[0]}
      alignx={wrap_alignx[0]}
      aligny={wrap_aligny[0]}
      height={wrap_height[0]}
      mr={wrap_mr[0]}
      ml={wrap_ml[0]}
      mt={wrap_mt[0]}
      mb={wrap_mb[0]}
      pr={wrap_pr[0]}
      pl={wrap_pl[0]}
      pt={wrap_pt[0]}
      pb={wrap_pb[0]}
      width={wrap_width[0]}
      lg={{
        align: wrap_align[1],
        alignx: wrap_alignx[1],
        aligny: wrap_aligny[1],
        height: wrap_height[1],
        mr: wrap_mr[1],
        ml: wrap_ml[1],
        mt: wrap_mt[1],
        mb: wrap_mb[1],
        pr: wrap_pr[1],
        pl: wrap_pl[1],
        pt: wrap_pt[1],
        pb: wrap_pb[1],
        width: wrap_width[1],
      }}
    >
      {children}
    </Block>
  )
}
const WrapSubject = ({ children }) => {
  return (
    <Block 
      align='row'
      alignx='between'
      width='100%'>
      {children}
    </Block>
  )
}

export {
  AreaLink,
  Box,
  Image,
  Subject,
  WrapContent,
  WrapSubject
}