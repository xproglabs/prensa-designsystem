import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

const Subtitle = ({
  color,
  value
}) => {
  return (
    <Block width="100%">
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='p'
        fontSize='18px'
        fontFamily='secondary'
        fontWeight={400}
        lineHeight='26px'
        mt='0px'
        mb={3}
        lg={{
          mb: 4,
          fontSize: '18px',
          lineHeight: '26px'
        }}>
      </Typography>
    </Block>
  );
};

Subtitle.defaultProps = {
  color: 'neutral3',
  value: 'A XPROG presta serviços para a Atex Brasil fornecendo mão de obra qualificada e gestão da implantação de seus projetos digitais. Serviços que se consolidaram em uma parceria entre empresas, agregando valor à consultoria entregue aos clientes da Atex Brasil.'
};

Subtitle.propTypes = {
  /**
   * Cor do Subtitle
   */
  color: PropTypes.string,
  /**
   * Valor (HTML)
   */
  value: PropTypes.string
};

export default Subtitle;