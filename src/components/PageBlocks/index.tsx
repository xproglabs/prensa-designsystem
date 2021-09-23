import { get } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from 'styled-components'

import {
  TEMPLATES_LIST
} from '../../templates/consts'
import {
  parseBlockProps,
  SwitchTemplate
} from './utils'

// export interface PageBlockContentProps {
//   cid: string;
//   box_wrap: object;
//   carousel?: object;
//   datetime_enabled: boolean;
//   image: object;
//   title: object;
//   section?: object;
//   subject: object;
//   subtitle: object;
// }

export interface SlotBlockProps {
  color: string;
  icon: string;
  link: string;
  len1: number;
  len2: number;
  list1: object;
  list2: object;
  title: string;
  type: string;
}

export interface PageBlockProps {
  cid: string;
  name: string;
  type: typeof TEMPLATES_LIST;
  slot1: SlotBlockProps;
  slot2: SlotBlockProps;
  slot3: SlotBlockProps;
}

const PageBlock = ({
  cid,
  name,
  type,
  slot1,
  slot2,
  slot3,
  theme
}: PageBlockProps) => {
  // debug  
  const { teasers } = theme
  console.log(`[PRENSA] PageBlock ${cid} ${name} ${type}`)
  // const block1 = get(content, 'slot1', false)
  // const block2 = get(content, 'slot2', false)
  // const block3 = get(content, 'slot3', false)
  // const block1Props = parseBlockProps(block1, teasers)
  // const block2Props = parseBlockProps(block2, teasers)
  // const block3Props = parseBlockProps(block3, teasers)
  console.log('slot1.list1', slot1.list1)
  console.log('teasers', teasers)
  const switchTemplateProps = {
    template: type,
    slot70: {
      layout: teasers.image_large_left,
      template: 'default',
      slot: slot1.list1
    },
    slot30: {
      layout: teasers.image_large_left,
      template: 'default',
      slot: slot2.list1
    }
  }
  return (
    <SwitchTemplate {...switchTemplateProps}>
      <pre>{name}</pre>
    </SwitchTemplate>
  )
}

PageBlock.propTypes = {
  /**
   * Contentid (cid) identifica o código único do bloco de página
   */
  cid: PropTypes.string,
  /**
   * Nome (name) identifica internamente o bloco de página
   */
  name: PropTypes.string,
  /**
   * Nome (name) identifica internamente o bloco de página
   */
  type: PropTypes.oneOf(TEMPLATES_LIST)
  /**
   * Slot1 identifica o primeiro slot de página
   */

}

export default withTheme(PageBlock)