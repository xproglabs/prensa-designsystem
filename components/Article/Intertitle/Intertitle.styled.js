import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

export const Intertitle = ({color, children}) => 
  <Typography 
    color={color}
    dangerouslySetInnerHTML={children}
    element='h3'
    fontFamily='primary'
    fontSize='18px'
    fontWeight={700}
    lineHeight='22px'
    mb={4}
    lg={{
      fontSize: '30px',
      lineHeight: '36px'
    }} 
  />;

Intertitle.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
};

export const Row = ({children}) => 
  <Block
    width='100%'>
    {children}
  </Block>;

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};