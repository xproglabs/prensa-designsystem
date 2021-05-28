import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../../Typography';
import * as S from './Tags.styled';

const Tags = ({
  fontSize,
  fontWeight,
  items
}) => {
  return (
    <S.Container>
      {(map(items, (item, key) => {
        return (
          <S.Tag key={key}>
            <Typography 
              color='primary1'
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
  fontWeight: 700,
  fontSize: ['14px'],
  items: []
};

Tags.propTypes = {
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  items: PropTypes.array
};

export default Tags;