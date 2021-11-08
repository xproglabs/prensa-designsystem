import { IconTokens } from '@prensa_tokens'

import { PageBlockPreview } from '../PreviewProvider/types'
import { SectionTitleLayout } from '../SectionTitle/types'
import { TeaserProps } from '../Teaser/types'

export type TemplateType = 
  'template100' | 
  'template7030' | 
  'template50' | 
  'template30' | 
  'templateWrap'

export type SlotBlockProps = {
  bgcolor?: string;
  color: string;
  icon: IconTokens;
  link: string;
  len1: number;
  len2: number;
  list?: [TeaserProps];
  list1: [TeaserProps];
  list2: [TeaserProps];
  title: string;
  spaces?: [number, number, number, number];
  type: TemplateType;
}

export type PageBlockProps = {
  amp?: boolean;
  bgcolor?: string;
  cid: string;
  domain: string;
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