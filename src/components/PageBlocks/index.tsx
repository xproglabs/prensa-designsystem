import { get } from 'lodash'
import React from 'react'

import {
  parseBlockProps,
  SwitchTemplate
} from './utils'

const PageBlock = ({ content, teasers }) => {
  const pageblock_cid = get(content, 'cid', false)
  const pageblock_name = get(content, 'nme', false)
  const pageblock_template = get(content, 'tpl', false)
  if(!pageblock_cid) {
    console.log('[PRENSA] parsePageBlock.failed contentId not found')
    return false
  }
  if(!pageblock_template) {
    console.log('[PRENSA] parsePageBlock.failed template not found')
    return false
  }
  const block1 = get(content, 'b1', false)
  const block2 = get(content, 'b2', false)
  const block3 = get(content, 'b3', false)
  const block1Props = parseBlockProps(block1, teasers)
  const block2Props = parseBlockProps(block2, teasers)
  const block3Props = parseBlockProps(block3, teasers)

  const switchTemplateProps = {
    template: pageblock_template,
    slot70: block1Props,
    slot30: block2Props
  }
  return (
    <SwitchTemplate {...switchTemplateProps}>
      <pre>oi</pre>
    </SwitchTemplate>
  )
}

export default PageBlock