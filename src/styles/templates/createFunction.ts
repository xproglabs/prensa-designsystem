type Related = {
  enabled: boolean;
}

type Layout = {
  0: [string];
  1: [string];
  2: [string, string];
  3: [string, string, string];
  4: [string, string, string, string];
}

type Spaces = [number, number, number, number]

type TemplateSlotTypes = {
  related: Related;
  layout: Layout;
  spaces: Spaces;
}

type CreateFunctionTypes = {
  slot100?: TemplateSlotTypes;
  slot70?: TemplateSlotTypes;
  slot50?: TemplateSlotTypes;
  slot30?: TemplateSlotTypes;
}

export const CreateTemplate = (data: CreateFunctionTypes): Object => {
  return data;
}