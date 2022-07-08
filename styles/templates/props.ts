import { TeaserCartridges } from '@prensa_tokens'
// import { MoreButtonLayoutProps } from 'components/RenderSlot/MoreButton'

// import { CarouselLayoutProps } from '../../components/Carousel/types'

type TeaserSuggestions = TeaserCartridges | 'hide'

type TemplateRelated = {
  enabled: boolean;
}

type TemplateLayout = {
  0: [TeaserSuggestions];
  1?: [TeaserSuggestions];
  2?: [TeaserSuggestions] | [TeaserSuggestions, TeaserSuggestions];
  3?: [TeaserSuggestions] | [TeaserSuggestions, TeaserSuggestions, TeaserSuggestions];
  4?: [TeaserSuggestions] | [TeaserSuggestions, TeaserSuggestions, TeaserSuggestions, TeaserSuggestions];
}

type TemplateSpaces = [number] | [number, number, number, number]
type TemplateSpacesBottom = [number, number]

interface TemplateSlotTypes {
  // carousel?: CarouselLayoutProps;
  carousel?: any;
  /**
   * Prensa | CreateTemplate related
   */
  related: TemplateRelated;
  /**
   * Prensa | CreateTemplate layout
   */
  layout: TemplateLayout;
  /**
   * Prensa | CreateTemplate min_height
   */
  min_height: [string, string];
  /**
   * Prensa | CreateTemplate spaces
   * @description Expects an array of numbers. Array keys represent items amount
   * @example
   * [0, 1, 2, 3] -> is one column for one item, two column for two items and three cols for three items
   * [0, 2, 2, 2] -> is two column for one, two or three items
   */
  // more_button?: MoreButtonLayoutProps;
  more_button?: any;
  spaces: TemplateSpaces;
  space_bottom?: TemplateSpacesBottom;
  space_bottom_column?: TemplateSpacesBottom;
  space_bottom_column_color?: TemplateSpacesBottom;
}

export interface ICreateTemplate {
  /**
   * Prensa | CreateTemplate slot100
   */
  slot100?: TemplateSlotTypes;
  /**
   * Prensa | CreateTemplate slot70
   */
  slot70?: TemplateSlotTypes;
  /**
   * Prensa | CreateTemplate slot50
   */
  slot50?: TemplateSlotTypes;
  /**
   * Prensa | CreateTemplate slot30
   */
  slot30?: TemplateSlotTypes;
  /**
   * Prensa | CreateTemplate slotWrap
   */
  slotWrap?: TemplateSlotTypes;
}