import { get } from 'lodash'
import React from 'react'

import SectionTitle, { SectionTitleBlank } from '../SectionTitle'

export const isBackgroundTransparent = (background: string | any) => {
  return !background || background == 'transparent'
}

export const selectBgColorFromSlot = (slot): string => {
  let backgroundColor: string
  let defaultColor = 'transparent'
  backgroundColor = defaultColor
  if(slot && slot.bgcolor) {
    backgroundColor = slot.bgcolor
  }
  return backgroundColor
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
  const slot_layouts_selected = get(slot_layouts, `[${slot_len1}]`, false)
  return slot_layouts_selected
}

export const selectLayoutColsFromSlot = (
  len1: number,
  spaces?: [number, number, number, number],
): number => {
  return get(spaces, `[${len1 - 1}]`, 0)
}

/**
 * selectSectionTitleFromSlot function
 * @param title section title
 * @param link section path to link
 * @param icon section icon
 * @param color section color
 * @returns a React cloneElement hook for rendering the component passed as a prop
 */
export const selectSectionTitleFromSlot = (
  title: string,
  link?: string,
  icon?: string,
  color?: string
) => {
  const title_text = !title || title == ''
  if(title_text) {
    return (
      <SectionTitleBlank />
    )
  }
  return (
    <SectionTitle title={title} />
  )
}