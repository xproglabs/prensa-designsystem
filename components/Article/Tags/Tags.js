import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../../Typography';
import * as S from './Tags.styled';

const Tags = ({
  fontSize,
  fontWeight,
  value
}) => {
  return (
    <S.Container>
      <S.Tag>
        <Typography 
          color='primary1'
          element='span'
          fontFamily='secondary'
          fontSize={fontSize[0]}
          fontWeight={fontWeight}>
          {value}
        </Typography>
      </S.Tag>
    </S.Container>
  );
};

Tags.defaultProps = {
  fontWeight: 700,
  fontSize: ['14px'],
  value: 'NOME DA TAG'
};

Tags.propTypes = {
  fontSize: PropTypes.array,
  fontWeight: PropTypes.array,
  value: PropTypes.string
};

export default Tags;