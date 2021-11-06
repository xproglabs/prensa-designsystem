type TemplateRelated = {
  enabled: boolean;
}

type TemplateLayout = {
  0?: [string];
  1?: [string];
  2?: [string, string];
  3?: [string, string, string];
  4?: [string, string, string, string];
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
}