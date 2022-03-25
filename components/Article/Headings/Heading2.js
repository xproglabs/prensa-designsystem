import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../NewBlock'
import Typography from '../../Typography'

const Heading2 = ({
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb,
  value
}) => {
  return (
    <Block maxWidth={maxWidth} width='100%'>
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element={element}
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        fontWeight={fontWeight}
        lineHeight={lineHeight[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1],
          mb: mb[1]
        }}
        mb={mb[0]}
        mt={3}
      />
    </Block>
  )
}

Heading2.defaultProps = {
  color: 'neutral2',
  element: 'h2',
  fontFamily: 'primary',
  fontSize: ['32px', '32px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: [3, 3],
  value: 'Heading 2'
}

Heading2.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  value: PropTypes.string
}

export default Heading2