import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.ts'
import Typography from '../../Typography'

const Title = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  value
}) => {
  return (
    <Block
      width='100%'
      mb={mb}
    >
      <Typography 
        color={color}
        dangerouslySetInnerHTML={{ __html: value }}
        element='h1'
        fontFamily='primary'
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
      />
    </Block>
  )
}

Title.defaultProps = {
  color: 'neutral2',
  fontSize: ['38px', '56px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: [2, 3],
}

Title.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
}

export default Title