
import { border } from '@xprog/prensa-css-engine/border'
import { borderStyle } from '@xprog/prensa-css-engine/borderStyle'
import { color } from '@xprog/prensa-css-engine/color'
import { customCSS } from '@xprog/prensa-css-engine/customCSS'
import { fontFamily } from '@xprog/prensa-css-engine/fontFamily'
import { fontSize } from '@xprog/prensa-css-engine/fontSize'
import { fontStyle } from '@xprog/prensa-css-engine/fontStyle'
import { fontWeight } from '@xprog/prensa-css-engine/fontWeight'
import { letterSpacing } from '@xprog/prensa-css-engine/letterSpacing'
import { lineHeight } from '@xprog/prensa-css-engine/lineHeight'
import { margin } from '@xprog/prensa-css-engine/margin'
import { maxAndMin } from '@xprog/prensa-css-engine/maxAndMin'
import { opacity } from '@xprog/prensa-css-engine/opacity'
import { padding } from '@xprog/prensa-css-engine/padding'
import { textAlign } from '@xprog/prensa-css-engine/textAlign'
import { textDecoration } from '@xprog/prensa-css-engine/textDecoration'
import { textShadow } from '@xprog/prensa-css-engine/textShadow'
import { textTransform } from '@xprog/prensa-css-engine/textTransform'
import { width } from '@xprog/prensa-css-engine/width'
import { ComponentType } from 'react'
import styled, { css } from 'styled-components'

import { StyledTypographyProps } from './props'

const engine = css`
  ${border};
  ${color};
  ${borderStyle};
  ${customCSS};
  ${fontFamily};
  ${fontSize};
  ${fontStyle};
  ${fontWeight};
  ${letterSpacing};
  ${lineHeight};
  ${maxAndMin};
  ${margin};
  ${opacity};
  ${padding};
  ${textAlign};
  ${textDecoration};
  ${textShadow};
  ${textTransform};
  ${width};
`

export const HeadingOne: ComponentType<StyledTypographyProps> = styled.h1<StyledTypographyProps>`${engine}`
export const HeadingTwo: ComponentType<StyledTypographyProps> = styled.h2<StyledTypographyProps>`${engine}`
export const HeadingThree: ComponentType<StyledTypographyProps> = styled.h3<StyledTypographyProps>`${engine}`
export const HeadingFour: ComponentType<StyledTypographyProps> = styled.h4<StyledTypographyProps>`${engine}`
export const HeadingFive: ComponentType<StyledTypographyProps> = styled.h5<StyledTypographyProps>`${engine}`
export const HeadingSix: ComponentType<StyledTypographyProps> = styled.h6<StyledTypographyProps>`${engine}`
export const Paragraph: ComponentType<StyledTypographyProps> = styled.p<StyledTypographyProps>`${engine}`
export const Span: ComponentType<StyledTypographyProps> = styled.span<StyledTypographyProps>`${engine}`
export const Label: ComponentType<StyledTypographyProps> = styled.label<StyledTypographyProps>`${engine}`
export const Cite: ComponentType<StyledTypographyProps> = styled.cite<StyledTypographyProps>`${engine}`