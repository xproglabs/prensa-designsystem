interface FontProps {
    font_size: [string, string];
    line_height: [string, string];
}
interface TokenProps {
    font_size: string;
    line_height: string;
}
export declare const NEWS_TITLE_TOKENS: {
    NEWS_TITLE_1: TokenProps;
    NEWS_TITLE_2: TokenProps;
    NEWS_TITLE_3: TokenProps;
    NEWS_TITLE_4: TokenProps;
    NEWS_TITLE_5: TokenProps;
    NEWS_TITLE_6: TokenProps;
    NEWS_TITLE_7: TokenProps;
    NEWS_TITLE_8: TokenProps;
};
/**
 * ParseFont function documentation
 * @param mobile Expect a NewsTitle token with font-size values for mobile
 * @param desktop Expect a NewsTitle token with font-size values for desktop
 * @returns Object with font-size and line-height responsive configurations
 */
export declare function parseResponsiveFont(mobile: TokenProps, desktop: TokenProps): FontProps;
export {};
