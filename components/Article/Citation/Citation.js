import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

const Citation = ({
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
      maxWidth={maxWidth}
      custom={customCite}
      width={width} 
      align='row' 
      mb={mb[0]}
      lg={{mb: mb[1]}}>
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='cite'
        fontFamily={fontFamily}
        fontSize={fontSize[0]}
        fontWeight={fontWeight}
        lineHeight={lineHeight[0]}
        pl={pl[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1],
          pl: pl[1]
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
  lineHeight: ['140%', '140%'],
  mb: ['3', '3'],
  pl: ['0px', '0px'],
  value: '“Uma das nossas prioridades no mandato é fortalecer o Sistema de Saúde. Oferecer uma infraestrutura digna para a população é um dever mínimo do estado.”',
  width: '100%'
};

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
};

export default Citation;