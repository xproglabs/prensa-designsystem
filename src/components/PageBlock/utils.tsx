import { get, map } from 'lodash'
import React, { cloneElement } from 'react'

import SectionTitle from '../SectionTitle'
import { TitleEmpty } from '../SectionTitle/styled'
import { RenderSectionTitleParams } from './types'

export const isBackgroundTransparent = (background: string | any) => {
  return !background || background == 'transparent'
}

export const selectBgColorFromSlot = (slot): string => {
  let backgroundColor: string
  let defaultColor = 'transparent'
  backgroundColor = defaultColor
  if (slot && slot.bgcolor) {
    backgroundColor = slot.bgcolor
  }
  return backgroundColor
}
/**
 * @param param0 
 * @returns a valid react element
 */
export const selectComponentFromSlotList = (
  parseSlot: any,
  slotList: any
) => {
  if (!parseSlot)
    return <></>
  return (
    <>{map(slotList, (item, key) => parseSlot(item, key))}</>
  )
}

export const selectTemplateFromTheme = ({
  block,
  slot,
  templates
}) => {
  const slot_type = get(slot, 'type', 'default')
  const slot_data = get(templates, slot_type, false)
  const slot_layouts = get(slot_data, `${block}`, false)
  return slot_layouts
}

export const selectLayoutFromTemplate = ({
  block,
  slot
}) => {
  const slot_len1 = get(slot, 'len1', 0)
  const slot_layouts = get(block, 'layout', false)
  const slot_spaces = get(block, 'spaces', false)
  const slot_position = slot_spaces.length > 0 ? slot_len1 : 0
  const slot_layouts_selected = get(slot_layouts, `[${slot_position}]`, false)
  return slot_layouts_selected
}

export const selectLayoutColsFromSlot = (
  len1: number,
  spaces?: [number, number, number, number],
): number => {
  return get(spaces, `[${len1 - 1}]`, 0)
}

/**
 * RenderSectionTitle function
 * @param {Object} data Expects a Object with SectionTitle configurations
 * @returns
 * - A space for empty titles
 * - A cloneElement hook when using customComponent prop 
 * - A SectionTitle with theme configurations
 */
export const renderSectionTitle = ({
  layout,
  color,
  title,
  icon,
  link,
  customComponent
}: RenderSectionTitleParams) => {

  if (customComponent) {
    return cloneElement(customComponent, { children: title })
  }

  if (!title || title == '') {
    return <TitleEmpty />
  }

  return (
    <SectionTitle
      color={color}
      icon={icon}
      layout={layout}
      href={link}
      title={title}
    />
  )
}