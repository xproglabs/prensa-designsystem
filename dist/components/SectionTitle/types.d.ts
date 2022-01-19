import { IconTokens } from '@prensa_tokens';
import { ReactElement } from 'react';
import { IconProps } from '../Icon/types';
import { SpacingType } from '../Teaser/types';
interface AreaLayout {
    b?: string;
    bt?: string;
    br?: string;
    bb?: string;
    bl?: string;
    borderColor?: string;
    borderStyle?: string;
    pt?: SpacingType;
    pr?: SpacingType;
    pb?: SpacingType;
    pl?: SpacingType;
    mt?: SpacingType;
    mr?: SpacingType;
    mb?: SpacingType;
    ml?: SpacingType;
    width?: Array<string>;
}
interface LinkLayout {
    hoverOpacity?: number;
}
interface IconLayout extends IconProps {
    component?: ReactElement;
}
interface TextLayout {
    color?: string;
    element?: string;
    font_family?: string;
    font_size?: [string, string];
    line_height?: [string, string];
    transform?: string;
}
/**
 * @description define section title layout props
 */
export interface SectionTitleLayout {
    area?: AreaLayout;
    link?: LinkLayout;
    icon?: IconLayout;
    text?: TextLayout;
}
/**
 * @description define section component props
 */
export interface SectionTitleProps {
    color?: string;
    icon?: IconTokens;
    layout: SectionTitleLayout;
    title?: string;
    path?: string;
    theme: Object;
}
/**
 * @description define styled area box properties
 */
export interface StyledBoxProps {
    area: AreaLayout;
    children: any;
}
/**
 * @description define styled title properties
 */
export interface StyledTitleProps extends TextLayout {
    children: any;
}
export {};
