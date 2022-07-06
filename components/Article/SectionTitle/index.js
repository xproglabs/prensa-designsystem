import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.tsx'
import Typography from '../../Typography'

const SectionTitle = ({
  children,
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb,
}) => {
  return (
    <Block maxWidth={maxWidth} width='100%'>
      <Typography 
        color={color}
        element={element}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        mb={mb}
        mt={3}
      >
        {children} 
      </Typography>
    </Block>
  )
}

SectionTitle.defaultProps = {
  color: 'neutral2',
  element: 'h2',
  fontFamily: 'primary',
  fontSize: ['20px', '20px'],
  fontWeight: 700,
  lineHeight: ['120%', '120%'],
  mb: [2, 2],
}

SectionTitle.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
}

export default SectionTitle