import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.ts'
import Typography from '../../Typography'

const Subtitle = ({
  color,
  fontFamily,
  fontStyle,
  fontSize,
  lineHeight,
  mb,
  value
}) => {
  return (
    <Block 
      mb={mb}
      width='100%'
    >
      <Typography 
        color={color}
        dangerouslySetInnerHTML={{ __html: value }}
        element='p'
        fontFamily={fontFamily}
        fontStyle={fontStyle}
        fontSize={fontSize}
        lineHeight={lineHeight}
      />
    </Block>
  )
}

Subtitle.defaultProps = {
  color: 'neutral3',
  fontStyle: 'normal',
  fontSize: ['18px', '18px'],
  fontFamily: 'secondary',
  lineHeight: ['150%', '150%'],
  mb: [2, 2],
}

Subtitle.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontStyle: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
}

export default Subtitle