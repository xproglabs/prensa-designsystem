import { ThemeTypes } from 'prensa'

export type ResponsiveHeight = Array<string | number> | string | number;

export type HeightStyledFunctionParam0 = {
  $height?: ResponsiveHeight;
  theme?: ThemeTypes;
}