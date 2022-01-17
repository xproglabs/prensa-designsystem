import { ThemeTypes } from 'prensa'

export type AlignTokens = 'row' | 'column'
export type AlignXTokens = 'left' | 'center' | 'right' | 'evenly' | 'between'
export type AlignYTokens = 'top' | 'middle' | 'bottom' | 'evenly' | 'between'
export type ResponsiveAlignTokens = Array<AlignTokens>
export type ResponsiveAlignXTokens = Array<AlignXTokens>
export type ResponsiveAlignYTokens = Array<AlignYTokens>

export type AlignStyledFunctionParam0 = {
  align?: AlignTokens | ResponsiveAlignTokens;
  alignx?: AlignXTokens | ResponsiveAlignXTokens;
  aligny?: AlignYTokens | ResponsiveAlignYTokens;
  theme?: ThemeTypes;
}