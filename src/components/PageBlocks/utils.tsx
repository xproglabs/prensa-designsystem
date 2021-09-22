import { get } from 'lodash'

import * as Templates from '../../templates'

export const parseBlockLayout = (template, teasers) => {
  switch(template) {
    case 'default':
      return teasers.featured_related
  }
  return teasers.image_large_left
}

export const parseBlockProps = (block, teasers) => {
  if(!block)
    return {}
  const color = get(block, 'co', false)
  const icone = get(block, 'ic', false)
  const link = get(block, 'li', false)
  const size1 = get(block, 'n1', 0)
  const size2 = get(block, 'n2', 0)
  const list1 = get(block, 'l1', [])
  const list2 = get(block, 'l2', [])
  const template = get(block, 'te', false)
  const layout = parseBlockLayout(template, teasers)
  return {
    layout,
    template,
    slot: list1
  }
}

export const SwitchTemplate = (props) => {
  const TEMPLATES_LIST = {
    '100': 'template100',
    '7030': 'template7030',
    '50': 'template50',
    '33': 'template33'
  }
  switch(props.template) {
    case TEMPLATES_LIST['100']:
      return <Templates.Template100 {...props} />
    case TEMPLATES_LIST['7030']:
      return <Templates.Template7030 {...props} />
    case TEMPLATES_LIST['33']:
      return <Templates.Template33 {...props} />
  }
  return <Templates.Template100 {...props} />
}