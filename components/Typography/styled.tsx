
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
import styled, { css } from 'styled-components'

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
`

export const HeadingOne = styled.h1`${engine}`
export const HeadingTwo = styled.h2`${engine}`
export const HeadingThree = styled.h3`${engine}`
export const HeadingFour = styled.h4`${engine}`
export const HeadingFive = styled.h5`${engine}`
export const HeadingSix = styled.h6`${engine}`
export const Paragraph = styled.p`${engine}`
export const Span = styled.span`${engine}`
export const Label = styled.label`${engine}`
export const Cite = styled.cite`${engine}`
export const A = styled.a`${engine}`