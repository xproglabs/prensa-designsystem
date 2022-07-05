import PropTypes from 'prop-types'
import React from 'react'

import Block from '../../Block/index.tsx'
import Typography from '../../Typography'

const Subject = ({
  bgColor,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  mt,
  px,
  py,
  radius,
  transform,
  value
}) => {

  const hasValue = value !== ''

  const RenderText = () => {
    if (!hasValue) return null
    return (
      <Typography
        color={color}
        element='span'
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        fontWeight={fontWeight}
        lineHeight={lineHeight[0]}
        lg={{ fontSize: fontSize[1], lineHeight: lineHeight[1] }}
        textTransform={transform}
      >
        {value}
      </Typography>
    )
  }

  return (
    <Block
      bgColor={hasValue ? bgColor : undefined}
      radius={radius}
      mb={mb}
      mt={mt}
      px={px}
      py={py}
    >
      <RenderText />
    </Block>
  )
}

Subject.defaultProps = {
  bgColor: 'primary1',
  color: 'white',
  fontFamily: 'secondary',
  fontSize: ['14px', '14px'],
  fontWeight: 700,
  lineHeight: ['20px', '20px'],
  mb: [1, 2],
  mt: [2, 4],
  px: 2,
  py: '4px',
  radius: 'default',
  transform: 'none'
}

Subject.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  mt: PropTypes.array,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  radius: PropTypes.string,
  transform: PropTypes.string,
  value: PropTypes.string
}

export default Subject