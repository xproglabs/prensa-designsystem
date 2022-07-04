import React from 'react'

import { TypographyProps } from './props'
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  Paragraph,
  Span,
  Label,
  Cite
} from './styled'

const Typography = ({
  bgColor,
  color,
  element,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  opacity,
  textDecoration,
  ...otherProps
}: TypographyProps) => {


  switch (element) {
    case 'h1':
      return (
        <HeadingOne
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'h2':
      return (
        <HeadingTwo
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'h3':
      return (
        <HeadingThree
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'h4':
      return (
        <HeadingFour
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'h5':
      return (
        <HeadingFive
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'h6':
      return (
        <HeadingSix
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'p':
      return (
        <Paragraph
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'label':
      return (
        <Label
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'cite':
      return (
        <Cite
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
    case 'span':
    default:
      return (
        <Span
          {...otherProps}
          $bgColor={bgColor}
          $color={color}
          $fontFamily={fontFamily}
          $fontSize={fontSize}
          $fontStyle={fontStyle}
          $fontWeight={fontWeight}
          $letterSpacing={letterSpacing}
          $opacity={opacity}
          $textDecoration={textDecoration}
        />
      )
  }
}

export default Typography