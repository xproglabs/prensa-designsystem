import PropTypes from 'prop-types';
import React from 'react';
import styled, {css, withTheme} from 'styled-components';

import DynamicComponent from '../DynamicComponent';
import {parseProps} from './parsers';

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
  mr,
  xs,
  sm,
  md,
  lg,
  xl,
  theme
}) => {

  const styles = css`
    ${props => parseProps('', props)};
    ${props => props.xs && parseProps('xs', props)};
    ${props => props.sm && parseProps('sm', props)};
    ${props => props.md && parseProps('md', props)};
    ${props => props.lg && parseProps('lg', props)};
    ${props => props.xl && parseProps('xl', props)};
  `;

  const getXsProps = () => xs && ({
    ...xs,
    theme,
    $fontWeight: xs.fontWeight ? xs.fontWeight : fontWeight,
    $fontSize: xs.fontSize ? xs.fontSize : fontSize,
    $fontFamily: xs.fontFamily ? xs.fontFamily : fontFamily,
    $lineHeight: xs.lineHeight ? xs.lineHeight : lineHeight,
  });
  const getSmProps = () => sm && ({
    ...sm,
    theme,
    $fontWeight: sm.fontWeight ? sm.fontWeight : fontWeight,
    $fontSize: sm.fontSize ? sm.fontSize : fontSize,
    $fontFamily: sm.fontFamily ? sm.fontFamily : fontFamily,
    $lineHeight: sm.lineHeight ? sm.lineHeight : lineHeight,
  });
  const getMdProps = () => md && ({
    ...md,
    theme,
    $fontWeight: md.fontWeight ? md.fontWeight : fontWeight,
    $fontSize: md.fontSize ? md.fontSize : fontSize,
    $fontFamily: md.fontFamily ? md.fontFamily : fontFamily,
    $lineHeight: md.lineHeight ? md.lineHeight : lineHeight,
  });
  const getLgProps = () => lg && ({
    ...lg,
    theme,
    $fontWeight: lg.fontWeight ? lg.fontWeight : fontWeight,
    $fontSize: lg.fontSize ? lg.fontSize : fontSize,
    $fontFamily: lg.fontFamily ? lg.fontFamily : fontFamily,
    $lineHeight: lg.lineHeight ? lg.lineHeight : lineHeight,
  });
  const getXlProps = () => xl && ({
    ...xl,
    theme,
    $fontWeight: xl.fontWeight ? xl.fontWeight : fontWeight,
    $fontSize: xl.fontSize ? xl.fontSize : fontSize,
    $fontFamily: xl.fontFamily ? xl.fontFamily : fontFamily,
    $lineHeight: xl.lineHeight ? xl.lineHeight : lineHeight,
  });

  const props = {
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    $lineHeight: lineHeight,
    mt,
    mb,
    ml,
    mr,
    xs: getXsProps(),
    sm: getSmProps(),
    md: getMdProps(),
    lg: getLgProps(),
    xl: getXlProps(),
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
  /**
   * Propriedades responsivas
   */
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object,
  theme: PropTypes.object
};

export default withTheme(Typography);
