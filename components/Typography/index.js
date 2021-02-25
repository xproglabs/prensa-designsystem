import PropTypes from 'prop-types';
import React from 'react';
import styled, {css} from 'styled-components';

import DynamicComponent from '../DynamicComponent';
import {parseFontFamily, parseSize} from './parsers';

const Typography = ({
  children,
  element,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  mt,
  mb,
  ml,
  mr
}) => {

  const styles = css`
    font-weight: ${fontWeight};
    font-family: ${parseFontFamily};
    font-size: ${props => parseSize(props, 'fontSize')};
    line-height: ${props => parseSize(props, 'lineHeight')};
    ${props => props.theme.parseMargin(props, props.theme)};
  `;

  const props = {
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    $lineHeight: lineHeight,
    mt,
    mb,
    ml,
    mr
  };

  const StyledTypography = styled(DynamicComponent).attrs({element})`${styles}`;

  return <StyledTypography {...props}>{children}</StyledTypography>;
};

Typography.defaultProps = {
  element: 'h1',
  fontSize: 3,
  fontFamily: 'primary',
  fontWeight: 400,
  lineHeight: 1.5,
  mt: 2,
  mb: 2
};

Typography.propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.number,
  /**
   * Define propriedade de margin
   */
  my: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mx: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.object
};

export default Typography;
