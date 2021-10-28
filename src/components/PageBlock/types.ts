import { IconTokens } from '@prensa_tokens'

import { PageBlockPreview } from '../PreviewProvider/types'
import { SectionTitleLayout } from '../SectionTitle/types'
import { TeaserProps } from '../Teaser/types'

export type SlotBlockProps = {
  bgcolor?: string;
  color: string;
  icon: IconTokens;
  link: string;
  len1: number;
  len2: number;
  list1: [TeaserProps];
  list2: [TeaserProps];
  title: string;
  spaces?: [number, number, number, number];
  type: string;
}

export type PageBlockProps = {
  amp?: boolean;
  bgcolor?: string;
  cid: string;
  domain: string;
  image_parser?: any;
  name: string;
  type: string;
  preview: PageBlockPreview;
  section_title_component?: any;
  slot_parser: any;
  slot1: SlotBlockProps;
  slot2: SlotBlockProps;
  slot3: SlotBlockProps;
  theme?: any;
}

export type RenderSectionTitleParams = {
  layout: SectionTitleLayout;
  color?: string;
  title: string;
  icon?: IconTokens;
  link?: string;
  customComponent?: any;
}