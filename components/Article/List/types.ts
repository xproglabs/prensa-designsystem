export type OrderedListProps = {
  maxWidth?: string;
}

export type UnorderedListProps = {
  maxWidth?: string;
}

export type ListItemProps = {
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