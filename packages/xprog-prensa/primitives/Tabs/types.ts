import { PrensaEngineCSSProp } from '../../types'

export interface TabProps {
  children: any;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
  setSelected?: (P: any) => void;
}
export interface TabsProps {
  children: any;
  id: string;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
}
export interface TabListProps {
  children: any;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
  selected?: string;
  setSelected?: (P: any) => void;
}
export interface TabSlotProps {
  children: any;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
  setSelected?: (P: any) => void;
}
export interface TabSlotsProps {
  children: any;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
  selected?: string;
  setSelected?: (P: any) => void;
}