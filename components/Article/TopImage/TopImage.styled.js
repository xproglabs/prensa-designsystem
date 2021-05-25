import PropTypes from 'prop-types';
import React from 'react';

import Block from '../../Block';
import Typography from '../../Typography';

export const Box = ({
  children,
  mb
}) => 
  <Block
    custom={`
      img {
        width: 100%;
      }
    `}
    mb={mb[0]}
    lg={{
      mb: mb[1]
    }}
    width='100%'>
    {children}
  </Block>;

Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
};

export const SubtitleBox = ({
  children,
}) => 
  <Block
    bgColor='neutral9'
    px={3}
    py={3}
    width='calc(100% - 48px)'
    lg={{
      px: 4,
      py: 2,
      width: 'calc(100% - 64px)'
    }}>
    {children}
  </Block>;

SubtitleBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  px: PropTypes.array,
  py: PropTypes.array,
  width: PropTypes.array
};

export const Subtitle = ({
  children,
  fontSize,
  lineHeight
}) => 
  <Typography 
    color='neutral4'
    dangerouslySetInnerHTML={children}
    element="p"
    fontFamily='secondary'
    fontSize={fontSize[0]}
    lineHeight={lineHeight[0]}
    lg={{
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }}
  />;

Subtitle.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};