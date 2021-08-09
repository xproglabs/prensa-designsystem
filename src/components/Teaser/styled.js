import { get } from 'lodash'
import React from 'react'
import styled from 'styled-components'

import Block from '../Block'
import Typography from '../Typography'

export const AreaLink = styled.a` 
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
  box_aligny,
  box_height,
  box_pb,
  box_pt,
  box_mb=[2,2],
  children
}) => {
  return (
    <Block
      align={box_align[0]}
      alignx='center'
      aligny={box_aligny[0]}
      bgColor='white'
      custom={`
        border: 1px solid #EAEAEA;
        border-radius: 5px;
      `}
      height={box_height[0]}
      pb={box_pb[0]}
      pt={box_pt[0]}
      mb={box_mb[0]}
      width='calc(100% - 2px)'
      lg={{
        align: box_align[1],
        alignx: 'center',
        aligny: box_aligny[1],
        height: box_height[1],
        pb: box_pb[1],
        pt: box_pt[1],
        mb: box_mb[1],
        width: 'calc(100% - 2px)'
      }}
      xl={{
        height: get(box_height, '[2]', box_height[1])
      }}
    >
      {children}
    </Block>
  )
}

const Content = ({ children }) => (
  <Block
    align='column'
    lg={{ width: 'calc(100% - 40px)' }}
    width='calc(100% - 32px)'
  >
    {children}
  </Block>
)

const ContentWrap = ({
  children,
  wrap_align=['column', 'column'],
  wrap_aligny,
  wrap_height,
  wrap_mt=[0, 0],
  wrap_width=['100%', '100%']
}) => (
  <Block
    align={wrap_align[0]}
    alignx='center'
    aligny={wrap_aligny[0]}
    height={wrap_height[0]}
    mt={wrap_mt[0]}
    width={wrap_width[0]}
    lg={{
      align: wrap_align[1],
      alignx: 'center',
      aligny: wrap_aligny[1],
      height: wrap_height[1],
      mt: wrap_mt[1],
      width: wrap_width[1],
    }}
  >
    {children}
  </Block>
)

const Datetime = ({ children }) => (
  <Typography
    color='neutral3'
    element='span'
    fontFamily='primary'
    fontSize='14px'
    fontWeight={300}
    lineHeight='18px'>
    {children}
  </Typography> 
)

const Image = ({
  children,
  image_circle = false,
  height,
}) => {
  const custom = image_circle ? 'border-radius: 100%;' : false
  return (
    <Block
      bgColor='neutral10'
      custom={custom}
      height={height[0]}
      width='100%'
      lg={{
        align: 'column',
        height: height[1],
        width: '100%'
      }}
    >
      {children}
    </Block>
  )
}

const Number = ({ children }) => (
  <Block
    align='column'
    alignx='center'
    aligny='middle'
    bgColor='primary1'
    custom='border-radius: 20px;'
    height='40px'
    width='40px'
  >
    <Typography
      color='white'
      element='span'
      fontFamily='primary'
      fontSize='14px'
      fontWeight={700}
      lineHeight='18px'
    >
      {children}
    </Typography>
  </Block>
)

const Subject = ({
  children,
  bg_color,
  color,
  font_size,
  line_height,
  mb=[2, 2]
}) => (
  <Block 
    align='row'
    alignx='between'
    bgColor={bg_color}
    custom='border-radius: 3px;'
    lg={{
      mb: mb[1]
    }}
    px={bg_color !== 'white' ? 1 : 0}
    py={bg_color !== 'white' ? 0.5 : 0}
    mb={mb[0]}
  >
    <Typography
      color={color}
      element='h3'
      fontFamily='secondary'
      fontSize={font_size[0]}
      fontWeight={700}
      lineHeight={line_height[0]}
      lg={{
        fontSize: font_size[1],
        lineHeight: line_height[1],
      }}
      transform='uppercase'
    >
      {children}
    </Typography> 
  </Block>
)

const Subtitle = ({
  children,
  color,
  font_size,
  line_height
}) => (
  <Typography
    color={color}
    element='h3'
    fontFamily='secondary'
    fontSize={font_size[0]}
    fontWeight={300}
    lineHeight={line_height[0]}
    lg={{
      fontSize: font_size[1],
      lineHeight: line_height[1]
    }}
    mb={2}
  >
    {children}
  </Typography> 
)

const Title = ({
  children,
  font_size,
  line_height,
  mb=[2, 2]
}) => (
  <Typography
    color='neutral2'
    element='h2'
    fontFamily='primary'
    fontSize={font_size[0]}
    fontWeight={700}
    lineHeight={line_height[0]}
    lg={{
      fontSize: font_size[1],
      lineHeight: line_height[1],
      mb: mb[1]
    }}
    mb={mb[0]}
  >
    {children}
  </Typography> 
)

export { Box, Content, ContentWrap, Datetime, Image, Number, Subject, Subtitle, Title }