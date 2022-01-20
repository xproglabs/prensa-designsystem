/// <reference types="react" />
import { ColorTokens } from '@prensa_tokens';
import { LayoutProps, SpacingType } from './types';
export declare type VariantTypes = 'default' | 'filled';
export declare type SubjectLayout = {
    bg_color?: ColorTokens;
    color?: ColorTokens;
    enabled?: boolean;
    font_size?: [string, string];
    line_height?: [string, string];
    mb?: SpacingType;
    variant: VariantTypes;
};
export declare type RenderSubjectProps = {
    color?: ColorTokens | string;
    editable?: any;
    item?: any;
    layout?: LayoutProps;
};
declare const RenderSubject: ({ color, editable, item, layout, }: RenderSubjectProps) => JSX.Element;
export { RenderSubject };
