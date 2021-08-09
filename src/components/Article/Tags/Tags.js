import { map } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import Typography from '../../Typography'
import { AnchorTag } from '../Tags/Anchor'
import * as S from './Tags.styled'

const Tags = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  items,
  maxWidth
}) => {
  return (
    <S.Container maxWidth={maxWidth}>
      {(map(items, (item, key) => {
        return (
          <S.Tag color={color} key={key}>
            <AnchorTag href={`/?term=${item}`}>
              <Typography 
                color={color}
                element='span'
                fontFamily={fontFamily}
                fontSize={fontSize[0]}
                fontWeight={fontWeight}>
                {item}
              </Typography>
            </AnchorTag>   
          </S.Tag>
        )
      }))}
    </S.Container>
  )
}

Tags.defaultProps = {
  color: '#999999',
  fontFamily: 'secondary',
  fontSize: ['14px'],
  fontWeight: 700,
  items: []
}

Tags.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  items: PropTypes.array,
  maxWidth: PropTypes.string,
}

export default Tags