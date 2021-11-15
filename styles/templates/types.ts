import { TeaserCartridges } from '@prensa_tokens'

type TeaserSuggestions = TeaserCartridges | 'hide'

type TemplateRelated = {
  enabled: boolean;
}

type TemplateLayout = {
  0: [TeaserSuggestions];
  1: [TeaserSuggestions];
  2: [TeaserSuggestions, TeaserSuggestions];
  3: [TeaserSuggestions, TeaserSuggestions, TeaserSuggestions];
  4: [TeaserSuggestions, TeaserSuggestions, TeaserSuggestions, TeaserSuggestions];
}

type TemplateSpaces = [number, number, number, number]

type TemplateSlotTypes = {
  /**
   * Prensa | CreateTemplate related
   */
  related: TemplateRelated;
  /**
   * Prensa | CreateTemplate layout
   */
  layout: TemplateLayout;
  /**
   * Prensa | CreateTemplate spaces
   * @param slotLength Expects slot items length
   * @param spaces Expects the amount of columns that the content will be splitted (list key is items amount)
   * @returns Configuration for matching items amount | 0
   */
  spaces: TemplateSpaces;
}

export type CreateTemplateTypes = {
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