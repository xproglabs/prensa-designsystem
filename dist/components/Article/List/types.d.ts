import { ColorTokens, FontTokens } from '@prensa_tokens';
export declare type TextProps = {
    color?: ColorTokens;
    fontFamily?: FontTokens;
    fontSize?: string;
};
export declare type OrderedListProps = {
    maxWidth?: string;
};
export declare type UnorderedListProps = {
    maxWidth?: string;
};
export declare type ListItemProps = {
    $fontFamily?: FontTokens;
    $fontSize?: string;
    mt?: string | number;
    mr?: string | number;
    mb?: string | number;
    ml?: string | number;
    value?: number;
};
export interface ListComponentProps {
    items: Array<string>;
    itemsSpace?: number;
    maxWidth?: string;
    ordered?: boolean;
    textProps?: TextProps;
}
