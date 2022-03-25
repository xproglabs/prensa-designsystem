import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../NewBlock'
import Typography from '../../Typography'

const Heading3 = ({
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

Heading3.defaultProps = {
  color: 'neutral2',
  element: 'h3',
  fontFamily: 'primary',
  fontSize: ['24px', '24px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: [2, 2],
  value: 'Heading 3'
}

Heading3.propTypes = {
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

export default Heading3