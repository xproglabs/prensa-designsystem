import { get } from 'lodash'
import React from 'react'

import * as Templates from './index'

const TEMPLATES_LIST = {
  '100': 'template100',
  '7030': 'template7030',
  '50': 'template50',
  '33': 'template33'
}
const SwitchTemplate = (props) => {
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
const parseBlockLayout = (template, teasers) => {
  switch(template) {
    case 'default':
      return teasers.featured_related
  }
  return teasers.image_large_left
}
const parseBlockProps = (block, teasers) => {
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
export const PageBlock = ({ content, teasers }) => {
  const pageblock_cid = get(content, 'cid', false)
  const pageblock_name = get(content, 'nme', false)
  const pageblock_template = get(content, 'tpl', false)
  if(!pageblock_cid) {
    console.log(content)
    console.log('[PRENSA] parsePageBlock.failed contentId not found')
    return false
  }
  if(!pageblock_template) {
    console.log(content)
    console.log('[PRENSA] parsePageBlock.failed template not found')
    return false
  }
  const block1 = get(content, 'b1', false)
  const block2 = get(content, 'b2', false)
  const block3 = get(content, 'b3', false)
  const block1Props = parseBlockProps(block1, teasers)
  const block2Props = parseBlockProps(block2, teasers)
  const block3Props = parseBlockProps(block3, teasers)

  console.log(`[PRENSA] parsePageBlock.render ${pageblock_cid} ${pageblock_name} ${pageblock_template}`)
  const switchTemplateProps = {
    template: pageblock_template,
    slot70: block1Props,
    slot30: block2Props
  }
  console.log('switchTemplateProps', switchTemplateProps)
  return (
    <SwitchTemplate {...switchTemplateProps}>
      <pre>oi</pre>
    </SwitchTemplate>
  )
}