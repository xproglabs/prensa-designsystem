import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from 'styled-components'

import {
  Template100,
  Template7030,
  Template33,
  TemplateWrap
} from '../../templates'
import {
  TEMPLATES_INDEX,
  TEMPLATES_LIST
} from '../../templates/consts'
import {
  PageBlockProps
} from './types'

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
  if(type === TEMPLATES_INDEX['100']) {
    return (
      <Template100
        template={type}
        slot100={{
          layout: teasers.image_large_left,
          slot: slot1.list1
        }}
      />
    )
  }
  if(type === TEMPLATES_INDEX['70']) {
    return (
      <Template7030
        template={type}
        slot70={{
          layout: teasers,
          slot: slot1.list1
        }}
        slot30={{
          layout: teasers.image_large_left,
          slot: slot2.list1
        }}
      />
    )
  }
  if(type === TEMPLATES_INDEX['33']) {
    return (
      <Template33
        template={type}
        slotLeft={{
          layout: teasers.image_large_left,
          slot: slot1.list1
        }}
        slotCenter={{
          layout: teasers.image_large_left,
          slot: slot2.list1
        }}
        slotRight={{
          layout: teasers.image_large_left,
          slot: slot3.list1
        }}
      />
    )
  }
  return (
    <TemplateWrap
      template={type}
      slotItems={{
        layout: teasers.image_large_left,
        slot: slot1.list1
      }}
    />
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
}

export default withTheme(PageBlock)