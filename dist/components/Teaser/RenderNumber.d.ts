/// <reference types="react" />
import { ColorTokens, FontTokens, RadiusTokens } from '@prensa_tokens';
import { SpacingType, LayoutProps } from './types';
declare type ContainerProps = {
    align?: string;
    alignx?: string;
    aligny?: string;
    bgColor?: ColorTokens;
    b?: string;
    bt?: string;
    br?: string;
    bb?: string;
    bl?: string;
    borderColor?: ColorTokens;
    borderStyle?: string;
    height: string;
    mt?: SpacingType;
    mr?: SpacingType;
    mb?: SpacingType;
    ml?: SpacingType;
    pt?: SpacingType;
    pr?: SpacingType;
    pb?: SpacingType;
    pl?: SpacingType;
    radius?: RadiusTokens;
    width: string;
};
declare type NumberProps = {
    color?: ColorTokens;
    fontSize?: string;
    fontFamily?: FontTokens;
    lineHeight?: string;
    fontWeight?: number;
};
export declare type NumberLayout = {
    align?: [string, string];
    alignx?: [string, string];
    aligny?: [string, string];
    containerProps?: ContainerProps;
    enabled?: boolean;
    height?: [string, string];
    mt?: SpacingType;
    mr?: SpacingType;
    mb?: SpacingType;
    ml?: SpacingType;
    textProps?: NumberProps;
    width?: [string, string];
};
export interface RenderNumberProps {
    layout: LayoutProps;
    number: number;
}
declare const RenderNumber: ({ layout, number }: RenderNumberProps) => JSX.Element;
export { RenderNumber };
