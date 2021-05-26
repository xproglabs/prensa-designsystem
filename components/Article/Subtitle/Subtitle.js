import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

const Subtitle = ({
  color,
  fontSize,
  lineHeight,
  mb,
  value
}) => {
  return (
    <Block 
      mb={mb[0]}
      lg={{
        mb: mb[1]
      }}
      width="100%">
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='p'
        fontFamily='secondary'
        fontSize={fontSize[0]}
        lineHeight={lineHeight[0]}
        lg={{
          fontSize: fontSize[1],
          lineHeight: lineHeight[1]
        }}>
      </Typography>
    </Block>
  );
};

Subtitle.defaultProps = {
  color: 'neutral3',
  fontSize: ['18px', '18px'],
  lineHeight: ['150%', '150%'],
  mb: ['2', '2'],
  value: 'A XPROG presta serviços para a Atex Brasil fornecendo mão de obra qualificada e gestão da implantação de seus projetos digitais. Serviços que se consolidaram em uma parceria entre empresas, agregando valor à consultoria entregue aos clientes da Atex Brasil.'
};

Subtitle.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

export default Subtitle;