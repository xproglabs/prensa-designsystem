import { ColorTokens } from '@prensa_tokens'

import { RenderSlotProps } from '../../RenderSlot/types'

type SlotProps = RenderSlotProps & {
  section_title?: () => void;
}
export interface ColumnProps {
  children?: any;
}
export interface ColorizedColumnProps {
  bgColor?: ColorTokens;
  children?: any;
  minHeight?: [string, string];
  slot?: SlotProps;
  transparent?: boolean;
}
export interface Template33Props {
  slotAds: SlotProps;
  slotLeft: SlotProps;
  slotCenter: SlotProps;
  slotRight: SlotProps;
}