import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

export const Box = ({children}) => 
  <Block
    custom={`
      img {
        width: 100%;
      }
    `}
    mb='2'
    width='100%'>
    {children}
  </Block>;

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const SubtitleBox = ({children}) => 
  <Block
    bgColor='neutral9'
    px='3'
    py='3'
    width='calc(100% - 48px)'>
    {children}
  </Block>;

SubtitleBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export const Subtitle = ({children}) => 
  <Typography 
    color='neutral4'
    dangerouslySetInnerHTML={children}
    element="p"
    fontFamily='secondary'
    fontSize='18px'
    lineHeight='22px'
    lg={{
      fontSize: '14px',
      lineHeight: '20px'
    }} />;

Subtitle.propTypes = {
  children: PropTypes.string
};