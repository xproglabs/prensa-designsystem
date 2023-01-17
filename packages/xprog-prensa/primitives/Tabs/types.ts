import { PrensaEngineCSSProp } from '../../types'

export interface TabProps {
  children: any;
  css?: PrensaEngineCSSProp;
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
  css?: PrensaEngineCSSProp;
}
export interface TabSlotProps {
  children: any;
  css?: PrensaEngineCSSProp;
}
export interface TabSlotsProps {
  children: any;
  css?: PrensaEngineCSSProp;
}