import { ReactNode } from 'react'

import { RenderSlotProps } from '../../RenderSlot/types'

export type ColumnProps = {
  children: any;
}
export type ColorizedColumnProps = {
  bgColor: string;
  children: ReactNode;
  minHeight: [string, string];
  slot: RenderSlotProps;
  transparent: boolean;
}
export interface Template100Props {
  slotAds: RenderSlotProps;
  slot100: RenderSlotProps;
}