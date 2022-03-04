import { ColorTokens, IconTokens } from '@prensa_tokens'
import { MoreButtonLayoutProps } from 'components/RenderSlot/RenderMoreButton'

import { PageBlockPreview } from '../PreviewProvider/types'
import { SectionTitleLayout } from '../SectionTitle/types'
import { TeaserProps } from '../Teaser/types'

export type TemplateType =
  'template100' |
  'template7030' |
  'template50' |
  'template30'

export type SlotBlockProps = {
  bgcolor?: ColorTokens;
  color: ColorTokens;
  icon: IconTokens;
  link: string;
  len1: number;
  len2: number;
  list?: [TeaserProps];
  list1: [TeaserProps];
  list2: [TeaserProps];
  list3?: [any];
  order?: boolean | [string, 'asc' | 'desc'];
  more?: boolean;
  more_button?: MoreButtonLayoutProps;
  more_title?: string;
  more_link?: string;
  pagination?: boolean;
  search_len?: any;
  title: string;
  spaces?: [number, number, number, number];
  type: TemplateType;
}

export type PageBlockProps = {
  amp?: boolean;
  bgcolor?: ColorTokens;
  cid: string;
  domain: string;
  eventTracking?: any;
  fallback_image_url?: string,
  image_parser?: any;
  name: string;
  type: TemplateType;
  preview: PageBlockPreview;
  section_title_component?: any;
  site_data: any;
  slot_parser: any;
  slot1: SlotBlockProps;
  slot2: SlotBlockProps;
  slot3: SlotBlockProps;
  slot4: SlotBlockProps;
  slot5: SlotBlockProps;
  slot6: SlotBlockProps;
  slot7: SlotBlockProps;
  theme?: any;
}

export type RenderSectionTitleParams = {
  layout: SectionTitleLayout;
  color?: ColorTokens;
  title: string;
  icon?: IconTokens;
  link?: string;
  customComponent?: any;
}