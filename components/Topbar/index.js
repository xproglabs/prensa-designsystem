import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import Block from '../Block';

const Topbar = ({content, theme}) => {

  const {leftContent, centerContent, rightContent} = content;
  const {color} = theme;

  return (
    <Block align="row center" bg={color} fc="white" custom="Topbar-Prensa-root" w="100p">
      <Block align="row middle between" custom="wrap" w="100p">
        <Block custom="left">{leftContent && leftContent}</Block>
        <Block>{centerContent && centerContent}</Block>
        <Block custom="right">{rightContent && rightContent}</Block>
      </Block>
    </Block>
  );
};

Topbar.propTypes = {
  content: PropTypes.shape({
    leftContent: PropTypes.object,
    centerContent: PropTypes.object,
    rightContent: PropTypes.object,
  }),
  theme: PropTypes.shape({
    color: PropTypes.oneOf(colors)
  })
};

Topbar.defaultProps = {
  theme: {
    color: 'primary-1'
  }
};

export default Topbar;