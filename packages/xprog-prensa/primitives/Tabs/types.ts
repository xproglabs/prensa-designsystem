/* eslint-disable no-undef */
import { PrensaEngineCSS } from '@xprog/prensa-system'

interface StateProperties { selected?: string; setSelected?: (P: any) => void; }

export interface TabProps extends StateProperties {
  children: any;
  css?: {
    container?: PrensaEngineCSS;
    tab?: PrensaEngineCSS;
    tabList?: PrensaEngineCSS;
    tabSlot?: PrensaEngineCSS;
    tabSlots?: PrensaEngineCSS;
  };
}
export interface TabsProps {
  children: any;
  id: string;
  css?: {
    container?: PrensaEngineCSS;
    tab?: PrensaEngineCSS;
    tabList?: PrensaEngineCSS;
    tabSlot?: PrensaEngineCSS;
    tabSlots?: PrensaEngineCSS;
  };
}
export interface TabListProps extends StateProperties {
  children: any;
  css?: {
    container?: PrensaEngineCSS;
    tab?: PrensaEngineCSS;
    tabList?: PrensaEngineCSS;
    tabSlot?: PrensaEngineCSS;
    tabSlots?: PrensaEngineCSS;
  };
}
export interface TabSlotProps {
  children: any;
  css?: {
    container?: PrensaEngineCSS;
    tab?: PrensaEngineCSS;
    tabList?: PrensaEngineCSS;
    tabSlot?: PrensaEngineCSS;
    tabSlots?: PrensaEngineCSS;
  };
}
export interface TabSlotsProps extends StateProperties {
  children: any;
  css?: {
    container?: PrensaEngineCSS;
    tab?: PrensaEngineCSS;
    tabList?: PrensaEngineCSS;
    tabSlot?: PrensaEngineCSS;
    tabSlots?: PrensaEngineCSS;
  };
}