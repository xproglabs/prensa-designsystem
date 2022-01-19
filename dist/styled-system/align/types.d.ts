import { ThemeTypes } from 'prensa';
export declare type AlignTokens = 'row' | 'column';
export declare type AlignXTokens = 'left' | 'center' | 'right' | 'evenly' | 'between';
export declare type AlignYTokens = 'top' | 'middle' | 'bottom' | 'evenly' | 'between';
export declare type ResponsiveAlignTokens = Array<AlignTokens>;
export declare type ResponsiveAlignXTokens = Array<AlignXTokens>;
export declare type ResponsiveAlignYTokens = Array<AlignYTokens>;
export declare type AlignStyledFunctionParam0 = {
    align?: AlignTokens | ResponsiveAlignTokens;
    alignx?: AlignXTokens | ResponsiveAlignXTokens;
    aligny?: AlignYTokens | ResponsiveAlignYTokens;
    theme?: ThemeTypes;
};
