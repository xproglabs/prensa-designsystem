import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

const Citation = ({
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  value
}) => {
  return (
    <Block width='100%'>
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='cite'
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        fontWeight={fontWeight}
        lineHeight={lineHeight[0]}
        mb={mb[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1],
          mb: mb[1]
        }}
      />
    </Block>
  );
};

Citation.defaultProps = {
  color: 'primary2',
  fontFamily: 'secondary',
  fontWeight: 700,
  fontSize: ['32px', '32px'],
  lineHeight: ['42px', '42px'],
  mb: ['7', '7'],
  value: '“Uma das nossas prioridades no mandato é fortalecer o Sistema de Saúde. Oferecer uma infraestrutura digna para a população é um dever mínimo do estado.”'
};

Citation.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.number,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

export default Citation;