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
      b={area?.b}
      bt={area?.bt}
      br={area?.br}
      bb={area?.bb}
      bl={area?.bl}
      bs={area?.bs}
      bst={area?.bst}
      bsr={area?.bsr}
      bsb={area?.bsb}
      bsl={area?.bsl}
      borderColor={area?.borderColor}
      borderStyle={area?.borderStyle}
      mr={area?.mr}
      ml={area?.ml}
      mt={area?.mt}
      mb={area?.mb}
      pr={area?.pr}
      pl={area?.pl}
      pt={area?.pt}
      pb={area?.pb}
      width={area?.width}
    >
      {children}
    </Block>
  )
}

/**
 * Section Title Empty
 * @description used to space inside cols
 * @returns a blank space as a React element
 */
export const TitleEmpty = () => (
  <Block
    height={['max-content', '52px']}
    width='100%'
  />
  //Todo: Dinamizar altura para o TitleEmpty visto que em outros projetos pode ser diferente
)

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
      textTransform={transform}>
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