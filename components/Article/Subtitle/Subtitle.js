import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

const Subtitle = ({
  color,
  fontFamily,
  fontSize,
  lineHeight,
  mb,
  value
}) => {
  return (
    <Block 
      mb={mb[0]}
      lg={{
        mb: mb[1]
      }}
      width="100%">
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='p'
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        lineHeight={lineHeight[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1]
        }}>
      </Typography>
    </Block>
  )
}

Subtitle.defaultProps = {
  color: 'neutral3',
  fontSize: ['18px', '18px'],
  fontFamily: 'secondary',
  lineHeight: ['150%', '150%'],
  mb: [2, 2],
}

Subtitle.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
}

export default Subtitle