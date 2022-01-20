import { ReactNode } from 'react';
import { RenderSlotProps } from '../../RenderSlot/types';
export declare type ColumnProps = {
    children: any;
};
export declare type ColorizedColumnProps = {
    bgColor: string;
    children: ReactNode;
    minHeight: [string, string];
    transparent: boolean;
};
export interface Template100Props {
    slotAds: RenderSlotProps;
    slot100: RenderSlotProps;
}
