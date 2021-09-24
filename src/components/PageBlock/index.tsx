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
  theme: any;
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
  const { teasers } = theme
  // console.log(`[PRENSA] PageBlock ${cid} ${name} ${type}`)
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