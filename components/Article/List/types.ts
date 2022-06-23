import { ColorTokens, FontTokens } from '@prensa_tokens'

export type TextProps = {
  color?: ColorTokens;
  fontFamily?: FontTokens;
  fontSize?: string;
}

export type OrderedListProps = {
  maxWidth?: string;
}

export type UnorderedListProps = {
  maxWidth?: string;
}

export type ListItemProps = {
  $fontFamily?: FontTokens;
  $fontSize?: string;
  color?: ColorTokens;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  value?: number;
}

export interface ListComponentProps {
  items: Array<string>;
  itemsSpace?: number;
  maxWidth?: string;
  ordered?: boolean;
  textProps?: TextProps;
}