import { ThemeTypes } from 'prensa'

export type ResponsiveWidthType = Array<string | number>
export type WidthType = string | number | ResponsiveWidthType;

export type WidthStyledFunctionParam0 = {
  $width?: WidthType;
  theme?: ThemeTypes;
}