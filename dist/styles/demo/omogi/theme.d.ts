/// <reference types="react" />
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
} & (Object | import("prensa").ThemeTypes);
