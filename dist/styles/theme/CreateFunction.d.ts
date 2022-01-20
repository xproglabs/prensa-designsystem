/// <reference types="react" />
import { Colors, Fonts, Factors, Queries, Radius, Teasers, Templates } from '@prensa_tokens';
export interface ThemeTypes {
    colors: Colors;
    fonts: Fonts;
    factors: Factors;
    queries: Queries;
    radius: Radius;
    teasers: Teasers;
    templates: Templates;
}
/**
 * CreateTheme function docs
 * @param {object} data - An object that defines/overrides properties in theme
 */
export declare function CreateTheme(data: ThemeTypes | Object): {
    fonts: {
        primary: string;
        secondary: string;
    };
    factors: {
        dimensions: number;
        padding: number;
        margin: number;
    };
    icons: {
        IconMenu: JSX.Element;
    };
    queries: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    radius: {
        unset: string;
        alternative: string;
        default: string;
        rounded: string;
        circle: string;
    };
    teasers: {};
    templates: {};
    parseBgColor: any;
    parseCustom: any;
    parseCustomDef: any;
    parseFontColor: any;
    parseFontFamily: any;
    parseMargin: any;
    parsePadding: any;
    parseRadius: any;
    parseColor: any;
} & (Object | ThemeTypes);
export declare const theme: {
    fonts: {
        primary: string;
        secondary: string;
    };
    factors: {
        dimensions: number;
        padding: number;
        margin: number;
    };
    icons: {
        IconMenu: JSX.Element;
    };
    queries: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
    };
    radius: {
        unset: string;
        alternative: string;
        default: string;
        rounded: string;
        circle: string;
    };
    teasers: {};
    templates: {};
    parseBgColor: any;
    parseCustom: any;
    parseCustomDef: any;
    parseFontColor: any;
    parseFontFamily: any;
    parseMargin: any;
    parsePadding: any;
    parseRadius: any;
    parseColor: any;
} & (Object | ThemeTypes);
