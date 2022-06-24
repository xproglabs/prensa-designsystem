import { map } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import Block from '../Block/index.tsx'

const SocialMedias = props => {
  const { content } = props

  if (!content) return null
  const propsSocialMedia = { align: 'row evenly' }
  const propsSocialCirlce = { mr: '1', custom: 'social-circle', 'md': { mr: '0', ml: '1' } }
  return (
    <Block {...propsSocialMedia}>
      {map(content, (item, k) => (
        <a href={item.path} key={k}>
          <Block {...propsSocialCirlce}>
            {item.icon}
          </Block>
        </a>
      ))}
    </Block>
  )
}

SocialMedias.propTypes = {
  content: PropTypes.array.isRequired
}

export default SocialMedias