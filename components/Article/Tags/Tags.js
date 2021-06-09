import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../../Typography';
import * as S from './Tags.styled';

const Tags = ({
  color,
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
              fontFamily='secondary'
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
  fontWeight: 700,
  fontSize: ['14px'],
  items: []
};

Tags.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  items: PropTypes.array
};

export default Tags;