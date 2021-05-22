import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

const Title = ({
  color,
  value
}) => {
  return (
    <Block width="100%">
      <Typography 
        color={color}
        dangerouslySetInnerHTML={value}
        element='h1'
        fontSize='38px'
        fontFamily='primary'
        fontWeight={700}
        lineHeight='42px'
        mt='0px'
        mb={2}
        lg={{
          mb: 3,
          fontSize: '56px',
          lineHeight: '60px'
        }}>
      </Typography>
    </Block>
  );
};

Title.defaultProps = {
  color: 'neutral2',
  value: 'Atex Brasil e XPROG entregam produtos digitais acessados por milhões de internautas brasileiros'
};

Title.propTypes = {
  /**
   * Cor do Título
   */
  color: PropTypes.string,
  /**
   * Valor (HTML)
   */
  value: PropTypes.string
};

export default Title;