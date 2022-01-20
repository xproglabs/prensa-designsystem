interface FontProps {
    font_size: [string, string];
    line_height: [string, string];
}
interface TokenProps {
    font_size: string;
    line_height: string;
}
export declare const NEWS_TITLE_1: TokenProps;
export declare const NEWS_TITLE_2: TokenProps;
export declare const NEWS_TITLE_3: TokenProps;
export declare const NEWS_TITLE_4: TokenProps;
export declare const NEWS_TITLE_5: TokenProps;
export declare const NEWS_TITLE_6: TokenProps;
export declare const NEWS_TITLE_7: TokenProps;
export declare const NEWS_TITLE_8: TokenProps;
export declare const tokensFonts: {
    NEWS_TITLE_1: TokenProps;
    NEWS_TITLE_2: TokenProps;
    NEWS_TITLE_3: TokenProps;
    NEWS_TITLE_4: TokenProps;
    NEWS_TITLE_5: TokenProps;
    NEWS_TITLE_6: TokenProps;
    NEWS_TITLE_7: TokenProps;
    NEWS_TITLE_8: TokenProps;
};
export declare const parseFonts: (mobile: TokenProps, desktop: TokenProps) => FontProps;
export {};
