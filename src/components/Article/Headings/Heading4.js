import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

const Heading4 = ({
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

Heading4.defaultProps = {
  color: 'neutral2',
  element: 'h4',
  fontFamily: 'primary',
  fontSize: ['18px', '18px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: ['2', '2'],
  value: 'Heading 4'
}

Heading4.propTypes = {
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

export default Heading4