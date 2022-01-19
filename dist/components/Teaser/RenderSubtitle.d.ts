/// <reference types="react" />
import { LayoutProps } from './types';
export declare type ItemProps = {
    subtitle?: string;
};
export declare type RenderSubtitleType = {
    item: ItemProps;
    layout: LayoutProps;
};
declare const RenderSubtitle: ({ item, layout }: RenderSubtitleType) => JSX.Element;
export { RenderSubtitle };
