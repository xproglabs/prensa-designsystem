import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block'
import Typography from '../../Typography'

const Subject = ({
  bgColor,
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  mt,
  px,
  py,
  transform,
  value
}) => {
  return (
    <Block 
      bgColor={bgColor}
      custom={`
        border-radius: ${borderRadius};
      `}
      mb={mb[0]}
      mt={mt[0]}
      px={px}
      py={py}
      lg={{
        mb: mb[1],
        mt: mt[1]
      }}>
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='span'
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        fontWeight={fontWeight}
        lineHeight={lineHeight[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1]
        }}
        transform={transform}
      />
    </Block>
  )
}

Subject.defaultProps = {
  bgColor: 'primary1',
  borderRadius: '3px',
  color: 'white',
  fontFamily: 'secondary',
  fontSize: ['14px', '14px'],
  fontWeight: 700,
  lineHeight: ['20px', '20px'],
  transform: 'none',
  mb: [1, 2],
  mt: [2, 4],
  px: 2,
  py: '4px',
  value: 'MÍDIA DIGITAL'
}

Subject.propTypes = {
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  mt: PropTypes.array,
  px: PropTypes.string,
  py: PropTypes.string,
  transform: PropTypes.string,
  value: PropTypes.string
}

export default Subject