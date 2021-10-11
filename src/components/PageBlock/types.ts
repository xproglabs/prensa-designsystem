import { TeaserProps } from '../Teaser/types'

export interface SlotBlockProps {
  bgcolor?: string;
  color: string;
  icon: string;
  link: string;
  len1: number;
  len2: number;
  list1: [TeaserProps];
  list2: [TeaserProps];
  title: string;
  spaces?: [number, number, number, number];
  type: string;
}
export interface PageBlockProps {
  bgcolor?: string;
  cid: string;
  name: string;
  type: string;
  slot1: SlotBlockProps;
  slot2: SlotBlockProps;
  slot3: SlotBlockProps;
  theme: any;
}