import React from 'react'

import Block from '../Block'
import Typography from '../Typography'
import { StyledBoxProps, StyledTitleProps } from './types'

/**
 * Section Area Box
 * @description Wrap SectionTitle component with responsive margin & padding and border configurations
 */
export const AreaBox = ({ area, children }: StyledBoxProps) => {
  return (
    <Block
      align='row'
      alignx='left'
      aligny='middle'
      mr={area?.mr?.[0]}
      ml={area?.ml?.[0]}
      mt={area?.mt?.[0]}
      mb={area?.mb?.[0]}
      pr={area?.pr?.[0]}
      pl={area?.pl?.[0]}
      pt={area?.pt?.[0]}
      pb={area?.pb?.[0]}
      bt={area?.bt}
      br={area?.br}
      bb={area?.bb}
      bl={area?.bl}
      b={area?.b}
      borderColor={area?.borderColor}
      borderStyle={area?.borderStyle}
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
 * Section Title Empty
 * @description used to space inside cols
 * @returns a blank space as a React element
 */
export const TitleEmpty = () =>
  <Block width='100%' lg={{ height: '52px' }} />
  //Todo: Dinamizar altura para o TitleEmpty visto que em outros projetos pode ser diferente

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