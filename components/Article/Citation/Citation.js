import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.tsx'
import Typography from '../../Typography'

const Citation = ({
  bl,
  bsl,
  borderColor,
  color,
  customCite,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  pl,
  value,
  maxWidth,
  width
}) => {
  return (
    <Block 
      align='row'
      bl={bl}
      bsl={bsl}
      borderColor={borderColor}
      custom={customCite}
      maxWidth={maxWidth}
      mb={mb}
      width={width}
    >
      <Typography 
        color={color}
        dangerouslySetInnerHTML={{ __html: value }}
        element='cite'
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        pl={pl}
      />
    </Block>
  )
}

Citation.defaultProps = {
  bl: '8px',
  borderColor: 'primary1',
  bsl: 'solid',
  color: 'primary2',
  fontFamily: 'secondary',
  fontWeight: 700,
  fontSize: ['32px', '32px'],
  lineHeight: ['140%', '140%'],
  mb: [3, 3],
  width: '100%'
}

Citation.propTypes = {
  customCite: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  pl: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  width: PropTypes.string
}

export default Citation