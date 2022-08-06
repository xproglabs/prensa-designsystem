import { ThemeTypes } from 'prensa'

export type ResponsiveSpacing = Array<string | number>
export type SpacingType = string | number | ResponsiveSpacing;

export type PaddingStyledFunctionParam0 = {
  pt?: SpacingType;
  pr?: SpacingType;
  pb?: SpacingType;
  pl?: SpacingType;
  px?: SpacingType;
  py?: SpacingType;
  p?: SpacingType;
  theme?: ThemeTypes;
}