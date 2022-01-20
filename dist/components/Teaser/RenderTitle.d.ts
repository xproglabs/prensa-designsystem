/// <reference types="react" />
import { LayoutProps } from './types';
declare type TitleProps = {
    cid: string;
    editable?: any;
    layout: LayoutProps;
    link?: string;
    opacity_mask?: boolean;
    position?: number;
    slot_position?: number;
    title: string;
    titleEventTracking?: any;
};
/**
 * Teaser Title component
 * @param editable enable live edition
 * @param layout allow style changes based on supported props
 * @param path link path enable href for Title
 * @param title text to be rendered
 * @returns a Typography as a React element
 */
declare const RenderTitle: ({ cid, editable, layout, link, opacity_mask, position, slot_position, title, titleEventTracking }: TitleProps) => JSX.Element;
export { RenderTitle };
