/// <reference types="react" />
import { RenderSectionTitleParams } from './types';
export declare const isBackgroundTransparent: (background: string | any) => boolean;
export declare const selectBgColorFromSlot: (slot: any) => string;
export declare const selectMinHeightFromSlot: (minHeight: any) => string;
/**
 * @param param0
 * @returns a valid react element
 */
export declare const selectComponentFromSlotList: (parseSlot: any, slotList: any, siteData: any, slotColor?: any) => JSX.Element;
export declare const selectTemplateFromTheme: ({ block, slot, templates }: {
    block: any;
    slot: any;
    templates: any;
}) => any;
export declare const selectLayoutFromTemplate: ({ block, slot }: {
    block: any;
    slot: any;
}) => any;
/**
 * Prensa | selectLayoutColsFromSlot
 * @param slotLength Expects slot items length
 * @param spaces Expects the amount of columns that the content will be splitted (list key is items amount)
 * @returns Configuration for matching items amount | 0
 */
export declare const selectLayoutColsFromSlot: (slotLength: number, spaces?: [number, number, number, number]) => number;
/**
 * RenderSectionTitle function
 * @param {Object} data Expects a Object with SectionTitle configurations
 * @returns
 * - A space for empty titles
 * - A cloneElement hook when using customComponent prop
 * - A SectionTitle with theme configurations
 */
export declare const renderSectionTitle: ({ layout, color, title, icon, link, customComponent }: RenderSectionTitleParams) => JSX.Element;
