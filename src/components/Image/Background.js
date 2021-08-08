import PropTypes from 'prop-types'
import React from 'react'

import { pathToImage } from '../Util/pathToImage'

const Image = ({ children, content, custom, domain, height, lazy, placeholder }) => {
  let img_placeholder = placeholder || null
  if(content['image-contentId']) {
    let policy_id = content['image-contentId']
    let derivative = '2x1'
    let width = 1000
    content['image-path'] = pathToImage(derivative, domain, policy_id, width)
    img_placeholder = img_placeholder || pathToImage(derivative, domain, policy_id, 10)
  }
  let content_path = content['image-path']
  let image_style 
  if(lazy) {
    image_style = { backgroundImage: `url(${lazy(content_path, img_placeholder)})` }
  } else {
    image_style = { backgroundImage: `url(${content_path})` }
  }
  if(height) {
    image_style.height = height
  }
  return (
    <div className={`image-background ${custom || ''}`} style={image_style}>
      {children && children}
    </div>
  )
}

Image.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object.isRequired,
  custom: PropTypes.string,
  domain: PropTypes.string,
  height: PropTypes.string,
  lazy: PropTypes.func,
  placeholder: PropTypes.string
}
Image.defaultProps = {
  content: {}
}
export default Image