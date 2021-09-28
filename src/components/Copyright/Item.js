import { Block, Typography } from 'prensa'
import PropTypes from 'prop-types'
import React from 'react'

const TextItem = ({ color, text }) => {
  return (
    <Block width='100%'>
      <Typography 
        color={color}
        element='span'
        fontSize='14px'
        textAlign='left'
        width='100%'
      >
        {text}
      </Typography>
    </Block>
  )
}
TextItem.defaultProps = {
  color: 'neutral3',
}

TextItem.propTypes = {
  color: PropTypes.string,
}
export default TextItem