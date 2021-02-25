import PropTypes from 'prop-types';
import React from 'react';
import styled, {css} from 'styled-components';

import {parseFontFamily, parseSize} from './parsers';

const DyanmicComponent = styled.div``;

const Typography = ({children, element, fontSize, fontFamily, fontWeight, lineHeight}) => {

  const styles = css`
    font-weight: ${fontWeight};
    font-family: ${parseFontFamily};
    font-size: ${props => parseSize(props, 'fontSize')};
    line-height: ${props => parseSize(props, 'lineHeight')};
  `;

  const props = {
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    $lineHeight: lineHeight
  };

  const TypographyComponent = DyanmicComponent.withComponent(element);
  const StyledTypography = styled(TypographyComponent)`${styles}`;
  return <StyledTypography {...props}>{children}</StyledTypography>;
};

Typography.defaultProps = {
  element: 'h1',
  fontSize: 3,
  fontFamily: 'primary',
  fontWeight: 400,
  lineHeight: 1.5
};

Typography.propTypes = {
  children: PropTypes.node,
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.number,
};

export default Typography;
