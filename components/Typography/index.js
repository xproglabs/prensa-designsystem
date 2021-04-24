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
  Label,
  Cite
} from './styled';

const Typography = ({
  children,
  color,
  element,
  fontSize,
  fontFamily,
  fontWeight,
  lineHeight,
  textAlign,
  transform,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  xs,
  sm,
  md,
  lg,
  xl,
  theme,
  custom,
  width,
  fullWidth,
  maxWidth,
  minWidth,
  dangerouslySetInnerHTML
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
    $transform: xs.transform ? xs.transform : transform,
    $color: xs.color ? xs.color : color,
    textAlign: xs.textAlign ? xs.textAlign : textAlign,
    $width: xs.width && xs.width,
    fullWidth: xs.fullWidth && xs.fullWidth,
  });
  const getSmProps = () => sm && ({
    ...sm,
    theme,
    $fontWeight: sm.fontWeight ? sm.fontWeight : fontWeight,
    $fontSize: sm.fontSize ? sm.fontSize : fontSize,
    $fontFamily: sm.fontFamily ? sm.fontFamily : fontFamily,
    $lineHeight: sm.lineHeight ? sm.lineHeight : lineHeight,
    $transform: sm.transform ? sm.transform : transform,
    $color: sm.color ? sm.color : color,
    textAlign: sm.textAlign ? sm.textAlign : textAlign,
    $width: sm.width && sm.width,
    fullWidth: sm.fullWidth && sm.fullWidth,
  });
  const getMdProps = () => md && ({
    ...md,
    theme,
    $fontWeight: md.fontWeight ? md.fontWeight : fontWeight,
    $fontSize: md.fontSize ? md.fontSize : fontSize,
    $fontFamily: md.fontFamily ? md.fontFamily : fontFamily,
    $lineHeight: md.lineHeight ? md.lineHeight : lineHeight,
    $transform: md.transform ? md.transform : transform,
    $color: md.color ? md.color : color,
    textAlign: md.textAlign ? md.textAlign : textAlign,
    $width: md.width && md.width,
    fullWidth: md.fullWidth && md.fullWidth,
  });
  const getLgProps = () => lg && ({
    ...lg,
    theme,
    $fontWeight: lg.fontWeight ? lg.fontWeight : fontWeight,
    $fontSize: lg.fontSize ? lg.fontSize : fontSize,
    $fontFamily: lg.fontFamily ? lg.fontFamily : fontFamily,
    $lineHeight: lg.lineHeight ? lg.lineHeight : lineHeight,
    $transform: lg.transform ? lg.transform : transform,
    $color: lg.color ? lg.color : color,
    textAlign: lg.textAlign ? lg.textAlign : textAlign,
    $width: lg.width && lg.width,
    fullWidth: lg.fullWidth && lg.fullWidth,
  });
  const getXlProps = () => xl && ({
    ...xl,
    theme,
    $fontWeight: xl.fontWeight ? xl.fontWeight : fontWeight,
    $fontSize: xl.fontSize ? xl.fontSize : fontSize,
    $fontFamily: xl.fontFamily ? xl.fontFamily : fontFamily,
    $lineHeight: xl.lineHeight ? xl.lineHeight : lineHeight,
    $transform: xl.transform ? xl.transform : transform,
    $color: xl.color ? xl.color : color,
    textAlign: xl.textAlign ? xl.textAlign : textAlign,
    $width: xl.width && xl.width,
    fullWidth: xl.fullWidth && xl.fullWidth,
  });

  const props = {
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    $lineHeight: lineHeight,
    $transform: transform,
    $color: color,
    $width: width,
    textAlign,
    custom,
    children: dangerouslySetInnerHTML ? undefined : children,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    fullWidth,
    maxWidth,
    minWidth,
    xs: getXsProps(),
    sm: getSmProps(),
    md: getMdProps(),
    lg: getLgProps(),
    xl: getXlProps(),
    dangerouslySetInnerHTML: dangerouslySetInnerHTML ? {__html: dangerouslySetInnerHTML} : undefined
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
    case 'label':
      return <Label {...props} $style={styles} />;
    case 'cite':
      return <Cite {...props} $style={styles} />;
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
  lineHeight: '100%',
  textAlign: 'left',
  mt: '0px',
  mb: '0px',
  transform: 'none'
};

Typography.propTypes = {
  /**
   * Altera alinhamento do texto
   */
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),
  dangerouslySetInnerHTML: PropTypes.any,
  /**
   * Permite alterar o valor para css text-transform
   */
  transform: PropTypes.oneOf(['none', 'inherit', 'capitalize', 'uppercase', 'lowercase']),
  /**
   * Permite acessar as cores disponíveis no theme
   */
  color: PropTypes.string,
  children: PropTypes.node,
  /**
   * Permite a escolha da tag de texto a ser utilizada
   */
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'cite']),
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
   * Define propriedade de padding
   */
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxWidth: PropTypes.number,
  minWidth: PropTypes.number,
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
  custom: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fullWidth: PropTypes.bool
};

export default withTheme(Typography);
