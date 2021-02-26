import PropTypes from 'prop-types';
import React from 'react';
import {css, withTheme} from 'styled-components';

import {parseProps} from './parsers';
import {
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  HeadingFour,
  HeadingFive,
  HeadingSix,
  Paragraph,
  Span,
} from './styled';

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
  theme,
  custom
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
    children,
    custom,
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

  switch(element) {
    case 'h1':
      return <HeadingOne {...props} $style={styles} />;
    case 'h2':
      return <HeadingTwo {...props} $style={styles} />;
    case 'h3':
      return <HeadingThree {...props} $style={styles} />;
    case 'h4':
      return <HeadingFour {...props} $style={styles} />;
    case 'h5':
      return <HeadingFive {...props} $style={styles} />;
    case 'h6':
      return <HeadingSix {...props} $style={styles} />;
    case 'p':
      return <Paragraph {...props} $style={styles} />;
    case 'span':
    default:
      return <Span {...props} $style={styles} />;
  }
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
  /**
   * Permite a escolha da tag de texto a ser utilizada
   */
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  /**
   * Altera o valor da propriedade font-size no css
   */
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Alterar o valor da propriedade line-height no css
   */
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Alterar o valor da propriedade font-family no css
   */
  fontFamily: PropTypes.string,
  /**
   * Alterar o valor da propriedade font-weight no css
   */
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
  theme: PropTypes.object,
  /**
   * Permite estilos customizados
   */
  custom: PropTypes.object
};

export default withTheme(Typography);
