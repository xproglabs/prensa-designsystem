import React from 'react'
import styled from 'styled-components'

import Block from '../Block'
import Typography from '../Typography'
import {
  StyledBoxProps,
  StyledTitleProps,
  StyledIconProps,
} from './types'
/**
 * Section Area Box
 * @description wrap the area link
 * @param children react component
 * @param mb area margin-bottom
 * @returns a component as a React element
 */
export const AreaBox = ({
  area,
  children,
}: StyledBoxProps) => {
  return (
    <Block
      mr={area?.mr?.[0]}
      ml={area?.ml?.[0]}
      mt={area?.mt?.[0]}
      mb={area?.mb?.[0]}
      pr={area?.pr?.[0]}
      pl={area?.pl?.[0]}
      pt={area?.pt?.[0]}
      pb={area?.pb?.[0]}
      lg={{
        mr: area?.mr?.[1],
        ml: area?.ml?.[1],
        mt: area?.mt?.[1],
        mb: area?.mb?.[1],
        pr: area?.pr?.[1],
        pl: area?.pl?.[1],
        pt: area?.pt?.[1],
        pb: area?.pb?.[1],
      }}>
      {children}
    </Block>
  )
}
/**
 * Section Title Icon
 * @param icon expects an icon string (?)
 * @returns an icon as a React element
 */
export const TitleIcon = ({
  icon
}: StyledIconProps) => {
  return (
    <pre>{icon}</pre>
  )
}
/**
 * Section Title Empty
 * @description used to space inside cols
 * @returns a blank space as a React element
 */
export const TitleEmpty = styled.div`
  height: 18px;
  width: 100%;
`
/**
 * Section Title Text
 * @param children expects the title text
 * @param color expects a valid token color
 * @param element expects a typography type
 * @param font_family expects a font family token
 * @param font_size expects a font size format
 * @param line_height expects a font size format
 * @param transform expects 'uppercase' || 'lowercase'
 * @returns the title as a React element
 */
export const TitleText = ({
  children,
  color,
  element,
  font_family,
  font_size,
  line_height,
  transform
}: StyledTitleProps) => {
  return (
    <Typography
      color={color}
      element={element}
      fontFamily={font_family}
      fontSize={font_size[0]}
      fontWeight={700}
      lineHeight={line_height[0]}
      lg={{
        fontSize: font_size[1],
        lineHeight: line_height[1],
      }}
      transform={transform}>
      {children}
    </Typography> 
  )
}
TitleText.defaultProps = {
  color: 'primary1',
  element: 'h3',
  font_family: 'secondary',
  font_size: ['14px', '18px'],
  line_height: ['18px', '22px'],
  transform: 'uppercase'
}