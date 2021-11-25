import { ColorTokens } from '@prensa_tokens'
import { ReactNode } from 'react'

import { RenderSlotProps } from '../../RenderSlot/types'

export type ColumnProps = {
  children: any;
}
export type ColorizedColumnProps = {
  bgColor: ColorTokens;
  children: ReactNode;
  minHeight: [string, string];
  transparent: boolean;
}
export interface Template100Props {
  slotAds: RenderSlotProps;
  slot100: RenderSlotProps;
}