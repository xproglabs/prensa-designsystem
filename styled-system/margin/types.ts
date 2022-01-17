import { ThemeTypes } from 'prensa'

export type ResponsiveSpacing = Array<string | number>
export type SpacingType = string | number | ResponsiveSpacing;

export type MarginStyledFunctionParam0 = {
  mt?: SpacingType;
  mr?: SpacingType;
  mb?: SpacingType;
  ml?: SpacingType;
  theme?: ThemeTypes;
}