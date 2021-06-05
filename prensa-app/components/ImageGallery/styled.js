import {Block, Typography} from 'prensa';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: max-content;
  @media (min-width: ${props => props.theme.queries.md}) {
    width: ${props => props.$width};
    height: ${props => props.$height};
  }
`;

const SubtitleBox = ({
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

const Subtitle = ({
  children,
  fontFamily,
  fontSize,
  lineHeight
}) => 
  <Typography 
    color='neutral4'
    dangerouslySetInnerHTML={children}
    element="p"
    fontFamily={fontFamily}
    fontSize={fontSize[0]}
    lineHeight={lineHeight[0]}
    lg={{
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }}
  />;
  
Subtitle.propTypes = {
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};

export {Container, SubtitleBox, Subtitle};