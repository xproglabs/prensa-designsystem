import { ComponentProps, VariantProps } from '@stitches/react'
import { ReactNode, MouseEventHandler } from 'react'

import { PrensaEngineCSSProp } from '../../types'
import { AccordionContentType, AccordionGroupType } from './styles'

export type AccordionContentProps = ComponentProps<AccordionContentType>
export type AccordionContentVariants = VariantProps<AccordionContentType>

export type AccordionGroupProps = ComponentProps<AccordionContentType>
export type AccordionGroupVariants = VariantProps<AccordionGroupType>

export type AccordionItemGroupCSSProp = {
  accordionTitle?: { button?: PrensaEngineCSSProp; label?: PrensaEngineCSSProp; };
  accordionContent?: PrensaEngineCSSProp;
}

export type AccordionCSSProps = {
  accordionGroup?: PrensaEngineCSSProp;
  accordionItemGroup?: AccordionItemGroupCSSProp;
}

export type AccordionItemGroupProps = {
  id: string;
  title: string;
  accordionTitleAs?: any;
  accordionContentAs?: any;
  children?: ReactNode;
  css?: AccordionItemGroupCSSProp
  expanded?: boolean;
  icon?: ReactNode;
  iconExpandedState?: ReactNode;
  iconNotExpandedState?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type AccordionProps = {
  children?: ReactNode;
  css?: AccordionCSSProps;
  items?: Array<AccordionItemGroupProps>;
  size?: AccordionGroupVariants['size'];
}