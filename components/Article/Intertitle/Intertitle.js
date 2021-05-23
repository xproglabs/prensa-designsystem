import PropTypes from 'prop-types';
import React from 'react';

import * as S from './Intertitle.styled';

const Intertitle = ({color, value}) => {
  return (
    <S.Row>
      <S.Intertitle color={color}>
        {value}
      </S.Intertitle>
    </S.Row>
  );
};

Intertitle.defaultProps = {
  color: 'neutral2',
  value: 'Mercado Brasileiro'
};

Intertitle.propTypes = {
  /**
   * Cor do Título
   */
  color: PropTypes.string,
  /**
   * Valor (HTML)
   */
  value: PropTypes.string
};

export default Intertitle;