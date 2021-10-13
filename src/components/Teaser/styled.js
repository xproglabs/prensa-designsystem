import { get } from 'lodash'
import React from 'react'
import styled from 'styled-components'

import Block from '../Block'
import Typography from '../Typography'

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
  border,
  children
}) => {
  const border_custom = border ? `
      border: 1px solid #EAEAEA;
      border-radius: 5px;
    ` : ''
  const box_width = border ? 'calc(100% - 2px)' : '100%'
  return (
    <Block
      align={box_align[0]}
      alignx={box_alignx[0]}
      aligny={box_aligny[0]}
      bgColor={background}
      custom={border_custom}
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

const Datetime = ({ children }) => (
  <Typography
    color='neutral3'
    element='span'
    fontFamily='primary'
    fontSize='14px'
    fontWeight={300}
    lineHeight='18px'
    width='100%'>
    {children}
  </Typography> 
)

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

const Subtitle = ({
  children,
  color,
  font_size,
  line_height,
  mb
}) => {
  return (
    <Typography
      color={color}
      element='h2'
      fontFamily='secondary'
      fontSize={font_size[0]}
      fontWeight={300}
      lineHeight={line_height[0]}
      lg={{
        fontSize: font_size[1],
        lineHeight: line_height[1],
        mb: mb[1]
      }}
      mb={mb[0]}
      width='100%'>
      {children}
    </Typography> 
  )
}

const WrapContent = ({
  children,
  content_overlap=false,
  wrap_align=['column', 'column'],
  wrap_alignx,
  wrap_aligny,
  wrap_height,
  wrap_mr=[0, 0],
  wrap_ml=[0, 0],
  wrap_mt=[0, 0],
  wrap_mb=[0, 0],
  wrap_width=['100%', '100%']
}) => {
  const content_overlap_style = `
    z-index: 10;
  `
  const custom_style = `
    ${content_overlap ? content_overlap_style : ''}
  `
  return (
    <Block
      align={wrap_align[0]}
      alignx={wrap_alignx[0]}
      aligny={wrap_aligny[0]}
      custom={custom_style}
      height={wrap_height[0]}
      mr={wrap_mr[0]}
      ml={wrap_ml[0]}
      mt={wrap_mt[0]}
      mb={wrap_mb[0]}
      width={wrap_width[0]}
      lg={{
        align: wrap_align[1],
        alignx: wrap_alignx[1],
        aligny: wrap_aligny[1],
        custom: custom_style,
        height: wrap_height[1],
        mr: wrap_mr[1],
        ml: wrap_ml[1],
        mt: wrap_mt[1],
        mb: wrap_mb[1],
        width: wrap_width[1],
      }}>
      {children}
    </Block>
  )
}

export {
  AreaLink,
  Box,
  Datetime,
  Image,
  Subject,
  Subtitle,
  WrapContent,
}