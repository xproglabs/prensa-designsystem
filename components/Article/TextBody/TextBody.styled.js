import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

export const Body = ({children}) => 
  <Block
    lg={{
      align: 'column',
      alignx: 'center',
      width: '100%',
    }}
    px='3'
    width='calc(100% - 48px)'>
    {children}
  </Block>;

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const TextBody = ({color, children}) => 
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

TextBody.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string
};
