import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../../Typography';
import * as S from './Tags.styled';

const Tags = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  items
}) => {
  return (
    <S.Container>
      {(map(items, (item, key) => {
        return (
          <S.Tag color={color} key={key}>
            <Typography 
              color={color}
              element='span'
              fontFamily={fontFamily}
              fontSize={fontSize[0]}
              fontWeight={fontWeight}>
              {item}
            </Typography>
          </S.Tag>
        );
      }))}
    </S.Container>
  );
};

Tags.defaultProps = {
  color: '#999999',
  fontFamily: 'secondary',
  fontSize: ['14px'],
  fontWeight: 700,
  items: []
};

Tags.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.array,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  items: PropTypes.array
};

export default Tags;