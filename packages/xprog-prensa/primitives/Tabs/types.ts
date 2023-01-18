/* eslint-disable no-undef */
import { PrensaEngineCSSProp } from '../../types'

interface StateProperties { selected?: string; setSelected?: (P: any) => void; }

export interface TabProps extends StateProperties {
  children: any;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
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
export interface TabListProps extends StateProperties {
  children: any;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
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
}
export interface TabSlotsProps extends StateProperties {
  children: any;
  css?: {
    container?: PrensaEngineCSSProp;
    tab?: PrensaEngineCSSProp;
    tabList?: PrensaEngineCSSProp;
    tabSlot?: PrensaEngineCSSProp;
    tabSlots?: PrensaEngineCSSProp;
  };
}