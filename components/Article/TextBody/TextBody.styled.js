import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

export const Body = ({
  bodyWidth,
  children,
  hyperlinkColor
}) => {
  return <Block
    custom={`
      a { color: ${hyperlinkColor}; };
      max-width: ${bodyWidth};
    `}
    lg={{
      align: 'column',
      alignx: 'center',
      width: '100%',
    }}
    px='3'
    width='calc(100% - 48px)'>
    {children}
  </Block>;
};

Body.propTypes = {
  bodyWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  hyperlinkColor: PropTypes.string
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
