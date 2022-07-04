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
}: TypographyProps) => {


  switch (element) {
    case 'h1':
      return (
        <HeadingOne
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