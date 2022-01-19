import { RenderSlotProps } from '../../RenderSlot/types';
declare type SlotProps = RenderSlotProps & {
    section_title?: () => void;
};
export declare type ColumnProps = {
    children: any;
};
export declare type ColorizedColumnProps = {
    bgColor: string;
    children: any;
    minHeight?: [string, string];
    transparent: boolean;
};
export interface Template33Props {
    slotAds: SlotProps;
    slotLeft: SlotProps;
    slotCenter: SlotProps;
    slotRight: SlotProps;
}
export {};
