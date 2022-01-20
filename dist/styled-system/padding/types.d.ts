import { ThemeTypes } from 'prensa';
export declare type ResponsiveSpacing = Array<string | number>;
export declare type SpacingType = string | number | ResponsiveSpacing;
export declare type PaddingStyledFunctionParam0 = {
    pt?: SpacingType;
    pr?: SpacingType;
    pb?: SpacingType;
    pl?: SpacingType;
    px?: SpacingType;
    py?: SpacingType;
    p?: SpacingType;
    theme?: ThemeTypes;
};
