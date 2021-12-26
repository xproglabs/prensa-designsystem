import { FontTokens } from '@prensa_tokens'

export type OrderedListProps = {
  maxWidth?: string;
}

export type UnorderedListProps = {
  maxWidth?: string;
}

export type ListItemProps = {
  $fontFamily?: FontTokens;
  $fontSize?: string;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
}

export interface ListComponentProps {
  items: Array<string>;
  itemsSpace?: number;
  ordered?: boolean;
  maxWidth?: string;
}