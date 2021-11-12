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
  related: TemplateRelated;
  layout: TemplateLayout;
  spaces: TemplateSpaces;
}

export type CreateTemplateTypes = {
  slot100?: TemplateSlotTypes;
  slot70?: TemplateSlotTypes;
  slot50?: TemplateSlotTypes;
  slot30?: TemplateSlotTypes;
  slotWrap?: TemplateSlotTypes;
}