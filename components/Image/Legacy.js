import PropTypes from 'prop-types'
import React from 'react'

import Block from '../Block'

const Image = ({domain, value}) => {

  if(!value || !value['image-legacy'])
    return false
  
  const imagePath = `${value['image-legacy']}`
  return (
    <Block custom="article-image-box" w="100p">
      <img className='image-article' src={imagePath} alt={`Imagem importada do sistema legado`} />
    </Block>
  )
}

Image.propTypes = {
  value: PropTypes.object.isRequired
}
Image.defaultProps = {value: {}}

export default Image