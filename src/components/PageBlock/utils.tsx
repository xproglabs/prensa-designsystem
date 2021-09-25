import { get } from 'lodash'

export const selectLayoutFromTemplate = ({
  block,
  slot,
  templates
}) => {
  const slot_len1 = get(slot, 'len1', 0)
  const slot_type = get(slot, 'type', 'default')
  const slot_data = get(templates, slot_type, false)
  const slot_layouts = get(slot_data, `${block}.layout`, false)
  const slot_layouts_selected = get(slot_layouts, `[${slot_len1}]`, false)
  return slot_layouts_selected
}
