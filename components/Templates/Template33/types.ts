import { RenderSlotProps } from '../../RenderSlot/types'

type SlotProps = RenderSlotProps & {
  section_title?: () => void;
}
export type ColumnProps = {
  children: any;
}
export type ColorizedColumnProps = {
  bgColor: string;
  children: any;
  minHeight?: [string, string];
  slot: SlotProps;
  transparent: boolean;
}
export interface Template33Props {
  slotAds: SlotProps;
  slotLeft: SlotProps;
  slotCenter: SlotProps;
  slotRight: SlotProps;
}