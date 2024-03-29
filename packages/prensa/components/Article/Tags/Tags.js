import map from 'lodash/map'
import PropTypes from 'prop-types'
import React from 'react'

import Typography from '../../Typography'
import { AnchorTag } from '../Tags/Anchor'
import * as S from './Tags.styled'

const Tags = ({
  b,
  borderColor,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  items,
  maxWidth,
  radius,
  termSlug,
  transform
}) => {
  return (
    <S.Container maxWidth={maxWidth}>
      {(map(items, (item, key) => (
        <S.Tag
          b={b}
          borderColor={borderColor}
          key={key}
          radius={radius}
        >
          <AnchorTag href={`${termSlug}${item}`}>
            <Typography
              color={color}
              element='span'
              fontFamily={fontFamily}
              fontSize={fontSize[0]}
              fontWeight={fontWeight}
              transform={transform}
              custom='white-space: nowrap;'
            >
              {item}
            </Typography>
          </AnchorTag>
        </S.Tag>
      )))}
    </S.Container>
  )
}

Tags.defaultProps = {
  fontFamily: 'secondary',
  fontSize: ['14px'],
  fontWeight: 700,
  items: [],
  termSlug: '/?term='
}

Tags.propTypes = {
  b: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  items: PropTypes.array,
  maxWidth: PropTypes.string,
  radius: PropTypes.string,
  transform: PropTypes.string,
}

export default Tags