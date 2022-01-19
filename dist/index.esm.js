import { get, replace, map, isArray, orderBy, filter, find, merge } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState, cloneElement, useEffect } from 'react';
import styled, { withTheme, css } from 'styled-components';
import ContentEditable from 'react-contenteditable';
import InputMask from 'react-input-mask';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import Instagram from 'react-instagram-embed';
import { Tweet } from 'react-twitter-widgets';
import WebYouTube from 'react-youtube';
import { Carousel as Carousel$2 } from 'react-responsive-carousel';
import { format, formatDistance, differenceInHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { html2json } from 'html2json';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/**
 * Prensa Styled System | boxShadow
 * @param props Expect a string matching box-shadow css requirements
 * boxShadow: string;
 * @returns a string with CSS syntax
 */
function boxShadow({
  boxShadow
}) {
  if (!boxShadow) return '';
  return `box-shadow: ${boxShadow};`;
}

/**
 * Prensa | Border Styled Function
 * @param {Object} props Expects props from a React Styled Component
 * @returns String with processed CSS from props input.
 */

function border(props) {
  // TODO: transform to typescript
  // export function border(props: BorderStyledFunction) {
  const {
    theme = {},
    bt = '',
    br = '',
    bb = '',
    bl = '',
    // bx = '',
    // by = '',
    b = '',
    borderColor = '',
    borderStyle = 'solid',
    radius
  } = props;
  const colors = get(theme, 'colors', {});
  const radius_options = get(theme, 'radius');
  const selectedColor = get(colors, borderColor);
  let object = [];

  if (bt) {
    object.push(`border-top-color: ${selectedColor};`);
    object.push(`border-top-style: ${borderStyle};`);
    object.push(`border-top-width: ${bt};`);
  }

  if (br) {
    object.push(`border-right-color: ${selectedColor};`);
    object.push(`border-right-style: ${borderStyle};`);
    object.push(`border-right-width: ${br};`);
  }

  if (bb) {
    object.push(`border-bottom-color: ${selectedColor};`);
    object.push(`border-bottom-style: ${borderStyle};`);
    object.push(`border-bottom-width: ${bb};`);
  }

  if (bl) {
    object.push(`border-left-color: ${selectedColor};`);
    object.push(`border-left-style: ${borderStyle};`);
    object.push(`border-left-width: ${bl};`);
  }

  if (b) {
    object.push(`border-color: ${selectedColor};`);
    object.push(`border-style: ${borderStyle};`);
    object.push(`border-width: ${b};`);
  }

  if (radius) {
    object.push(`border-radius: ${radius_options[radius]}`);
  }

  return object.join('');
}

const dimensions = ({
  theme = {},
  $width = '',
  maxWidth = '',
  minWidth = ''
}) => {
  const unit = get(theme, 'factors.dimensions', 10);
  let object = [];

  if (maxWidth) {
    if (typeof maxWidth === 'string') {
      object.push(`max-width: ${maxWidth};`);
    } else {
      object.push(`max-width: ${maxWidth * unit}px;`);
    }
  }

  if (minWidth) {
    if (typeof minWidth === 'string') {
      object.push(`min-width: ${minWidth};`);
    } else {
      object.push(`min-width: ${minWidth * unit}px;`);
    }
  }

  if ($width) {
    if (typeof $width === 'string') {
      object.push(`width: ${$width};`);
    } else {
      object.push(`width: ${$width * unit}px;`);
    }
  }

  return object.join('');
};

const margin$1 = ({
  theme = {},
  mx = '',
  my = '',
  mt = '',
  mr = '',
  mb = '',
  ml = '',
  m = ''
}) => {
  const unit = get(theme, 'factors.margin', 8);
  let object = [];
  mt !== undefined && isNaN(mt) ? object.push(`margin-top: ${mt};`) : mt && object.push(`margin-top: ${unit * mt}px;`);
  mr !== undefined && isNaN(mr) ? object.push(`margin-right: ${mr};`) : mr && object.push(`margin-right: ${unit * mr}px;`);
  mb !== undefined && isNaN(mb) ? object.push(`margin-bottom: ${mb};`) : mb && object.push(`margin-bottom: ${unit * mb}px;`);
  ml !== undefined && isNaN(ml) ? object.push(`margin-left: ${ml};`) : ml && object.push(`margin-left: ${unit * ml}px;`);
  mx !== undefined && isNaN(mx) ? object.push(`margin-left: ${mx};margin-right: ${mx};`) : mx && object.push(`margin-left: ${unit * mx}px;margin-right: ${unit * mx}px;`);
  my !== undefined && isNaN(my) ? object.push(`margin-top: ${my};margin-bottom: ${my};`) : my && object.push(`margin-top: ${unit * my}px;margin-bottom: ${unit * my}px;`);
  m !== undefined && isNaN(m) ? object.push(`margin: ${m};`) : m && object.push(`margin: ${m * unit}px;`);
  return object.join('');
};

const padding$1 = ({
  theme = {},
  px = '',
  py = '',
  pt = '',
  pr = '',
  pb = '',
  pl = '',
  p = ''
}) => {
  const unit = get(theme, 'factors.padding', 8);
  let object = [];
  pt !== undefined && isNaN(pt) ? object.push(`padding-top: ${pt};`) : pt && object.push(`padding-top: ${unit * pt}px;`);
  pr !== undefined && isNaN(pr) ? object.push(`padding-right: ${pr};`) : pr && object.push(`padding-right: ${unit * pr}px;`);
  pb !== undefined && isNaN(pb) ? object.push(`padding-bottom: ${pb};`) : pb && object.push(`padding-bottom: ${unit * pb}px;`);
  pl !== undefined && isNaN(pl) ? object.push(`padding-left: ${pl};`) : pl && object.push(`padding-left: ${unit * pl}px;`);
  px !== undefined && isNaN(px) ? object.push(`padding-left: ${px};padding-right: ${px};`) : px && object.push(`padding-left: ${unit * px}px;padding-right: ${unit * px}px;`);
  py !== undefined && isNaN(py) ? object.push(`padding-top: ${py};padding-bottom: ${py};`) : py && object.push(`padding-top: ${unit * py}px;padding-bottom: ${unit * py}px;`);
  p !== undefined && isNaN(p) ? object.push(`padding: ${p};`) : p && object.push(`padding: ${p * unit}px;`);
  return object.join('');
};

const getColor = ({
  theme = {},
  $color = ''
}) => {
  const value = get(theme.colors, $color, '');
  return value;
};

const parseAlign$1 = props => {
  const align = get(props, 'align', undefined);
  const alignx = get(props, 'alignx', undefined);
  const aligny = get(props, 'aligny', undefined);
  let object = [];
  let alignItems = '';
  let display = 'flex';
  let flexDirection = '';
  let justifyContent = ''; // check if is column

  if (align === 'column' || align === 'column-reverse') {
    flexDirection = align; // x axys

    if (alignx === 'left') {
      alignItems = 'flex-start';
    }

    if (alignx === 'center') {
      alignItems = 'center';
    }

    if (alignx === 'right') {
      alignItems = 'flex-end';
    }

    if (alignx === 'evenly') {
      justifyContent = 'space-evenly';
    }

    if (alignx === 'between') {
      justifyContent = 'space-between';
    } // y axis


    if (aligny === 'top') {
      justifyContent = 'flex-start';
    }

    if (aligny === 'middle') {
      justifyContent = 'center';
    }

    if (aligny === 'bottom') {
      justifyContent = 'flex-end';
    }

    if (aligny === 'evenly') {
      justifyContent = 'space-evenly';
    }

    if (aligny === 'between') {
      justifyContent = 'space-between';
    }
  } // check if is row


  if (align === 'row' || align === 'row-reverse') {
    flexDirection = align;

    if (alignx === 'left') {
      alignItems = 'flex-start';
    }

    if (alignx === 'center') {
      justifyContent = 'center';
    }

    if (alignx === 'right') {
      justifyContent = 'flex-end';
    }

    if (alignx === 'evenly') {
      justifyContent = 'space-evenly';
    }

    if (alignx === 'between') {
      justifyContent = 'space-between';
    }

    if (aligny === 'top') {
      alignItems = 'flex-start';
    }

    if (aligny === 'middle') {
      alignItems = 'center';
    }

    if (aligny === 'bottom') {
      alignItems = 'flex-end';
    }

    if (aligny === 'evenly') {
      justifyContent = 'space-evenly';
    }

    if (aligny === 'between') {
      justifyContent = 'space-between';
    }
  } // define strings


  alignItems !== '' && object.push(`align-items: ${alignItems};`);
  object.push(`display: ${display};`);
  flexDirection !== '' && object.push(`flex-direction: ${flexDirection};`);
  justifyContent !== '' && object.push(`justify-content: ${justifyContent};`); // end

  return object.join('');
};

// export const parseWidth = (props, theme) => {
//   const unit = theme.factors.padding;
//   const width = get(props, '$width', undefined);
//   const fullWidth = get(props, 'fullWidth', undefined);
//   const px = get(props, 'px', undefined);
//   const pl = get(props, 'pl', undefined);
//   const pr = get(props, 'pr', undefined);
//   if (fullWidth) {
//     if (px) {
//       if (typeof px === 'string') return `width: calc(100% - ${px} - ${px})`;
//       return `width: calc(100% - ${px * unit}px - ${px * unit}px)`;
//     }
//     if (pl && pr) {
//       if (typeof pl === 'string' && typeof pr === 'string') return `width: calc(100% - ${pl} - ${pr})`;
//       return `width: calc(100% - ${pl * unit}px - ${pr * unit}px)`;
//     }
//     if (pl) {
//       if (typeof pl === 'string') return `width: calc(100% - ${pl})`;
//       return `width: calc(100% - ${pl * unit}px)`;
//     }
//     if (pr) {
//       if (typeof pr === 'string') return `width: calc(100% - ${pr})`;
//       return `width: calc(100% - ${pr * unit}px)`;
//     }
//     return 'width: 100%';
//   } else if (!width) {
//     return '';
//   } else if (typeof width === 'string') {
//     return `width: ${width}`;
//   } else {
//     return `width: ${width * theme.factors.dimensions}px`;
//   }
// };

const parseHeight = (props, theme) => {
  const unit = theme.factors.padding;
  const height = get(props, '$height', undefined);
  const fullHeight = get(props, 'fullHeight', undefined);
  const py = get(props, 'py', undefined);
  const pt = get(props, 'pt', undefined);
  const pb = get(props, 'pb', undefined);

  if (fullHeight) {
    if (py) {
      if (typeof py === 'string') return `height calc(100% - ${py} - ${py})`;
      return `height: calc(100% - ${py * unit}px - ${py * unit}px)`;
    }

    if (py && pb) {
      if (typeof pt === 'string' && typeof pb === 'string') return `height calc(100% - ${pt} - ${pb})`;
      return `height: calc(100% - ${pt * unit}px - ${pb * unit}px)`;
    }

    if (pt) {
      if (typeof pt === 'string') return `height calc(100% - ${pt})`;
      return `height: calc(100% - ${pt * unit}px)`;
    }

    if (pb) {
      if (typeof pb === 'string') return `height calc(100% - ${pb})`;
      return `height calc(100% - ${pb * unit}px)`;
    }

    return 'height: 100%';
  } else if (!height) {
    return '';
  } else if (typeof height === 'string') {
    if (py && fullHeight) return `height: calc(100% - ${py} - ${py})`;
    return `height: ${height}`;
  } else {
    if (py && fullHeight) return `height: calc(100% - ${height * theme.factors.dimensions}px)`;
    return `height: ${height * theme.factors.dimensions}px`;
  }
};

const parseStyle$2 = (props, theme) => {
  return `
    ${border({ ...props,
    radius: props.$radius,
    theme
  })};
    ${boxShadow({ ...props,
    boxShadow: props.boxShadow
  })};
    ${dimensions({ ...props,
    theme
  })};
    ${parseAlign$1(props)};
    ${parseHeight(props, theme)};
    ${theme.parseBgColor(props, theme)};
    ${theme.parseFontColor(props, theme)};
    ${theme.parseFontFamily(props, theme)};
    ${theme.parseCustomDef(props, theme)};
    ${theme.parseCustom(props, theme)};
    ${theme.parseMargin(props, theme)};
    ${theme.parsePadding(props, theme)};
  `;
};

const parseProps$2 = (media, props) => {
  switch (media) {
    case 'xs':
      return `
        @media (min-width: ${props.theme.queries.xs}) {
          ${parseStyle$2(props.xs, props.theme)}
        }
      `;

    case 'sm':
      return `
        @media (min-width: ${props.theme.queries.sm}) {
          ${parseStyle$2(props.sm, props.theme)}
        }
      `;

    case 'md':
      return `
        @media (min-width: ${props.theme.queries.md}) {
          ${parseStyle$2(props.md, props.theme)}
        }
      `;

    case 'lg':
      return `
        @media (min-width: ${props.theme.queries.lg}) {
          ${parseStyle$2(props.lg, props.theme)}
        }
      `;

    case 'xl':
      return `
        @media (min-width: ${props.theme.queries.xl}) {
          ${parseStyle$2(props.xl, props.theme)}
        }
      `;

    default:
      return `${parseStyle$2(props, props.theme)}`;
  }
};

const Component = styled.div.withConfig({
  displayName: "Block__Component",
  componentId: "sc-1uj1scg-0"
})(["", ";", ";", ";", ";", ";", ";"], props => parseProps$2('', props), props => props.xs && parseProps$2('xs', props), props => props.sm && parseProps$2('sm', props), props => props.md && parseProps$2('md', props), props => props.lg && parseProps$2('lg', props), props => props.xl && parseProps$2('xl', props));

const Block = ({
  children,
  className,
  align,
  alignx,
  aligny,
  bgColor,
  boxShadow,
  customDef,
  fontColor,
  py,
  px,
  pt,
  pr,
  pb,
  pl,
  my,
  mx,
  mt,
  mr,
  mb,
  ml,
  typography,
  onClick,
  // fullWidth,
  fullHeight,
  custom,
  width,
  height,
  id,
  bt,
  br,
  bb,
  bl,
  b,
  borderColor,
  borderStyle,
  radius,
  dangerouslySetInnerHTML,
  xs,
  sm,
  md,
  lg,
  xl,
  maxWidth,
  minWidth
}) => {
  const getXsProps = () => xs && { ...xs,
    $width: xs.width ? xs.width : width,
    $height: xs.height ? xs.height : height
  };

  const getSmProps = () => sm && { ...sm,
    $width: sm.width ? sm.width : width,
    $height: sm.height ? sm.height : height
  };

  const getMdProps = () => md && { ...md,
    $width: md.width ? md.width : width,
    $height: md.height ? md.height : height
  };

  const getLgProps = () => lg && { ...lg,
    $width: lg.width ? lg.width : width,
    $height: lg.height ? lg.height : height
  };

  const getXlProps = () => xl && { ...xl,
    $width: xl.width ? xl.width : width,
    $height: xl.height ? xl.height : height
  };

  return /*#__PURE__*/React.createElement(Component, {
    align: align,
    alignx: alignx,
    aligny: aligny,
    bgColor: bgColor,
    boxShadow: boxShadow,
    className: className,
    customDef: customDef,
    fontColor: fontColor,
    py: py,
    px: px,
    pt: pt,
    pr: pr,
    pb: pb,
    pl: pl,
    my: my,
    mx: mx,
    mt: mt,
    mr: mr,
    mb: mb,
    ml: ml,
    typography: typography,
    onClick: onClick // fullWidth={fullWidth}
    ,
    fullHeight: fullHeight,
    custom: custom,
    $width: width,
    $height: height,
    maxWidth: maxWidth,
    minWidth: minWidth,
    id: id,
    bt: bt,
    br: br,
    bb: bb,
    bl: bl,
    b: b,
    borderColor: borderColor,
    borderStyle: borderStyle,
    $radius: radius,
    xs: getXsProps(),
    sm: getSmProps(),
    md: getMdProps(),
    lg: getLgProps(),
    xl: getXlProps(),
    dangerouslySetInnerHTML: dangerouslySetInnerHTML ? {
      __html: dangerouslySetInnerHTML
    } : undefined
  }, dangerouslySetInnerHTML ? undefined : children);
};

Block.defaultProps = {
  align: 'column',
  alignx: 'left',
  aligny: 'top'
};
Block.propTypes = {
  /**
   * Configuração da orientação de posição
   */
  align: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),

  /**
   * Configuração da posição horizontal (eixo x)
   */
  alignx: PropTypes.oneOf(['left', 'center', 'right', 'evenly', 'between']),

  /**
   * Configuração da posição vertical (eixo y)
   */
  aligny: PropTypes.oneOf(['top', 'middle', 'bottom', 'evenly', 'between']),

  /**
   * Define propriedade de background-color
   */
  bgColor: PropTypes.string,

  /**
   * Define propriedade box-shadow
   */
  boxShadow: PropTypes.string,

  /**
   * Define estilo customizado para o bloco
   */
  custom: PropTypes.string,

  /**
   * Seleciona estilo customizado para o bloco
   */
  customDef: PropTypes.string,

  /**
   * Renderiza os blocos filhos
   */
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),

  /**
   * Permite passagem de um class para o elemento raíz (faz referência a prop do html)
   */
  className: PropTypes.string,
  dangerouslySetInnerHTML: PropTypes.any,

  /**
   * Define propriedade de color
   */
  fontColor: PropTypes.string,

  /**
   * Define propriedade de padding
   */
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

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
   * Define propriedade de color
   */
  typography: PropTypes.oneOf(['primary', 'secondary']),

  /**
   * Define propriedade de dimensões
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Propriedades responsivas
   */
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object,

  /**
   * Propriedades de ações
   */
  onClick: PropTypes.func,

  /**
   * Faz o elemento crescer 100% e ocupar todo o espaço disponível para largura
   */
  fullWidth: PropTypes.bool,

  /**
   * Faz o elemento crescer 100% e ocupar todo o espaço disponível para altura
   */
  fullHeight: PropTypes.bool,

  /**
   * Permite passagem de id para o componente raíz
   */
  id: PropTypes.string,
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  br: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  radius: PropTypes.string
};
var Block$1 = withTheme(Block);

const parseFontFamily$2 = props => {
  const fonts = get(props, 'theme.fonts', {});
  const propValue = get(props, '$fontFamily', '');
  const selected = get(fonts, propValue, '');
  return selected;
};

const parseSize = (props, propName) => {
  const factor = get(props, 'theme.factors.margin', {});
  const propValue = get(props, `$${propName}`);
  const isNumber = typeof propValue === 'number';
  if (isNumber) return `${propValue * factor}px`;
  return propValue;
};

const handleHover = props => {
  if (props.opacityOnHover) {
    return css(["&:hover{opacity:0.8;}"]);
  } else {
    return '';
  }
};

const parseFontWeight$1 = ({
  $fontWeight
}) => {
  if (!$fontWeight) return '';
  return `font-weight: ${$fontWeight};`;
};

const parseLetterSpacing = ({
  $letterSpacing
}) => {
  if (!$letterSpacing) return '';
  return `letter-spacing: ${$letterSpacing};`;
};

const parseTextAlign = ({
  textAlign
}) => {
  if (!textAlign) return '';
  return `text-align: ${textAlign};`;
};

const parseTextDecoration = ({
  textDecoration
}) => {
  if (!textDecoration) return '';
  return `text-decoration: ${textDecoration};`;
};

const parseTextTransform = ({
  $transform
}) => {
  if (!$transform) return '';
  return `text-transform: ${$transform};`;
};

const parse_shadow = ({
  shadow
}) => {
  if (!shadow) return '';
  return 'text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);';
};

const parseStyle$1 = (props, theme) => {
  return `
    font-family: ${parseFontFamily$2(props)};
    font-size: ${parseSize(props, 'fontSize')};
    line-height: ${parseSize(props, 'lineHeight')};
    color: ${theme.parseColor(props, theme, '$color')};
    ${parse_shadow(props)};
    ${theme.parseCustom(props)};
    ${dimensions(props)};
    ${padding$1(props)};
    ${margin$1(props)};
    ${border(props)};
    ${handleHover(props)};
    ${parseTextDecoration(props)};
    ${parseTextTransform(props)};
    ${parseTextAlign(props)};
    ${parseFontWeight$1(props)};
    ${parseLetterSpacing(props)};
  `;
};

const parseProps$1 = (media, props) => {
  switch (media) {
    case 'xs':
      return `
        @media (min-width: ${props.theme.queries.xs}) {
          ${parseStyle$1(props.xs, props.theme)}
        }
      `;

    case 'sm':
      return `
        @media (min-width: ${props.theme.queries.sm}) {
          ${parseStyle$1(props.sm, props.theme)}
        }
      `;

    case 'md':
      return `
        @media (min-width: ${props.theme.queries.md}) {
          ${parseStyle$1(props.md, props.theme)}
        }
      `;

    case 'lg':
      return `
        @media (min-width: ${props.theme.queries.lg}) {
          ${parseStyle$1(props.lg, props.theme)}
        }
      `;

    case 'xl':
      return `
        @media (min-width: ${props.theme.queries.xl}) {
          ${parseStyle$1(props.xl, props.theme)}
        }
      `;

    default:
      return `${parseStyle$1(props, props.theme)}`;
  }
};

const HeadingOne = styled.h1.withConfig({
  displayName: "styled__HeadingOne",
  componentId: "sc-fdx3oi-0"
})(["", ""], props => props.$style);
const HeadingTwo = styled.h2.withConfig({
  displayName: "styled__HeadingTwo",
  componentId: "sc-fdx3oi-1"
})(["", ""], props => props.$style);
const HeadingThree = styled.h3.withConfig({
  displayName: "styled__HeadingThree",
  componentId: "sc-fdx3oi-2"
})(["", ""], props => props.$style);
const HeadingFour = styled.h4.withConfig({
  displayName: "styled__HeadingFour",
  componentId: "sc-fdx3oi-3"
})(["", ""], props => props.$style);
const HeadingFive = styled.h5.withConfig({
  displayName: "styled__HeadingFive",
  componentId: "sc-fdx3oi-4"
})(["", ""], props => props.$style);
const HeadingSix = styled.h6.withConfig({
  displayName: "styled__HeadingSix",
  componentId: "sc-fdx3oi-5"
})(["", ""], props => props.$style);
const Paragraph$1 = styled.p.withConfig({
  displayName: "styled__Paragraph",
  componentId: "sc-fdx3oi-6"
})(["", ""], props => props.$style);
const Span = styled.span.withConfig({
  displayName: "styled__Span",
  componentId: "sc-fdx3oi-7"
})(["", ""], props => props.$style);
const Label = styled.label.withConfig({
  displayName: "styled__Label",
  componentId: "sc-fdx3oi-8"
})(["", ""], props => props.$style);
const Cite = styled.cite.withConfig({
  displayName: "styled__Cite",
  componentId: "sc-fdx3oi-9"
})(["", ""], props => props.$style);
const A = styled.a.withConfig({
  displayName: "styled__A",
  componentId: "sc-fdx3oi-10"
})(["", ""], props => props.$style);

const Typography$1 = ({
  children,
  color,
  element,
  fontSize,
  fontFamily,
  fontWeight,
  href,
  letterSpacing,
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
  bt,
  br,
  bb,
  bl,
  b,
  borderColor,
  borderStyle,
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
  opacityOnHover,
  target,
  dangerouslySetInnerHTML,
  shadow,
  ...otherProps
}) => {
  const styles = css(["", ";", ";", ";", ";", ";", ";"], props => parseProps$1('', props), props => props.xs && parseProps$1('xs', props), props => props.sm && parseProps$1('sm', props), props => props.md && parseProps$1('md', props), props => props.lg && parseProps$1('lg', props), props => props.xl && parseProps$1('xl', props));

  const getXsProps = () => xs && { ...xs,
    theme,
    $fontWeight: xs.fontWeight ? xs.fontWeight : fontWeight,
    $fontSize: xs.fontSize ? xs.fontSize : fontSize,
    $fontFamily: xs.fontFamily ? xs.fontFamily : fontFamily,
    $lineHeight: xs.lineHeight ? xs.lineHeight : lineHeight,
    $transform: xs.transform ? xs.transform : transform,
    $color: xs.color ? xs.color : color,
    textAlign: xs.textAlign ? xs.textAlign : textAlign,
    $width: xs.width && xs.width,
    fullWidth: xs.fullWidth && xs.fullWidth
  };

  const getSmProps = () => sm && { ...sm,
    theme,
    $fontWeight: sm.fontWeight ? sm.fontWeight : fontWeight,
    $fontSize: sm.fontSize ? sm.fontSize : fontSize,
    $fontFamily: sm.fontFamily ? sm.fontFamily : fontFamily,
    $lineHeight: sm.lineHeight ? sm.lineHeight : lineHeight,
    $transform: sm.transform ? sm.transform : transform,
    $color: sm.color ? sm.color : color,
    textAlign: sm.textAlign ? sm.textAlign : textAlign,
    $width: sm.width && sm.width,
    fullWidth: sm.fullWidth && sm.fullWidth
  };

  const getMdProps = () => md && { ...md,
    theme,
    $fontWeight: md.fontWeight ? md.fontWeight : fontWeight,
    $fontSize: md.fontSize ? md.fontSize : fontSize,
    $fontFamily: md.fontFamily ? md.fontFamily : fontFamily,
    $lineHeight: md.lineHeight ? md.lineHeight : lineHeight,
    $transform: md.transform ? md.transform : transform,
    $color: md.color ? md.color : color,
    textAlign: md.textAlign ? md.textAlign : textAlign,
    $width: md.width && md.width,
    fullWidth: md.fullWidth && md.fullWidth
  };

  const getLgProps = () => lg && { ...lg,
    theme,
    $fontWeight: lg.fontWeight ? lg.fontWeight : fontWeight,
    $fontSize: lg.fontSize ? lg.fontSize : fontSize,
    $fontFamily: lg.fontFamily ? lg.fontFamily : fontFamily,
    $lineHeight: lg.lineHeight ? lg.lineHeight : lineHeight,
    $transform: lg.transform ? lg.transform : transform,
    $color: lg.color ? lg.color : color,
    textAlign: lg.textAlign ? lg.textAlign : textAlign,
    $width: lg.width && lg.width,
    fullWidth: lg.fullWidth && lg.fullWidth
  };

  const getXlProps = () => xl && { ...xl,
    theme,
    $fontWeight: xl.fontWeight ? xl.fontWeight : fontWeight,
    $fontSize: xl.fontSize ? xl.fontSize : fontSize,
    $fontFamily: xl.fontFamily ? xl.fontFamily : fontFamily,
    $lineHeight: xl.lineHeight ? xl.lineHeight : lineHeight,
    $transform: xl.transform ? xl.transform : transform,
    $color: xl.color ? xl.color : color,
    textAlign: xl.textAlign ? xl.textAlign : textAlign,
    $width: xl.width && xl.width,
    fullWidth: xl.fullWidth && xl.fullWidth
  };

  const props = {
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    $letterSpacing: letterSpacing,
    $lineHeight: lineHeight,
    $transform: transform,
    $color: color,
    $width: width,
    href: href ? href : undefined,
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
    bt,
    br,
    bb,
    bl,
    b,
    borderColor,
    borderStyle,
    fullWidth,
    maxWidth,
    minWidth,
    opacityOnHover,
    target,
    shadow,
    xs: getXsProps(),
    sm: getSmProps(),
    md: getMdProps(),
    lg: getLgProps(),
    xl: getXlProps(),
    dangerouslySetInnerHTML: dangerouslySetInnerHTML ? {
      __html: dangerouslySetInnerHTML
    } : undefined,
    ...otherProps
  };

  switch (element) {
    case 'h1':
      return /*#__PURE__*/React.createElement(HeadingOne, _extends({}, props, {
        $style: styles
      }));

    case 'h2':
      return /*#__PURE__*/React.createElement(HeadingTwo, _extends({}, props, {
        $style: styles
      }));

    case 'h3':
      return /*#__PURE__*/React.createElement(HeadingThree, _extends({}, props, {
        $style: styles
      }));

    case 'h4':
      return /*#__PURE__*/React.createElement(HeadingFour, _extends({}, props, {
        $style: styles
      }));

    case 'h5':
      return /*#__PURE__*/React.createElement(HeadingFive, _extends({}, props, {
        $style: styles
      }));

    case 'h6':
      return /*#__PURE__*/React.createElement(HeadingSix, _extends({}, props, {
        $style: styles
      }));

    case 'p':
      return /*#__PURE__*/React.createElement(Paragraph$1, _extends({}, props, {
        $style: styles
      }));

    case 'label':
      return /*#__PURE__*/React.createElement(Label, _extends({}, props, {
        $style: styles
      }));

    case 'cite':
      return /*#__PURE__*/React.createElement(Cite, _extends({}, props, {
        $style: styles
      }));

    case 'a':
      return /*#__PURE__*/React.createElement(A, _extends({}, props, {
        $style: styles
      }));

    case 'span':
    default:
      return /*#__PURE__*/React.createElement(Span, _extends({}, props, {
        $style: styles
      }));
  }
};

Typography$1.defaultProps = {
  element: 'h1',
  fontSize: 3,
  fontFamily: 'primary',
  lineHeight: '100%',
  mt: '0px',
  mb: '0px'
};
Typography$1.propTypes = {
  /**
   * Altera alinhamento do texto
   */
  textAlign: PropTypes.oneOf(['start', 'center', 'end']),
  dangerouslySetInnerHTML: PropTypes.any,

  /**
   * Permite alterar o valor para css text-transform
   */
  transform: PropTypes.oneOf(['none', 'inherit', 'capitalize', 'uppercase', 'lowercase', 'initial']),

  /**
   * Permite acessar as cores disponíveis no theme
   */
  color: PropTypes.string,
  children: PropTypes.node,

  /**
   * Permite a escolha da tag de texto a ser utilizada
   */
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'cite', 'a']),

  /**
   * Altera o valor da propriedade font-size no css
   */
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  href: PropTypes.string,

  /**
   * Alterar o valor da propriedade line-height no css
   */
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Permite propriedade letter-spacing
   */
  letterSpacing: PropTypes.string,

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
  opacityOnHover: PropTypes.bool,

  /**
   * Propriedades responsivas
   */
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object,
  theme: PropTypes.object,
  target: PropTypes.string,

  /**
   * Permite estilos customizados
   */
  custom: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fullWidth: PropTypes.bool,
  bt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  br: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bl: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  b: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  borderColor: PropTypes.string,
  borderStyle: PropTypes.string,
  shadow: PropTypes.bool
};
var Typography$2 = withTheme(Typography$1);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

const Svg = styled.svg.withConfig({
  displayName: "styled__Svg",
  componentId: "sc-1j66vyb-0"
})(["", ";fill:", ";"], margin$1, getColor);

var Icon = function (_a) {
    var children = _a.children, color = _a.color, height = _a.height, viewBox = _a.viewBox, width = _a.width, otherProps = __rest(_a, ["children", "color", "height", "viewBox", "width"]);
    return (React.createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg", "$color": color, height: height, viewBox: viewBox, width: width }, otherProps), children));
};
Icon.defaultProps = {
    height: '24px',
    viewBox: '0 0 24 24',
    width: '24px',
};

const ChevronRight = props => {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
  }));
};

const ExpandLessIcon = props => {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
    d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
  }));
};

const ExpandMoreIcon = props => {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
  }));
};

const CONFIGS = {
  GROUP_ICON_CLASS: 'accordion-editorial-amp',
  GROUP_TITLE_DEFAULT_PROPS: {
    color: 'neutral2',
    element: 'span',
    lineHeight: '40px',
    fontFamily: 'secondary',
    fontSize: '20px'
  }
};

const Hyperlink = styled.a.withConfig({
  displayName: "styled__Hyperlink",
  componentId: "sc-m47966-0"
})(["text-decoration:none;font-size:16px;font-family:", ";color:", ";&:hover{opacity:0.8;}"], props => props.theme.fonts.secondary, props => props.theme.colors.neutral5);
styled.div.withConfig({
  displayName: "styled__HeaderContainer",
  componentId: "sc-m47966-1"
})(["display:flex;flex-direction:column;width:100%;padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid;border-color:", ";"], props => props.theme.colors.neutral9);
const GroupSection = styled.section.withConfig({
  displayName: "styled__GroupSection",
  componentId: "sc-m47966-2"
})(["width:100%;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:", ";padding-bottom:8px;margin-bottom:8px;.group-closed{display:none;}.hidden{display:none;}"], props => props.theme.colors.neutral9);

const getGroupBorder = ({
  removeBorders
}) => {
  if (removeBorders) return '';
  return css(["border-left-width:4px;border-left-style:solid;border-left-color:", ";"], props => props.theme.colors[props.$color]);
};

const GroupTitleContainer = styled.div.withConfig({
  displayName: "styled__GroupTitleContainer",
  componentId: "sc-m47966-3"
})(["", ";", ";cursor:pointer;display:flex;align-items:center;justify-content:space-between;.", "{fill:", ";}"], getGroupBorder, padding$1, CONFIGS.GROUP_ICON_CLASS, props => getColor({ ...props,
  $color: props.iconColor
}));

const GroupTitle = ({
  name,
  ...otherProps
}) => /*#__PURE__*/React.createElement(Typography$2, _extends({}, CONFIGS.GROUP_TITLE_DEFAULT_PROPS, otherProps), name);

const MenuItem$1 = ({
  color,
  content,
  groupItemProps,
  groupSubItemProps,
  groupTitleProps,
  removeBorders
}) => {
  // 1. Creates one state for each item in list | state name is polopoly prefix + stateId
  // 2. State does not accept special chars or Numbers as key, so we use a prefix to identify it (state L.14)
  // 3. To make state work it is necessary a user click to activate initialState. Before this the values submitted to client are the ones in HTML props
  // 4. In this context the state trigger is everytime user click on MenuButton
  // 5. Subgroup is not displayed when it is rendered with class 'group-closed'
  let itemColor = color;
  if (color === 'unique' && content.color) itemColor = content.color;
  const {
    contentId,
    name,
    path,
    subitems,
    target
  } = content;
  const parsedContentId = replace(contentId, '.', '');
  const isGroup = subitems.length > 0;
  const stateId = `state${parsedContentId}`;
  const initialState = `{ "${stateId}": { "status": true } }`;
  const newState = `tap:AMP.setState({ ${stateId}: {status: !${stateId}.status} })`;
  const contentClass = `${stateId}.status ? 'group-open' : 'group-closed'`;
  const expandMoreIconClass = `${stateId}.status ? "${CONFIGS.GROUP_ICON_CLASS} hidden" : "${CONFIGS.GROUP_ICON_CLASS} visible"`;
  const expandLessIconClass = `${stateId}.status ? "${CONFIGS.GROUP_ICON_CLASS} visible" : "${CONFIGS.GROUP_ICON_CLASS} hidden"`;
  const subitem_mt = get(groupSubItemProps, 'mt', 2);
  const subitem_mr = get(groupSubItemProps, 'mr', undefined);
  const subitem_mb = get(groupSubItemProps, 'mb', 2);
  const subitem_ml = get(groupSubItemProps, 'ml', '20px');
  const subitem_color = get(groupSubItemProps, 'color', 'neutral2');
  const subitem_element = get(groupSubItemProps, 'element', 'a');
  const subitem_fontSize = get(groupSubItemProps, 'fontSize', '16px');
  const subitem_fontFamily = get(groupSubItemProps, 'fontFamily', 'secondary');
  const iconColor = get(groupItemProps, 'iconColor', 'neutral3');
  const itemId = `accordion-item-${parsedContentId}`;

  const HyperlinkGroup = () => /*#__PURE__*/React.createElement(Hyperlink, {
    href: path,
    id: itemId,
    target: target
  }, /*#__PURE__*/React.createElement(GroupTitleContainer, _extends({
    removeBorders: removeBorders,
    $color: itemColor
  }, groupItemProps), /*#__PURE__*/React.createElement(GroupTitle, _extends({
    name: name
  }, groupTitleProps)), /*#__PURE__*/React.createElement(ChevronRight, {
    $color: iconColor
  })));

  const Group = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GroupTitleContainer, _extends({
    iconColor: iconColor,
    removeBorders: removeBorders,
    role: "setMenuItemState",
    tabIndex: "0",
    on: newState,
    $color: itemColor
  }, groupItemProps), /*#__PURE__*/React.createElement(GroupTitle, _extends({
    name: name
  }, groupTitleProps)), /*#__PURE__*/React.createElement(ExpandMoreIcon, {
    "data-amp-bind-class": expandMoreIconClass
  }), /*#__PURE__*/React.createElement(ExpandLessIcon, {
    "data-amp-bind-class": expandLessIconClass
  })), /*#__PURE__*/React.createElement("div", {
    "data-amp-bind-class": contentClass
  }, map(subitems, ({
    contentId,
    path,
    name
  }, key) => /*#__PURE__*/React.createElement(Block$1, {
    key: key,
    mt: subitem_mt,
    mr: subitem_mr,
    mb: subitem_mb,
    ml: subitem_ml
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: subitem_color,
    element: subitem_element,
    fontFamily: subitem_fontFamily,
    fontSize: subitem_fontSize,
    href: path,
    id: `accordion-item-${replace(contentId, '.', '')}`
  }, name)))));

  return /*#__PURE__*/React.createElement(GroupSection, null, /*#__PURE__*/React.createElement("amp-state", {
    id: stateId
  }, /*#__PURE__*/React.createElement("script", {
    type: "application/json",
    dangerouslySetInnerHTML: {
      __html: `${JSON.stringify(initialState)}`
    }
  })), !isGroup ? /*#__PURE__*/React.createElement(HyperlinkGroup, null) : /*#__PURE__*/React.createElement(Group, null));
};

GroupTitle.propTypes = {
  name: PropTypes.string
};
MenuItem$1.defaultProps = {
  color: 'product1'
};
MenuItem$1.propTypes = {
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  groupSubItemProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
  groupItemProps: PropTypes.object,
  removeBorders: PropTypes.bool
};

const MenuItem = ({
  color,
  content,
  groupItemProps,
  groupSubItemProps,
  groupTitleProps,
  removeBorders
}) => {
  const [open, setOpenStatus] = useState(false);
  const {
    contentId,
    name,
    path,
    subitems
  } = content;
  const isGroup = subitems.length > 0;
  const iconColor = get(groupItemProps, 'iconColor', 'neutral3');
  const subitem_mt = get(groupSubItemProps, 'mt', 2);
  const subitem_mr = get(groupSubItemProps, 'mr', undefined);
  const subitem_mb = get(groupSubItemProps, 'mb', 2);
  const subitem_ml = get(groupSubItemProps, 'ml', '20px');
  const subitem_color = get(groupSubItemProps, 'color', 'neutral2');
  const subitem_element = get(groupSubItemProps, 'element', 'a');
  const subitem_fontSize = get(groupSubItemProps, 'fontSize', '16px');
  const subitem_fontFamily = get(groupSubItemProps, 'fontFamily', 'secondary');
  let itemColor = color;
  if (color === 'unique' && content.color) itemColor = content.color;

  const handleItemClick = () => {
    setOpenStatus(!open);
  };

  const GroupTitle = () => /*#__PURE__*/React.createElement(Typography$2, _extends({}, CONFIGS.GROUP_TITLE_DEFAULT_PROPS, groupTitleProps), name);

  const HyperlinkGroup = () => /*#__PURE__*/React.createElement(Hyperlink, {
    href: path
  }, /*#__PURE__*/React.createElement(GroupTitleContainer, _extends({
    $color: itemColor,
    removeBorders: removeBorders
  }, groupItemProps), /*#__PURE__*/React.createElement(GroupTitle, null), /*#__PURE__*/React.createElement(ChevronRight, {
    color: iconColor
  })));

  const Group = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GroupTitleContainer, _extends({
    id: contentId,
    onClick: handleItemClick,
    removeBorders: removeBorders,
    $color: itemColor
  }, groupItemProps), /*#__PURE__*/React.createElement(GroupTitle, null), open ? /*#__PURE__*/React.createElement(ExpandLessIcon, {
    color: iconColor
  }) : /*#__PURE__*/React.createElement(ExpandMoreIcon, {
    color: iconColor
  })), /*#__PURE__*/React.createElement("div", null, open && map(subitems, ({
    name,
    path
  }, key) => /*#__PURE__*/React.createElement(Block$1, {
    mt: subitem_mt,
    mr: subitem_mr,
    mb: subitem_mb,
    ml: subitem_ml,
    key: key
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: subitem_color,
    element: subitem_element,
    fontFamily: subitem_fontFamily,
    fontSize: subitem_fontSize,
    href: path
  }, name)))));

  return /*#__PURE__*/React.createElement(GroupSection, null, !isGroup ? /*#__PURE__*/React.createElement(HyperlinkGroup, null) : /*#__PURE__*/React.createElement(Group, null));
};

MenuItem.defaultProps = {
  color: 'product1'
};
MenuItem.propTypes = {
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  groupSubItemProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
  groupItemProps: PropTypes.object,
  removeBorders: PropTypes.bool
};

const titleDefaultProps = {
  element: 'p',
  color: 'neutral3',
  fontFamily: 'secondary',
  fontSize: '14px',
  transform: 'uppercase',
  mb: 3
};

const AccordionEditorial = ({
  amp,
  color,
  items,
  title,
  titleProps,
  groupItemProps,
  groupSubItemProps,
  groupTitleProps,
  px,
  py,
  removeBorders
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    px: px,
    py: py,
    width: "100%"
  }, title && /*#__PURE__*/React.createElement(Typography$2, _extends({}, titleDefaultProps, titleProps), title), items && map(items, (item, key) => amp ? /*#__PURE__*/React.createElement(MenuItem$1, {
    color: color,
    content: item,
    groupTitleProps: groupTitleProps,
    groupSubItemProps: groupSubItemProps,
    groupItemProps: groupItemProps,
    key: key,
    removeBorders: removeBorders
  }) : /*#__PURE__*/React.createElement(MenuItem, {
    color: color,
    content: item,
    groupTitleProps: groupTitleProps,
    groupSubItemProps: groupSubItemProps,
    groupItemProps: groupItemProps,
    key: key,
    removeBorders: removeBorders
  })));
};

AccordionEditorial.propTypes = {
  amp: PropTypes.bool,
  color: PropTypes.string,
  items: PropTypes.array,
  title: PropTypes.string,
  titleProps: PropTypes.object,
  groupTitleProps: PropTypes.object,
  groupSubItemProps: PropTypes.object,
  groupItemProps: PropTypes.object,
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removeBorders: PropTypes.bool
};

function parseAlignX(align, alignx) {
    var styles = [];
    var alignItems = '';
    var justifyContent = '';
    if (align === 'column') {
        if (alignx === 'left')
            alignItems = 'flex-start';
        if (alignx === 'center')
            alignItems = 'center';
        if (alignx === 'right')
            alignItems = 'flex-end';
        if (alignx === 'evenly')
            justifyContent = 'space-evenly';
        if (alignx === 'between')
            justifyContent = 'space-between';
    }
    if (align === 'row') {
        if (alignx === 'left')
            alignItems = 'flex-start';
        if (alignx === 'center')
            justifyContent = 'center';
        if (alignx === 'right')
            justifyContent = 'flex-end';
        if (alignx === 'evenly')
            justifyContent = 'space-evenly';
        if (alignx === 'between')
            justifyContent = 'space-between';
    }
    alignItems !== '' && styles.push("align-items: ".concat(alignItems, ";"));
    justifyContent !== '' && styles.push("justify-content: ".concat(justifyContent, ";"));
    return styles.join('');
}
function parseAlignY(align, aligny) {
    var styles = [];
    var alignItems = '';
    var justifyContent = '';
    if (align === 'row') {
        if (aligny === 'top')
            alignItems = 'flex-start';
        if (aligny === 'middle')
            alignItems = 'center';
        if (aligny === 'bottom')
            alignItems = 'flex-end';
        if (aligny === 'evenly')
            justifyContent = 'space-evenly';
        if (aligny === 'between')
            justifyContent = 'space-between';
    }
    if (align === 'column') {
        if (aligny === 'top')
            justifyContent = 'flex-start';
        if (aligny === 'middle')
            justifyContent = 'center';
        if (aligny === 'bottom')
            justifyContent = 'flex-end';
        if (aligny === 'evenly')
            justifyContent = 'space-evenly';
        if (aligny === 'between')
            justifyContent = 'space-between';
    }
    alignItems !== '' && styles.push("align-items: ".concat(alignItems, ";"));
    justifyContent !== '' && styles.push("justify-content: ".concat(justifyContent, ";"));
    return styles.join('');
}
function parseAlign(align) {
    var styles = [];
    var flexDirection = '';
    if (align === 'row') {
        flexDirection = 'row';
    }
    if (align === 'column') {
        flexDirection = 'column';
    }
    flexDirection !== '' && styles.push("flex-direction: ".concat(flexDirection, ";"));
    return styles.join('');
}

function responsiveEngine(value, theme, parsers) {
    var stringParser = get(parsers, 'string', null);
    var numberParser = get(parsers, 'number', null);
    var queries = get(theme, 'queries', {});
    var css = [];
    function generateNewCssValue(value) {
        if (typeof value === 'string')
            return stringParser(value);
        if (typeof value === 'number')
            return numberParser(value);
    }
    function generateNewCss(value, querie) {
        return "\n      @media(min-width: ".concat(querie, ") {\n        ").concat(typeof value === 'string' ? stringParser(value) : '', "\n        ").concat(typeof value === 'number' ? numberParser(value) : '', "\n      }\n    ");
    }
    if (value.length == 2) {
        css.push(generateNewCssValue(value[0]), generateNewCss(value[1], queries.lg));
    }
    if (value.length == 3) {
        css.push(generateNewCssValue(value[0]), generateNewCss(value[1], queries.md), generateNewCss(value[2], queries.lg));
    }
    return css.join('').replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '');
}
function generateNewMediaQuerie(css, querie) {
    if (!css || css === '')
        return '';
    return "@media(min-width:".concat(querie, "){").concat(css, "}");
}

function alignResponsive(align, alignx, aligny, theme) {
    var queries = get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (isArray(align) && align.length === 2) {
        mobileStyles.push(parseAlign(align[0]));
        desktopStyles.push(parseAlign(align[1]));
    }
    if (isArray(align) && align.length === 3) {
        mobileStyles.push(parseAlign(align[0]));
        tabletStyles.push(parseAlign(align[1]));
        desktopStyles.push(parseAlign(align[2]));
    }
    if (isArray(alignx) && alignx.length === 2) {
        mobileStyles.push(parseAlignX(align[0], alignx[0]));
        desktopStyles.push(parseAlignX(align[1], alignx[1]));
    }
    if (isArray(alignx) && alignx.length === 3) {
        mobileStyles.push(parseAlignX(align[0], alignx[0]));
        tabletStyles.push(parseAlignX(align[1], alignx[1]));
        desktopStyles.push(parseAlignX(align[2], alignx[2]));
    }
    if (isArray(aligny) && aligny.length === 2) {
        mobileStyles.push(parseAlignY(align[0], aligny[0]));
        desktopStyles.push(parseAlignY(align[1], aligny[1]));
    }
    if (isArray(aligny) && aligny.length === 3) {
        mobileStyles.push(parseAlignY(align[0], aligny[0]));
        tabletStyles.push(parseAlignY(align[1], aligny[1]));
        desktopStyles.push(parseAlignY(align[2], aligny[2]));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | align flex
 * @param props Expect an Object containing props from component that is invoking this function
 * align: 'row' | 'column'
 * alignx: 'left' | 'center' | 'right' | 'evenly' | 'between'
 * aligny: 'top' | 'middle' | 'bottom' | 'evenly' | 'between'
 * @returns a string with CSS syntax
 */
function align(props) {
    if (!props)
        return '';
    var align = props.align, alignx = props.alignx, aligny = props.aligny, theme = props.theme;
    var styles = [];
    styles.push('display: flex;');
    styles.push(typeof align === 'string' ? parseAlign(align) : '', typeof alignx === 'string' ? parseAlignX(align, alignx) : '', typeof aligny === 'string' ? parseAlignY(align, aligny) : '');
    styles.push(alignResponsive(align, alignx, aligny, theme));
    return styles.join('');
}

function parseStringHeight(value) {
    return "height: ".concat(value, ";");
}
function parseNumberHeight(value, factor) {
    return "height: ".concat(value * factor, ";");
}

/**
 * Prensa Styled System | height
 * @param props Expect an Object containing props from component that is invoking this function
 * $height: string | number | Array<string | number>;
 * @returns a string with CSS syntax
 */
function height(props) {
    var value = get(props, '$height', undefined);
    var theme = get(props, 'theme', undefined);
    var factor = get(theme, 'factors.dimensions', undefined);
    if (typeof value === 'string') {
        return parseStringHeight(value);
    }
    if (typeof value === 'number') {
        return parseNumberHeight(value, factor);
    }
    if (isArray(value)) {
        return responsiveEngine(value, theme, {
            string: parseStringHeight,
            number: parseNumberHeight
        });
    }
}

function generateMT(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-top: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-top: ".concat(value * factor, "px;");
}
function generateMR(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-right: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-right: ".concat(value * factor, "px;");
}
function generateMB(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-bottom: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-bottom: ".concat(value * factor, "px;");
}
function generateML(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-left: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-left: ".concat(value * factor, "px;");
}
function generateMX(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    margin-left: ".concat(value, ";\n    margin-right: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    margin-left: ".concat(value * factor, "px;\n    margin-right: ").concat(value * factor, "px;\n  ");
}
function generateMY(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    margin-top: ".concat(value, ";\n    margin-bottom: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    margin-top: ".concat(value * factor, "px;\n    margin-bottom: ").concat(value * factor, "px;\n  ");
}
function generateM(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    margin-top: ".concat(value, ";\n    margin-right: ").concat(value, ";\n    margin-bottom: ").concat(value, ";\n    margin-left: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    margin-top: ".concat(value * factor, "px;\n    margin-right: ").concat(value * factor, "px;\n    margin-bottom: ").concat(value * factor, "px;\n    margin-left: ").concat(value * factor, "px;\n  ");
}

function marginResponsive(mt, mr, mb, ml, mx, my, m, theme) {
    var factor = get(theme, 'factors.margin', 1);
    var queries = get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (isArray(mt) && mt.length === 2) {
        mobileStyles.push(generateMT(mt[0], factor));
        desktopStyles.push(generateMT(mt[1], factor));
    }
    if (isArray(mt) && mt.length === 3) {
        mobileStyles.push(generateMT(mt[0], factor));
        tabletStyles.push(generateMT(mt[1], factor));
        desktopStyles.push(generateMT(mt[2], factor));
    }
    if (isArray(mr) && mr.length === 2) {
        mobileStyles.push(generateMR(mr[0], factor));
        desktopStyles.push(generateMR(mr[1], factor));
    }
    if (isArray(mr) && mr.length === 3) {
        mobileStyles.push(generateMR(mr[0], factor));
        tabletStyles.push(generateMR(mr[1], factor));
        desktopStyles.push(generateMR(mr[2], factor));
    }
    if (isArray(mb) && mb.length === 2) {
        mobileStyles.push(generateMB(mb[0], factor));
        desktopStyles.push(generateMB(mb[1], factor));
    }
    if (isArray(mb) && mb.length === 3) {
        mobileStyles.push(generateMB(mb[0], factor));
        tabletStyles.push(generateMB(mb[1], factor));
        desktopStyles.push(generateMB(mb[2], factor));
    }
    if (isArray(ml) && ml.length === 2) {
        mobileStyles.push(generateML(ml[0], factor));
        desktopStyles.push(generateML(ml[1], factor));
    }
    if (isArray(ml) && ml.length === 3) {
        mobileStyles.push(generateML(ml[0], factor));
        tabletStyles.push(generateML(ml[1], factor));
        desktopStyles.push(generateML(ml[2], factor));
    }
    if (isArray(mx) && mx.length === 2) {
        mobileStyles.push(generateMX(mx[0], factor));
        desktopStyles.push(generateMX(mx[1], factor));
    }
    if (isArray(mx) && mx.length === 3) {
        mobileStyles.push(generateMX(mx[0], factor));
        tabletStyles.push(generateMX(mx[1], factor));
        desktopStyles.push(generateMX(mx[2], factor));
    }
    if (isArray(my) && my.length === 2) {
        mobileStyles.push(generateMY(my[0], factor));
        desktopStyles.push(generateMY(my[1], factor));
    }
    if (isArray(my) && my.length === 3) {
        mobileStyles.push(generateMY(my[0], factor));
        tabletStyles.push(generateMY(my[1], factor));
        desktopStyles.push(generateMY(my[2], factor));
    }
    if (isArray(m) && m.length === 2) {
        mobileStyles.push(generateM(m[0], factor));
        desktopStyles.push(generateM(m[1], factor));
    }
    if (isArray(m) && m.length === 3) {
        mobileStyles.push(generateM(m[0], factor));
        tabletStyles.push(generateM(m[1], factor));
        desktopStyles.push(generateM(m[2], factor));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | margin
 * @param props Expect an Object containing props from component that is invoking this function
 * mt: string | number | Array<string|number>;
 * mr: string | number | Array<string|number>;
 * mb: string | number | Array<string|number>;
 * ml: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
function margin(props) {
    if (!props)
        return '';
    var mt = props.mt, mr = props.mr, mb = props.mb, ml = props.ml, mx = props.mx, my = props.my, m = props.m, theme = props.theme;
    var factor = theme.factors.margin;
    var styles = [];
    if (mt)
        styles.push(generateMT(mt, factor));
    if (mr)
        styles.push(generateMR(mr, factor));
    if (mb)
        styles.push(generateMB(mb, factor));
    if (ml)
        styles.push(generateML(ml, factor));
    if (mx)
        styles.push(generateMX(mx, factor));
    if (my)
        styles.push(generateMY(my, factor));
    if (m)
        styles.push(generateM(m, factor));
    styles.push(marginResponsive(mt, mr, mb, ml, mx, my, m, theme));
    return styles.join('');
}

function generatePT(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-top: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-top: ".concat(value * factor, "px;");
}
function generatePR(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-right: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-right: ".concat(value * factor, "px;");
}
function generatePB(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-bottom: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-bottom: ".concat(value * factor, "px;");
}
function generatePL(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-left: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-left: ".concat(value * factor, "px;");
}
function generatePX(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    padding-left: ".concat(value, ";\n    padding-right: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    padding-left: ".concat(value * factor, "px;\n    padding-right: ").concat(value * factor, "px;\n  ");
}
function generatePY(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    padding-top: ".concat(value, ";\n    padding-bottom: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    padding-top: ".concat(value * factor, "px;\n    padding-bottom: ").concat(value * factor, "px;\n  ");
}
function generateP(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    padding-top: ".concat(value, ";\n    padding-right: ").concat(value, ";\n    padding-bottom: ").concat(value, ";\n    padding-left: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    padding-top: ".concat(value * factor, "px;\n    padding-right: ").concat(value * factor, "px;\n    padding-bottom: ").concat(value * factor, "px;\n    padding-left: ").concat(value * factor, "px;\n  ");
}

function paddingResponsive(pt, pr, pb, pl, px, py, p, theme) {
    var factor = get(theme, 'factors.padding', 1);
    var queries = get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (isArray(pt) && pt.length === 2) {
        mobileStyles.push(generatePT(pt[0], factor));
        desktopStyles.push(generatePT(pt[1], factor));
    }
    if (isArray(pt) && pt.length === 3) {
        mobileStyles.push(generatePT(pt[0], factor));
        tabletStyles.push(generatePT(pt[1], factor));
        desktopStyles.push(generatePT(pt[2], factor));
    }
    if (isArray(pr) && pr.length === 2) {
        mobileStyles.push(generatePR(pr[0], factor));
        desktopStyles.push(generatePR(pr[1], factor));
    }
    if (isArray(pr) && pr.length === 3) {
        mobileStyles.push(generatePR(pr[0], factor));
        tabletStyles.push(generatePR(pr[1], factor));
        desktopStyles.push(generatePR(pr[2], factor));
    }
    if (isArray(pb) && pb.length === 2) {
        mobileStyles.push(generatePB(pb[0], factor));
        desktopStyles.push(generatePB(pb[1], factor));
    }
    if (isArray(pb) && pb.length === 3) {
        mobileStyles.push(generatePB(pb[0], factor));
        tabletStyles.push(generatePB(pb[1], factor));
        desktopStyles.push(generatePB(pb[2], factor));
    }
    if (isArray(pl) && pl.length === 2) {
        mobileStyles.push(generatePL(pl[0], factor));
        desktopStyles.push(generatePL(pl[1], factor));
    }
    if (isArray(pl) && pl.length === 3) {
        mobileStyles.push(generatePL(pl[0], factor));
        tabletStyles.push(generatePL(pl[1], factor));
        desktopStyles.push(generatePL(pl[2], factor));
    }
    if (isArray(px) && px.length === 2) {
        mobileStyles.push(generatePX(px[0], factor));
        desktopStyles.push(generatePX(px[1], factor));
    }
    if (isArray(px) && px.length === 3) {
        mobileStyles.push(generatePX(px[0], factor));
        tabletStyles.push(generatePX(px[1], factor));
        desktopStyles.push(generatePX(px[2], factor));
    }
    if (isArray(py) && py.length === 2) {
        mobileStyles.push(generatePY(py[0], factor));
        desktopStyles.push(generatePY(py[1], factor));
    }
    if (isArray(py) && py.length === 3) {
        mobileStyles.push(generatePY(py[0], factor));
        tabletStyles.push(generatePY(py[1], factor));
        desktopStyles.push(generatePY(py[2], factor));
    }
    if (isArray(p) && p.length === 2) {
        mobileStyles.push(generateP(p[0], factor));
        desktopStyles.push(generateP(p[1], factor));
    }
    if (isArray(p) && p.length === 3) {
        mobileStyles.push(generateP(p[0], factor));
        tabletStyles.push(generateP(p[1], factor));
        desktopStyles.push(generateP(p[2], factor));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | padding
 * @param props Expect an Object containing props from component that is invoking this function
 * pt: string | number | Array<string|number>;
 * pr: string | number | Array<string|number>;
 * pb: string | number | Array<string|number>;
 * pl: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
function padding(props) {
    if (!props)
        return '';
    var pt = props.pt, pr = props.pr, pb = props.pb, pl = props.pl, px = props.px, py = props.py, p = props.p, theme = props.theme;
    var factor = theme.factors.margin;
    var styles = [];
    if (pt)
        styles.push(generatePT(pt, factor));
    if (pr)
        styles.push(generatePR(pr, factor));
    if (pb)
        styles.push(generatePB(pb, factor));
    if (pl)
        styles.push(generatePL(pl, factor));
    if (px)
        styles.push(generatePX(px, factor));
    if (py)
        styles.push(generatePY(py, factor));
    if (p)
        styles.push(generateP(p, factor));
    styles.push(paddingResponsive(pt, pr, pb, pl, px, py, p, theme));
    return styles.join('');
}

function generateWidth(value, factor) {
    if (typeof value === 'string')
        return "width: ".concat(value, ";");
    if (typeof value === 'number')
        return "width: ".concat(value * factor, ";");
}

function widthResponsive(width, theme) {
    var factor = get(theme, 'factors.dimensions', 1);
    var queries = get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (isArray(width) && width.length === 2) {
        mobileStyles.push(generateWidth(width[0], factor));
        desktopStyles.push(generateWidth(width[1], factor));
    }
    if (isArray(width) && width.length === 3) {
        mobileStyles.push(generateWidth(width[0], factor));
        tabletStyles.push(generateWidth(width[1], factor));
        desktopStyles.push(generateWidth(width[2], factor));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | width
 * @param props Expect an Object containing props from component that is invoking this function
 * $width: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
function width(props) {
    if (!props)
        return '';
    var $width = props.$width, theme = props.theme;
    var factor = theme.factors.dimensions;
    var styles = [];
    if ($width)
        styles.push(generateWidth($width, factor));
    styles.push(widthResponsive($width, theme));
    return styles.join('');
}

function textDecorationCSS(_a) {
    var $textDecoration = _a.$textDecoration;
    if (!$textDecoration) {
        return '';
    }
    return css(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n    text-decoration: ", ";\n  "], ["\n    text-decoration: ", ";\n  "])), $textDecoration);
}
function hoverStateCSS(_a) {
    var hoverOpacity = _a.hoverOpacity;
    if (!hoverOpacity) {
        return '';
    }
    return css(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n    &:hover {\n      opacity: ", ";\n    }\n  "], ["\n    &:hover {\n      opacity: ", ";\n    }\n  "])), hoverOpacity);
}
function colorCSS(_a) {
    var $color = _a.$color, theme = _a.theme;
    if (!$color) {
        return css(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n      color: inherit;\n    "], ["\n      color: inherit;\n    "])));
    }
    return css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n    color: ", ";\n  "], ["\n    color: ", ";\n  "])), get(theme, "colors.".concat($color), 'inherit'));
}
var StyledLink = styled.a(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  cursor: pointer;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  cursor: pointer;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), align, colorCSS, height, textDecorationCSS, hoverStateCSS, margin, padding, width);
var templateObject_1$g, templateObject_2$4, templateObject_3$4, templateObject_4$2, templateObject_5$1;

/**
 * Prensa | Link component
 * @description Link component is an abstraction for <a/>
 */
var Link$1 = function (_a) {
    var children = _a.children, color = _a.color, href = _a.href, height = _a.height, path = _a.path, textDecoration = _a.textDecoration, width = _a.width, otherProps = __rest(_a, ["children", "color", "href", "height", "path", "textDecoration", "width"]);
    if (!path && !href) {
        return (React.createElement(React.Fragment, null, children));
    }
    return (React.createElement(StyledLink, __assign({ href: path || href, "$color": color, "$textDecoration": textDecoration, "$height": height, "$width": width }, otherProps), children));
};

/**
 * Section Area Box
 * @description Wrap SectionTitle component with responsive margin & padding and border configurations
 */
var AreaBox = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    var area = _a.area, children = _a.children;
    return (React.createElement(Block$1, { align: 'row', alignx: 'left', aligny: 'middle', b: area === null || area === void 0 ? void 0 : area.b, bt: area === null || area === void 0 ? void 0 : area.bt, br: area === null || area === void 0 ? void 0 : area.br, bb: area === null || area === void 0 ? void 0 : area.bb, bl: area === null || area === void 0 ? void 0 : area.bl, borderColor: area === null || area === void 0 ? void 0 : area.borderColor, borderStyle: area === null || area === void 0 ? void 0 : area.borderStyle, mr: (_b = area === null || area === void 0 ? void 0 : area.mr) === null || _b === void 0 ? void 0 : _b[0], ml: (_c = area === null || area === void 0 ? void 0 : area.ml) === null || _c === void 0 ? void 0 : _c[0], mt: (_d = area === null || area === void 0 ? void 0 : area.mt) === null || _d === void 0 ? void 0 : _d[0], mb: (_e = area === null || area === void 0 ? void 0 : area.mb) === null || _e === void 0 ? void 0 : _e[0], pr: (_f = area === null || area === void 0 ? void 0 : area.pr) === null || _f === void 0 ? void 0 : _f[0], pl: (_g = area === null || area === void 0 ? void 0 : area.pl) === null || _g === void 0 ? void 0 : _g[0], pt: (_h = area === null || area === void 0 ? void 0 : area.pt) === null || _h === void 0 ? void 0 : _h[0], pb: (_j = area === null || area === void 0 ? void 0 : area.pb) === null || _j === void 0 ? void 0 : _j[0], width: (_k = area === null || area === void 0 ? void 0 : area.width) === null || _k === void 0 ? void 0 : _k[0], lg: {
            mr: (_l = area === null || area === void 0 ? void 0 : area.mr) === null || _l === void 0 ? void 0 : _l[1],
            ml: (_m = area === null || area === void 0 ? void 0 : area.ml) === null || _m === void 0 ? void 0 : _m[1],
            mt: (_o = area === null || area === void 0 ? void 0 : area.mt) === null || _o === void 0 ? void 0 : _o[1],
            mb: (_p = area === null || area === void 0 ? void 0 : area.mb) === null || _p === void 0 ? void 0 : _p[1],
            pr: (_q = area === null || area === void 0 ? void 0 : area.pr) === null || _q === void 0 ? void 0 : _q[1],
            pl: (_r = area === null || area === void 0 ? void 0 : area.pl) === null || _r === void 0 ? void 0 : _r[1],
            pt: (_s = area === null || area === void 0 ? void 0 : area.pt) === null || _s === void 0 ? void 0 : _s[1],
            pb: (_t = area === null || area === void 0 ? void 0 : area.pb) === null || _t === void 0 ? void 0 : _t[1],
            width: (_u = area === null || area === void 0 ? void 0 : area.width) === null || _u === void 0 ? void 0 : _u[1]
        } }, children));
};
/**
 * Section Title Empty
 * @description used to space inside cols
 * @returns a blank space as a React element
 */
var TitleEmpty = function () {
    return React.createElement(Block$1, { width: '100%', lg: { height: '52px' } });
};
//Todo: Dinamizar altura para o TitleEmpty visto que em outros projetos pode ser diferente
/**
 * Section Title Text
 * @param children expects the title text
 * @param color expects a valid token color
 * @param element expects a typography type
 * @param font_family expects a font family token
 * @param font_size expects a font size format
 * @param line_height expects a font size format
 * @param transform expects 'uppercase' || 'lowercase'
 * @returns the title as a React element
 */
var TitleText = function (_a) {
    var children = _a.children, color = _a.color, element = _a.element, font_family = _a.font_family, font_size = _a.font_size, line_height = _a.line_height, transform = _a.transform;
    return (React.createElement(Typography$2, { color: color, element: element, fontFamily: font_family, fontSize: font_size[0], fontWeight: 700, lineHeight: line_height[0], lg: {
            fontSize: font_size[1],
            lineHeight: line_height[1],
        }, transform: transform }, children));
};
TitleText.defaultProps = {
    color: 'primary1',
    element: 'h3',
    font_family: 'secondary',
    font_size: ['14px', '18px'],
    line_height: ['18px', '22px'],
    transform: 'uppercase'
};

/**
 * Section Title Component
 * @param color expects a valid color token
 * @param icon expects a valid icon token
 * @param layout expects the layout from theme
 * @param href expects a link to wrap the area
 * @param title expects the title string
 * @returns SectionTitle component
 */
var SectionTitle$1 = function (_a) {
    var color = _a.color, icon = _a.icon, layout = _a.layout, path = _a.path, title = _a.title, theme = _a.theme;
    var area_layout = (layout === null || layout === void 0 ? void 0 : layout.area) || {};
    var icon_layout = (layout === null || layout === void 0 ? void 0 : layout.icon) || {};
    var link_layout = (layout === null || layout === void 0 ? void 0 : layout.link) || {};
    var text_layout = (layout === null || layout === void 0 ? void 0 : layout.text) || {};
    function get_icon_from_theme() {
        //Todo: Create log patter for theme findings errors
        var selected_icon = get(theme, "icons.".concat(icon), false);
        return selected_icon;
    }
    //check if icon is from CMS or static defined in layout
    var icon_component = get_icon_from_theme() || (icon_layout === null || icon_layout === void 0 ? void 0 : icon_layout.component) || false;
    return (React.createElement(AreaBox, { area: area_layout },
        icon_component && cloneElement(icon_component, __assign({ color: color }, icon_layout)),
        React.createElement(Link$1, __assign({ path: path }, link_layout),
            React.createElement(TitleText, __assign({ color: color }, text_layout), title))));
};
var SectionTitle$2 = withTheme(SectionTitle$1);

var isBackgroundTransparent = function (background) {
    return !background || background == 'transparent';
};
var selectBgColorFromSlot = function (slot) {
    var backgroundColor;
    var defaultColor = 'transparent';
    backgroundColor = defaultColor;
    if (slot && slot.bgcolor) {
        backgroundColor = slot.bgcolor;
    }
    return backgroundColor;
};
var selectMinHeightFromSlot = function (minHeight) {
    if (minHeight) {
        return "min-height: ".concat(minHeight, ";");
    }
    return '';
};
/**
 * @param param0
 * @returns a valid react element
 */
var selectComponentFromSlotList = function (parseSlot, slotList, siteData, slotColor) {
    if (!parseSlot)
        return React.createElement(React.Fragment, null);
    return (React.createElement(React.Fragment, null, map(slotList, function (item, key) { return parseSlot(item, key, siteData, slotColor); })));
};
var selectTemplateFromTheme = function (_a) {
    var block = _a.block, slot = _a.slot, templates = _a.templates;
    var slot_type = get(slot, 'type', 'default');
    var slot_data = get(templates, slot_type, false);
    var slot_layouts = get(slot_data, "".concat(block), false);
    return slot_layouts;
};
var selectLayoutFromTemplate = function (_a) {
    var block = _a.block, slot = _a.slot;
    var slot_len1 = get(slot, 'len1', 0);
    var slot_layouts = get(block, 'layout', false);
    var slot_spaces = get(block, 'spaces', false);
    var slot_position = slot_spaces.length > 0 ? slot_len1 : 0;
    var slot_default_selected = get(slot_layouts, '[0]', false);
    var slot_layouts_selected = get(slot_layouts, "[".concat(slot_position, "]"), slot_default_selected);
    return slot_layouts_selected;
};
/**
 * Prensa | selectLayoutColsFromSlot
 * @param slotLength Expects slot items length
 * @param spaces Expects the amount of columns that the content will be splitted (list key is items amount)
 * @returns Configuration for matching items amount | 0
 */
var selectLayoutColsFromSlot = function (slotLength, spaces) {
    var space_default = get(spaces, '[0]', 0);
    var space_from_layout = get(spaces, "[".concat(slotLength - 1, "]"), space_default);
    return space_from_layout;
};
/**
 * RenderSectionTitle function
 * @param {Object} data Expects a Object with SectionTitle configurations
 * @returns
 * - A space for empty titles
 * - A cloneElement hook when using customComponent prop
 * - A SectionTitle with theme configurations
 */
var renderSectionTitle = function (_a) {
    var layout = _a.layout, color = _a.color, title = _a.title, icon = _a.icon, link = _a.link, customComponent = _a.customComponent;
    if (customComponent) {
        return cloneElement(customComponent, { children: title });
    }
    if (!title || title == '') {
        return React.createElement(TitleEmpty, null);
    }
    return (React.createElement(SectionTitle$2, { color: color, icon: icon, layout: layout, path: link, title: title }));
};

var Carousel = function (_a) {
    var children = _a.children, enabled = _a.enabled, height = _a.height, mb = _a.mb, querie = _a.querie, theme = _a.theme, type = _a.type;
    if (!enabled)
        return null;
    var querie_value = theme.queries[querie];
    return (React.createElement(Block$1, { width: '100%', height: height[0], mb: mb[0], lg: { height: height[1], mb: mb[1] } },
        React.createElement("amp-carousel", { layout: 'fixed-height', height: height[0], media: "(max-width: ".concat(querie_value, ")"), type: type }, children),
        React.createElement("amp-carousel", { layout: 'fixed-height', height: height[1], media: "(min-width: ".concat(querie_value, ")"), type: type }, children)));
};
Carousel.defaultProps = {
    height: ['250px', '250px'],
    layout: 'fixed-height',
    querie: 'md',
    mb: [undefined, undefined],
    type: 'slides'
};
var Carousel$1 = withTheme(Carousel);

var IcLeftPagination = function (_a) {
    var color = _a.color;
    return (React.createElement(Icon, { color: color, height: '12px', viewBox: '0 0 12 12', width: '12px' },
        React.createElement("path", { d: 'M0.949297 4.385L8.2393 0.569V2.504C8.2393 2.642 8.2033 2.771 8.1313 2.891C8.0593 3.005 7.9453 3.104 7.7893 3.188L5.2333 4.565C5.0773 4.649 4.9123 4.721 4.7383 4.781C4.5643 4.835 4.3813 4.886 4.1893 4.934C4.3813 4.982 4.5643 5.033 4.7383 5.087C4.9123 5.135 5.0773 5.201 5.2333 5.285L7.7893 6.671C7.9453 6.755 8.0593 6.854 8.1313 6.968C8.2033 7.082 8.2393 7.208 8.2393 7.346V9.281L0.949297 5.474V4.385Z' })));
};

var IcRightPagination = function (_a) {
    var color = _a.color;
    return (React.createElement(Icon, { color: color, height: '12px', viewBox: '0 0 10 12', width: '12px' },
        React.createElement("path", { d: "M8.0493 5.474L0.759297 9.281V7.346C0.759297 7.208 0.795297 7.082 0.867297 6.968C0.939297 6.854 1.0533 6.755 1.2093 6.671L3.7653 5.285C3.9153 5.201 4.0773 5.135 4.2513 5.087C4.4313 5.033 4.6173 4.982 4.8093 4.934C4.6173 4.886 4.4313 4.835 4.2513 4.781C4.0773 4.721 3.9153 4.649 3.7653 4.565L1.2093 3.188C1.0533 3.104 0.939297 3.005 0.867297 2.891C0.795297 2.771 0.759297 2.642 0.759297 2.504V0.569L8.0493 4.385V5.474Z" })));
};

var ArrowButton = function (_a) {
    var borderColor = _a.borderColor, color = _a.color, direction = _a.direction, height = _a.height, radius = _a.radius, width = _a.width;
    var aria_label_string = direction === 'left' ? 'Anterior' : 'Próximo';
    var RenderIcon = function () {
        if (direction === 'left') {
            return React.createElement(IcLeftPagination, { color: color });
        }
        else {
            return React.createElement(IcRightPagination, { color: color });
        }
    };
    return (React.createElement(Link$1, { "aria-label": aria_label_string, mr: 2, href: '/', rel: 'noreferrer', target: '_blank', title: aria_label_string },
        React.createElement(Block$1, { align: 'column', alignx: 'center', aligny: 'middle', b: '1px', borderColor: borderColor, height: height, radius: radius, width: width },
            React.createElement(RenderIcon, null))));
};
ArrowButton.defaultProps = {
    borderColor: 'neutral5',
    color: 'neutral5',
    height: '40px',
    radius: 'circle',
    width: '40px'
};

var PageIndicator = function (_a) {
    var bgColor = _a.bgColor, borderColor = _a.borderColor, children = _a.children, color = _a.color, fontFamily = _a.fontFamily, fontSize = _a.fontSize, height = _a.height, href = _a.href, mt = _a.mt, mr = _a.mr, mb = _a.mb, ml = _a.ml, radius = _a.radius, width = _a.width;
    var flexibleLayout = {};
    if (children > 100) {
        flexibleLayout.radius = 'rounded';
        flexibleLayout.width = '50px';
    }
    if (children > 1000) {
        flexibleLayout.radius = 'rounded';
        flexibleLayout.width = '60px';
    }
    if (children > 10000) {
        flexibleLayout.radius = 'rounded';
        flexibleLayout.width = '70px';
    }
    var Indicator = function () { return (React.createElement(Block$1, __assign({ align: 'column', alignx: 'center', aligny: 'middle', b: '1px', bgColor: bgColor, borderColor: borderColor, height: height, mt: href ? undefined : mt, mr: href ? undefined : mr, mb: href ? undefined : mb, ml: href ? undefined : ml, radius: radius, width: width }, flexibleLayout),
        React.createElement(Typography$2, { color: color, fontFamily: fontFamily, fontSize: fontSize }, children))); };
    if (href) {
        return (React.createElement(Link$1, { "aria-label": "P\u00E1gina ".concat(children), href: href, mt: mt, mr: mr, mb: mb, ml: ml },
            React.createElement(Indicator, null)));
    }
    return React.createElement(Indicator, null);
};
PageIndicator.defaultProps = {
    bgColor: 'transparent',
    borderColor: 'neutral5',
    color: 'neutral5',
    fontFamily: 'primary',
    fontSize: '18px',
    height: '40px',
    mr: 1.5,
    mb: 1.5,
    radius: 'circle',
    width: '40px'
};

var Pagination = function (_a) {
    var indicatorLayout = _a.indicatorLayout, numFound = _a.numFound, path = _a.path, query = _a.query, rows = _a.rows, showArrows = _a.showArrows, start = _a.start;
    var data = {
        current: 0,
        end: 0,
        last: 0,
        next: 0,
        start: 0,
    };
    if (!numFound || numFound == 0 || numFound < rows) {
        return null;
    }
    data.current = Math.floor(start / rows) + 1;
    data.end = Math.floor(numFound / rows) + 1;
    data.last = data.current - 1;
    data.next = data.current + 1;
    data.start = 1;
    var href = "".concat(path || '/', "?term=").concat((query === null || query === void 0 ? void 0 : query.term) || '');
    var RenderStart = function () {
        if (data.start === data.current) {
            return null;
        }
        return (React.createElement(PageIndicator, __assign({ href: "".concat(href, "&page=").concat(data.start) }, indicatorLayout), data.start));
    };
    var RenderBeforeLast = function () {
        return (React.createElement(PageIndicator, __assign({ href: "".concat(href, "&page=").concat(data.last - 1) }, indicatorLayout), data.last - 1));
    };
    var RenderLast = function () {
        if (data.last === data.current || data.last === data.start || data.last === 0) {
            return null;
        }
        if (data.current > data.end) {
            return React.createElement(RenderBeforeLast, null);
        }
        return (React.createElement(PageIndicator, __assign({ href: "".concat(href, "&page=").concat(data.last) }, indicatorLayout), data.last));
    };
    var RenderCurrent = function () {
        if (data.current > data.end) {
            return null;
        }
        return (React.createElement(PageIndicator, __assign({ bgColor: 'neutral5', color: 'neutral9' }, indicatorLayout), data.current));
    };
    var RenderNext = function () {
        if (data.next === data.current ||
            data.next === data.end ||
            data.next === 1 ||
            data.current === data.end ||
            data.current > data.end) {
            return null;
        }
        return (React.createElement(PageIndicator, __assign({ href: "".concat(href, "&page=").concat(data.next) }, indicatorLayout), data.next));
    };
    var RenderEnd = function () {
        if (data.end === data.current) {
            return null;
        }
        return (React.createElement(PageIndicator, __assign({ href: "".concat(href, "&page=").concat(data.end) }, indicatorLayout), data.end));
    };
    var RenderSpace = function () {
        return (React.createElement(PageIndicator, null, "..."));
    };
    return (React.createElement(Block$1, { align: 'row', custom: 'flex-wrap: wrap;', mb: 2, width: '100%' },
        showArrows && React.createElement(ArrowButton, { direction: 'left' }),
        React.createElement(RenderStart, null),
        data.last > data.start + 1 && React.createElement(RenderSpace, null),
        React.createElement(RenderLast, null),
        React.createElement(RenderCurrent, null),
        React.createElement(RenderNext, null),
        data.next < data.end - 1 && React.createElement(RenderSpace, null),
        React.createElement(RenderEnd, null),
        showArrows && React.createElement(ArrowButton, { direction: 'right' })));
};

/**
 * Prensa | PreviewProvider
 * @param props Expects an Object with matching props for PreviewProviderProps interface and custom props
 * @returns |
 * - preview.enabled === false => children component
 * - preview.enabled === true => Children component with preview.render wrapper
 */
var PreviewProvider = function (_a) {
    var children = _a.children, item = _a.item, preview = _a.preview;
    function render_preview_enabled() {
        var PreviewRender = preview.render;
        return (React.createElement(PreviewRender, { item: item, preview: preview }, children));
    }
    function render_preview_disabled() {
        return children;
    }
    return (preview === null || preview === void 0 ? void 0 : preview.enabled) && (preview === null || preview === void 0 ? void 0 : preview.render) ? render_preview_enabled() : render_preview_disabled();
};

var ButtonsBox = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  margin-top: -4px;\n\n  & > button:last-child {\n    margin-left: 4px;\n  }\n"], ["\n  margin-top: -4px;\n\n  & > button:last-child {\n    margin-left: 4px;\n  }\n"])));
var EditBox = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  cursor: text;\n  width: 100%;\n\n  & .div-editable-focus:focus-visible {\n    outline: none;\n  }\n"], ["\n  cursor: text;\n  width: 100%;\n\n  & .div-editable-focus:focus-visible {\n    outline: none;\n  }\n"])));
styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  z-index: 100;\n  width: 100%;\n  \n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  z-index: 100;\n  width: 100%;\n  \n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) { return props.enabled && css(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n    outline: 5px solid #ffa60021;\n    outline-offset: 5px;\n    width: 100%;\n  "], ["\n    outline: 5px solid #ffa60021;\n    outline-offset: 5px;\n    width: 100%;\n  "]))); }, function (props) { return props.saving && css(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n    outline: 5px solid #14a314cc;\n    outline-offset: 5px;\n    width: 100%;\n  "], ["\n    outline: 5px solid #14a314cc;\n    outline-offset: 5px;\n    width: 100%;\n  "]))); }, function (props) { return props.selected && css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    outline: 5px solid #ffbb008b;\n    outline-offset: 5px;\n    width: 100%;\n  "], ["\n    outline: 5px solid #ffbb008b;\n    outline-offset: 5px;\n    width: 100%;\n  "]))); });
var templateObject_1$f, templateObject_2$3, templateObject_3$3, templateObject_4$1, templateObject_5, templateObject_6;

/**
 * EditArea allows teaser wysiwyg
 * @param children text to be edited
 * @param enabled check if is enabled
 * @param saving set teaser in edition
 * @param set_modified set teaser in edition
 * @param state reference to field
 * @returns
 */
var EditArea = function (_a) {
    var children = _a.children, enabled = _a.enabled, set_modified = _a.set_modified, set_selected = _a.set_selected, state = _a.state;
    if (!enabled) {
        return children;
    }
    var handleBlur = function () {
        set_selected && set_selected(false);
    };
    var handleChange = function (event) {
        state.current = event.target.value;
        set_modified && set_modified(true);
    };
    var handleFocus = function () {
        set_selected && set_selected(true);
    };
    return (React.createElement(EditBox, null,
        React.createElement(ContentEditable, { className: 'div-editable-focus', contentEditable: true, html: state === null || state === void 0 ? void 0 : state.current, onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus, suppressContentEditableWarning: true })));
};
/**
 * EditButtons allows teaser "wysiwyg"
 * @param action to handle submit
 * @param enabled check if is enabled
 * @param reset to handle reset
 * @returns
 */
var EditButtons = function (_a) {
    var action = _a.action, enabled = _a.enabled, reset = _a.reset;
    if (!enabled) {
        return React.createElement(React.Fragment, null);
    }
    var handleReset = function () { return reset(); };
    var handleSubmit = function () {
        action();
    };
    return (React.createElement(ButtonsBox, null,
        React.createElement("button", { onClick: handleReset }, "resetar"),
        React.createElement("button", { onClick: handleSubmit }, "salvar")));
};

var RelatedArea = function (_a) {
    var children = _a.children;
    return (React.createElement(Block$1, { align: "column", alignx: "left", aligny: "top", lg: {
            align: 'row',
            alignx: 'wrap',
            aligny: 'top',
        }, width: "100%" }, children));
};
var RelatedItem = function (_a) {
    var children = _a.children, color = _a.color, font_size = _a.font_size, font_weight = _a.font_weight, icon = _a.icon, line_height = _a.line_height, item_path = _a.item_path, theme = _a.theme, mr = _a.mr, mb = _a.mb;
    var icon_token = icon === null || icon === void 0 ? void 0 : icon.icon;
    var icon_width = icon === null || icon === void 0 ? void 0 : icon.width;
    function get_icon_from_theme() {
        //Todo: Create log patter for theme findings errors
        var selected_icon = get(theme, "icons.".concat(icon_token), false);
        return selected_icon;
    }
    //check if icon is from CMS or static defined in layout
    var icon_component = get_icon_from_theme() || false;
    return (React.createElement(Block$1, { mb: mb[0], lg: { mb: mb[1] }, width: '100%' },
        React.createElement(Block$1, { align: 'row' },
            React.createElement(Block$1, { mr: mr || 1, width: icon_width || '42px' }, icon_component && React.cloneElement(icon_component, __assign({ color: color }, icon))),
            React.createElement(Block$1, { width: '100%' },
                React.createElement(Typography$2, { color: 'neutral2', element: 'h2', fontFamily: 'primary', fontSize: font_size[0], fontWeight: font_weight, lineHeight: line_height[0], lg: { fontSize: font_size[1], lineHeight: line_height[1] } },
                    React.createElement(Link$1, { path: item_path, hoverOpacity: 0.9 }, children))))));
};
RelatedItem.defaultProps = {
    color: 'black',
    font_size: ['14px', '14px'],
    font_weight: 400,
    line_height: ['16px', '16px'],
    mb: [2, 2]
};
var RelatedItem$1 = withTheme(RelatedItem);

var Related = function (_a) {
    var color = _a.color, items = _a.items, layout = _a.layout;
    var layout_color = get(layout, 'color', false);
    var items_color = layout_color || color;
    return (React.createElement(RelatedArea, null, map(items, function (item, key) {
        var item_path = get(item, 'url', false) || get(item, 'path', '');
        return (React.createElement(RelatedItem$1, { key: key, color: items_color, font_size: layout.font_size, font_weight: layout.font_weight, icon: layout === null || layout === void 0 ? void 0 : layout.icon, line_height: layout.line_height, item_path: item_path, mb: layout.mb }, item.name));
    })));
};

const datePtBrFull = date => {
  if (!date) return false;
  let d = date.replace('T', ' ');

  let _y = d.split('-');

  let _d = _y[2].split(' ');

  let _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  let _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]);

  if (!(_date instanceof Date)) return false;
  return `${format(_date, 'dd/MM/yyyy')} às ${format(_date, 'HH:mm')}`;
};

const dateDistance = (date, limit) => {
  if (!date) return false;
  let d = date.replace('T', ' ');

  let _y = d.split('-');

  let _d = _y[2].split(' ');

  let _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  let _now = new Date().getTime();

  let _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]).getTime();

  const distanteInWords = formatDistance(_now, _date, {
    locale: ptBR
  });
  const diffHours = differenceInHours(_now, _date, {
    locale: ptBR
  });
  if (diffHours > limit) return datePtBrFull(date);
  const replaces = [['aproximadamente ', '']];
  let date_string = distanteInWords;
  map(replaces, r => {
    date_string = date_string.replace(r[0], r[1]);
  });
  return `Há ${date_string}`;
};

/**
 * Transform contentId or contentIdVersioned in a contentIdString
 * @param contentId contentId or contentIdVersioned
 * @returns a valid contentIdString
 */
function parseContentId(contentId) {
    var splitter;
    splitter = contentId.split(':');
    contentId = get(splitter, '[0]', '');
    splitter = contentId.split('.');
    contentId = "".concat(get(splitter, '[0]'), ".").concat(get(splitter, '[1]'));
    return contentId;
}

var RenderDatetime = function (_a) {
    var item = _a.item, layout = _a.layout;
    var component_layout = get(layout, 'date_time', {});
    var datetime_enabled = get(component_layout, 'enabled', false);
    var datetime_format = get(component_layout, 'format', false);
    var text_color = get(component_layout, 'color', 'neutral3');
    var text_element = get(component_layout, 'element', 'span');
    var text_fontFamily = get(component_layout, 'fontFamily', 'primary');
    var text_fontSize = get(component_layout, 'fontSize', '14px');
    var text_fontWeight = get(component_layout, 'fontWeight', 300);
    var text_lineHeight = get(component_layout, 'lineHeight', '18px');
    var text_width = get(component_layout, 'width', '100%');
    // get time_formatted  
    var time_formatted = get(item, 'time_modifiedDate', '');
    if (datetime_format == 'time_formatted') {
        time_formatted = get(item, 'time_published', false);
        if (!time_formatted || time_formatted == '') {
            time_formatted = get(item, 'pubdate', false);
        }
        time_formatted = time_formatted && datePtBrFull(time_formatted);
    }
    if (!time_formatted || time_formatted == '') {
        time_formatted = get(item, 'time-modified', '');
    }
    if (!time_formatted || time_formatted == '') {
        time_formatted = get(item, 'updated', '');
    }
    if (!time_formatted || !datetime_enabled) {
        return null;
    }
    var time_string = time_formatted;
    if (datetime_format != 'time_formatted') {
        time_string = dateDistance(time_formatted, 600);
        time_string = time_string && time_string.startsWith('Há') ?
            time_string.replace('Há', 'Atualizado há') :
            "Atualizado em ".concat(time_string);
    }
    return (React.createElement(Typography$2, { color: text_color, element: text_element, fontFamily: text_fontFamily, fontSize: text_fontSize, fontWeight: text_fontWeight, lineHeight: text_lineHeight, width: text_width }, time_string));
};

const AmpImage$1 = ({
  custom_class,
  title,
  mobile_height,
  mobile_path,
  mobile_width,
  mobile_layout = 'responsive',
  desktop_height,
  desktop_path,
  desktop_width,
  desktop_layout = 'responsive'
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, mobile_path && /*#__PURE__*/React.createElement("amp-img", {
    alt: title,
    class: `hide_desktop ${custom_class}`,
    src: mobile_path,
    height: mobile_height,
    layout: mobile_layout,
    width: mobile_width
  }), desktop_path && /*#__PURE__*/React.createElement("amp-img", {
    alt: title,
    class: `hide_mobile ${custom_class}`,
    src: desktop_path,
    height: desktop_height,
    layout: desktop_layout,
    width: desktop_width
  }));
};

var HtmlBackgroundStyled = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n\n  ", "\n"], ["\n  height: 100%;\n  width: 100%;\n\n  ", "\n"])), function (props) { return props.img_path && css(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n    background-image: url(", ");\n    background-position: center center;\n    background-size: cover;\n  "], ["\n    background-image: url(", ");\n    background-position: center center;\n    background-size: cover;\n  "])), props.img_path); });
var HtmlImageStyled = styled.img(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$e, templateObject_2$2, templateObject_3$2;

var RenderHtmlImage = function (props) {
    if (props.renderType === 'responsive') {
        return (React.createElement(HtmlBackgroundStyled, { className: props.className, img_path: props.path }));
    }
    return (React.createElement(HtmlImageStyled, { className: props.className, height: props.height, src: props.path, width: props.width }));
};
var HtmlImage = function (_a) {
    var custom_class = _a.custom_class, layout_desktop = _a.layout_desktop, layout_mobile = _a.layout_mobile;
    return (React.createElement(React.Fragment, null,
        layout_desktop.enabled && (React.createElement(RenderHtmlImage, { className: "hide_mobile ".concat(custom_class), renderType: layout_desktop.type, path: layout_desktop.path })),
        layout_mobile.enabled && (React.createElement(RenderHtmlImage, { className: "hide_desktop ".concat(custom_class), renderType: layout_mobile.type, path: layout_mobile.path }))));
};

var Image$1 = function (_a) {
    var amp = _a.amp, custom_class = _a.custom_class, layout_desktop = _a.layout_desktop, layout_mobile = _a.layout_mobile, title = _a.title;
    if (!amp) {
        return (React.createElement(HtmlImage, { custom_class: custom_class, layout_desktop: layout_desktop, layout_mobile: layout_mobile, title: title }));
    }
    return (React.createElement(AmpImage$1, { custom_class: custom_class, desktop_height: layout_desktop.height, desktop_layout: layout_desktop.type, desktop_path: layout_desktop.path, desktop_width: layout_desktop.width, mobile_height: layout_mobile.height, mobile_layout: layout_mobile.type, mobile_path: layout_mobile.path, mobile_width: layout_mobile.width, title: title }));
};
Image$1.defaultProps = {
    amp: false
};

/**
 * Prensa | Image path generator for Polopoly CMS
 * @param derivative set the image dimension (i.e. 2x1, 1x1, 3x2)
 * @param domain set the domain for the image path prefix
 * @param policy set the policy id value aka contentid
 * @param width set the image width (via path param)
 * @returns parsed image url as a string
 */
function parseImagePath(derivative, domain, policy, width) {
    /**
     * @description return the image path url
     */
    var url = '';
    // domain treatments
    if (domain === 'undefined') {
        domain = '';
    }
    // parse policy
    var policy_split = policy.split('.');
    var policy_version = get(policy_split, '[2]', false);
    var policy_string = policy_version ? "".concat(policy, ":").concat(policy_version) : policy;
    // parse params
    var path_policy = "/image/policy:".concat(policy_string);
    var path_file = '/image.jpg';
    var params_d = derivative ? "f=".concat(derivative, "&") : '';
    var params_w = width ? "w=".concat(width, "&") : '';
    var params = "?".concat(params_d).concat(params_w);
    // final string
    url = "".concat(domain).concat(path_policy).concat(path_file).concat(params);
    return url;
}

var ImagePreviewArea = styled.a(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  color: inherit;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: normal;\n  &:hover {\n    opacity: 0.9;\n  }\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  color: inherit;\n  cursor: pointer;\n  text-decoration: none;\n  white-space: normal;\n  &:hover {\n    opacity: 0.9;\n  }\n"])), align, height, margin, padding, width);
var ImagePreviewLink = function (_a) {
    var align = _a.align, alignx = _a.alignx, aligny = _a.aligny, children = _a.children, editable = _a.editable, height = _a.height, image_props = _a.image_props, item = _a.item, mr = _a.mr, ml = _a.ml, mt = _a.mt, mb = _a.mb, pr = _a.pr, pl = _a.pl, pt = _a.pt, pb = _a.pb, restrictedClickArea = _a.restrictedClickArea, _b = _a.width, width = _b === void 0 ? '100%' : _b;
    var previewAreaId = "preview-area-".concat(item.cid);
    var handlePreviewClick = function (item) {
        editable.image_load(editable, item, image_props);
    };
    var handleAreaClick = function (event) {
        if (restrictedClickArea && event.target.id !== previewAreaId) {
            return undefined;
        }
        if (!editable || !editable.image_load) {
            return undefined;
        }
        handlePreviewClick(item);
    };
    return (React.createElement(ImagePreviewArea, { align: align, alignx: alignx, aligny: aligny, id: previewAreaId, mr: mr, ml: ml, mt: mt, mb: mb, onClick: handleAreaClick, pr: pr, pl: pl, pt: pt, pb: pb, "$height": height, "$width": width }, children));
};
var templateObject_1$d;

var get_negative_margin = function (value) {
    return "-".concat(value);
};
var OpacityMask = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  height: ", ";\n  width: 100%;\n  margin-top: ", ";\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 43.75%, #000000 100%);\n"], ["\n  height: ", ";\n  width: 100%;\n  margin-top: ", ";\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 43.75%, #000000 100%);\n"])), function (props) { return props.$height; }, function (props) { return get_negative_margin(props.$height); });
var RenderOpacityMask = function (_a) {
    var enabled = _a.enabled, layout_desktop = _a.layout_desktop, layout_mobile = _a.layout_mobile;
    if (!enabled)
        return null;
    return (React.createElement(React.Fragment, null,
        React.createElement(OpacityMask, { className: 'hide_desktop', "$height": layout_desktop.height }),
        React.createElement(OpacityMask, { className: 'hide_mobile', "$height": layout_mobile.height })));
};
var templateObject_1$c;

var RenderOpacityMaskClickArea = function (_a) {
    var align = _a.align, alignx = _a.alignx, aligny = _a.aligny, height = _a.height, children = _a.children, editable = _a.editable, layout = _a.layout, item = _a.item, item_path = _a.item_path, mr = _a.mr, ml = _a.ml, mt = _a.mt, mb = _a.mb, pr = _a.pr, pl = _a.pl, pt = _a.pt, pb = _a.pb, opacity_mask = _a.opacity_mask, width = _a.width;
    if (!opacity_mask) {
        return children;
    }
    var mobile_dim = get(layout, 'image.dimension[0]', '1x1');
    var desktop_dim = get(layout, 'image.dimension[1]', '1x1');
    if (editable === null || editable === void 0 ? void 0 : editable.enabled) {
        return (React.createElement(ImagePreviewLink, { align: align, alignx: alignx, aligny: aligny, height: height, editable: editable, image_props: { mobile_dim: mobile_dim, desktop_dim: desktop_dim }, item: item, mr: mr, ml: ml, mt: mt, mb: mb, pr: pr, pl: pl, pt: pt, pb: pb, restrictedClickArea: true, width: width }, children));
    }
    return (React.createElement(Link$1, { align: align, alignx: alignx, aligny: aligny, height: height, href: item_path, mr: mr, ml: ml, mt: mt, mb: mb, pr: pr, pl: pl, pt: pt, pb: pb, width: width }, children));
};

const AreaLink = styled.a.withConfig({
  displayName: "styled__AreaLink",
  componentId: "sc-1sioqxd-0"
})(["color:inherit;cursor:pointer;text-decoration:none;width:100%;white-space:normal;&:hover{opacity:0.9;}"]);

const Box$1 = ({
  box_align = ['column', 'column'],
  box_alignx = ['center', 'center'],
  box_aligny,
  box_height,
  box_pt,
  box_pr,
  box_pb,
  box_pl,
  box_mt,
  box_mr,
  box_mb = [2, 2],
  box_ml,
  background = 'transparent',
  box_bt,
  box_br,
  box_bb,
  box_bl,
  box_b,
  box_borderColor,
  box_borderStyle,
  box_radius,
  children,
  className
}) => {
  const parse_boxwidth = () => {
    if (box_b) {
      return `calc(100% - ${box_b} - ${box_b})`;
    }

    if (box_bl && box_br) {
      return `calc(100% - ${box_bl} - ${box_br})`;
    }

    if (box_bl) {
      return `calc(100% - ${box_bl})`;
    }

    if (box_br) {
      return `calc(100% - ${box_br})`;
    }

    return '100%';
  };

  const box_width = parse_boxwidth();
  return /*#__PURE__*/React.createElement(Block$1, {
    align: box_align[0],
    alignx: box_alignx[0],
    aligny: box_aligny[0],
    className: className,
    bgColor: background,
    height: box_height[0],
    pt: box_pt[0],
    pr: box_pr[0],
    pb: box_pb[0],
    pl: box_pl[0],
    mt: box_mt[0],
    mr: box_mr[0],
    mb: box_mb[0],
    ml: box_ml[0],
    width: box_width,
    bt: box_bt,
    br: box_br,
    bb: box_bb,
    bl: box_bl,
    b: box_b,
    borderColor: box_borderColor,
    borderStyle: box_borderStyle,
    radius: box_radius,
    lg: {
      align: box_align[1],
      alignx: box_alignx[1],
      aligny: box_aligny[1],
      height: box_height[1],
      pt: box_pt[1],
      pr: box_pr[1],
      pb: box_pb[1],
      pl: box_pl[1],
      mt: box_mt[1],
      mr: box_mr[1],
      mb: box_mb[1],
      ml: box_ml[1],
      width: box_width
    },
    xl: {
      height: get(box_height, '[2]', box_height[1])
    }
  }, children);
};

const Image = ({
  children,
  image_circle = false,
  height
}) => {
  const custom = image_circle ? 'border-radius: 100%;' : '';
  return /*#__PURE__*/React.createElement(Block$1, {
    bgColor: "neutral8",
    custom: custom,
    height: height[0],
    width: "100%",
    lg: {
      align: 'column',
      height: height[1],
      width: '100%'
    }
  }, children);
};

const Subject$2 = ({
  children,
  bg_color = 'transparent',
  color,
  font_size,
  line_height,
  mb
}) => {
  const subject_px = bg_color !== 'transparent' ? 1 : 0;
  const subject_py = bg_color !== 'transparent' ? 0.5 : 0;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "row",
    alignx: "between",
    bgColor: bg_color,
    custom: "border-radius: 3px;",
    lg: {
      mb: mb[1]
    },
    px: subject_px,
    py: subject_py,
    mb: mb[0]
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    element: "h2",
    fontFamily: "secondary",
    fontSize: font_size[0],
    fontWeight: 700,
    lineHeight: line_height[0],
    lg: {
      fontSize: font_size[1],
      lineHeight: line_height[1]
    },
    transform: "uppercase"
  }, children));
};

const WrapContent = ({
  children,
  editable,
  item,
  item_path,
  layout,
  opacity_mask,
  wrap_align = ['column', 'column'],
  wrap_alignx,
  wrap_aligny,
  wrap_height,
  wrap_mr = [0, 0],
  wrap_ml = [0, 0],
  wrap_mt = [0, 0],
  wrap_mb = [0, 0],
  wrap_pr = [0, 0],
  wrap_pl = [0, 0],
  wrap_pt = [0, 0],
  wrap_pb = [0, 0],
  wrap_width = ['100%', '100%']
}) => {
  if (opacity_mask) {
    return /*#__PURE__*/React.createElement(RenderOpacityMaskClickArea, {
      align: wrap_align,
      alignx: wrap_alignx,
      aligny: wrap_aligny,
      height: wrap_height,
      mr: wrap_mr,
      ml: wrap_ml,
      mt: wrap_mt,
      mb: wrap_mb,
      pr: wrap_pr,
      pl: wrap_pl,
      pt: wrap_pt,
      pb: wrap_pb,
      width: wrap_width,
      editable: editable,
      item: item,
      item_path: item_path,
      layout: layout,
      opacity_mask: opacity_mask
    }, children);
  }

  return /*#__PURE__*/React.createElement(Block$1, {
    align: wrap_align[0],
    alignx: wrap_alignx[0],
    aligny: wrap_aligny[0],
    height: wrap_height[0],
    mr: wrap_mr[0],
    ml: wrap_ml[0],
    mt: wrap_mt[0],
    mb: wrap_mb[0],
    pr: wrap_pr[0],
    pl: wrap_pl[0],
    pt: wrap_pt[0],
    pb: wrap_pb[0],
    width: wrap_width[0],
    lg: {
      align: wrap_align[1],
      alignx: wrap_alignx[1],
      aligny: wrap_aligny[1],
      height: wrap_height[1],
      mr: wrap_mr[1],
      ml: wrap_ml[1],
      mt: wrap_mt[1],
      mb: wrap_mb[1],
      pr: wrap_pr[1],
      pl: wrap_pl[1],
      pt: wrap_pt[1],
      pb: wrap_pb[1],
      width: wrap_width[1]
    }
  }, children);
};

const WrapSubject = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "row",
    alignx: "between",
    width: "100%"
  }, children);
};

var RenderImage = function (_a) {
    var amp = _a.amp, domain = _a.domain, editable = _a.editable, fallback_image_url = _a.fallback_image_url, image_circle = _a.image_circle, item = _a.item, item_path = _a.item_path, layout = _a.layout, opacityMask = _a.opacityMask;
    // get image object from props
    var image_object = get(item, 'image', false);
    if (!image_object) {
        image_object = get(item, 'img', false);
    }
    // get contentId from props
    var image_contentid = get(image_object, 'contentId', false);
    image_contentid = image_contentid || get(image_object, 'cid', false);
    // show new policy when saved
    if (editable && editable.enabled && image_contentid) {
        // parse image contentid
        var image_cid = parseContentId(image_contentid);
        // check if editable state of image exists
        if (editable.state_of_image && editable.state_of_image["".concat(image_cid, "_cid")]) {
            image_contentid = editable.state_of_image["".concat(image_cid, "_cid")].current;
        }
    }
    // parse data
    var image_caption = get(image_object, 'caption', '');
    var mobile_dim = get(layout, 'image.dimension[0]', '1x1');
    var desktop_dim = get(layout, 'image.dimension[1]', '1x1');
    var has_fallback_image = get(layout, 'image.fallback_image', false);
    var height = get(layout, 'image.height', 600);
    var layout_mobile = get(layout, 'image.layout[0]', 'responsive');
    var layout_desktop = get(layout, 'image.layout[1]', 'responsive');
    var mobile_height = get(layout, 'image.height[0]', 600);
    var mobile_width = get(layout, 'image.width[0]', 600);
    var desktop_height = get(layout, 'image.height[1]', 600);
    var desktop_width = get(layout, 'image.width[1]', 600);
    var image_path_mobile = '';
    var image_path_desktop = '';
    /**
     * Dataflow for defining image url
     *  1 image_contentid does not exist and fallback_image_url is defined (should render fallback_image_url)
     *  2 image_contentid does not exist as fallback_image_url (should render nothing)
     *  3 image_contentid exists and generate a valid path (should render CMS image)
     */
    if (!image_contentid || image_contentid === '') {
        if (has_fallback_image === true) {
            if (!fallback_image_url) {
                console.error('Prensa | Missing fallback_image_url prop in PageBlock component');
            }
            else {
                image_path_mobile = fallback_image_url;
                image_path_desktop = fallback_image_url;
            }
        }
        else {
            return null;
        }
    }
    else {
        image_path_mobile = parseImagePath(mobile_dim, domain, image_contentid, 600);
        image_path_desktop = parseImagePath(desktop_dim, domain, image_contentid, 600);
    }
    // prepare image props to render hybrid image ( amp / html )
    var image_props = {
        amp: amp,
        custom_class: image_circle == true ? 'image-with-radius' : '',
        title: image_caption,
        layout_mobile: {
            enabled: image_path_mobile && image_path_mobile != '',
            height: mobile_height,
            path: image_path_mobile,
            type: layout_mobile,
            width: mobile_width,
        },
        layout_desktop: {
            enabled: image_path_desktop && image_path_desktop != '',
            height: desktop_height,
            path: image_path_desktop,
            type: layout_desktop,
            width: desktop_width,
        }
    };
    var RenderImageElement = function () { return (React.createElement(Image, { image_circle: image_circle, height: height },
        React.createElement(Image$1, __assign({}, image_props)))); };
    var RenderImageWithOpacityMask = function () { return (React.createElement(React.Fragment, null,
        React.createElement(RenderImageElement, null),
        React.createElement(RenderOpacityMask, { enabled: opacityMask, layout_desktop: image_props.layout_desktop, layout_mobile: image_props.layout_mobile }))); };
    var RenderImageForPreview = function () {
        if (opacityMask) {
            return (React.createElement(RenderImageWithOpacityMask, null));
        }
        return (React.createElement(ImagePreviewLink, { editable: editable, image_props: { mobile_dim: mobile_dim, desktop_dim: desktop_dim }, item: item },
            React.createElement(RenderImageElement, null)));
    };
    var RenderImageWithLink = function () {
        if (opacityMask) {
            return (React.createElement(RenderImageWithOpacityMask, null));
        }
        return (React.createElement(AreaLink, { href: item_path },
            React.createElement(RenderImageElement, null)));
    };
    if (editable && editable.enabled) {
        return React.createElement(RenderImageForPreview, null);
    }
    return React.createElement(RenderImageWithLink, null);
};

var RenderNumber = function (_a) {
    var layout = _a.layout, number = _a.number;
    var layout_data = get(layout, 'number', {});
    var containerProps = get(layout_data, 'containerProps', {});
    var textProps = get(layout_data, 'textProps', {});
    return (React.createElement(Block$1, __assign({ align: 'column', alignx: 'center', aligny: 'middle' }, containerProps),
        React.createElement(Typography$2, __assign({ element: 'span' }, textProps), number)));
};

var AuthorName = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography$2, __assign({ color: 'neutral5', element: 'span', fontSize: '14px', fontWeight: 400, width: '100%' }, otherProps), children));
};
var Container$9 = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Block$1, __assign({ alignx: 'center', aligny: 'middle', b: '1px', bgColor: 'white', borderColor: 'neutral9', height: 'max-content', px: 2, py: 2, radius: 'alternative', width: 'calc(100% - 32px - 2px)' }, otherProps), children));
};
var Content$5 = function (_a) {
    var children = _a.children, className = _a.className, otherProps = __rest(_a, ["children", "className"]);
    return (React.createElement(Block$1, __assign({ align: 'row', aligny: 'middle', className: className, width: '100%' }, otherProps), children));
};
var DateTime = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography$2, __assign({ color: 'neutral3', element: 'span', fontSize: '12px', fontWeight: 400, width: '100%' }, otherProps), children));
};
var ImageWrap$1 = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Block$1, __assign({ height: '48px', width: '48px' }, otherProps), children));
};
var NewsTitle = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography$2, __assign({ color: 'neutral2', element: 'label', fontSize: '20px', fontWeight: 700, lineHeight: '110%', mb: 2, width: '100%' }, otherProps), children));
};
var Title$2 = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography$2, __assign({ color: 'neutral2', custom: 'cursor: pointer;', element: 'label', fontSize: '16px', fontWeight: 700, mb: 0.5, width: '100%' }, otherProps), children));
};
var TitleWrapper = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Block$1, __assign({ align: 'column', aligny: 'top', width: 'calc(100% - 48px - 16px)' }, otherProps), children));
};
var ResponsiveWrap = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var templateObject_1$b;

var TeaserProfile = function (_a) {
    var _b = _a.amp, amp = _b === void 0 ? false : _b, authorNameProps = _a.authorNameProps, className = _a.className, containerProps = _a.containerProps, domain = _a.domain, href = _a.href, image = _a.image, imageWrapProps = _a.imageWrapProps, subtitleContainer = _a.subtitleContainer, title = _a.title, titleProps = _a.titleProps, name = _a.name;
    var image_desktop_policy = get(image, 'desktop_path', '');
    var image_mobile_policy = get(image, 'mobile_path', '');
    var image_desktop_url = parseImagePath('1x1', domain, image_desktop_policy, 40);
    var image_mobile_url = parseImagePath('1x1', domain, image_mobile_policy, 40);
    var image_width_desktop = get(image, 'width[1]', '40px');
    var image_height_desktop = get(image, 'height[1]', '40px');
    var image_width_mobile = get(image, 'width[0]', '40px');
    var image_height_mobile = get(image, 'height[0]', '40px');
    var image_title = get(image, 'title', '');
    var imageBoxWidth = {
        height: image_height_mobile,
        width: image_width_mobile,
        lg: {
            height: image_height_desktop,
            width: image_width_desktop,
        }
    };
    return (React.createElement(ResponsiveWrap, { className: className },
        React.createElement(Content$5, __assign({}, containerProps),
            React.createElement(Link$1, { path: href },
                React.createElement(ImageWrap$1, __assign({}, imageWrapProps, imageBoxWidth, { mr: 1 }),
                    React.createElement(Image$1, { amp: amp, custom_class: 'image-with-radius', title: image_title, layout_desktop: {
                            enabled: true,
                            height: image_height_desktop,
                            width: image_width_desktop,
                            path: image_desktop_url,
                            type: 'responsive'
                        }, layout_mobile: {
                            enabled: true,
                            height: image_height_mobile,
                            width: image_width_mobile,
                            path: image_mobile_url,
                            type: 'responsive'
                        } }))),
            React.createElement(TitleWrapper, null,
                title &&
                    React.createElement(Block$1, { alignx: 'left', align: 'row', width: '100%' },
                        React.createElement(Link$1, { path: href },
                            React.createElement(Title$2, __assign({}, titleProps), title))),
                name &&
                    React.createElement(AuthorName, __assign({}, authorNameProps), name),
                subtitleContainer && subtitleContainer()))));
};

var RenderProfile = function (_a) {
    var _b, _c, _d, _e;
    var amp = _a.amp, domain = _a.domain, content = _a.content, className = _a.className, containerProps = _a.containerProps, subtitleContainer = _a.subtitleContainer;
    return (React.createElement(TeaserProfile, { amp: amp, className: className, containerProps: containerProps, domain: domain, href: content === null || content === void 0 ? void 0 : content.path, image: {
            mobile_path: (_b = content === null || content === void 0 ? void 0 : content.image) === null || _b === void 0 ? void 0 : _b.contentId,
            desktop_path: (_c = content === null || content === void 0 ? void 0 : content.image) === null || _c === void 0 ? void 0 : _c.contentId,
            height: (_d = content === null || content === void 0 ? void 0 : content.image) === null || _d === void 0 ? void 0 : _d.height,
            width: (_e = content === null || content === void 0 ? void 0 : content.image) === null || _e === void 0 ? void 0 : _e.width,
            title: content.name
        }, subtitleContainer: subtitleContainer, title: content.name, titleProps: {
            fontSize: '14px'
        } }));
};

var RenderSubject = function (_a) {
    var color = _a.color, editable = _a.editable, item = _a.item, layout = _a.layout;
    var subject_enabled = get(layout, 'subject.enabled', false);
    var subject_variant = get(layout, 'subject.variant', '');
    var subject_value = get(item, 'subject', '');
    if (!subject_enabled) {
        return null;
    }
    if (editable && editable.enabled) {
        if (!subject_value || subject_value == '') {
            subject_value = ' ';
        }
    }
    if (!subject_value) {
        return null;
    }
    var parseBgColor = function () {
        if (subject_variant === 'default') {
            return 'transparent';
        }
        if (subject_variant === 'filled') {
            return color ? color : get(layout, 'subject.bg_color', 'primary1');
        }
    };
    var parseFontColor = function () {
        if (subject_variant === 'default') {
            return color ? color : get(layout, 'subject.color', 'white');
        }
        if (subject_variant === 'filled') {
            return 'white';
        }
    };
    var bg_color = parseBgColor();
    var font_color = parseFontColor();
    var font_size = get(layout, 'subject.font_size', ['14px', '14px']);
    var line_height = get(layout, 'subject.line_height', ['16px', '16px']);
    var mb = get(layout, 'subject.mb', ['0px', '0px']);
    return (React.createElement(Subject$2, { bg_color: bg_color, color: font_color, font_size: font_size, line_height: line_height, mb: mb },
        React.createElement(EditArea, __assign({}, editable), subject_value)));
};

var Subtitle$2 = function (_a) {
    var children = _a.children, color = _a.color, font_size = _a.font_size, line_height = _a.line_height, mb = _a.mb;
    return (React.createElement(Typography$2, { color: color, element: 'h2', fontFamily: 'secondary', fontSize: font_size[0], fontWeight: 300, lineHeight: line_height[0], lg: {
            fontSize: font_size[1],
            lineHeight: line_height[1],
            mb: mb[1]
        }, mb: mb[0], width: '100%' }, children));
};
Subtitle$2.defaultProps = {
    color: 'black',
    font_size: ['14px', '14px'],
    line_height: ['16px', '16px'],
    mb: [2, 2]
};
var RenderSubtitle = function (_a) {
    var _b, _c, _d, _e, _f;
    var item = _a.item, layout = _a.layout;
    if (!(item === null || item === void 0 ? void 0 : item.subtitle) || !((_b = layout === null || layout === void 0 ? void 0 : layout.subtitle) === null || _b === void 0 ? void 0 : _b.enabled)) {
        return null;
    }
    return (React.createElement(Subtitle$2, { color: (_c = layout === null || layout === void 0 ? void 0 : layout.subtitle) === null || _c === void 0 ? void 0 : _c.color, font_size: (_d = layout === null || layout === void 0 ? void 0 : layout.subtitle) === null || _d === void 0 ? void 0 : _d.font_size, line_height: (_e = layout === null || layout === void 0 ? void 0 : layout.subtitle) === null || _e === void 0 ? void 0 : _e.line_height, mb: (_f = layout === null || layout === void 0 ? void 0 : layout.subtitle) === null || _f === void 0 ? void 0 : _f.mb }, item.subtitle));
};

function parseCid(value) {
    if (!value)
        return '';
    var values = value.split('.');
    var aglutinatedCid = values.join('');
    return aglutinatedCid;
}
/**
 * Teaser Title component
 * @param editable enable live edition
 * @param layout allow style changes based on supported props
 * @param path link path enable href for Title
 * @param title text to be rendered
 * @returns a Typography as a React element
 */
var RenderTitle = function (_a) {
    var _b, _c, _d, _e, _f, _g;
    var cid = _a.cid, editable = _a.editable, layout = _a.layout, link = _a.link, opacity_mask = _a.opacity_mask, position = _a.position, slot_position = _a.slot_position, title = _a.title, titleEventTracking = _a.titleEventTracking;
    var title_layout = get(layout, 'title', false);
    var title_enabled = get(layout, 'title.enabled', false);
    if (!title || !title_enabled || !title_layout) {
        return React.createElement(React.Fragment, null);
    }
    if ((editable === null || editable === void 0 ? void 0 : editable.enabled) || opacity_mask) {
        link = '';
    }
    var handleClick = function () {
        if (titleEventTracking) {
            titleEventTracking({
                cid: cid,
                slot_position: slot_position,
                teaser_position: position,
            });
        }
    };
    /** Control eventTracking ids */
    var linkid = titleEventTracking && "cid".concat(parseCid(cid));
    return (React.createElement(Typography$2, { color: (title_layout === null || title_layout === void 0 ? void 0 : title_layout.color) || 'neutral2', element: title_layout === null || title_layout === void 0 ? void 0 : title_layout.element, fontFamily: (title_layout === null || title_layout === void 0 ? void 0 : title_layout.font_family) || 'primary', fontSize: (_b = title_layout.font_size) === null || _b === void 0 ? void 0 : _b[0], fontWeight: (title_layout === null || title_layout === void 0 ? void 0 : title_layout.font_weight) || 700, lineHeight: (_c = title_layout.line_height) === null || _c === void 0 ? void 0 : _c[0], mb: (_d = title_layout.mb) === null || _d === void 0 ? void 0 : _d[0], shadow: opacity_mask, width: '100%', lg: {
            fontSize: (_e = title_layout.font_size) === null || _e === void 0 ? void 0 : _e[1],
            lineHeight: (_f = title_layout.line_height) === null || _f === void 0 ? void 0 : _f[1],
            mb: (_g = title_layout.mb) === null || _g === void 0 ? void 0 : _g[1]
        } },
        React.createElement(EditArea, __assign({}, editable),
            React.createElement(Link$1, { id: linkid, onClick: handleClick, hoverOpacity: 0.9, path: link }, title))));
};

var Teaser = function (props) {
    var amp = props.amp, color = props.color, fallback_image_url = props.fallback_image_url, eventTracking = props.eventTracking, edit_buttons = props.edit_buttons, editable = props.editable, domain = props.domain, item = props.item, layout = props.layout, number = props.number, related = props.related, slot_position = props.slot_position, states = props.states;
    // main props
    var item_cid = get(item, 'cid', '');
    var item_path = get(item, 'url', false) || get(item, 'path', '');
    var item_title = get(item, 'name', '');
    var box_align = get(layout, 'box.align', ['column', 'column']);
    var box_alignx = get(layout, 'box.alignx', ['left', 'left']);
    var box_aligny = get(layout, 'box.aligny', ['top', 'top']);
    var box_background = get(layout, 'box.background', 'transparent');
    var box_height = get(layout, 'box.height', ['auto', 'auto', 'auto']);
    var box_pt = get(layout, 'box.pt', [undefined, undefined]);
    var box_pr = get(layout, 'box.pr', [undefined, undefined]);
    var box_pb = get(layout, 'box.pb', [undefined, undefined]);
    var box_pl = get(layout, 'box.pl', [undefined, undefined]);
    var box_mt = get(layout, 'box.mt', [undefined, undefined]);
    var box_mr = get(layout, 'box.mr', [undefined, undefined]);
    var box_mb = get(layout, 'box.mb', [undefined, undefined]);
    var box_ml = get(layout, 'box.ml', [undefined, undefined]);
    // box border props
    var box_bt = get(layout, 'box.bt', undefined);
    var box_br = get(layout, 'box.br', undefined);
    var box_bb = get(layout, 'box.bb', undefined);
    var box_bl = get(layout, 'box.bl', undefined);
    var box_b = get(layout, 'box.b', undefined);
    var box_borderColor = get(layout, 'box.borderColor', undefined);
    var box_borderStyle = get(layout, 'box.borderStyle', undefined);
    var box_radius = get(layout, 'box.radius', undefined);
    // box (content) wrap
    var wrap_align = get(layout, 'box_wrap.align', ['column', 'column']);
    var wrap_alignx = get(layout, 'box_wrap.alignx', ['left', 'left']);
    var wrap_aligny = get(layout, 'box_wrap.aligny', ['top', 'top']);
    var wrap_height = get(layout, 'box_wrap.height', ['auto', 'auto']);
    var wrap_width = get(layout, 'box_wrap.width', ['100%', '100%']);
    var wrap_ml = get(layout, 'box_wrap.ml', [undefined, undefined]);
    var wrap_mr = get(layout, 'box_wrap.mr', [undefined, undefined]);
    var wrap_mb = get(layout, 'box_wrap.mb', [undefined, undefined]);
    var wrap_mt = get(layout, 'box_wrap.mt', [undefined, undefined]);
    var wrap_pl = get(layout, 'box_wrap.pl', undefined);
    var wrap_pr = get(layout, 'box_wrap.pr', undefined);
    var wrap_pb = get(layout, 'box_wrap.pb', undefined);
    var wrap_pt = get(layout, 'box_wrap.pt', undefined);
    // image enabled
    var image_cid = get(item, 'img.cid', false);
    var image_contentid = get(item, 'img.contentId', image_cid);
    var image_enabled = (image_contentid || fallback_image_url) && get(layout, 'image.enabled', false);
    // image wrap
    var image_align = get(layout, 'image.align', ['column', 'column']);
    var image_alignx = get(layout, 'image.alignx', ['left', 'left']);
    var image_aligny = get(layout, 'image.aligny', ['top', 'top']);
    var image_height = get(layout, 'image.height', ['auto', 'auto']);
    var image_wrap_width = get(layout, 'image.wrap_width', ['100%', '100%']);
    var image_mt = get(layout, 'image.mt', [undefined, undefined]);
    var image_mr = get(layout, 'image.mr', [undefined, undefined]);
    var image_mb = get(layout, 'image.mb', [undefined, undefined]);
    var image_ml = get(layout, 'image.ml', [undefined, undefined]);
    // number wrap
    var number_enabled = get(layout, 'number.enabled', false);
    var number_align = get(layout, 'number.align', ['column', 'column']);
    var number_alignx = get(layout, 'number.alignx', ['left', 'left']);
    var number_aligny = get(layout, 'number.aligny', ['top', 'top']);
    var number_height = get(layout, 'number.height', ['auto', 'auto']);
    var number_width = get(layout, 'number.width', ['100%', '100%']);
    var number_mt = get(layout, 'number.mt', [undefined, undefined]);
    var number_mr = get(layout, 'number.mr', [undefined, undefined]);
    var number_mb = get(layout, 'number.mb', [undefined, undefined]);
    var number_ml = get(layout, 'number.ml', [undefined, undefined]);
    // profile enabled and options
    var profile_data = get(item, 'parentBio', false);
    var profile_data_visible = get(profile_data, 'enabled', false);
    var profile_layout = get(layout, 'profile_bio', {});
    var profile_layout_height = get(profile_layout, 'height', ['40px', '40px']);
    var profile_layout_width = get(profile_layout, 'width', ['40px', '40px']);
    var profile_layout_enabled = get(layout, 'profile_bio.enabled', false);
    var isProfileEnabled = profile_data_visible && profile_layout_enabled;
    //related
    var related_layout = get(layout, 'related', {});
    var profile_content = {
        name: get(profile_data, 'name'),
        image: __assign(__assign({}, get(profile_data, 'image')), { height: profile_layout_height, width: profile_layout_width }),
        path: get(profile_data, 'path'),
        enabled: isProfileEnabled
    };
    // opacity mask prop
    var opacity_mask = get(layout, 'opacity_mask', false);
    //eventTracking
    var titleEventTracking = eventTracking === null || eventTracking === void 0 ? void 0 : eventTracking.titleEventTracking;
    var RenderNumberWrap = function () {
        if (!number_enabled) {
            return null;
        }
        return (React.createElement(WrapContent, { wrap_align: number_align, wrap_alignx: number_alignx, wrap_aligny: number_aligny, wrap_height: number_height, wrap_width: number_width, wrap_mt: number_mt, wrap_mr: number_mr, wrap_mb: number_mb, wrap_ml: number_ml },
            React.createElement(RenderNumber, { layout: layout, number: number })));
    };
    var RenderImageWrap = function () {
        if (!image_enabled) {
            return null;
        }
        return (React.createElement(WrapContent, { wrap_align: image_align, wrap_aligny: image_aligny, wrap_alignx: image_alignx, wrap_height: image_height, wrap_width: image_wrap_width, wrap_mt: image_mt, wrap_mr: image_mr, wrap_mb: image_mb, wrap_ml: image_ml },
            React.createElement(RenderImage, { amp: amp, domain: domain, editable: editable, fallback_image_url: fallback_image_url, image_circle: layout === null || layout === void 0 ? void 0 : layout.image_circle, item: item, item_path: item_path, layout: layout, opacityMask: opacity_mask })));
    };
    var RenderDateTimeWrap = function () {
        return (React.createElement(RenderDatetime, { item: item, layout: {
                date_time: __assign(__assign({}, layout === null || layout === void 0 ? void 0 : layout.date_time), { enabled: true })
            } }));
    };
    var RenderContentWrap = function () {
        return (React.createElement(WrapContent, { editable: editable, item: item, item_path: item_path, layout: layout, opacity_mask: opacity_mask, wrap_align: wrap_align, wrap_aligny: wrap_aligny, wrap_alignx: wrap_alignx, wrap_height: wrap_height, wrap_width: wrap_width, wrap_mt: wrap_mt, wrap_mr: wrap_mr, wrap_mb: wrap_mb, wrap_ml: wrap_ml, wrap_pt: wrap_pt, wrap_pr: wrap_pr, wrap_pb: wrap_pb, wrap_pl: wrap_pl },
            React.createElement(WrapSubject, null,
                React.createElement(RenderSubject, { editable: {
                        enabled: editable === null || editable === void 0 ? void 0 : editable.enabled,
                        set_modified: editable === null || editable === void 0 ? void 0 : editable.set_modified,
                        set_selected: editable === null || editable === void 0 ? void 0 : editable.set_selected,
                        state: states === null || states === void 0 ? void 0 : states.subject
                    }, color: color, item: item, layout: layout }),
                React.createElement(EditButtons, __assign({}, edit_buttons))),
            React.createElement(RenderTitle, { cid: item_cid, editable: {
                    enabled: editable === null || editable === void 0 ? void 0 : editable.enabled,
                    set_modified: editable === null || editable === void 0 ? void 0 : editable.set_modified,
                    set_selected: editable === null || editable === void 0 ? void 0 : editable.set_selected,
                    state: states === null || states === void 0 ? void 0 : states.title
                }, layout: layout, link: item_path, slot_position: slot_position, opacity_mask: opacity_mask, position: number, title: item_title, titleEventTracking: titleEventTracking }),
            React.createElement(RenderSubtitle, { item: item, layout: layout }),
            isProfileEnabled ?
                React.createElement(RenderProfile, { amp: amp, domain: domain, content: profile_content, containerProps: { width: '100%' }, subtitleContainer: function () { return React.createElement(RenderDateTimeWrap, null); } })
                :
                    React.createElement(RenderDatetime, { item: item, layout: layout }),
            React.createElement(Related, __assign({ color: color, layout: related_layout }, related))));
    };
    return (React.createElement(Box$1, { box_align: box_align, box_alignx: box_alignx, box_aligny: box_aligny, background: box_background, box_height: box_height, box_pt: box_pt, box_pr: box_pr, box_pb: box_pb, box_pl: box_pl, box_mt: box_mt, box_mr: box_mr, box_mb: box_mb, box_ml: box_ml, box_bt: box_bt, box_br: box_br, box_bb: box_bb, box_bl: box_bl, box_b: box_b, box_borderColor: box_borderColor, box_borderStyle: box_borderStyle, box_radius: box_radius },
        React.createElement(RenderNumberWrap, null),
        React.createElement(RenderImageWrap, null),
        React.createElement(RenderContentWrap, null)));
};

var parseTeaserProps = function (key, layout, layouts, slot, teasers) {
    // select default from configuration
    var default_selected = get(layouts, '[0]', false);
    // select layout from pageblocks
    var related_props = {
        enabled: false,
        items: []
    };
    var slot_len1 = slot.length;
    // const slot_position = slot_len1 > 4 ? 0 : slot_len1
    var teaser_position = slot_len1 === 0 ? 0 : key;
    var teaser_layout = layout;
    var layout_selected = get(layouts, "[".concat(teaser_position, "]"), false);
    layout_selected = layout_selected || default_selected;
    if (layouts && layout_selected) {
        // handle featured related props
        if (layout_selected.indexOf('related') != -1) {
            var related_list = JSON.parse(JSON.stringify(slot));
            related_list.shift();
            related_props = {
                enabled: true,
                items: related_list
            };
        }
        // check if teaser is hide (featured related scenario)
        if (layout_selected === 'hide') {
            return null;
        }
        teaser_layout = teasers[layout_selected];
    }
    return {
        layout: teaser_layout,
        related: related_props
    };
};
/**
 * Render_space function
 * @param component Expects a ReactElement
 * @returns a React cloneElement hook for rendering the component passed as a prop
 */
var renderSpaceSlot = function (component) {
    if (!component)
        return null;
    return cloneElement(component);
};

/**
 * Render Slot component
 */
var RenderSlot = function (_a) {
    var amp = _a.amp, carousel = _a.carousel, color = _a.color, column_items = _a.column_items, column_padding = _a.column_padding, domain = _a.domain, eventTracking = _a.eventTracking, fallback_image_url = _a.fallback_image_url, layout = _a.layout, layouts = _a.layouts, order = _a.order, more = _a.more, more_link = _a.more_link, more_title = _a.more_title, pagination = _a.pagination, preview = _a.preview, search_len = _a.search_len, site_data = _a.site_data, slot = _a.slot, slot_parser = _a.slot_parser, slot_position = _a.slot_position, space_bottom = _a.space_bottom, theme = _a.theme;
    var teasers = theme.teasers;
    var column_width = "calc((100% - (".concat(column_padding, " * 24px)) / ").concat(column_items, ")");
    var carousel_enabled = get(carousel, 'enabled', false);
    var space_bottom_mobile = get(space_bottom, '[0]', 2);
    var space_bottom_desktop = get(space_bottom, '[1]', 3);
    var slot_sorted = slot;
    if (order) {
        try {
            slot_sorted = orderBy(slot, [get(order, [0])], [get(order, [1])]);
        }
        catch (e) {
            slot_sorted = slot;
        }
    }
    var RenderPagination = function () {
        if (!pagination) {
            return null;
        }
        return (React.createElement(Pagination, __assign({}, search_len)));
    };
    var RenderMoreButton = function () {
        if (!more) {
            return null;
        }
        return (React.createElement(Block$1, { mb: 3, width: '100%' },
            React.createElement(Button$1, { color: 'neutral4', borderColor: 'neutral4', fontSize: 16, size: 6, path: more_link, variant: 'outlined', width: 'calc(100% - 32px)' }, more_title)));
    };
    var RenderSpace = function (_a) {
        var item = _a.item;
        if (item && item['input-template']) {
            if (slot_parser) {
                var space = selectComponentFromSlotList(slot_parser, [item], site_data, color);
                return renderSpaceSlot(space);
            }
        }
        return null;
    };
    var RenderTeaser = function (_a) {
        var item = _a.item, number = _a.number;
        if (item && item['input-template']) {
            return null;
        }
        var teaser_props = parseTeaserProps(number, layout, layouts, slot_sorted, teasers);
        if (!teaser_props) {
            return null;
        }
        var teaser_number = number + 1;
        return (React.createElement(PreviewProvider, { item: item, preview: preview },
            React.createElement(Teaser, { amp: amp, color: color, domain: domain, eventTracking: eventTracking, fallback_image_url: fallback_image_url, item: item, layout: teaser_props.layout, related: teaser_props.related, slot_position: slot_position, number: teaser_number })));
    };
    var RenderList = function () { return (React.createElement(React.Fragment, null,
        map(slot_sorted, function (item, key) {
            return (React.createElement(Block$1, { key: key, custom: 'align-self: flex-start;', mb: space_bottom_mobile, width: '100%', lg: { mb: space_bottom_desktop, width: column_width } },
                React.createElement(RenderTeaser, { item: item, number: key }),
                React.createElement(RenderSpace, { item: item })));
        }),
        React.createElement(RenderMoreButton, null),
        React.createElement(RenderPagination, null))); };
    if (carousel_enabled) {
        return (React.createElement(Carousel$1, __assign({}, carousel),
            React.createElement(RenderList, null)));
    }
    return React.createElement(RenderList, null);
};
var RenderSlot$1 = withTheme(RenderSlot);

var GridRelated = function (_a) {
    var enabled = _a.enabled, maxWidth = _a.maxWidth, otherProps = __rest(_a, ["enabled", "maxWidth"]);
    if (!enabled)
        return null;
    return (React.createElement(Block$1, { maxWidth: maxWidth },
        React.createElement(RenderSlot$1, __assign({}, otherProps))));
};
GridRelated.defaultProps = {
    enabled: true,
    maxWidth: '768px'
};

const Container$8 = ({
  children,
  maxWidth
}) => /*#__PURE__*/React.createElement(Block$1, {
  align: "column",
  alignx: "center",
  lg: {
    custom: `max-width: ${maxWidth};`
  },
  width: "100%"
}, children);
Container$8.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
const Content$4 = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, {
  px: 2,
  width: "calc(100% - 32px)",
  lg: {
    px: '0px',
    width: '100%'
  }
}, children);
Content$4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
const ContainerFeatured = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, {
  align: "column",
  aligny: "bottom",
  alignx: "center",
  bgColor: "neutral2",
  mb: 4,
  width: "100%"
}, children);
ContainerFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
const ContentFeatured = ({
  children,
  maxWidth
}) => /*#__PURE__*/React.createElement(Block$1, {
  alignx: "left",
  custom: `
      max-width: ${maxWidth};
      position: absolute;
    `,
  px: 3,
  pb: 2,
  width: "calc(100% - 48px)"
}, children);
ContentFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
const ContentImage = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, {
  custom: `
      opacity: 0.5;
    `,
  lg: {
    height: '520px'
  },
  height: "420px",
  width: "100%"
}, children);
ContentImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
const MaxWidth = ({
  children,
  maxWidth
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    maxWidth: maxWidth,
    width: "100%"
  }, children);
};
MaxWidth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
const Page = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, {
  lg: {
    align: 'column',
    alignx: 'center'
  },
  width: "100%"
}, children);
Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

var IconFacebook = function (props) {
    return (React.createElement(Icon, __assign({ xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M16.185 8.82h-2.85V6.95a.76.76 0 01.64-.86h2.16V3h-2.77a3.51 3.51 0 00-3.77 3.22 5 5 0 000 .55v2.06h-1.78v3.18h1.78v9h3.74v-9h2.52l.33-3.18v-.01z" })));
};

var IconTwitter = function (props) {
    return (React.createElement(Icon, __assign({ xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M20.23 6.679a7.21 7.21 0 01-2 .56 3.51 3.51 0 001.55-2 7.18 7.18 0 01-2.24.86 3.53 3.53 0 00-6 3.22 10 10 0 01-7.34-3.65 3.54 3.54 0 001.1 4.72 3.55 3.55 0 01-1.6-.45 3.54 3.54 0 002.83 3.47 3.649 3.649 0 01-1.6.06 3.54 3.54 0 003.3 2.47A7.1 7.1 0 013 17.409a10.06 10.06 0 0015.48-8.47v-.46a7.29 7.29 0 001.76-1.83l-.01.03z" })));
};

var IconWhatsApp = function (props) {
    return (React.createElement(Icon, __assign({ xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.09 4.899A9.967 9.967 0 003.412 16.922L2 22.07l5.277-1.386c1.46.8 3.099 1.22 4.763 1.22A9.966 9.966 0 0019.09 4.9zm-7.05 15.336a8.26 8.26 0 01-4.212-1.147l-.303-.193-3.139.826.817-3.056-.193-.312a8.26 8.26 0 117.03 3.882zm4.544-6.195c-.248-.128-1.469-.725-1.698-.808-.23-.082-.395-.128-.56.12-.165.248-.643.807-.79.982-.146.174-.293.183-.541.055a6.8 6.8 0 01-2-1.23 7.636 7.636 0 01-1.387-1.735c-.146-.247 0-.367.11-.504.23-.272.438-.56.625-.863a.477.477 0 000-.431c-.065-.129-.56-1.35-.771-1.836-.211-.486-.422-.404-.579-.404h-.477a.918.918 0 00-.66.312 2.753 2.753 0 00-.918 2.074 4.882 4.882 0 001.018 2.533 11.124 11.124 0 004.259 3.754c.46.202.933.376 1.413.523a3.37 3.37 0 001.57.101 2.516 2.516 0 001.68-1.184 2.01 2.01 0 00.146-1.184c-.064-.1-.23-.165-.477-.284l.037.01z" })));
};

var getMinWidthValue = function (_a) {
    var $size = _a.$size;
    if (!$size)
        return '';
    return "min-width: ".concat($size, ";");
};
var getIconHeight = function (_a) {
    var $size = _a.$size;
    if (!$size)
        return '';
    return "height: ".concat($size, ";");
};

var FacebookAmpContainer = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  amp-social-share[type=\"facebook\"] {\n    ", ";\n    ", ";\n    ", ";\n    background-image: ", ";\n    background-color: transparent;\n    &:hover {\n      opacity: 80%;\n    }\n  }\n"], ["\n  amp-social-share[type=\"facebook\"] {\n    ", ";\n    ", ";\n    ", ";\n    background-image: ", ";\n    background-color: transparent;\n    &:hover {\n      opacity: 80%;\n    }\n  }\n"])), getIconHeight, getMinWidthValue, margin, function (props) { return "url(".concat(props.facebookPath, ")"); });
var templateObject_1$a;

var FacebookShareButton = function (props) {
    var amp = props.amp, facebookPath = props.facebookPath, _a = props.facebookProps, facebookProps = _a === void 0 ? {} : _a, fbappid = props.fbappid, pageUrl = props.pageUrl, size = props.size;
    var mt = facebookProps.mt, mb = facebookProps.mb, mr = facebookProps.mr, ml = facebookProps.ml, otherProps = __rest(facebookProps, ["mt", "mb", "mr", "ml"]);
    var displayParam = '&display=popup';
    var fbappidParam = "?app_id=".concat(fbappid);
    var pageUrlParam = "&href=".concat(pageUrl);
    var shareUrl = "https://www.facebook.com/dialog/share".concat(fbappidParam).concat(displayParam).concat(pageUrlParam);
    if (amp) {
        return (React.createElement(FacebookAmpContainer, { facebookPath: facebookPath, "$size": size, mt: mt, mr: mr, mb: mb, ml: ml },
            React.createElement("amp-social-share", __assign({ type: 'facebook', width: size, height: size, "data-param-app_id": fbappid }, otherProps))));
    }
    else {
        return (React.createElement(Block$1, { height: size, mt: mt, mr: mr, mb: mb, ml: ml },
            React.createElement(Link$1, { height: size, path: shareUrl, target: '_blank' },
                React.createElement(IconFacebook, __assign({ width: size, height: size, color: 'primary1' }, otherProps)))));
    }
};

var TwitterAmpContainer = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  amp-social-share[type=\"twitter\"] {\n    ", ";\n    ", ";\n    ", ";\n    background-image: ", ";\n    background-color: transparent; \n    &:hover {\n      opacity: 80%;\n    }\n  }\n"], ["\n  amp-social-share[type=\"twitter\"] {\n    ", ";\n    ", ";\n    ", ";\n    background-image: ", ";\n    background-color: transparent; \n    &:hover {\n      opacity: 80%;\n    }\n  }\n"])), getIconHeight, getMinWidthValue, margin, function (props) { return "url(".concat(props.twitterPath, ")"); });
var templateObject_1$9;

var TwitterShareButton = function (props) {
    var amp = props.amp, size = props.size, pageUrl = props.pageUrl, twitterPath = props.twitterPath, _a = props.twitterProps, twitterProps = _a === void 0 ? {} : _a;
    var mt = twitterProps.mt, mb = twitterProps.mb, mr = twitterProps.mr, ml = twitterProps.ml, otherProps = __rest(twitterProps, ["mt", "mb", "mr", "ml"]);
    var pageUrlParam = "url=".concat(pageUrl);
    var shareUrl = "https://twitter.com/intent/tweet?".concat(pageUrlParam);
    if (amp) {
        return (React.createElement(TwitterAmpContainer, { mt: mt, mr: mr, mb: mb, ml: ml, twitterPath: twitterPath },
            React.createElement("amp-social-share", __assign({ type: 'twitter', width: size, height: size }, otherProps))));
    }
    else {
        return (React.createElement(Block$1, { height: size, mt: mt, mr: mr, mb: mb, ml: ml },
            React.createElement(Link$1, { height: size, path: shareUrl, target: '_blank' },
                React.createElement(IconTwitter, __assign({ width: size, height: size, color: 'primary1' }, otherProps)))));
    }
};

var WhatsAppAmpContainer = styled.div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  amp-social-share[type=\"whatsapp\"] {\n    ", ";\n    ", ";\n    ", ";\n    background-image: ", ";\n    background-color: transparent; \n    &:hover {\n      opacity: 80%;\n    }\n  }\n"], ["\n  amp-social-share[type=\"whatsapp\"] {\n    ", ";\n    ", ";\n    ", ";\n    background-image: ", ";\n    background-color: transparent; \n    &:hover {\n      opacity: 80%;\n    }\n  }\n"])), getIconHeight, getMinWidthValue, margin, function (props) { return "url(".concat(props.whatsappPath, ")"); });
var templateObject_1$8;

var WhatsAppShareButton = function (props) {
    var amp = props.amp, pageUrl = props.pageUrl, size = props.size, whatsappPath = props.whatsappPath, _a = props.whatsappProps, whatsappProps = _a === void 0 ? {} : _a;
    var mt = whatsappProps.mt, mb = whatsappProps.mb, mr = whatsappProps.mr, ml = whatsappProps.ml, otherProps = __rest(whatsappProps, ["mt", "mb", "mr", "ml"]);
    var textParam = "?text=".concat(pageUrl);
    var shareUrl = "https://api.whatsapp.com/send".concat(textParam);
    if (amp) {
        return (React.createElement(WhatsAppAmpContainer, { whatsappPath: whatsappPath, mt: mt, mr: mr, mb: mb, ml: ml, "$size": size },
            React.createElement("amp-social-share", __assign({ type: 'whatsapp', width: size, height: size }, otherProps))));
    }
    else {
        return (React.createElement(Block$1, { height: size, mt: mt, mr: mr, mb: mb, ml: ml },
            React.createElement(Link$1, { height: size, path: shareUrl, target: '_blank' },
                React.createElement(IconWhatsApp, __assign({ width: size, height: size, color: 'primary1' }, otherProps)))));
    }
};

var Share = function (props) {
    var amp = props.amp, pageUrl = props.pageUrl, containerProps = props.containerProps, size = props.size, fbappid = props.fbappid, facebookPath = props.facebookPath, facebookProps = props.facebookProps, twitterPath = props.twitterPath, twitterProps = props.twitterProps, whatsappPath = props.whatsappPath, whatsappProps = props.whatsappProps;
    return (React.createElement(Block$1, __assign({ align: 'row', alignx: 'right', width: '100%', md: {
            align: 'row',
            alignx: 'right',
            width: '100%'
        } }, containerProps),
        React.createElement(FacebookShareButton, { amp: amp, facebookPath: facebookPath, facebookProps: facebookProps, fbappid: fbappid, pageUrl: pageUrl, size: size }),
        React.createElement(TwitterShareButton, { amp: amp, pageUrl: pageUrl, twitterPath: twitterPath, twitterProps: twitterProps, size: size }),
        React.createElement(WhatsAppShareButton, { amp: amp, pageUrl: pageUrl, whatsappPath: whatsappPath, whatsappProps: whatsappProps, size: size })));
};
Share.defaultProps = {
    size: '24px',
    facebookPath: 'assets/facebook.svg',
    twitterPath: 'assets/twitter.svg',
    whatsappPath: 'assets/whatsapp.svg'
};

const Author = ({
  children,
  color,
  fontFamily,
  fontSize,
  lineHeight
}) => /*#__PURE__*/React.createElement(Typography$2, {
  color: color,
  element: "span",
  fontFamily: fontFamily,
  fontWeight: 700,
  fontSize: fontSize[0],
  lineHeight: lineHeight[0],
  lg: {
    fontSize: fontSize[1],
    lineHeight: lineHeight[1]
  }
}, children);
Author.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};
const Container$7 = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, {
  width: "100%",
  lg: {
    align: 'row',
    alignx: 'between'
  }
}, children);
Container$7.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
const Content$3 = ({
  children,
  mb
}) => /*#__PURE__*/React.createElement(Block$1, {
  align: "column",
  mb: mb[0],
  width: "100%",
  md: {
    align: 'row',
    aligny: 'middle',
    mb: mb[1]
  }
}, children);
Content$3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
};
const BylineContainer = ({
  children,
  mb
}) => /*#__PURE__*/React.createElement(Block$1, {
  mb: mb[0],
  lg: {
    mb: mb[1]
  },
  width: "100%"
}, children);
BylineContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
};
const BylineText = ({
  children,
  color,
  fontSize,
  fontFamily,
  lineHeight
}) => /*#__PURE__*/React.createElement(Typography$2, {
  color: color,
  element: "span",
  fontFamily: fontFamily,
  fontWeight: 400,
  fontSize: fontSize[0],
  lineHeight: lineHeight[0],
  lg: {
    fontSize: fontSize[1],
    lineHeight: lineHeight[1]
  }
}, children);
BylineText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};

const Byline = ({
  amp,
  author,
  content,
  dateline,
  datetime,
  isExpanded,
  fbappid,
  pageUrl,
  share
}) => {
  const AuthorInfo = () => {
    const hasAuthorEmail = author && author.email && author.email !== '';
    const hasAuthorSocialMedias = author && author.socialMedias && author.socialMedias !== '';

    if (!hasAuthorEmail && !hasAuthorSocialMedias) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Block$1, {
      mb: 1
    }, hasAuthorSocialMedias && /*#__PURE__*/React.createElement(BylineText, datetime, author.socialMedias), hasAuthorEmail && /*#__PURE__*/React.createElement(BylineText, datetime, author.email));
  };

  const BylineExpanded = () => {
    return /*#__PURE__*/React.createElement(Block$1, null, /*#__PURE__*/React.createElement(BylineText, datetime, "Publicado em ", datetime.time_published), /*#__PURE__*/React.createElement(BylineText, datetime, "Atualizado em ", datetime.time_modified_expanded));
  };

  const BylineReduced = () => {
    return /*#__PURE__*/React.createElement(Block$1, {
      lg: {
        align: 'row'
      }
    }, /*#__PURE__*/React.createElement(Block$1, {
      lg: {
        mr: '4px'
      }
    }, /*#__PURE__*/React.createElement(BylineText, datetime, datetime.time_published, ".")), /*#__PURE__*/React.createElement(BylineText, datetime, "Atualizado em ", datetime.time_modified));
  };

  return /*#__PURE__*/React.createElement(Container$7, null, /*#__PURE__*/React.createElement(Content$3, content, /*#__PURE__*/React.createElement(BylineContainer, dateline, /*#__PURE__*/React.createElement(Author, author, author.value), /*#__PURE__*/React.createElement(AuthorInfo, null), isExpanded ? /*#__PURE__*/React.createElement(BylineExpanded, null) : /*#__PURE__*/React.createElement(BylineReduced, null)), /*#__PURE__*/React.createElement(Share, _extends({
    amp: amp,
    fbappid: fbappid,
    pageUrl: pageUrl
  }, share))));
};

Byline.defaultProps = {
  author: {
    color: 'neutral4',
    fontFamily: 'primary',
    fontSize: ['14px', '14px'],
    lineHeight: ['16px', '16px'],
    value: 'Prensa Design System'
  },
  content: {
    mb: [3, 3]
  },
  dateline: {
    mb: [4, '0px']
  },
  datetime: {
    color: 'neutral2',
    fontFamily: 'secondary',
    fontSize: ['12px', '12px'],
    lineHeight: ['16px', '16px'],
    time_modified: '18 dias atrás',
    time_modified_expanded: '21/05/2021 às 23:20',
    time_published: '21/05/2021 às 23:20'
  },
  medias: {
    color: '#999999'
  }
};
Byline.propTypes = {
  amp: PropTypes.bool,
  author: PropTypes.object,
  datetime: PropTypes.object,
  medias: PropTypes.object,
  share: PropTypes.object,
  isExpanded: PropTypes.bool
};

const Subject$1 = ({
  bgColor,
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  mt,
  px,
  py,
  transform,
  value
}) => {
  const hasValue = value !== '';

  const RenderText = () => {
    if (!hasValue) return null;
    return /*#__PURE__*/React.createElement(Typography$2, {
      color: color,
      element: "span",
      fontFamily: fontFamily,
      fontSize: fontSize[0],
      fontWeight: fontWeight,
      lineHeight: lineHeight[0],
      lg: {
        fontSize: fontSize[1],
        lineHeight: lineHeight[1]
      },
      transform: transform
    }, value);
  };

  return /*#__PURE__*/React.createElement(Block$1, {
    bgColor: hasValue ? bgColor : undefined,
    custom: `border-radius: ${borderRadius};`,
    mb: mb[0],
    mt: mt[0],
    px: px,
    py: py,
    lg: {
      mb: mb[1],
      mt: mt[1]
    }
  }, /*#__PURE__*/React.createElement(RenderText, null));
};

Subject$1.defaultProps = {
  bgColor: 'primary1',
  borderRadius: '3px',
  color: 'white',
  fontFamily: 'secondary',
  fontSize: ['14px', '14px'],
  fontWeight: 700,
  lineHeight: ['20px', '20px'],
  transform: 'none',
  mb: [1, 2],
  mt: [2, 4],
  px: 2,
  py: '4px'
};
Subject$1.propTypes = {
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  mt: PropTypes.array,
  px: PropTypes.string,
  py: PropTypes.string,
  transform: PropTypes.string,
  value: PropTypes.string
};

const Subtitle$1 = ({
  color,
  fontFamily,
  fontSize,
  lineHeight,
  mb,
  value
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    mb: mb[0],
    lg: {
      mb: mb[1]
    },
    width: "100%"
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: "p",
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }
  }));
};

Subtitle$1.defaultProps = {
  color: 'neutral3',
  fontSize: ['18px', '18px'],
  fontFamily: 'secondary',
  lineHeight: ['150%', '150%'],
  mb: [2, 2]
};
Subtitle$1.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

var AmpImage = function (_a) {
    var otherProps = __rest(_a, []);
    return (React.createElement("amp-img", __assign({ layout: 'responsive', height: '360', width: '768' }, otherProps)));
};

var Caption = function (_a) {
    var children = _a.children, fontSize = _a.fontSize, fontFamily = _a.fontFamily, height = _a.height, lineHeight = _a.lineHeight;
    return (React.createElement(Block$1, { align: 'row', alignx: 'left', aligny: 'middle', bgColor: 'neutral9', height: height, px: 3, width: '100%', lg: {
            px: 4,
        } },
        React.createElement(Typography$2, { color: 'neutral4', element: 'p', fontFamily: fontFamily, fontSize: fontSize[0], lineHeight: lineHeight[0], lg: {
                fontSize: fontSize[1],
                lineHeight: lineHeight[1]
            } }, children)));
};
Caption.defaultProps = {
    fontSize: ['14px', '16px'],
    fontFamily: 'primary',
    lineHeight: ['100%', '100%']
};

var Container$6 = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: #EAEAEA;\n  width: ", ";\n  height: ", ";\n  margin-bottom: 24px;\n  amp-carousel {\n    width: ", ";\n    height: ", ";\n  }\n  @media (min-width: ", ") {\n    width: ", ";\n    height: ", ";\n    amp-carousel {\n      width: ", ";\n      height: ", ";\n    }\n  }\n"], ["\n  background-color: #EAEAEA;\n  width: ", ";\n  height: ", ";\n  margin-bottom: 24px;\n  amp-carousel {\n    width: ", ";\n    height: ", ";\n  }\n  @media (min-width: ", ") {\n    width: ", ";\n    height: ", ";\n    amp-carousel {\n      width: ", ";\n      height: ", ";\n    }\n  }\n"])), function (props) { return props.$width[0]; }, function (props) { return props.$height[0]; }, function (props) { return props.$width[0]; }, function (props) { return props.$height[0]; }, function (props) { return props.theme.queries.md; }, function (props) { return props.$width[1]; }, function (props) { return props.$height[1]; }, function (props) { return props.$width[1]; }, function (props) { return props.$height[1]; });
var Content$2 = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  amp-img {\n    height: 360px;\n    width: 100%;\n    img {\n      object-fit: contain;\n      object-position: center;\n    }\n  }\n  @media (min-width: ", ") {\n    amp-img {\n      height: 500px;\n      width: 768px;\n    }\n  }\n"], ["\n  amp-img {\n    height: 360px;\n    width: 100%;\n    img {\n      object-fit: contain;\n      object-position: center;\n    }\n  }\n  @media (min-width: ", ") {\n    amp-img {\n      height: 500px;\n      width: 768px;\n    }\n  }\n"])), function (props) { return props.theme.queries.md; });
var WebCarousel = styled(Carousel$2)(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  .carousel-root {\n    outline: none; \n  }\n  .carousel {\n    position: relative;\n    width: 100%; \n  }\n  .carousel * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .carousel img {\n    width: 100%;\n    display: inline-block;\n    pointer-events: none; \n  }\n  .carousel .carousel {\n    position: relative;\n  }\n  .carousel.carousel-slider {\n    position: relative;\n    margin: 0;\n    overflow: hidden;\n  }\n  .carousel .slider-wrapper {\n    overflow: hidden;\n    margin: auto;\n    width: 100%;\n    -webkit-transition: height 0.15s ease-in;\n    -moz-transition: height 0.15s ease-in;\n    -ms-transition: height 0.15s ease-in;\n    -o-transition: height 0.15s ease-in;\n    transition: height 0.15s ease-in;\n  }\n  .carousel .slider-wrapper.axis-horizontal .slider {\n    -ms-box-orient: horizontal;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -moz-flex;\n    display: -webkit-flex;\n    display: flex;\n  }\n  .carousel .slider-wrapper.axis-horizontal .slider .slide {\n    flex-direction: column;\n    flex-flow: column;\n  }\n  .carousel .slider {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    list-style: none;\n    width: 100%;\n  }\n  .carousel .slider.animated {\n    -webkit-transition: all 0.35s ease-in-out;\n    -moz-transition: all 0.35s ease-in-out;\n    -ms-transition: all 0.35s ease-in-out;\n    -o-transition: all 0.35s ease-in-out;\n    transition: all 0.35s ease-in-out;\n  }\n  .carousel .slide {\n    min-width: 100%;\n    margin: 0;\n    position: relative;\n    text-align: center;\n  }\n  .carousel .slide img {\n    width: 100%;\n    vertical-align: top;\n    border: 0;\n  }\n"], ["\n  .carousel-root {\n    outline: none; \n  }\n  .carousel {\n    position: relative;\n    width: 100%; \n  }\n  .carousel * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .carousel img {\n    width: 100%;\n    display: inline-block;\n    pointer-events: none; \n  }\n  .carousel .carousel {\n    position: relative;\n  }\n  .carousel.carousel-slider {\n    position: relative;\n    margin: 0;\n    overflow: hidden;\n  }\n  .carousel .slider-wrapper {\n    overflow: hidden;\n    margin: auto;\n    width: 100%;\n    -webkit-transition: height 0.15s ease-in;\n    -moz-transition: height 0.15s ease-in;\n    -ms-transition: height 0.15s ease-in;\n    -o-transition: height 0.15s ease-in;\n    transition: height 0.15s ease-in;\n  }\n  .carousel .slider-wrapper.axis-horizontal .slider {\n    -ms-box-orient: horizontal;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: -moz-flex;\n    display: -webkit-flex;\n    display: flex;\n  }\n  .carousel .slider-wrapper.axis-horizontal .slider .slide {\n    flex-direction: column;\n    flex-flow: column;\n  }\n  .carousel .slider {\n    margin: 0;\n    padding: 0;\n    position: relative;\n    list-style: none;\n    width: 100%;\n  }\n  .carousel .slider.animated {\n    -webkit-transition: all 0.35s ease-in-out;\n    -moz-transition: all 0.35s ease-in-out;\n    -ms-transition: all 0.35s ease-in-out;\n    -o-transition: all 0.35s ease-in-out;\n    transition: all 0.35s ease-in-out;\n  }\n  .carousel .slide {\n    min-width: 100%;\n    margin: 0;\n    position: relative;\n    text-align: center;\n  }\n  .carousel .slide img {\n    width: 100%;\n    vertical-align: top;\n    border: 0;\n  }\n"])));
var templateObject_1$7, templateObject_2$1, templateObject_3$1;

var AmpImageGallery = function (_a) {
    var captionProps = _a.captionProps, items = _a.items;
    return (React.createElement("amp-carousel", { lightbox: true, height: '548', layout: 'responsive', type: 'slides', width: '768' }, map(items, function (item, key) { return (React.createElement(Content$2, { key: key },
        React.createElement(AmpImage, { alt: item.caption, src: item.value }),
        (captionProps === null || captionProps === void 0 ? void 0 : captionProps.enabled) && React.createElement(Caption, __assign({}, captionProps), item.caption))); })));
};

var LeftArrowIcon = function (props) {
    return (React.createElement(Icon, __assign({ color: 'white', width: '18px', height: '18px', viewBox: '0 0 18 18', xmlns: 'http://www.w3.org/2000/svg' }, props),
        React.createElement("path", { d: "M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15v-1.5z" })));
};

var RightArrowIcon = function (props) {
    return (React.createElement(Icon, __assign({ color: 'white', width: '18px', height: '18px', viewBox: '0 0 18 18', xmlns: 'http://www.w3.org/2000/svg' }, props),
        React.createElement("path", { d: 'M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z' })));
};

var renderXPosition = function (_a) {
    var isNext = _a.isNext;
    if (isNext)
        return 'right: 0;';
    return 'left: 0;';
};
var renderYPosition = function () {
    // calc(50% - buttonHeight / 2 - buttonMargin)
    return 'top: calc(50% - 17px - 16px);';
};
var Button$3 = styled.button(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  background-color: rgba(0,0,0,.5);\n  border-radius: 2px;\n  border: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  margin: 16px;\n  position: absolute;\n  z-index: 10;\n  ", ";\n  ", ";\n  &:focus {\n    outline: 1px solid white;\n    border: 1px solid black;\n  }\n"], ["\n  background-color: rgba(0,0,0,.5);\n  border-radius: 2px;\n  border: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  margin: 16px;\n  position: absolute;\n  z-index: 10;\n  ", ";\n  ", ";\n  &:focus {\n    outline: 1px solid white;\n    border: 1px solid black;\n  }\n"])), renderXPosition, renderYPosition);
var templateObject_1$6;

var ControlButton = function (_a) {
    var isNext = _a.isNext, onClick = _a.onClick, otherProps = __rest(_a, ["isNext", "onClick"]);
    var renderIcon = function () {
        if (isNext)
            return React.createElement(RightArrowIcon, null);
        return React.createElement(LeftArrowIcon, null);
    };
    return (React.createElement(Button$3, __assign({ isNext: isNext, onClick: onClick }, otherProps), renderIcon()));
};

var WebImage = styled.img(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  height: 360px;\n  object-fit: contain;\n  object-position: center;\n  @media (min-width: ", ") {\n    width: 768px;\n    height: 500px;\n  }\n"], ["\n  height: 360px;\n  object-fit: contain;\n  object-position: center;\n  @media (min-width: ", ") {\n    width: 768px;\n    height: 500px;\n  }\n"])), function (props) { return props.theme.queries.md; });
var templateObject_1$5;

var WebImageGallery = function (_a) {
    var captionProps = _a.captionProps, items = _a.items;
    var renderArrowPrev = function (onClick, hasArrow) {
        return hasArrow && React.createElement(ControlButton, { onClick: onClick });
    };
    var renderArrowNext = function (onClick, hasArrow) {
        return hasArrow && React.createElement(ControlButton, { onClick: onClick, isNext: true });
    };
    return (React.createElement(WebCarousel, { showIndicators: false, showStatus: false, showThumbs: false, renderArrowPrev: renderArrowPrev, renderArrowNext: renderArrowNext }, map(items, function (item, key) {
        return React.createElement(Content$2, { key: key },
            React.createElement(WebImage, { src: item.value }),
            (captionProps === null || captionProps === void 0 ? void 0 : captionProps.enabled) && React.createElement(Caption, __assign({}, captionProps), item.caption));
    })));
};

var captionDefaultProps = {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    height: '48px',
    lineHeight: ['130%', '130%']
};
var ImageGallery = function (_a) {
    var amp = _a.amp, captionProps = _a.captionProps, items = _a.items, height = _a.height, width = _a.width;
    var RenderGallery = function () {
        if (amp) {
            return (React.createElement(AmpImageGallery, { captionProps: __assign(__assign({}, captionDefaultProps), captionProps), items: items }));
        }
        else {
            return (React.createElement(WebImageGallery, { captionProps: __assign(__assign({}, captionDefaultProps), captionProps), items: items }));
        }
    };
    return (React.createElement(Container$6, { "$height": height, "$width": width },
        React.createElement(RenderGallery, null)));
};
ImageGallery.defaultProps = {
    height: ['408px', '548px'],
    width: ['100%', '768px']
};

const Citation = ({
  color,
  customCite,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  pl,
  value,
  maxWidth,
  width
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    maxWidth: maxWidth,
    custom: customCite,
    width: width,
    align: "row",
    mb: mb[0],
    lg: {
      mb: mb[1]
    }
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: "cite",
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    fontWeight: fontWeight,
    lineHeight: lineHeight[0],
    pl: pl[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1],
      pl: pl[1]
    }
  }));
};

Citation.defaultProps = {
  color: 'primary2',
  fontFamily: 'secondary',
  fontWeight: 700,
  fontSize: ['32px', '32px'],
  lineHeight: ['140%', '140%'],
  mb: [3, 3],
  pl: ['0px', '0px'],
  value: '“Uma das nossas prioridades no mandato é fortalecer o Sistema de Saúde. Oferecer uma infraestrutura digna para a população é um dever mínimo do estado.”',
  width: '100%'
};
Citation.propTypes = {
  customCite: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  pl: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  value: PropTypes.string,
  width: PropTypes.string
};

function mobile_height(_a) {
    var $height = _a.$height;
    var value = $height[0];
    if (!value)
        return '';
    return "height: ".concat(value);
}
function mobile_width(_a) {
    var $width = _a.$width;
    var value = $width[0];
    if (!value)
        return '';
    return "width: ".concat(value);
}
function desktop_height(_a) {
    var $height = _a.$height;
    var value = $height[1];
    if (!value)
        return '';
    return "height: ".concat(value);
}
function desktop_width(_a) {
    var $width = _a.$width;
    var value = $width[1];
    if (!value)
        return '';
    return "width: ".concat(value);
}
/**
 * Prensa | Embeds Container
 * @description A container for web/amp embeds
 * Do NOT use display: flex; in this container. It must render a display: block; property in order to render AMP content
 */
var Container$5 = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n\n  .Prensa-YouTubeEmbed-web {\n    ", ";\n    ", ";\n  }\n\n  @media (min-width: ", ") {\n    ", ";\n    ", ";\n    \n    .Prensa-YouTubeEmbed-web {\n      ", ";\n      ", ";\n    }\n  }\n"], ["\n  ", ";\n  ", ";\n  ", ";\n\n  .Prensa-YouTubeEmbed-web {\n    ", ";\n    ", ";\n  }\n\n  @media (min-width: ", ") {\n    ", ";\n    ", ";\n    \n    .Prensa-YouTubeEmbed-web {\n      ", ";\n      ", ";\n    }\n  }\n"])), margin, mobile_height, mobile_width, mobile_height, mobile_width, function (props) { return props.theme.queries.md; }, desktop_height, desktop_width, desktop_height, desktop_width);
var templateObject_1$4;

var FacebookEmbed = function (_a) {
    var amp = _a.amp, ampElementProps = _a.ampElementProps, elementProps = _a.elementProps, fbappid = _a.fbappid, height = _a.height, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt, url = _a.url, width = _a.width;
    if (!url) {
        console.error('Prensa | FacebookEmbed > missing url');
        return null;
    }
    var Amp = function () { return (React.createElement("amp-facebook", __assign({ "data-href": url, layout: 'responsive', height: '472px', width: width[1] }, ampElementProps))); };
    var Web = function () { return (React.createElement(FacebookProvider, { appId: fbappid },
        React.createElement(EmbeddedPost, __assign({ href: url, width: width[1] }, elementProps)))); };
    return (React.createElement(Container$5, { "$height": height, "$width": width, mt: mt, mr: mr, mb: mb, ml: ml }, amp ? React.createElement(Amp, null) : React.createElement(Web, null)));
};
FacebookEmbed.defaultProps = {
    height: ['max-content', 'max-content'],
    mb: 3,
    width: ['100%', '552px']
};

/* eslint-disable */
var getInstagramShortcode = function (url) {
    if (!url)
        return null;
    var regExp = '^https?:\/\/(?:www\.)?instagram\.com\/[^\/]+(?:\/[^\/]+)?\/([^\/]{11})\/.*$';
    var match = url.match(regExp);
    return match[1];
};

var InstagramEmbed = function (_a) {
    var amp = _a.amp, ampElementProps = _a.ampElementProps, elementProps = _a.elementProps, clientToken = _a.clientToken, fbappid = _a.fbappid, height = _a.height, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt, url = _a.url, width = _a.width;
    if (!url) {
        console.error('Prensa | InstagramEmbed > missing url');
        return null;
    }
    var dataShortcode = getInstagramShortcode(url);
    var accessToken = "".concat(fbappid, "|").concat(clientToken);
    var Amp = function () { return (React.createElement("amp-instagram", __assign({ "data-captioned": true, "data-shortcode": dataShortcode, layout: 'responsive', height: width[1], width: width[1] }, ampElementProps))); };
    var Web = function () { return (React.createElement(Instagram, __assign({ url: dataShortcode, clientAccessToken: accessToken }, elementProps))); };
    return (React.createElement(Container$5, { "$height": height, "$width": width, mt: mt, mr: mr, mb: mb, ml: ml }, amp ? React.createElement(Amp, null) : React.createElement(Web, null)));
};
InstagramEmbed.defaultProps = {
    height: ['max-content', 'max-content'],
    mb: 3,
    width: ['100%', '552px']
};

/**
 * Prensa | getTweetId
 * @param url Expects an https tweet url
 * @example
 * https://twitter.com/${user}/status/${tweetId}
 * https://twitter.com/${user}/status/${tweetId}?ref_src=${...}
 * @returns tweetId
 */
function getTweetId(url) {
    if (!url)
        return null;
    var split_a = url.split('/');
    var split_b = split_a[split_a.length - 1].split('?');
    return split_b[0];
}

var TwitterEmbed = function (_a) {
    var amp = _a.amp, ampElementProps = _a.ampElementProps, elementProps = _a.elementProps, height = _a.height, mb = _a.mb, ml = _a.ml, mr = _a.mr, mt = _a.mt, url = _a.url, width = _a.width;
    if (!url) {
        console.error('Prensa | TwitterEmbed > missing url');
        return null;
    }
    var tweetId = getTweetId(url);
    var Amp = function () { return (React.createElement("amp-twitter", __assign({ "data-tweetid": tweetId, layout: 'responsive', height: '472px', width: width[1] }, ampElementProps))); };
    var Web = function () { return (React.createElement(Tweet, __assign({ tweetId: tweetId, options: { align: 'center' } }, elementProps))); };
    return (React.createElement(Container$5, { "$height": height, "$width": width, mt: mt, mr: mr, mb: mb, ml: ml }, amp ? React.createElement(Amp, null) : React.createElement(Web, null)));
};
TwitterEmbed.defaultProps = {
    height: ['max-content', 'max-content'],
    mb: 3,
    width: ['100%', '552px']
};

var getYoutubeVideoId = function (url) {
    if (!url)
        return null;
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
};

var YouTubeEmbed = function (_a) {
    var amp = _a.amp, ampElementProps = _a.ampElementProps, elementProps = _a.elementProps, height = _a.height, mt = _a.mt, mr = _a.mr, mb = _a.mb, ml = _a.ml, url = _a.url, width = _a.width;
    if (!url) {
        console.error('Prensa | YouTubeEmbed > missing url');
        return null;
    }
    var videoId = getYoutubeVideoId(url);
    var Amp = function () { return (React.createElement("amp-youtube", __assign({ "data-videoid": videoId, layout: 'responsive', height: height[1], width: width[1] }, ampElementProps))); };
    var Web = function () { return (React.createElement(WebYouTube, __assign({ className: 'Prensa-YouTubeEmbed-web', videoId: videoId }, elementProps))); };
    return (React.createElement(Container$5, { "$height": height, "$width": width, mt: mt, mr: mr, mb: mb, ml: ml }, amp ? React.createElement(Amp, null) : React.createElement(Web, null)));
};
YouTubeEmbed.defaultProps = {
    height: ['384px', '384px'],
    mb: 3,
    width: ['100%', '768px']
};

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FacebookEmbed: FacebookEmbed,
  InstagramEmbed: InstagramEmbed,
  TwitterEmbed: TwitterEmbed,
  YouTubeEmbed: YouTubeEmbed
});

const Heading2 = ({
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb,
  value
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    maxWidth: maxWidth,
    width: "100%"
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: element,
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    fontWeight: fontWeight,
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1],
      mb: mb[1]
    },
    mb: mb[0],
    mt: 3
  }));
};

Heading2.defaultProps = {
  color: 'neutral2',
  element: 'h2',
  fontFamily: 'primary',
  fontSize: ['32px', '32px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: [3, 3],
  value: 'Heading 2'
};
Heading2.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  value: PropTypes.string
};

const Heading3 = ({
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb,
  value
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    maxWidth: maxWidth,
    width: "100%"
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: element,
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    fontWeight: fontWeight,
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1],
      mb: mb[1]
    },
    mb: mb[0],
    mt: 3
  }));
};

Heading3.defaultProps = {
  color: 'neutral2',
  element: 'h3',
  fontFamily: 'primary',
  fontSize: ['24px', '24px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: [2, 2],
  value: 'Heading 3'
};
Heading3.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  value: PropTypes.string
};

const Heading4 = ({
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb,
  value
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    maxWidth: maxWidth,
    width: "100%"
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: element,
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    fontWeight: fontWeight,
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1],
      mb: mb[1]
    },
    mb: mb[0],
    mt: 3
  }));
};

Heading4.defaultProps = {
  color: 'neutral2',
  element: 'h4',
  fontFamily: 'primary',
  fontSize: ['18px', '18px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: [2, 2],
  value: 'Heading 4'
};
Heading4.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  value: PropTypes.string
};

var ListItem = styled.li(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  ", ";\n  ::marker {\n    ", ";\n    font-family: ", ";\n    font-size: ", ";\n  }\n"], ["\n  ", ";\n  ::marker {\n    ", ";\n    font-family: ", ";\n    font-size: ", ";\n  }\n"])), margin, getColor, parseFontFamily$2, function (props) { return props.$fontSize; });
var templateObject_1$3;

var OrderedList = styled.ol(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  max-width: calc(", " - 40px);\n  width: calc(100% - 40px);\n"], ["\n  max-width: calc(", " - 40px);\n  width: calc(100% - 40px);\n"])), function (props) { return props.maxWidth; });
var templateObject_1$2;

var UnorderedList = styled.ul(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  max-width: calc(", " - 40px);\n  width: calc(100% - 40px);\n"], ["\n  max-width: calc(", " - 40px);\n  width: calc(100% - 40px);\n"])), function (props) { return props.maxWidth; });
var templateObject_1$1;

var ListComponent = function (_a) {
    var items = _a.items, itemsSpace = _a.itemsSpace, maxWidth = _a.maxWidth, ordered = _a.ordered, textProps = _a.textProps;
    if ((items === null || items === void 0 ? void 0 : items.length) === 0) {
        return null;
    }
    var renderItems = function () {
        return items === null || items === void 0 ? void 0 : items.map(function (entry, key) { return (React.createElement(ListItem, __assign({ "$fontFamily": 'primary', "$fontSize": '20px', key: key, mb: itemsSpace, value: ordered ? key + 1 : undefined }, textProps),
            React.createElement(Typography$2, __assign({ color: 'neutral2', fontFamily: 'primary', fontSize: '20px', lineHeight: '160%', element: 'span' }, textProps), entry))); });
    };
    if (ordered) {
        return (React.createElement(OrderedList, { maxWidth: maxWidth }, renderItems()));
    }
    else {
        return (React.createElement(UnorderedList, { maxWidth: maxWidth }, renderItems()));
    }
};
ListComponent.defaultProps = {
    itemsSpace: 1
};

const Paragraph = ({
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb,
  value
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    maxWidth: maxWidth,
    width: "100%"
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: element,
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    fontWeight: fontWeight,
    lineHeight: lineHeight[0],
    mb: mb[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1],
      mb: mb[1]
    }
  }));
};

Paragraph.defaultProps = {
  color: 'neutral2',
  element: 'p',
  fontFamily: 'primary',
  fontWeight: 400,
  fontSize: ['18px', '30px'],
  lineHeight: ['22px', '36px'],
  mb: [3, 3],
  value: 'Entre os familiares e amigos próximos, no sepultamento, estava o companehiro de infância, Mitiro Nagao, que destacou a boa vontade de Horii. "Só posso dizer que ele foi uma pessoa fantástica que contribuiu muito para a cidade. Era um grande empreendedor que só pensava em melhorar esse município. Era uma pessoa que enxergava para frente. ele gostava muito das pessoas, apesar de ser reservado. Se encontrasse uma pessoa que precisasse, ele realmente ajudava".'
};
Paragraph.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array,
  value: PropTypes.string
};

const SectionTitle = ({
  children,
  color,
  element,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  maxWidth,
  mb
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    maxWidth: maxWidth,
    width: "100%"
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    element: element,
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    fontWeight: fontWeight,
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1],
      mb: mb[1]
    },
    mb: mb[0],
    mt: 3
  }, children));
};

SectionTitle.defaultProps = {
  color: 'neutral2',
  element: 'h2',
  fontFamily: 'primary',
  fontSize: ['20px', '20px'],
  fontWeight: 700,
  lineHeight: ['120%', '120%'],
  mb: [2, 2]
};
SectionTitle.propTypes = {
  color: PropTypes.string,
  element: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  maxWidth: PropTypes.string,
  mb: PropTypes.array
};

var BottomShare = function (_a) {
    var maxWidth = _a.maxWidth, otherProps = __rest(_a, ["maxWidth"]);
    return (React.createElement(React.Fragment, null,
        React.createElement(SectionTitle, { maxWidth: maxWidth }, "Compartilhar"),
        React.createElement(Share, __assign({ containerProps: {
                alignx: 'left',
                maxWidth: maxWidth,
                mb: 3,
                md: { alignx: 'left' }
            } }, otherProps))));
};

const AnchorTag = styled.a.withConfig({
  displayName: "Anchor__AnchorTag",
  componentId: "sc-pxux5v-0"
})(["cursor:pointer;height:inherit;padding-bottom:8px;padding-left:16px;padding-right:16px;padding-top:8px;text-decoration:none;width:calc(100% - 32px);&:hover{opacity:0.8;}"]);

const Container$4 = ({
  children,
  maxWidth
}) => /*#__PURE__*/React.createElement(Block$1, {
  align: "column",
  mb: 5,
  maxWidth: maxWidth,
  width: "100%",
  lg: {
    align: 'row',
    custom: `
        flex-wrap: wrap;
      `
  }
}, children);
Container$4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
const Tag = ({
  b,
  children,
  color,
  radius
}) => /*#__PURE__*/React.createElement(Block$1, {
  align: "column",
  b: b,
  borderColor: color,
  mr: 2,
  mb: 2,
  radius: radius
}, children);
Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  color: PropTypes.string
};
Tag.defaultProps = {
  b: '1px',
  borderColor: 'neutral9',
  radius: 'alternative'
};

const Tags = ({
  b,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  items,
  maxWidth,
  transform,
  radius
}) => {
  return /*#__PURE__*/React.createElement(Container$4, {
    maxWidth: maxWidth
  }, map(items, (item, key) => {
    return /*#__PURE__*/React.createElement(Tag, {
      b: b,
      color: color,
      key: key,
      radius: radius
    }, /*#__PURE__*/React.createElement(AnchorTag, {
      href: `/?term=${item}`
    }, /*#__PURE__*/React.createElement(Typography$2, {
      color: color,
      element: "span",
      fontFamily: fontFamily,
      fontSize: fontSize[0],
      fontWeight: fontWeight,
      transform: transform,
      custom: "white-space: nowrap;"
    }, item)));
  }));
};

Tags.defaultProps = {
  color: '#999999',
  fontFamily: 'secondary',
  fontSize: ['14px'],
  fontWeight: 700,
  items: []
};
Tags.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  items: PropTypes.array,
  maxWidth: PropTypes.string,
  transform: PropTypes.string
};

const Box = ({
  children,
  mb
}) => /*#__PURE__*/React.createElement(Block$1, {
  custom: `
      img {
        width: 100%;
      }
    `,
  mb: mb[0],
  lg: {
    mb: mb[1]
  },
  width: "100%"
}, children);
Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
};
const BoxFeatured = ({
  children,
  mb,
  value
}) => /*#__PURE__*/React.createElement(Block$1, {
  custom: `
      background-image: url('${value}');
      background-repeat: no-repeat;
      background-size: cover;
    `,
  mb: mb[0],
  lg: {
    mb: mb[1]
  },
  height: "100%",
  width: "100%"
}, children);
BoxFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array,
  value: PropTypes.string
};
const SubtitleBox = ({
  children,
  px,
  py,
  widthBox
}) => /*#__PURE__*/React.createElement(Block$1, {
  bgColor: "neutral9",
  px: px[0],
  py: py[0],
  width: widthBox[0],
  lg: {
    px: px[1],
    py: py[1],
    width: widthBox[1]
  }
}, children);
SubtitleBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  px: PropTypes.array,
  py: PropTypes.array,
  widthBox: PropTypes.array
};
const Subtitle = ({
  children,
  fontFamily,
  fontSize,
  lineHeight
}) => /*#__PURE__*/React.createElement(Typography$2, {
  color: "neutral4",
  dangerouslySetInnerHTML: children,
  element: "p",
  fontFamily: fontFamily,
  fontSize: fontSize[0],
  lineHeight: lineHeight[0],
  lg: {
    fontSize: fontSize[1],
    lineHeight: lineHeight[1]
  }
});
Subtitle.propTypes = {
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};

const Container$3 = ({
  children,
  featured,
  mb,
  value
}) => {
  if (featured) return /*#__PURE__*/React.createElement(BoxFeatured, {
    mb: mb,
    value: value
  });
  return /*#__PURE__*/React.createElement(Box, {
    mb: mb
  }, children);
};

const TopImage = ({
  amp,
  caption,
  featured,
  height,
  image,
  mb,
  px,
  py,
  value,
  width,
  widthBox,
  type
}) => {
  if (!image) return null;
  const caption_value = get(caption, 'value', '');
  const fontFamily = get(caption, 'fontFamily', '');
  const fontSize = get(caption, 'fontSize', '');
  const lineHeight = get(caption, 'lineHeight', '');

  const Video = () => /*#__PURE__*/React.createElement(YouTubeEmbed, {
    amp: amp,
    url: value,
    height: height,
    width: width,
    mb: "0px"
  });

  const Image = () => {
    if (amp) {
      return /*#__PURE__*/React.createElement("amp-img", {
        alt: caption_value,
        src: value,
        layout: "responsive",
        style: {
          display: 'inline-flex',
          width: '100%'
        },
        height: height,
        width: width
      });
    }

    return /*#__PURE__*/React.createElement("img", {
      alt: caption_value,
      src: value
    });
  };

  const RenderMedia = () => {
    switch (type) {
      case 'video':
        return /*#__PURE__*/React.createElement(Video, null);

      default:
        return /*#__PURE__*/React.createElement(Image, null);
    }
  };

  return /*#__PURE__*/React.createElement(Container$3, {
    featured: featured,
    mb: mb,
    value: value
  }, /*#__PURE__*/React.createElement(RenderMedia, null), caption && caption.show && /*#__PURE__*/React.createElement(SubtitleBox, {
    px: px,
    py: py,
    widthBox: widthBox
  }, /*#__PURE__*/React.createElement(Subtitle, {
    fontFamily: fontFamily,
    fontSize: fontSize,
    lineHeight: lineHeight
  }, caption_value)));
};

Container$3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  featured: PropTypes.bool,
  mb: PropTypes.array,
  value: PropTypes.string
};
TopImage.defaultProps = {
  featured: false,
  image: true,
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%'],
    show: true,
    value: 'Legenda da Imagem'
  },
  height: '640px',
  mb: [2, 2],
  px: [3, 4],
  py: [3, 2],
  value: 'https://xprog.com.br/static/images/img-destak.jpg',
  width: '1280px',
  widthBox: ['calc(100% - 48px)', 'calc(100% - 64px)']
};
TopImage.propTypes = {
  amp: PropTypes.bool,
  featured: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  image: PropTypes.bool,
  caption: PropTypes.object,
  mb: PropTypes.array,
  px: PropTypes.array,
  py: PropTypes.array,
  value: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  widthBox: PropTypes.array,
  type: PropTypes.oneOf(['image', 'video'])
};

const Body = ({
  align,
  alignx,
  bodyWidth,
  children,
  hyperlinkColor,
  lg
}) => {
  const custom = `a {color: ${hyperlinkColor};}`;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: align,
    alignx: alignx,
    aligny: "top",
    custom: custom,
    maxWidth: bodyWidth,
    px: 2,
    width: "calc(100% - 32px)",
    lg: lg || {
      align,
      px: '0px',
      width: '100%'
    }
  }, children);
};
Body.defaultProps = {
  align: 'column',
  alignx: 'center'
};
Body.propTypes = {
  align: PropTypes.string,
  bodyWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  hyperlinkColor: PropTypes.string
};
const TextBodyColumn = ({
  children,
  width
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "column",
    aligny: "top",
    width: width
  }, children);
};
TextBodyColumn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  width: PropTypes.string
};
({
  children: PropTypes.string,
  color: PropTypes.string
});

const parse_content = content => {
  let bodyItems = [];
  let tagItems = [];

  const renderChildValue = child => child && child.length > 0 && child[0].text;

  const renderListItems = child => {
    const list_items = filter(child, {
      tag: 'li'
    });
    const ul_content = [];
    map(list_items, it => {
      map(it.child, ({
        text
      }) => {
        ul_content.push(text.replaceAll('&nbsp;', ' '));
      });
    });
    return ul_content;
  };

  const switchNode = obj => {
    const {
      attr,
      child,
      node,
      tag,
      text
    } = obj;

    if (tag === 'p' || tag === 'br') {
      tagItems.push({
        'type': 'p',
        'value': ''
      });
    }

    if (tag === 'strong') {
      tagItems.push({
        'type': 'text',
        'value': `<strong>${renderChildValue(child)}</strong>`
      });
      return true;
    }

    if (tag === 'u') {
      tagItems.push({
        'type': 'text',
        'value': `<u>${renderChildValue(child)}</u>`
      });
      return true;
    }

    if (tag === 'em') {
      tagItems.push({
        'type': 'text',
        'value': `<em>${renderChildValue(child)}</em>`
      });
      return true;
    }

    if (tag === 'ul') {
      tagItems.push({
        'type': 'ul',
        'value': renderListItems(child)
      });
      return true;
    }

    if (tag === 'ol') {
      tagItems.push({
        'type': 'ol',
        'value': renderListItems(child)
      });
      return true;
    }

    if (tag === 'cite') {
      tagItems.push({
        'type': 'cite',
        'value': `${renderChildValue(child)}`
      });
      return true;
    }

    if (tag === 'h2') {
      tagItems.push({
        'type': 'h2',
        'value': `${renderChildValue(child)}`
      });
      return true;
    }

    if (tag === 'h3') {
      tagItems.push({
        'type': 'h3',
        'value': `${renderChildValue(child)}`
      });
      return true;
    }

    if (tag === 'h4') {
      tagItems.push({
        'type': 'h4',
        'value': `${renderChildValue(child)}`
      });
      return true;
    }

    if (node === 'text') {
      if (text && text !== '') {
        tagItems.push({
          'type': 'text',
          'value': text
        });
      }
    } // render image


    if (tag === 'a' && attr.class && attr.class === 'p-smartembed') {
      const childImage = find(child, {
        tag: 'img'
      });

      if (childImage) {
        let subtitle = childImage && childImage.attr && childImage.attr['alt'] ? childImage.attr['alt'].join(' ') : '';
        subtitle = subtitle && subtitle !== undefined && subtitle !== 'undefined' ? subtitle : '';
        const propsImage = {
          'contentId': attr['data-onecms-id'].replace('policy:', ''),
          'caption': subtitle,
          'byline': ''
        };
        tagItems.push({
          type: 'Image',
          value: propsImage
        });
        return true;
      } // embeds

    } else if (tag === 'img' && attr && attr.src && attr.src.startsWith('/legacy/image')) {
      // let source = attr.src.startsWith('/legacy/image')
      // if(source) {
      tagItems.push({
        type: 'Image',
        value: {
          'image-legacy': attr.src
        }
      });
      return true; // }
    } else if (attr && attr['data-oembed-url']) {
      if (attr['data-oembed-url'].indexOf('youtu.be') > -1) {
        tagItems.push({
          type: 'Youtube',
          value: attr['data-oembed-url']
        });
        return true;
      }
    } else if (tag === 'a') {
      if (!attr.href) {
        if (attr['name'].indexOf('facebook.com') > -1) {
          tagItems.push({
            type: 'Facebook',
            value: attr['name']
          });
          return true;
        } else if (attr['name'].indexOf('instagram.com') > -1) {
          tagItems.push({
            type: 'Instagram',
            value: attr['name']
          });
          return true;
        } else if (attr['name'].indexOf('twitter.com') > -1) {
          tagItems.push({
            type: 'Tweet',
            value: attr['name']
          });
          return true;
        } else if (attr['name'].indexOf('youtube.com') > -1 || attr['name'].indexOf('youtu.be') > -1) {
          tagItems.push({
            type: 'Youtube',
            value: attr['name']
          });
          return true;
        }
      } else {
        let child_string = renderChildValue(child) || attr.href;
        tagItems.push({
          'type': 'text',
          'value': `<a href="${attr.href}" target="_blank" rel="noreferrer">${child_string}</a>`
        });
        return true;
      }
    }

    let child_len = child && child.length;

    if (child && child_len > 0) {
      map(child, item => {
        switchNode(item);
      });
    }
  }; // convert html


  let parsed = content.replace(/(\r\n|\n|\r)/gm, '');
  parsed = html2json(parsed);
  let elements = filter(parsed.child, {
    node: 'element'
  });
  elements = elements.size === 0 || {
    type: 'p',
    value: parsed
  }; // parse elements

  map(elements, item => switchNode(item)); // render

  let p_text = ''; // discard text empty

  const discard_text = [' ', '&nbsp;'];

  const add_text = value => {
    let invalid_text = discard_text.includes(value);
    let is_valid = value && value !== '' && value !== ' ' && !invalid_text;

    if (is_valid) {
      bodyItems.push({
        type: 'Paragraph',
        value
      });
      p_text = '';
    }

    return is_valid;
  };

  map(tagItems, ({
    type,
    value
  }) => {
    if (type !== 'text') {
      let added = add_text(p_text);

      if (added) {
        p_text = '';
      }
    }

    switch (type) {
      case 'ul':
        bodyItems.push({
          type: 'UnorderedList',
          value
        });
        break;

      case 'ol':
        bodyItems.push({
          type: 'OrderedList',
          value
        });
        break;

      case 'cite':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Cite',
            value
          });
        }

        break;

      case 'h2':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Heading2',
            value
          });
        }

        break;

      case 'h3':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Heading3',
            value
          });
        }

        break;

      case 'h4':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Heading4',
            value
          });
        }

        break;

      case 'p':
        // insert if exist and clean
        break;

      case 'text':
        p_text = `${p_text}${value}`;
        break;

      default:
        bodyItems.push({
          type,
          value
        });
        break;
    }
  });
  let added = add_text(p_text);

  if (added) {
    p_text = '';
  }

  return bodyItems;
};

const TextBody = props => {
  const {
    adsBody,
    adsSide,
    amp,
    bodyWidth,
    bottomShare,
    citation,
    content,
    fbappid,
    gallery,
    hasBottomShare,
    hasColumnRight,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    orderedList,
    pageUrl,
    paragraph,
    related_content_intervention,
    tags_section_title,
    tags,
    unorderedList
  } = props;
  if (!content) return null;
  const adsContent = get(adsBody, 'content', []);
  const adsRender = get(adsBody, 'render', null);
  let readmore = [];
  let intervention_amount = get(adsBody, 'interventionAmount', 3);
  let intervention_readmore_inserted = false;
  let intervention_status = false;
  let paragraph_length = 0;
  let ad_counter = 0; // let intervention_readmore = false;

  const body_items = parse_content(content);

  const render_image = value => {
    if (!value) return null;
    const image_items = get(images, 'items', []);
    let image_data = undefined;
    map(image_items, item => {
      const item_value = get(item, 'contentId', '');

      if (item_value.indexOf(value.contentId) > -1) {
        image_data = item;
      }
    });
    if (!image_data) return null;
    return /*#__PURE__*/React.createElement(Block$1, {
      mb: 3,
      maxWidth: bodyWidth,
      width: "100%"
    }, /*#__PURE__*/React.createElement(TopImage, {
      amp: amp,
      caption: {
        fontFamily: 'secondary',
        fontSize: ['14px', '14px'],
        lineHeight: ['130%', '130%'],
        show: true,
        value: image_data.caption
      },
      featured: false,
      image: true,
      value: image_data.value
    }));
  };

  const render_paragraph = value => {
    // intervention_readmore = false;
    intervention_status = false;

    if (value.length > 50) {
      paragraph_length++;

      if (paragraph_length === intervention_amount) {
        paragraph_length = 0;

        if (!intervention_readmore_inserted && readmore.length > 0) {
          // intervention_readmore = true;
          intervention_readmore_inserted = true;
        } else {
          ad_counter++;

          if (ad_counter > adsContent.length) {
            intervention_status = false;
          } else {
            intervention_status = true;
          }
        }
      }
    } // {intervention_readmore && <ArticleReadMore config={config} item={readmore} cache={readmorecache} />}


    const ad_data_key = ad_counter - 1;
    const ad_content = adsContent[ad_data_key];
    const has_ad_intervention = get(adsBody, 'enabled', false);
    const has_relatedc_intervention = get(related_content_intervention, 'enabled', false);
    const relatedc_component = get(related_content_intervention, 'component', null);

    const render_intervention = () => {
      if (has_relatedc_intervention && relatedc_component && ad_counter === 0) {
        return /*#__PURE__*/React.cloneElement(relatedc_component);
      }

      if (has_ad_intervention && intervention_status) {
        return /*#__PURE__*/React.cloneElement(adsRender, {
          amp: amp,
          content: ad_content
        });
      }
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Paragraph, _extends({}, paragraph, {
      maxWidth: bodyWidth,
      value: value
    })), render_intervention());
  };

  const get_hyperlink_color = () => {
    let color = 'primary1';
    if (hyperlink) color = hyperlink;
    return get(props, `theme.colors.${color}`);
  };

  const switch_component = (type, value) => {
    switch (type) {
      case 'Cite':
        return /*#__PURE__*/React.createElement(Citation, _extends({
          maxWidth: bodyWidth,
          value: value
        }, citation));

      case 'Facebook':
        return /*#__PURE__*/React.createElement(FacebookEmbed, {
          amp: amp,
          fbappid: fbappid,
          url: value
        });

      case 'Instagram':
        return /*#__PURE__*/React.createElement(InstagramEmbed, {
          amp: amp,
          url: value
        });

      case 'Tweet':
        return /*#__PURE__*/React.createElement(TwitterEmbed, {
          amp: amp,
          url: value
        });

      case 'Youtube':
        return /*#__PURE__*/React.createElement(YouTubeEmbed, {
          amp: amp,
          ampProps: {
            height: '384px',
            width: '768px'
          },
          height: amp ? ['max-content', '384px'] : ['384px', '384px'],
          width: bodyWidth ? ['100%', bodyWidth] : ['100%', '100%'],
          url: value
        });

      case 'Image':
        return render_image(value);

      case 'Heading2':
        return /*#__PURE__*/React.createElement(Heading2, _extends({}, heading2, {
          maxWidth: bodyWidth,
          value: value
        }));

      case 'Heading3':
        return /*#__PURE__*/React.createElement(Heading3, _extends({}, heading3, {
          maxWidth: bodyWidth,
          value: value
        }));

      case 'Heading4':
        return /*#__PURE__*/React.createElement(Heading4, _extends({}, heading4, {
          maxWidth: bodyWidth,
          value: value
        }));

      case 'Paragraph':
        return render_paragraph(value);

      case 'OrderedList':
        return /*#__PURE__*/React.createElement(ListComponent, {
          textProps: orderedList,
          items: value,
          maxWidth: bodyWidth,
          ordered: true
        });

      case 'UnorderedList':
        return /*#__PURE__*/React.createElement(ListComponent, {
          textProps: unorderedList,
          items: value,
          maxWidth: bodyWidth
        });

      default:
        return /*#__PURE__*/React.createElement("pre", null, "erro no parse do conte\xFAdo");
    }
  };

  const RenderMainColumn = () => {
    const isGalleryVisible = gallery && gallery.items && gallery.items.length > 0;
    const isTagSectionVisible = tags_section_title && tags_section_title.enabled;
    return /*#__PURE__*/React.createElement(React.Fragment, null, map(body_items, ({
      type,
      value
    }, key) => {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: key
      }, switch_component(type, value));
    }), isGalleryVisible && /*#__PURE__*/React.createElement(ImageGallery, _extends({}, gallery, {
      width: bodyWidth ? ['100%', bodyWidth] : ['100%', '100%'],
      amp: amp
    })), isTagSectionVisible && /*#__PURE__*/React.createElement(SectionTitle, _extends({}, tags_section_title, {
      maxWidth: bodyWidth
    }), "Assuntos"), /*#__PURE__*/React.createElement(Tags, _extends({}, tags, {
      maxWidth: bodyWidth
    })), hasBottomShare && /*#__PURE__*/React.createElement(BottomShare, _extends({
      pageUrl: pageUrl,
      maxWidth: bodyWidth
    }, bottomShare)));
  };

  if (hasColumnRight) {
    return /*#__PURE__*/React.createElement(Body, {
      align: "column",
      alignx: "center",
      hyperlinkColor: get_hyperlink_color(),
      lg: {
        align: 'row',
        alignx: 'between',
        aligny: 'top',
        px: '0px',
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement(TextBodyColumn, {
      lg: {
        width: bodyWidth
      }
    }, /*#__PURE__*/React.createElement(RenderMainColumn, null)), /*#__PURE__*/React.createElement(TextBodyColumn, {
      bgColor: "primary",
      lg: {
        width: `calc(100% - ${bodyWidth} - 32px)`
      }
    }, adsSide && /*#__PURE__*/React.cloneElement(adsSide)));
  }

  return /*#__PURE__*/React.createElement(Body, {
    align: "column",
    hyperlinkColor: get_hyperlink_color()
  }, /*#__PURE__*/React.createElement(RenderMainColumn, null));
};

TextBody.propTypes = {
  adsBody: PropTypes.shape({
    content: PropTypes.array,
    enabled: PropTypes.bool,
    render: PropTypes.node,
    interventionAmount: PropTypes.number
  }),
  adsSide: PropTypes.node,
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  bottomShare: PropTypes.object,
  content: PropTypes.string,
  citation: PropTypes.object,
  gallery: PropTypes.shape({
    captionProps: PropTypes.object,
    items: PropTypes.array,
    bodyWidth: PropTypes.string
  }),
  hasBottomShare: PropTypes.bool,
  hasColumnRight: PropTypes.bool,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  related_content_insertion: PropTypes.shape({
    enabled: PropTypes.bool,
    component: PropTypes.node
  }),
  tags_section_title: PropTypes.object,
  tags: PropTypes.object
};
var TextBody$1 = withTheme(TextBody);

const Title$1 = ({
  color,
  fontSize,
  fontWeight,
  lineHeight,
  mb,
  value
}) => {
  return /*#__PURE__*/React.createElement(Block$1, {
    width: "100%",
    mb: mb[0],
    lg: {
      mb: mb[1]
    }
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: "h1",
    fontFamily: "primary",
    fontSize: fontSize[0],
    fontWeight: fontWeight,
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    }
  }));
};

Title$1.defaultProps = {
  color: 'neutral2',
  fontSize: ['38px', '56px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: [2, 3]
};
Title$1.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

const Article = props => {
  const {
    ads,
    amp,
    bodyWidth,
    bottomShare,
    byline,
    citation,
    fbappid,
    featured,
    gallery,
    headWidth,
    hasColumnRight,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    hasBottomShare,
    orderedList,
    paragraph,
    relatedContent,
    tags_section_title,
    subject,
    subtitle,
    title,
    tags,
    textbody,
    topimage,
    unorderedList,
    url
  } = props; // prepare article slots

  const adsBody = get(ads, 'body', {});
  const adsSideBar = get(ads, 'sideBar', false);
  const adsTopImage = get(ads, 'topImage', false);
  const adsTopBody = get(ads, 'topBody', false); // related content

  const related_content_body = get(relatedContent, 'body', {});
  const related_content_bottom = get(relatedContent, 'bottom', {}); //share buttons content

  get(byline, 'share', {});
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Container$8, null, featured && featured.enabled ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ContainerFeatured, null, /*#__PURE__*/React.createElement(ContentImage, null, /*#__PURE__*/React.createElement(TopImage, topimage)), /*#__PURE__*/React.createElement(ContentFeatured, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(Subject$1, subject), /*#__PURE__*/React.createElement(Title$1, title), /*#__PURE__*/React.createElement(Subtitle$1, subtitle))), /*#__PURE__*/React.createElement(MaxWidth, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(Content$4, null, /*#__PURE__*/React.createElement(Byline, _extends({
    amp: amp
  }, byline)))), adsTopBody && /*#__PURE__*/React.cloneElement(adsTopBody)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MaxWidth, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(Content$4, null, /*#__PURE__*/React.createElement(Subject$1, subject), /*#__PURE__*/React.createElement(Title$1, title), /*#__PURE__*/React.createElement(Subtitle$1, subtitle), /*#__PURE__*/React.createElement(Byline, _extends({
    amp: amp,
    fbappid: fbappid,
    pageUrl: url
  }, byline)))), adsTopImage && /*#__PURE__*/React.cloneElement(adsTopImage), /*#__PURE__*/React.createElement(MaxWidth, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(TopImage, _extends({
    amp: amp
  }, topimage))), adsTopBody && /*#__PURE__*/React.cloneElement(adsTopBody)), /*#__PURE__*/React.createElement(MaxWidth, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(TextBody$1, {
    adsBody: adsBody,
    adsSide: adsSideBar,
    amp: amp,
    bodyWidth: bodyWidth,
    bottomShare: bottomShare,
    citation: citation,
    content: textbody,
    fbappid: fbappid,
    gallery: gallery,
    hasBottomShare: hasBottomShare,
    hasColumnRight: hasColumnRight,
    heading2: heading2,
    heading3: heading3,
    heading4: heading4,
    hyperlink: hyperlink,
    images: images,
    orderedList: orderedList,
    paragraph: paragraph,
    related_content_intervention: related_content_body,
    tags_section_title: tags_section_title,
    tags: tags,
    unorderedList: unorderedList
  })), /*#__PURE__*/React.createElement(GridRelated, related_content_bottom)));
};

Article.defaultProps = {
  amp: false,
  bodyWidth: '768px',
  headWidth: '1016px',
  hasColumnRight: false
};
Article.propTypes = {
  ads: PropTypes.shape({
    body: PropTypes.shape({
      content: PropTypes.array,
      enabled: PropTypes.bool,
      render: PropTypes.node,
      interventionAmount: PropTypes.number
    }),
    sideBar: PropTypes.node,
    topImage: PropTypes.node,
    topBody: PropTypes.node
  }),
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  bottomShare: PropTypes.object,
  byline: PropTypes.object,
  citation: PropTypes.object,
  fbappid: PropTypes.string.isRequired,
  featured: PropTypes.object,
  gallery: PropTypes.shape({
    captionProps: PropTypes.object,
    items: PropTypes.array
  }),
  hasBottomShare: PropTypes.bool,
  hasColumnRight: PropTypes.bool,
  headWidth: PropTypes.string,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  orderedList: PropTypes.object,
  relatedContent: PropTypes.shape({
    body: PropTypes.shape({
      enabled: PropTypes.bool,
      component: PropTypes.node
    }),
    bottom: PropTypes.shape({
      enabled: PropTypes.bool,
      color: PropTypes.string,
      column_items: PropTypes.number,
      column_padding: PropTypes.string,
      domain: PropTypes.string,
      image_circle: PropTypes.bool,
      layout: PropTypes.string,
      slot: PropTypes.array,
      maxWidth: PropTypes.string
    })
  }),
  tags_section_title: PropTypes.object,
  subject: PropTypes.object,
  subtitle: PropTypes.object,
  tags: PropTypes.object,
  textbody: PropTypes.string,
  title: PropTypes.object,
  topimage: PropTypes.object,
  unorderedList: PropTypes.object,
  url: PropTypes.string.isRequired
};
var Article$1 = withTheme(Article);

var AuthorProfile = function (_a) {
    var _b = _a.amp, amp = _b === void 0 ? false : _b, authorNameProps = _a.authorNameProps, containerProps = _a.containerProps, date = _a.date, dateTimeProps = _a.dateTimeProps, href = _a.href, image = _a.image, imageWrapProps = _a.imageWrapProps, title = _a.title, titleProps = _a.titleProps, name = _a.name, newsTitle = _a.newsTitle, newsTitleHref = _a.newsTitleHref, newsTitleProps = _a.newsTitleProps;
    var image_desktop_url = get(image, 'desktop_path', '');
    var image_mobile_url = get(image, 'mobile_path', '');
    var image_width_desktop = get(image, 'width[0]', '40px');
    var image_height_desktop = get(image, 'height[0]', '40px');
    var image_width_mobile = get(image, 'width[1]', '40px');
    var image_height_mobile = get(image, 'height[1]', '40px');
    var image_title = get(image, 'title', '');
    return (React.createElement(Container$9, __assign({}, containerProps),
        newsTitle &&
            React.createElement(Block$1, { alignx: 'center', width: '100%' },
                React.createElement(Link$1, { path: newsTitleHref },
                    React.createElement(NewsTitle, __assign({}, newsTitleProps), newsTitle))),
        React.createElement(Content$5, null,
            React.createElement(Link$1, { path: href, mr: 2 },
                React.createElement(ImageWrap$1, __assign({}, imageWrapProps),
                    React.createElement(Image$1, { amp: amp, custom_class: 'image-with-radius', title: image_title, layout_desktop: {
                            enabled: true,
                            height: image_height_desktop,
                            width: image_width_desktop,
                            path: image_desktop_url,
                            type: 'responsive'
                        }, layout_mobile: {
                            enabled: true,
                            height: image_height_mobile,
                            width: image_width_mobile,
                            path: image_mobile_url,
                            type: 'responsive'
                        } }))),
            React.createElement(TitleWrapper, null,
                title &&
                    React.createElement(Block$1, { alignx: 'left', align: 'row', mb: 1, width: '100%' },
                        React.createElement(Link$1, { path: href },
                            React.createElement(Title$2, __assign({}, titleProps), title))),
                name &&
                    React.createElement(AuthorName, __assign({}, authorNameProps), name),
                date &&
                    React.createElement(DateTime, __assign({}, dateTimeProps), date)))));
};

const LogoAtex = ({
  color,
  href
}) => {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": "Logo Atex",
    target: "_blank",
    rel: "noreferrer",
    title: "Site Atex"
  }, /*#__PURE__*/React.createElement(Icon, {
    color: color,
    width: "56",
    height: "15",
    viewBox: "0 0 56 15",
    m: "0px"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.254 1.851c-4.006 0-5.378 2.2-5.378 2.2l1.591 1.482A5.038 5.038 0 015.76 4.216a2.6 2.6 0 012.8 2.3c0 .823-1.976.439-3.841.439-2.3 0-4.719 1.482-4.719 3.9 0 2.469 2.085 3.732 4.5 3.732a5.9 5.9 0 004.061-1.921v1.646h2.524V6.461c-.002-2.47-1.539-4.61-4.831-4.61zm-.713 10.591c-2.3 0-2.524-1.427-2.524-1.811 0-.384.439-1.811 2.524-1.811h2.744c-.001 1.756-.494 3.622-2.744 3.622zm11.962-.22c-.549 0-1.482-.11-1.482-2.085V4.54h2.3v-2.3h-2.3V.04h-2.908v2.2h-1.317v2.3h1.317v7.079c0 2.03 2.085 3.018 3.841 3.018 1.07.006 2.118-.3 3.018-.878l-1.591-1.866a1.314 1.314 0 01-.878.329z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.96 12.006l-2.2-1.262s-.713 1.537-3.183 1.537a3.091 3.091 0 01-3.347-2.8h9.164c.329-4.061-1.427-7.573-6.036-7.573-4.006 0-6.146 2.908-6.146 6.366 0 3.786 2.415 6.366 6.585 6.366s5.163-2.634 5.163-2.634zm-5.597-7.8a3.155 3.155 0 013.183 2.854H21.18a3.1 3.1 0 013.183-2.854z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42.198 2.235h-3.731l-2.524 3.183-2.47-3.183h-3.732l4.332 5.6-5.1 6.53h3.841l3.128-4.116 3.183 4.116h3.841l-5.1-6.53 4.332-5.6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M54.764 3.826L51.856.918 49.88 2.894l-1.427-1.427L43.24 6.68a1.922 1.922 0 000 2.744l2.908 2.908 1.976-1.976 1.482 1.482 5.213-5.213a2.038 2.038 0 00-.055-2.799zm-.659 2.03l-4.555 4.555-2.2-2.2a.962.962 0 010-1.372l4.564-4.549 2.2 2.2a.96.96 0 01-.008 1.367l-.001-.001z"
  })));
};

const LogoXprog = ({
  color,
  href
}) => {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": "Logo Xprog",
    target: "_blank",
    rel: "noreferrer",
    title: "Site Xprog"
  }, /*#__PURE__*/React.createElement(Icon, {
    color: color,
    width: "59",
    height: "18",
    viewBox: "0 0 59 18",
    m: "0px"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M59 10.38c0 4.6-2.33 6.66-6.44 6.66a8.36 8.36 0 01-4.56-1.6l1-2.62a4.51 4.51 0 003.06 1.22c1.83 0 3.27-.9 3.27-3.69v-.04a3.74 3.74 0 01-3.43 1.51c-2.56 0-4.23-1.73-4.23-5.3 0-3.79 1.46-5.46 4.16-5.46a5.18 5.18 0 013.5 1.44V1.26H59v9.12zm-3.65-5a2.64 2.64 0 00-2.2-1.26c-1.23 0-1.87.62-1.87 2.42 0 1.8.78 2.49 2 2.49a2.26 2.26 0 002.08-1.21l-.01-2.44zm-8.73 1.44c0 3.61-2.11 5.67-5.72 5.67s-5.7-2.04-5.7-5.67 2.11-5.76 5.7-5.76c3.59 0 5.72 2.13 5.72 5.76zm-3.62 0c0-2.06-.74-2.8-2.07-2.8-1.33 0-2 .74-2 2.8 0 2.06.72 2.69 2 2.69S43 8.82 43 6.82zm-8.26-5.55a8.65 8.65 0 00-1.83-.23 3.27 3.27 0 00-2.74 2.26v-2h-3.66v11h3.66V7.19a2.61 2.61 0 012.7-2.51c.466 0 .93.079 1.37.23l.5-3.64zM17.37 2.48A6 6 0 0121 .82c2.69 0 4.11 2 4.11 5.94 0 4.13-2.24 5.94-4.57 5.94a3.77 3.77 0 01-3.2-1.61v5.27h-3.63V1.26h3.66v1.22zm0 5.87a2.37 2.37 0 002.1 1.16c1.17 0 2-.82 2-2.83 0-1.85-.69-2.58-1.88-2.58a2.67 2.67 0 00-2.19 1.23l-.03 3.02zm-9-1.53a7 7 0 003.36-5.56h-3.6a5.22 5.22 0 01-2.27 3.68A5.21 5.21 0 013.6 1.26H0a7 7 0 003.36 5.56A7 7 0 000 12.3h3.6a5.21 5.21 0 012.26-3.67 5.19 5.19 0 012.27 3.67h3.6a7 7 0 00-3.36-5.48z"
  })));
};

var TextItem = function (_a) {
    var color = _a.color, fontFamily = _a.fontFamily, text = _a.text;
    return (React.createElement(Typography$2, { element: 'span', fontSize: '14px', mb: '4px', textAlign: 'start', width: '100%', color: color, fontFamily: fontFamily }, text));
};
TextItem.defaultProps = {
    color: 'neutral3',
};

const CONTAINER_ATEX = {
  align: 'column'
};
const CONTAINER_XPROG = {
  align: 'column',
  lg: {
    mr: 5
  }
};
const CONTAINER_COMPANIES = {
  align: 'column',
  lg: {
    align: 'row'
  }
};
const CONTAINER_COPYRIGHT = {
  align: 'column',
  aligny: 'middle',
  bgColor: 'neutral9',
  py: 5,
  px: 2,
  width: 'calc(100% - 32px)',
  lg: {
    align: 'row',
    alignx: 'center',
    py: 3
  }
};
const CONTAINER_COPYRIGHT_BOX = {
  align: 'column',
  alignx: 'left',
  aligny: 'top',
  width: '100%',
  custom: 'max-width: 1280px;',
  lg: {
    align: 'row',
    alignx: 'between'
  }
};
const CONTAINER_COPYRIGHT_ITEMS = {
  alignx: 'center',
  mb: 3,
  lg: {
    mb: '0px'
  }
};

const ContainerAtex = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, CONTAINER_ATEX, children);
const ContainerCopyright = ({
  bgColor,
  children
}) => /*#__PURE__*/React.createElement(Block$1, _extends({}, CONTAINER_COPYRIGHT, {
  bgColor: bgColor
}), children);
const ContainerCopyrightBox = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, CONTAINER_COPYRIGHT_BOX, children);
const ContainerCopyrightItems = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, CONTAINER_COPYRIGHT_ITEMS, children);
const ContainerCompanies = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, CONTAINER_COMPANIES, children);
const ContainerXprog = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, CONTAINER_XPROG, children);

var Copyright = function (_a) {
    var bgColor = _a.bgColor, color = _a.color, fontFamily = _a.fontFamily, textCompany = _a.textCompany, textCopyright = _a.textCopyright, textRights = _a.textRights, textXprog = _a.textXprog, textAtex = _a.textAtex;
    return (React.createElement(ContainerCopyright, { bgColor: bgColor },
        React.createElement(ContainerCopyrightBox, null,
            React.createElement(ContainerCopyrightItems, null,
                textCopyright &&
                    React.createElement(TextItem, { color: color, fontFamily: fontFamily, text: textCopyright }),
                textCompany &&
                    React.createElement(TextItem, { color: color, fontFamily: fontFamily, text: textCompany }),
                textRights &&
                    React.createElement(TextItem, { color: color, fontFamily: fontFamily, text: textRights })),
            React.createElement(ContainerCompanies, null,
                React.createElement(ContainerXprog, null,
                    React.createElement(TextItem, { color: color, fontFamily: fontFamily, text: textXprog }),
                    React.createElement(LogoXprog, { href: 'https://xprog.com.br/', target: "_blank", color: color })),
                React.createElement(ContainerAtex, null,
                    React.createElement(TextItem, { color: color, fontFamily: fontFamily, text: textAtex }),
                    React.createElement(LogoAtex, { href: 'https://atex.com/', target: "_blank", color: color }))))));
};

//Get button size (height)
const getSize = (props, theme) => {
  const {
    $size,
    iconSize
  } = props;
  if (!$size) return '';
  const factor = theme.factors.margin;
  const size = $size;
  if (isNaN(size)) return `height: ${size}`;
  if (size < 4) return `height: ${factor * 4}px`;
  if (iconSize) return 'height: max-content';
  return `height: ${factor * $size}px`;
}; //Get button width variations from props


const getWidth = (props, theme) => {
  const {
    $width
  } = props;
  if (props.fullWidth) return 'width: 100%;';
  if (!$width) return '';
  const factor = theme.factors.margin;
  if (typeof $width === 'string') return `width: ${$width}`;
  if ($width) return `width: ${factor * $width}px`;
  return 'width: max-content;';
}; //Get button variations from props (return style matching the variation)


const getOutlinedCSS = (props, theme) => `
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.parseColor(props, theme, '$color')};
  &:disabled {
    border-color: ${theme.colors.neutral8};
  }
`;

const getGhostCSS = () => `
  background-color: transparent;
  border-width: none;
  border-style: none;
  border-color: none;
`;

const getFilledCSS = (props, theme) => `
  background-color: ${theme.parseColor(props, theme, '$color')};
  &:disabled {
    background-color: ${theme.colors.neutral8};
  }
`;

const parseVariation = (props, theme) => {
  const {
    $variant
  } = props;
  if (!$variant) return '';
  if ($variant === 'outlined') return getOutlinedCSS(props, theme);
  if ($variant === 'ghost') return getGhostCSS();
  return getFilledCSS(props, theme);
}; //parse typography


const parseFontColor$1 = (props, theme) => {
  const {
    fontColor,
    $variant,
    disabled
  } = props;
  if (disabled && $variant !== 'filled') return theme.colors.neutral8;
  if (fontColor) return theme.parseColor(props, theme, 'fontColor');
  if ($variant === 'outlined' || $variant === 'ghost') return theme.parseColor(props, theme, '$color');
  return theme.colors.white;
};

const parseFontFamily$1 = (props, theme) => {
  const {
    $fontFamily
  } = props;
  const selected = theme.fonts[$fontFamily];
  if (!$fontFamily || !selected) return theme.fonts.primary;
  return selected;
};

const parseFontWeight = props => {
  const {
    $fontWeight
  } = props;
  if (!$fontWeight) return 400;
  return $fontWeight;
};

const parseFontSize = props => {
  const {
    $fontSize
  } = props;
  if (!$fontSize) return 14;
  return $fontSize;
};

const parseTypography = (props, theme) => {
  if (props.removeText === true) return `
    span {
      display: none;
    }
  `;else return `
    span {
      display: inline;
      margin-left: 8px;
      margin-right: 8px;
      color: ${parseFontColor$1(props, theme)};
      font-size: ${parseFontSize(props)}px;
      font-weight: ${parseFontWeight(props)};
      font-family: ${parseFontFamily$1(props, theme)};
    }
  `;
};

const parseIcon = (props, theme) => {
  return `
    svg {
      fill: ${parseFontColor$1(props, theme)};
      width: ${props.iconSize ? props.iconSize : '24px'};
      height: ${props.iconSize ? props.iconSize : '24px'};
    }
  `;
}; //main function


const parseStyle = (props, theme) => {
  const {
    parsePadding,
    parseRadius,
    parseCustom
  } = theme;
  if (!props) return '';
  return `
    ${parseVariation(props, theme)};
    ${parseTypography(props, theme)};
    ${getSize(props, theme)};
    ${getWidth(props, theme)};
    ${parseRadius(props, '$radius')};    
    ${parsePadding(props, theme)};
    ${parseIcon(props, theme)};
    ${parseCustom(props)};
  `;
};

const parseProps = (media, props) => {
  switch (media) {
    case 'xs':
      return `
        @media (min-width: ${props.theme.queries.xs}) {
          ${parseStyle(props.xs, props.theme)}
        }
      `;

    case 'sm':
      return `
        @media (min-width: ${props.theme.queries.sm}) {
          ${parseStyle(props.sm, props.theme)}
        }
      `;

    case 'md':
      return `
        @media (min-width: ${props.theme.queries.md}) {
          ${parseStyle(props.md, props.theme)}
        }
      `;

    case 'lg':
      return `
        @media (min-width: ${props.theme.queries.lg}) {
          ${parseStyle(props.lg, props.theme)}
        }
      `;

    case 'xl':
      return `
        @media (min-width: ${props.theme.queries.xl}) {
          ${parseStyle(props.xl, props.theme)}
        }
      `;

    default:
      return `${parseStyle(props, props.theme)}`;
  }
};

const getDisabledStyle = () => {
  return css(["&:disabled{cursor:unset;&:hover{animation-name:none;}}"]);
};

const getHoverStyle = () => {
  return css(["@keyframes buttonHover{from{opacity:100%;}to{opacity:80%;}}&:hover{animation-name:buttonHover;animation-duration:0.3s;animation-fill-mode:forwards;}"]);
};

const getParsePropsValue = () => {
  return css(["", ";", ";", ";", ";", ";", ";"], props => parseProps('', props), props => props.xs && parseProps('xs', props), props => props.sm && parseProps('sm', props), props => props.md && parseProps('md', props), props => props.lg && parseProps('lg', props), props => props.xl && parseProps('xl', props));
};

const Button$2 = styled.button.withConfig({
  displayName: "styled__Button",
  componentId: "sc-1i4gsln-0"
})(["display:flex;align-items:center;justify-content:center;min-width:max-content;text-transform:uppercase;border:unset;cursor:pointer;", " ", " ", ""], getDisabledStyle, getHoverStyle, getParsePropsValue);
const Link = styled.a.withConfig({
  displayName: "styled__Link",
  componentId: "sc-1i4gsln-1"
})(["display:flex;align-items:center;justify-content:center;min-width:max-content;text-transform:uppercase;border:unset;cursor:pointer;", " ", " ", ""], getDisabledStyle, getHoverStyle, getParsePropsValue);

const Button = ({
  children,
  color,
  disabled,
  fontColor,
  fontFamily,
  fontWeight,
  fontSize,
  width,
  fullWidth,
  leftIcon,
  onClick,
  radius,
  rightIcon,
  size,
  style,
  variant,
  loading,
  enterKey,
  removeText,
  px,
  py,
  on,
  path,
  iconSize,
  xs,
  sm,
  md,
  lg,
  xl,
  custom,
  id,
  type,
  ariaLabel,
  ...otherProps
}) => {
  //check if children is string
  const childrenIsString = typeof children === 'string'; // Trigger to Handle enter keydown for forms

  const handleKeyPress = event => {
    if (event.keyCode === 13) enterKey();
  };

  useEffect(() => {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return () => enterKey && window.removeEventListener('keydown', handleKeyPress);
  }); //All props with $ are forwarded ONLY to components (Not to HTML like onClick)

  const getXsProps = () => xs && {
    $color: xs.color ? xs.color : color,
    $variant: xs.variant ? xs.variant : variant,
    $radius: xs.radius ? xs.radius : radius,
    $size: xs.size ? xs.size : size,
    $width: xs.width ? xs.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: xs.removeText !== undefined ? xs.removeText : removeText,
    iconSize: xs.iconSize ? xs.iconSize : iconSize,
    px: xs.px ? xs.px : px,
    py: xs.py ? xs.py : py,
    custom: custom
  };

  const getSmProps = () => sm && {
    $color: sm.color ? sm.color : color,
    $variant: sm.variant ? sm.variant : variant,
    $radius: sm.radius ? sm.radius : radius,
    $size: sm.size ? sm.size : size,
    $width: sm.width ? sm.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: sm.removeText !== 'undefined' ? sm.removeText : removeText,
    iconSize: sm.iconSize ? sm.iconSize : iconSize,
    px: sm.px ? sm.px : px,
    py: sm.py ? sm.py : py,
    custom: custom
  };

  const getMdProps = () => md && {
    $color: md.color ? md.color : color,
    $variant: md.variant ? md.variant : variant,
    $radius: md.radius ? md.radius : radius,
    $size: md.size ? md.size : size,
    $width: md.width ? md.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: md.removeText !== undefined ? md.removeText : removeText,
    iconSize: md.iconSize ? md.iconSize : iconSize,
    px: md.px ? md.px : px,
    py: md.py ? md.py : py,
    custom: custom
  };

  const getLgProps = () => lg && {
    $color: lg.color ? lg.color : color,
    $variant: lg.variant ? lg.variant : variant,
    $radius: lg.radius ? lg.radius : radius,
    $size: lg.size ? lg.size : size,
    $width: lg.width ? lg.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: lg.removeText !== undefined ? lg.removeText : removeText,
    iconSize: lg.iconSize ? lg.iconSize : iconSize,
    px: lg.px ? lg.px : px,
    py: lg.py ? lg.py : py,
    custom: custom
  };

  const getXlProps = () => xl && {
    $color: xl.color ? xl.color : color,
    $variant: xl.variant ? xl.variant : variant,
    $radius: xl.radius ? xl.radius : radius,
    $size: xl.size ? xl.size : size,
    $width: xl.width ? xl.width : width,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    removeText: xl.removeText !== undefined ? xl.removeText : removeText,
    iconSize: xl.iconSize ? xl.iconSize : iconSize,
    px: xl.px ? xl.px : px,
    py: xl.py ? xl.py : py,
    custom: custom
  };

  const buttonProps = {
    on: on,
    px: px,
    py: py,
    fullWidth: fullWidth,
    style: style,
    onClick: onClick,
    disabled: disabled,
    fontColor: fontColor,
    removeText: removeText,
    iconSize: iconSize,
    $color: color,
    $variant: variant,
    $radius: radius,
    $size: size,
    $width: width,
    $fontFamily: fontFamily,
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    xs: getXsProps(),
    sm: getSmProps(),
    md: getMdProps(),
    lg: getLgProps(),
    xl: getXlProps(),
    custom: custom,
    id: id,
    type: type,
    'aria-label': ariaLabel,
    ...otherProps
  };

  const renderButton = () => /*#__PURE__*/React.createElement(Button$2, buttonProps, loading && 'Carregando...', leftIcon && leftIcon, children && childrenIsString && /*#__PURE__*/React.createElement("span", null, children), children && !childrenIsString && children, rightIcon && rightIcon);

  const renderLink = () => /*#__PURE__*/React.createElement(Link, _extends({
    href: path
  }, buttonProps, otherProps), loading && 'Carregando...', leftIcon && leftIcon, children && childrenIsString && /*#__PURE__*/React.createElement("span", null, children), children && !childrenIsString && children, rightIcon && rightIcon);

  return path ? renderLink() : renderButton();
};

Button.propTypes = {
  /**
   * Corresponde ao texto escrito do botão
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * Permite estilos customizados no componente
   */
  custom: PropTypes.string,

  /**
   * Altera a cor geral do componente
   */
  color: PropTypes.string,

  /**
   * Ativa/desativa o estado disabed nativo do elemento
   */
  disabled: PropTypes.bool,

  /**
   * Permite a troca da cor da fonte para casos específicos
   */
  fontColor: PropTypes.string,

  /**
   * Ativa o estilo com largura máxima para o botão (cresce 100% do width disponível)
   */
  fullWidth: PropTypes.bool,

  /**
   * Permite alterar a largura do componente (disponível a família de tamanhos em Number e String)
   */
  width: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * Permite a passagem de um componente SVG para ícone no lado esquerdo
   */
  leftIcon: PropTypes.element,

  /**
   * Lida com o evento de clique do botão
   */
  onClick: PropTypes.func,

  /**
   * Permite a escolha do token para border-radius
   */
  radius: PropTypes.oneOf(['unset', 'default', 'alternative']),

  /**
   * Permite a passagem de um ícone à direita
   */
  rightIcon: PropTypes.element,

  /**
   * Permite a escolha de um tamanho (height) para o botão
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * Passagem de estilos customizados inline
   */
  style: PropTypes.object,

  /**
   * Permite a escolha de uma das variações de estrutura do componente
   */
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),

  /**
   * Ativa a informação "Carregando"
   */
  loading: PropTypes.bool,

  /**
   * Recebe o evento de clique na tecla enter | return através de uma função
   */
  enterKey: PropTypes.func,

  /**
   * Permite alterar o espaçamento (x) interno no botão
   */
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Permite alterar o espaçamento (y) interno no botão
   */
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** 
   * Permite remover o texto do botão
   */
  removeText: PropTypes.bool,

  /**
   * Permite escolha de uma das propriedades do theme para font-family
   */
  fontFamily: PropTypes.string,

  /**
   * Permite a escolha de um font-weight para o texto do botão
   */
  fontWeight: PropTypes.number,

  /**
   * Permite alterar o tamanho da fonte interior do botão
   */
  fontSize: PropTypes.number,

  /**
   * AMP :: Props equivalente a onClick, executa a ação do clique no AMP
   */
  on: PropTypes.string,

  /**
   * AMP :: Props equivalente a onClick, executa a ação de clique para links externos
   */
  path: PropTypes.string,

  /**
   * Permite aumentar ou diminuir o tamanho do ícone no interior do botão
   */
  iconSize: PropTypes.string,
  xs: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  sm: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  md: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  lg: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  xl: PropTypes.shape({
    color: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    removeText: PropTypes.bool,
    iconSize: PropTypes.string,
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),

  /**
   * Permite passagem de um id para o elemento raíz button
   */
  id: PropTypes.string,

  /**
   * Permite a definição da prop type HTML para o componente
   */
  type: PropTypes.string,

  /**
   * Permite a definição de um aria-label para suporte à acessibilidade
   */
  ariaLabel: PropTypes.string
};
Button.defaultProps = {
  px: 2,
  disabled: false,
  variant: 'filled',
  color: 'primary1',
  radius: 'default',
  size: 4,
  loading: false,
  fontFamily: 'secondary'
};
var Button$1 = withTheme(Button);

const Area = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, {
  align: "row",
  aligny: "middle",
  alignx: "center",
  bgColor: "neutral9",
  width: "100%",
  custom: `
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
    `
}, children);
Area.propTypes = {
  children: PropTypes.object
};
const ButtonSubmit = ({
  buttonAction,
  children
}) => /*#__PURE__*/React.createElement(Button$1, {
  align: "row",
  aligny: "middle",
  alignx: "center",
  bgColor: "primary1",
  onClick: buttonAction,
  width: "100%",
  sm: {
    width: 'auto'
  }
}, children);
ButtonSubmit.propTypes = {
  buttonAction: PropTypes.func,
  children: PropTypes.string
};
const Container$2 = ({
  children
}) => /*#__PURE__*/React.createElement(Block$1, {
  align: "column",
  aligny: "middle",
  alignx: "center",
  py: 2,
  px: 2,
  width: "calc(100% - 32px)",
  custom: `
      min-height: calc(72px - 32px);
      max-width: 1024px;
    `,
  sm: {
    align: 'row',
    aligny: 'middle',
    alignx: 'center'
  }
}, children);
Container$2.propTypes = {
  children: PropTypes.array
};

const ThemedContent = ({
  children,
  theme
}) => {
  const custom_style = `
    a {
      color: ${theme.colors['primary3']};
      cursor: pointer;
      text-decoration: underline;
    }
  `;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "row",
    aligny: "middle",
    alignx: "center",
    custom: custom_style,
    width: "100%"
  }, children);
};

const Content$1 = withTheme(ThemedContent);
Content$1.propTypes = {
  children: PropTypes.object
};
const Message$1 = ({
  text
}) => /*#__PURE__*/React.createElement(Typography$2, {
  color: "neutral2",
  dangerouslySetInnerHTML: text,
  element: "p",
  fontFamily: "secondary",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "14px",
  sm: {
    mb: '0'
  },
  mb: 2,
  mr: 2
});
Message$1.propTypes = {
  text: PropTypes.string
};

const Dialog = ({
  buttonAction,
  buttonText,
  message
}) => {
  return /*#__PURE__*/React.createElement(Area, null, /*#__PURE__*/React.createElement(Container$2, null, /*#__PURE__*/React.createElement(Content$1, null, /*#__PURE__*/React.createElement(Message$1, {
    text: message
  }, message)), /*#__PURE__*/React.createElement(ButtonSubmit, {
    buttonAction: buttonAction
  }, buttonText)));
};
Dialog.defaultProps = {
  buttonAction: () => null,
  buttonText: 'buttonText',
  message: 'message'
};
Dialog.propTypes = {
  /**
   * Callback da ação principal
   */
  buttonAction: PropTypes.func,

  /**
   * Nome da ação principal
   */
  buttonText: PropTypes.string,

  /**
   * Mensagem principal
   */
  message: PropTypes.string
};

const BUTTON_GO_BACK = {
  fontColor: 'white',
  fontWeight: 700,
  on: 'tap:AMP.goBack(navigate=true)',
  size: 6,
  width: '100%'
};
const CONTAINER_ERROR = {
  aligny: 'middle',
  alignx: 'center',
  height: 'calc(100vh - 400px)',
  lg: {
    height: 'calc(100vh - 620px)'
  },
  width: '100%'
};
const CONTENT_ERROR = {
  align: 'column'
};
const MESSAGE = {
  color: 'neutral2',
  fontFamily: 'secondary',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '140%',
  mb: 4
};
const PAGE_TITLE = {
  fontFamily: 'secondary',
  fontSize: '20px',
  fontWeight: 700,
  element: 'span',
  mb: 2,
  transform: 'uppercase'
};

var ButtonGoBack = function (_a) {
    var buttonAction = _a.buttonAction, children = _a.children, color = _a.color, path = _a.path;
    return (React.createElement(Button$1, __assign({}, BUTTON_GO_BACK, { color: color, on: buttonAction, path: path, pr: '0px', pl: '0px' }), children));
};
var ContainerError = function (_a) {
    var children = _a.children;
    return (React.createElement(Block$1, __assign({}, CONTAINER_ERROR), children));
};
var ContentError = function (_a) {
    var alignx = _a.alignx, children = _a.children;
    return (React.createElement(Block$1, __assign({}, CONTENT_ERROR, { alignx: alignx }), children));
};
var Message = function (_a) {
    var children = _a.children;
    return (React.createElement(Typography$2, __assign({}, MESSAGE), children));
};
var PageTitle = function (_a) {
    var color = _a.color, children = _a.children;
    return (React.createElement(Typography$2, __assign({}, PAGE_TITLE, { color: color }), children));
};

var ErrorPage = function (_a) {
    var alignx = _a.alignx, buttonAction = _a.buttonAction, buttonColor = _a.buttonColor, buttonPath = _a.buttonPath, buttonText = _a.buttonText, message = _a.message, title = _a.title, titleColor = _a.titleColor;
    return (React.createElement(ContainerError, null,
        React.createElement(ContentError, { alignx: alignx },
            React.createElement(PageTitle, { color: titleColor }, title),
            React.createElement(Message, null, message),
            React.createElement(ButtonGoBack, { buttonAction: buttonAction, color: buttonColor, path: buttonPath }, buttonText))));
};
ErrorPage.defaultProps = {
    alignx: 'left',
    buttonAction: '/',
    buttonColor: 'black',
    buttonText: 'Voltar',
    message: 'Página não encontrada.',
    title: 'Ops!',
    titleColor: 'black'
};

const Input$1 = ({
  autoFocus,
  disabled,
  invalid,
  label,
  onEnter,
  setValue,
  type,
  value,
  warning
}) => {
  const KeyDown = ({
    key
  }) => key === 'Enter' && onEnter && onEnter();

  const Label = () => /*#__PURE__*/React.createElement("p", {
    className: 'label'
  }, label && label);

  const Warning = () => /*#__PURE__*/React.createElement("p", {
    className: 'warning'
  }, warning && invalid ? warning : ' ');

  const props = {
    autoFocus,
    defaultValue: value,
    disabled,
    onChange: ({
      target
    }) => setValue(target.value),
    onKeyDown: KeyDown,
    type
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `form-field ${invalid ? 'invalid' : ''} ${type}`
  }, /*#__PURE__*/React.createElement(Label, null), type === 'textarea' && /*#__PURE__*/React.createElement("textarea", props), type !== 'textarea' && /*#__PURE__*/React.createElement("input", props), /*#__PURE__*/React.createElement(Warning, null));
};

Input$1.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  warning: PropTypes.string
};
Input$1.defaultProps = {
  autofocus: false,
  disabled: 'disabled',
  invalid: false,
  type: 'text'
};
var index$3 = {
  Input: Input$1
};

const FieldLabel = props => {
  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return /*#__PURE__*/React.createElement(Typography$2, _extends({
    element: "label"
  }, props), capitalizeFirstLetter(props.children));
};

FieldLabel.propTypes = {
  children: PropTypes.node
};

const FieldErrorMessage = props => {
  return /*#__PURE__*/React.createElement(Typography$2, _extends({
    element: "p"
  }, props), props.children);
};

FieldErrorMessage.propTypes = {
  children: PropTypes.string
};

const handleFontFamily = props => {
  const theme = get(props, 'theme.fonts');
  const value = get(props, '$fontFamily');
  return theme[value];
};

const handleFontSize = props => {
  const unit = get(props, 'theme.factors.dimensions', 10);
  const value = get(props, '$fontSize');
  if (typeof value === 'string') return value;else return `${value * unit}px`;
};

const handleBorderRadius = props => {
  const theme = get(props, 'theme.radius');
  const value = get(props, '$radius');
  return theme[value];
};

const handlePlaceholderColor = props => {
  const theme = get(props, 'theme.colors');
  const value = get(props, 'placeholderColor');
  return theme[value];
}; //TODO: Unificar as funções de getColor do theme


const handleInputColor = props => {
  const isValid = get(props, 'validation');
  const theme = get(props, 'theme.colors');
  const value = get(props, '$color'); //Static rule for false validation (apply color error1)

  if (isValid === false) return theme.error1;
  return theme[value];
};

const handleColor = props => {
  const theme = get(props, 'theme.colors');
  const value = get(props, '$color');
  return theme[value];
};

const handleFocusedColor = props => {
  const isValid = get(props, 'validation');
  const theme = get(props, 'theme.colors');
  if (isValid === false) return theme.error1; //Static rule to return activeSystemColor to label border

  return theme.activeColor;
};

const handleSize = props => {
  if (typeof props.size === 'string') return props.size;
  return `${props.size}px`;
};

const Input = styled.input.withConfig({
  displayName: "styled__Input",
  componentId: "sc-oiup1p-0"
})(["width:calc(100% - 16px);padding-left:8px;padding-right:8px;font-size:", ";font-weight:400;font-family:", ";color:", ";border-radius:", ";border-color:unset;border-width:unset;border-style:unset;&:focus{outline-color:unset;outline-width:unset;outline-style:none;}::placeholder{color:", ";}"], handleFontSize, handleFontFamily, handleColor, handleBorderRadius, handlePlaceholderColor);
const InputContainer = styled.div.withConfig({
  displayName: "styled__InputContainer",
  componentId: "sc-oiup1p-1"
})(["background-color:white;width:100%;height:", ";box-shadow:", ";display:flex;align-items:center;border-radius:", ";&:focus-within{box-shadow:", ";}"], handleSize, props => `0 0 0 1px ${handleInputColor(props)}`, handleBorderRadius, props => `0 0 0 2px ${handleFocusedColor(props)}`);

const Field = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    icon,
    label,
    styledLabel,
    styledMessage,
    styledInput,
    styledField,
    styledRoot,
    onChange,
    onIconClick,
    type,
    value,
    validation,
    validationMessage,
    placeholder,
    disabled,
    on,
    id,
    name,
    mask,
    onEnterKey,
    size
  } = props;
  const styledLabelDefaultProps = {
    fontSize: get(styledLabel, 'fontSize', '14px'),
    fontWeight: get(styledLabel, 'fontWeight', 400),
    fontFamily: get(styledLabel, 'fontFamily', 'secondary'),
    color: get(styledLabel, 'color', 'neutral5'),
    mt: get(styledLabel, 'mt', 0.5),
    mr: get(styledLabel, 'mr', undefined),
    mb: get(styledLabel, 'mb', 0.5),
    ml: get(styledLabel, 'ml', undefined)
  };
  const styledMessageDefaultProps = {
    fontSize: get(styledMessage, 'fontSize', '14px'),
    fontWeight: get(styledMessage, 'fontWeight', 400),
    fontFamily: get(styledMessage, 'fontFamily', 'secondary'),
    color: get(styledMessage, 'color', 'error1'),
    mt: get(styledMessage, 'mt', 0.5),
    mr: get(styledMessage, 'mr', undefined),
    mb: get(styledMessage, 'mb', 0.5),
    ml: get(styledMessage, 'ml', undefined)
  };
  const styledInputDefaultProps = {
    $color: get(styledInput, 'color', 'neutral5'),
    $radius: get(styledInput, 'radius', 'default'),
    size: size
  };
  const styledRootDefaultProps = {
    $fontSize: get(styledRoot, 'fontSize', '14px'),
    $fontWeight: get(styledRoot, 'fontWeight', 400),
    $fontFamily: get(styledRoot, 'fontFamily', 'secondary'),
    $color: get(styledRoot, 'color', 'neutral2'),
    placeholderColor: get(styledRoot, 'placeholderColor'),
    $radius: get(styledInput, 'radius', 'default')
  };
  const styledFieldDefaultProps = {
    mt: get(styledField, 'mt', 0.5),
    mr: get(styledField, 'mr', undefined),
    mb: get(styledField, 'mb', 0.5),
    ml: get(styledField, 'ml', undefined)
  };

  const handleChange = event => {
    onChange(event.target.value);
  };

  const renderIcon = () => {
    if (!icon) return null;
    const iconHasOnClick = icon.props && icon.props.onClick ? icon.props.onClick : false;
    return /*#__PURE__*/React.cloneElement(icon, {
      onClick: iconHasOnClick ? iconHasOnClick : onIconClick
    });
  };

  const renderLabel = () => {
    if (!label) return null;
    return /*#__PURE__*/React.createElement(FieldLabel, styledLabelDefaultProps, label);
  };

  const renderMessage = () => {
    if (validation === true) return null;
    return /*#__PURE__*/React.createElement(FieldErrorMessage, styledMessageDefaultProps, validationMessage);
  };

  const handleKeyPress = ({
    key
  }) => {
    if (typeof onEnterKey === 'function') {
      if (key === 'Enter') onEnterKey();
    }
  };

  const inputProps = {
    name: name,
    type: type,
    id: id,
    value: value,
    on: on,
    onChange: handleChange,
    disabled: disabled,
    mask: mask,
    placeholder: placeholder,
    validation: validation,
    onKeyPress: handleKeyPress
  };
  return /*#__PURE__*/React.createElement(Block$1, _extends({}, styledFieldDefaultProps, {
    width: "100%"
  }), renderLabel(), /*#__PURE__*/React.createElement(InputContainer, _extends({
    validation: validation
  }, styledInputDefaultProps), mask ? /*#__PURE__*/React.createElement(InputMask, inputProps, /*#__PURE__*/React.createElement(Input, _extends({
    ref: ref
  }, styledRootDefaultProps))) : /*#__PURE__*/React.createElement(Input, _extends({
    ref: ref
  }, inputProps, styledRootDefaultProps)), renderIcon()), renderMessage());
});
Field.defaultProps = {
  validation: true,
  disabled: false,
  size: '40px'
};
Field.propTypes = {
  /**
   * Props de estilo para o Label do Field
   */
  styledLabel: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.string,
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),

  /**
   * Props de estilo para a mensagem de erro
   */
  styledMessage: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    color: PropTypes.string,
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),

  /**
   * Props de estilo para o elemento input HTML
   */
  styledInput: PropTypes.shape({
    color: PropTypes.string,
    radius: PropTypes.oneOf(['unset', 'default', 'alternative'])
  }),

  /**
   * Props de estilo para o componente HTML input
   */
  styledRoot: PropTypes.shape({
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fontWeight: PropTypes.number,
    fontFamily: PropTypes.oneOf(['primary', 'secondary']),
    radius: PropTypes.oneOf(['unset', 'default', 'alternative']),
    placeholderColor: PropTypes.string
  }),

  /**
   * Props de estilo para o componente React Field
   */
  styledField: PropTypes.shape({
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),

  /**
   * Ativa/desativa o estado disabled do input
   */
  disabled: PropTypes.bool,

  /**
   * Ativa ou desativa o uso do placeholder (recebe o texto)
   */
  placeholder: PropTypes.string,

  /**
   * Possibilita adicionar um ícone à direita do Field
   */
  icon: PropTypes.element,

  /**
   * Função executada ao clicar no ícone
   */
  onIconClick: PropTypes.func,

  /**
   * Adiciona um label ao Field
   */
  label: PropTypes.string,

  /**
   * Função disparada ao modificar o valor do Field
   */
  onChange: PropTypes.func.isRequired,

  /**
   * Permite assinalar um id para o elemento input raíz
   */
  id: PropTypes.string,

  /**
   * Props que recebe o type do Field (prop nativa HTML)
   */
  type: PropTypes.string,

  /**
   * Recebe o valor do Field (prop nativa do HTML)
   */
  value: PropTypes.string,

  /**
   * Prop para nomear o elemento HTML (prop nativa do HTML)
   */
  name: PropTypes.string,

  /**
   * Recebe o estado do componente (true para padrão e false para erro)
   */
  validation: PropTypes.oneOf([true, false]),

  /**
   * Recebe a mensagem de validação (renderizada quando validation = false)
   */
  validationMessage: PropTypes.string,

  /**
   * AMP: Permite ação de clique e manipulação do estado
   */
  on: PropTypes.string,

  /**
   * Permite a aplicação de uma máscara no input
   */
  mask: PropTypes.string,

  /**
   * Função executada quando ocorrer o clique na tecla "Enter"
   */
  onEnterKey: PropTypes.func,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
var index$2 = withTheme(Field);

var Column$1 = function (_a) {
    var children = _a.children;
    return (React.createElement(Block$1, { align: "column", alignx: "left", aligny: "top", width: "100%" }, children));
};
var ColorizedColumn = function (_a) {
    var bgColor = _a.bgColor, children = _a.children, minHeight = _a.minHeight, transparent = _a.transparent;
    var slot_customHeight_mobile = "".concat(selectMinHeightFromSlot(minHeight === null || minHeight === void 0 ? void 0 : minHeight[0]));
    var slot_customHeight_desktop = "".concat(selectMinHeightFromSlot(minHeight === null || minHeight === void 0 ? void 0 : minHeight[1]));
    return (React.createElement(Block$1, { align: "column", alignx: "left", aligny: "top", bgColor: bgColor, custom: slot_customHeight_mobile, mb: transparent ? '0px' : 2, pt: transparent ? '0px' : 2, px: 2, width: 'calc(100% - 32px)', lg: {
            align: 'row',
            alignx: 'between',
            aligny: 'top',
            custom: "flex-wrap: wrap; ".concat(slot_customHeight_desktop),
            mb: transparent ? '0px' : 3,
            pt: transparent ? '0px' : 3,
            px: transparent ? '0px' : 3,
            width: transparent ? '100%' : 'calc(100% - 48px)'
        } }, children));
};

var Template100 = function (_a) {
    var slotAds = _a.slotAds, slot100 = _a.slot100;
    var slot100_bgColor = selectBgColorFromSlot(slot100);
    var slot100_isTransparent = isBackgroundTransparent(slot100_bgColor);
    return (React.createElement(React.Fragment, null,
        React.createElement(Block$1, { align: "row", alignx: "center", aligny: "top", width: "100%" },
            React.createElement(Column$1, null,
                renderSpaceSlot(slotAds.spaceTopLeft),
                renderSpaceSlot(slot100.spaceA),
                React.createElement(ColorizedColumn, { bgColor: slot100_bgColor, minHeight: slot100.min_height, transparent: slot100_isTransparent },
                    React.createElement(RenderSlot$1, __assign({}, slot100))),
                renderSpaceSlot(slot100.spaceB))),
        renderSpaceSlot(slotAds.spaceB)));
};

var Column = function (_a) {
    var children = _a.children;
    return (React.createElement(Block$1, { align: 'column', alignx: 'left', aligny: 'top', lg: { width: 'calc((100% - 48px) / 3)' }, width: '100%' }, children));
};
var ColumnColor = function (_a) {
    var bgColor = _a.bgColor, children = _a.children, minHeight = _a.minHeight, transparent = _a.transparent;
    var slot_customHeight_mobile = selectMinHeightFromSlot(minHeight === null || minHeight === void 0 ? void 0 : minHeight[0]);
    var slot_customHeight_desktop = selectMinHeightFromSlot(minHeight === null || minHeight === void 0 ? void 0 : minHeight[1]);
    return (React.createElement(Block$1, { bgColor: bgColor, custom: slot_customHeight_mobile, px: 2, pt: transparent ? '0px' : 2, mb: transparent ? '0px' : 2, width: 'calc(100% - 32px)', lg: {
            custom: slot_customHeight_desktop,
            px: transparent ? '0px' : 3,
            pt: transparent ? '0px' : 3,
            mb: transparent ? '0px' : 3,
            width: transparent ? '100%' : 'calc(100% - 48px)'
        } }, children));
};

var Template33 = function (_a) {
    var slotAds = _a.slotAds, slotLeft = _a.slotLeft, slotCenter = _a.slotCenter, slotRight = _a.slotRight;
    var slotLeft_bgColor = selectBgColorFromSlot(slotLeft);
    var slotCenter_bgColor = selectBgColorFromSlot(slotCenter);
    var slotRight_bgColor = selectBgColorFromSlot(slotRight);
    var slotLeft_isTransparent = isBackgroundTransparent(slotLeft_bgColor);
    var slotCenter_isTransparent = isBackgroundTransparent(slotCenter_bgColor);
    var slotRight_isTransparent = isBackgroundTransparent(slotRight_bgColor);
    return (React.createElement(React.Fragment, null,
        React.createElement(Block$1, { align: 'column', alignx: 'center', aligny: 'top', width: '100%', lg: {
                align: 'row',
                alignx: 'between',
                aligny: 'top'
            } },
            React.createElement(Column, null,
                renderSpaceSlot(slotAds.spaceTopLeft),
                renderSpaceSlot(slotLeft.spaceA),
                React.createElement(ColumnColor, { bgColor: slotLeft_bgColor, minHeight: slotLeft.min_height, transparent: slotLeft_isTransparent },
                    React.createElement(RenderSlot$1, __assign({}, slotLeft))),
                renderSpaceSlot(slotLeft.spaceB)),
            React.createElement(Column, null,
                renderSpaceSlot(slotAds.spaceTopCenter),
                renderSpaceSlot(slotCenter.spaceA),
                React.createElement(ColumnColor, { bgColor: slotCenter_bgColor, minHeight: slotCenter.min_height, transparent: slotCenter_isTransparent },
                    React.createElement(RenderSlot$1, __assign({}, slotCenter))),
                renderSpaceSlot(slotCenter.spaceB)),
            React.createElement(Column, null,
                renderSpaceSlot(slotAds.spaceTopRight),
                renderSpaceSlot(slotRight.spaceA),
                React.createElement(ColumnColor, { bgColor: slotRight_bgColor, minHeight: slotRight.min_height, transparent: slotRight_isTransparent },
                    React.createElement(RenderSlot$1, __assign({}, slotRight))),
                renderSpaceSlot(slotRight.spaceB))),
        renderSpaceSlot(slotAds.spaceB)));
};

var Template5050 = function (_a) {
    var slotAds = _a.slotAds, slotLeft = _a.slotLeft, slotRight = _a.slotRight;
    var slotLeft_bgColor = selectBgColorFromSlot(slotLeft);
    var slotRight_bgColor = selectBgColorFromSlot(slotRight);
    var slotLeft_isTransparent = isBackgroundTransparent(slotLeft_bgColor);
    var slotRight_isTransparent = isBackgroundTransparent(slotRight_bgColor);
    return (React.createElement(React.Fragment, null,
        React.createElement(Block$1, { align: 'column', alignx: 'center', aligny: 'top', px: '0px', py: '0px', lg: {
                align: 'row',
                alignx: 'between',
                aligny: 'top'
            }, width: '100%' },
            React.createElement(Block$1, { align: 'column', alignx: 'left', width: '100%', lg: {
                    align: 'row',
                    alignx: 'between',
                    custom: 'flex-wrap: wrap;',
                    px: '0px',
                    width: 'calc(((100% - 72px) / 2) + 24px)'
                } },
                (renderSpaceSlot(slotLeft.spaceA)),
                React.createElement(Block$1, { align: 'column', alignx: 'center', bgColor: slotLeft_bgColor, mb: slotLeft_isTransparent ? '0px' : 2, px: slotLeft_isTransparent ? '0px' : 2, pt: slotLeft_isTransparent ? '0px' : 2, width: slotLeft_isTransparent ? '100%' : 'calc(100% - 32px)', lg: {
                        align: 'row',
                        alignx: 'between',
                        custom: 'flex-wrap: wrap;',
                        mb: slotLeft_isTransparent ? '0px' : 3,
                        px: slotLeft_isTransparent ? '0px' : 3,
                        pt: slotLeft_isTransparent ? '0px' : 3,
                        width: slotLeft_isTransparent ? '100%' : 'calc(100% - 48px)'
                    } },
                    React.createElement(RenderSlot$1, __assign({}, slotLeft))),
                (renderSpaceSlot(slotLeft.spaceB))),
            React.createElement(Block$1, { align: 'column', alignx: 'left', width: '100%', lg: {
                    align: 'row',
                    alignx: 'between',
                    custom: 'flex-wrap: wrap;',
                    px: '0px',
                    width: 'calc(((100% - 72px) / 2) + 24px)'
                } },
                (renderSpaceSlot(slotRight.spaceA)),
                React.createElement(Block$1, { align: 'column', alignx: 'center', bgColor: slotRight_bgColor, mb: slotRight_isTransparent ? '0px' : 2, px: slotRight_isTransparent ? '0px' : 2, pt: slotRight_isTransparent ? '0px' : 2, width: slotRight_isTransparent ? '100%' : 'calc(100% - 32px)', lg: {
                        align: 'row',
                        alignx: 'between',
                        custom: 'flex-wrap: wrap;',
                        mb: slotRight_isTransparent ? '0px' : 3,
                        px: slotRight_isTransparent ? '0px' : 3,
                        pt: slotRight_isTransparent ? '0px' : 3,
                        width: slotRight_isTransparent ? '100%' : 'calc(100% - 48px)'
                    } },
                    React.createElement(RenderSlot$1, __assign({}, slotRight))),
                (renderSpaceSlot(slotRight.spaceB)))),
        (renderSpaceSlot(slotAds.spaceB))));
};

var Template7030 = function (_a) {
    var _b, _c, _d, _e;
    var slotAds = _a.slotAds, slot70 = _a.slot70, slot30 = _a.slot30;
    var slot70_bgColor = selectBgColorFromSlot(slot70);
    var slot30_bgColor = selectBgColorFromSlot(slot30);
    var slot70_isTransparent = isBackgroundTransparent(slot70_bgColor);
    var slot30_isTransparent = isBackgroundTransparent(slot30_bgColor);
    var slot70_customHeight_mobile = selectMinHeightFromSlot((_b = slot70.min_height) === null || _b === void 0 ? void 0 : _b[0]);
    var slot70_customHeight_desktop = selectMinHeightFromSlot((_c = slot70.min_height) === null || _c === void 0 ? void 0 : _c[1]);
    var slot30_customHeight_mobile = selectMinHeightFromSlot((_d = slot30.min_height) === null || _d === void 0 ? void 0 : _d[0]);
    var slot30_customHeight_desktop = selectMinHeightFromSlot((_e = slot30.min_height) === null || _e === void 0 ? void 0 : _e[1]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Block$1, { align: 'column', alignx: 'center', aligny: 'top', px: '0px', py: '0px', lg: {
                align: 'row',
                alignx: 'between',
                aligny: 'top'
            }, width: '100%' },
            React.createElement(Block$1, { align: 'column', alignx: 'left', width: '100%', lg: {
                    align: 'row',
                    alignx: 'between',
                    custom: 'flex-wrap: wrap;',
                    mb: '0px',
                    px: '0px',
                    width: 'calc((((100% - 48px) / 3) * 2) + 24px)'
                } },
                renderSpaceSlot(slotAds.spaceTopLeft),
                renderSpaceSlot(slot70.spaceA),
                React.createElement(Block$1, { align: 'column', alignx: 'center', bgColor: slot70_bgColor, custom: slot70_customHeight_mobile, px: 2, pt: slot70_isTransparent ? '0px' : 2, mb: slot70_isTransparent ? '0px' : 2, width: 'calc(100% - 32px)', lg: {
                        align: 'row',
                        alignx: 'between',
                        custom: "flex-wrap: wrap; ".concat(slot70_customHeight_desktop),
                        mb: slot70_isTransparent ? '0px' : 3,
                        px: slot70_isTransparent ? '0px' : 3,
                        pt: slot70_isTransparent ? '0px' : 3,
                        width: slot70_isTransparent ? '100%' : 'calc(100% - 48px)'
                    } },
                    React.createElement(RenderSlot$1, __assign({}, slot70))),
                renderSpaceSlot(slot70.spaceB)),
            React.createElement(Block$1, { align: 'column', alignx: 'left', width: '100%', lg: {
                    px: '0px',
                    width: 'calc((100% - 48px) / 3)'
                } },
                renderSpaceSlot(slotAds.spaceTopCenter),
                renderSpaceSlot(slot30.spaceA),
                React.createElement(Block$1, { align: 'column', alignx: 'center', aligny: 'top', bgColor: slot30_bgColor, custom: slot30_customHeight_mobile, px: 2, pt: slot30_isTransparent ? '0px' : 2, mb: slot30_isTransparent ? '0px' : 2, width: 'calc(100% - 32px)', lg: {
                        custom: slot30_customHeight_desktop,
                        mb: slot30_isTransparent ? '0px' : 3,
                        px: slot30_isTransparent ? '0px' : 3,
                        pt: slot30_isTransparent ? '0px' : 3,
                        width: slot30_isTransparent ? '100%' : 'calc(100% - 48px)'
                    } },
                    React.createElement(RenderSlot$1, __assign({}, slot30))),
                renderSpaceSlot(slot30.spaceB))),
        renderSpaceSlot(slotAds.spaceB)));
};

var PageBlock = function (_a) {
    var amp = _a.amp, domain = _a.domain, eventTracking = _a.eventTracking, fallback_image_url = _a.fallback_image_url, preview = _a.preview, section_title_component = _a.section_title_component, site_data = _a.site_data, slot_parser = _a.slot_parser, slot1 = _a.slot1, slot2 = _a.slot2, slot3 = _a.slot3, slot4 = _a.slot4, slot5 = _a.slot5, slot6 = _a.slot6, slot7 = _a.slot7, theme = _a.theme, type = _a.type;
    var section_title = theme.section_title, templates = theme.templates;
    // define section_title for slots
    var slot1_title = renderSectionTitle({
        color: slot1 === null || slot1 === void 0 ? void 0 : slot1.color,
        icon: slot1 === null || slot1 === void 0 ? void 0 : slot1.icon,
        layout: section_title,
        link: slot1 === null || slot1 === void 0 ? void 0 : slot1.link,
        title: slot1 === null || slot1 === void 0 ? void 0 : slot1.title,
        customComponent: section_title_component
    });
    var slot2_title = renderSectionTitle({
        color: slot2 === null || slot2 === void 0 ? void 0 : slot2.color,
        icon: slot2 === null || slot2 === void 0 ? void 0 : slot2.icon,
        layout: section_title,
        link: slot2 === null || slot2 === void 0 ? void 0 : slot2.link,
        title: slot2 === null || slot2 === void 0 ? void 0 : slot2.title,
        customComponent: section_title_component
    });
    var slot3_title = renderSectionTitle({
        color: slot3 === null || slot3 === void 0 ? void 0 : slot3.color,
        icon: slot3 === null || slot3 === void 0 ? void 0 : slot3.icon,
        layout: section_title,
        link: slot3 === null || slot3 === void 0 ? void 0 : slot3.link,
        title: slot3 === null || slot3 === void 0 ? void 0 : slot3.title,
        customComponent: section_title_component
    });
    // define slot spaceB
    var slot1_slotList = selectComponentFromSlotList(slot_parser, slot1 === null || slot1 === void 0 ? void 0 : slot1.list2, site_data, slot1);
    var slot2_slotList = selectComponentFromSlotList(slot_parser, slot2 === null || slot2 === void 0 ? void 0 : slot2.list2, site_data, slot2);
    var slot3_slotList = selectComponentFromSlotList(slot_parser, slot3 === null || slot3 === void 0 ? void 0 : slot3.list2, site_data, slot3);
    var slot4_slotList = selectComponentFromSlotList(slot_parser, slot4 === null || slot4 === void 0 ? void 0 : slot4.list, site_data, slot4);
    var slot5_slotList = selectComponentFromSlotList(slot_parser, slot1 === null || slot1 === void 0 ? void 0 : slot1.list3, site_data, slot5);
    var slot6_slotList = selectComponentFromSlotList(slot_parser, slot2 === null || slot2 === void 0 ? void 0 : slot2.list3, site_data, slot6);
    var slot7_slotList = selectComponentFromSlotList(slot_parser, slot3 === null || slot3 === void 0 ? void 0 : slot3.list3, site_data, slot7);
    if (type === 'template100') {
        var slot100_block = selectTemplateFromTheme({ block: 'slot100', slot: slot1, templates: templates });
        var slot100_layout = selectLayoutFromTemplate({ block: slot100_block, slot: slot1 });
        var slot1_spaces = selectLayoutColsFromSlot(slot1 === null || slot1 === void 0 ? void 0 : slot1.len1, slot100_block.spaces);
        var slot1_space_bottom = slot100_block.space_bottom;
        var slotsHaveSecionTitle = (slot1 === null || slot1 === void 0 ? void 0 : slot1.title) !== '';
        return (React.createElement(Template100, { slotAds: {
                column_items: 0,
                column_padding: 0,
                layouts: slot100_layout,
                preview: preview,
                site_data: site_data,
                slot: [],
                slot_parser: slot_parser,
                spaceB: slot4_slotList,
                spaceTopLeft: slot5_slotList,
            }, slot100: {
                amp: amp,
                bgcolor: slot1 === null || slot1 === void 0 ? void 0 : slot1.bgcolor,
                color: slot1 === null || slot1 === void 0 ? void 0 : slot1.color,
                column_items: slot1_spaces + 1,
                column_padding: slot1_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                layouts: slot100_layout,
                min_height: slot100_block.min_height,
                order: slot1 === null || slot1 === void 0 ? void 0 : slot1.order,
                more: slot1 === null || slot1 === void 0 ? void 0 : slot1.more,
                more_title: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_title,
                more_link: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_link,
                pagination: slot1 === null || slot1 === void 0 ? void 0 : slot1.pagination,
                preview: preview,
                search_len: slot1 === null || slot1 === void 0 ? void 0 : slot1.search_len,
                site_data: site_data,
                slot: slot1 === null || slot1 === void 0 ? void 0 : slot1.list1,
                slot_parser: slot_parser,
                slot_position: 1,
                spaceA: slotsHaveSecionTitle ? slot1_title : null,
                spaceB: slot1_slotList,
                space_bottom: slot1_space_bottom
            } }));
    }
    if (type === 'template7030') {
        var slot70_block = selectTemplateFromTheme({ block: 'slot70', slot: slot1, templates: templates });
        var slot30_block = selectTemplateFromTheme({ block: 'slot30', slot: slot2, templates: templates });
        var slot70_layout = selectLayoutFromTemplate({ block: slot70_block, slot: slot1 });
        var slot30_layout = selectLayoutFromTemplate({ block: slot30_block, slot: slot2 });
        var slot1_spaces = selectLayoutColsFromSlot(slot1 === null || slot1 === void 0 ? void 0 : slot1.len1, slot70_block.spaces);
        var slot2_spaces = selectLayoutColsFromSlot(slot2 === null || slot2 === void 0 ? void 0 : slot2.len1, slot30_block.spaces);
        var slot1_space_bottom = get(slot70_block, 'space_bottom', []);
        var slot2_space_bottom = get(slot30_block, 'space_bottom', []);
        var slotsHaveSecionTitle = (slot1 === null || slot1 === void 0 ? void 0 : slot1.title) !== '' || (slot2 === null || slot2 === void 0 ? void 0 : slot2.title) !== '';
        return (React.createElement(Template7030, { slotAds: {
                column_items: 0,
                column_padding: 0,
                layouts: slot70_layout,
                preview: preview,
                site_data: site_data,
                slot: [],
                slot_parser: slot_parser,
                spaceB: slot4_slotList,
                spaceTopLeft: slot5_slotList,
                spaceTopCenter: slot6_slotList,
            }, slot70: {
                amp: amp,
                bgcolor: slot1 === null || slot1 === void 0 ? void 0 : slot1.bgcolor,
                color: slot1 === null || slot1 === void 0 ? void 0 : slot1.color,
                column_items: slot1_spaces + 1,
                column_padding: slot1_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                min_height: slot70_block.min_height,
                layouts: slot70_layout,
                order: slot1 === null || slot1 === void 0 ? void 0 : slot1.order,
                more: slot1 === null || slot1 === void 0 ? void 0 : slot1.more,
                more_title: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_title,
                more_link: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_link,
                pagination: slot1 === null || slot1 === void 0 ? void 0 : slot1.pagination,
                preview: preview,
                search_len: slot1 === null || slot1 === void 0 ? void 0 : slot1.search_len,
                site_data: site_data,
                slot: slot1 === null || slot1 === void 0 ? void 0 : slot1.list1,
                slot_parser: slot_parser,
                slot_position: 1,
                spaceA: slotsHaveSecionTitle ? slot1_title : null,
                spaceB: slot1_slotList,
                space_bottom: slot1_space_bottom
            }, slot30: {
                amp: amp,
                bgcolor: slot2 === null || slot2 === void 0 ? void 0 : slot2.bgcolor,
                color: slot2 === null || slot2 === void 0 ? void 0 : slot2.color,
                column_items: slot2_spaces + 1,
                column_padding: slot2_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                layouts: slot30_layout,
                min_height: slot30_block.min_height,
                order: slot2 === null || slot2 === void 0 ? void 0 : slot2.order,
                more: slot2 === null || slot2 === void 0 ? void 0 : slot2.more,
                more_title: slot2 === null || slot2 === void 0 ? void 0 : slot2.more_title,
                more_link: slot2 === null || slot2 === void 0 ? void 0 : slot2.more_link,
                pagination: slot2 === null || slot2 === void 0 ? void 0 : slot2.pagination,
                preview: preview,
                search_len: slot2 === null || slot2 === void 0 ? void 0 : slot2.search_len,
                site_data: site_data,
                slot: slot2 === null || slot2 === void 0 ? void 0 : slot2.list1,
                slot_parser: slot_parser,
                slot_position: 2,
                spaceA: slotsHaveSecionTitle ? slot2_title : null,
                spaceB: slot2_slotList,
                space_bottom: slot2_space_bottom
            } }));
    }
    if (type === 'template50') {
        var slotLeft_block = selectTemplateFromTheme({ block: 'slot50', slot: slot1, templates: templates });
        var slotRight_block = selectTemplateFromTheme({ block: 'slot50', slot: slot2, templates: templates });
        var slotLeft_layout = selectLayoutFromTemplate({ block: slotLeft_block, slot: slot1 });
        var slotRight_layout = selectLayoutFromTemplate({ block: slotRight_block, slot: slot2 });
        var slot1_spaces = selectLayoutColsFromSlot(slot1 === null || slot1 === void 0 ? void 0 : slot1.len1, slotLeft_block.spaces);
        var slot2_spaces = selectLayoutColsFromSlot(slot2 === null || slot2 === void 0 ? void 0 : slot2.len1, slotRight_block.spaces);
        var slotsHaveSecionTitle = (slot1 === null || slot1 === void 0 ? void 0 : slot1.title) !== '' || (slot2 === null || slot2 === void 0 ? void 0 : slot2.title) !== '';
        var slot1_space_bottom = get(slotLeft_block, 'space_bottom', []);
        var slot2_space_bottom = get(slotRight_block, 'space_bottom', []);
        return (React.createElement(Template5050, { slotAds: {
                column_items: 0,
                column_padding: 0,
                layouts: slotLeft_layout,
                preview: preview,
                site_data: site_data,
                slot: [],
                slot_parser: slot_parser,
                spaceB: slot4_slotList,
                spaceTopLeft: slot5_slotList,
                spaceTopCenter: slot6_slotList,
            }, slotLeft: {
                amp: amp,
                bgcolor: slot1 === null || slot1 === void 0 ? void 0 : slot1.bgcolor,
                color: slot1 === null || slot1 === void 0 ? void 0 : slot1.color,
                column_items: slot1_spaces + 1,
                column_padding: slot1_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                layouts: slotLeft_layout,
                min_height: slotLeft_block.min_height,
                order: slot1 === null || slot1 === void 0 ? void 0 : slot1.order,
                more: slot1 === null || slot1 === void 0 ? void 0 : slot1.more,
                more_title: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_title,
                more_link: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_link,
                pagination: slot1 === null || slot1 === void 0 ? void 0 : slot1.pagination,
                preview: preview,
                search_len: slot1 === null || slot1 === void 0 ? void 0 : slot1.search_len,
                site_data: site_data,
                slot: slot1 === null || slot1 === void 0 ? void 0 : slot1.list1,
                slot_parser: slot_parser,
                slot_position: 1,
                spaceA: slotsHaveSecionTitle ? slot1_title : null,
                spaceB: slot1_slotList,
                space_bottom: slot1_space_bottom
            }, slotRight: {
                amp: amp,
                bgcolor: slot2 === null || slot2 === void 0 ? void 0 : slot2.bgcolor,
                color: slot2 === null || slot2 === void 0 ? void 0 : slot2.color,
                column_items: slot2_spaces + 1,
                column_padding: slot2_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                layouts: slotRight_layout,
                min_height: slotRight_block.min_height,
                order: slot2 === null || slot2 === void 0 ? void 0 : slot2.order,
                more: slot2 === null || slot2 === void 0 ? void 0 : slot2.more,
                more_title: slot2 === null || slot2 === void 0 ? void 0 : slot2.more_title,
                more_link: slot2 === null || slot2 === void 0 ? void 0 : slot2.more_link,
                pagination: slot2 === null || slot2 === void 0 ? void 0 : slot2.pagination,
                preview: preview,
                search_len: slot2 === null || slot2 === void 0 ? void 0 : slot2.search_len,
                site_data: site_data,
                slot: slot2 === null || slot2 === void 0 ? void 0 : slot2.list1,
                slot_parser: slot_parser,
                slot_position: 2,
                spaceA: slotsHaveSecionTitle ? slot2_title : null,
                spaceB: slot2_slotList,
                space_bottom: slot2_space_bottom
            } }));
    }
    if (type === 'template30') {
        var slotLeft_block = selectTemplateFromTheme({ block: 'slot30', slot: slot1, templates: templates });
        var slotCenter_block = selectTemplateFromTheme({ block: 'slot30', slot: slot2, templates: templates });
        var slotRight_block = selectTemplateFromTheme({ block: 'slot30', slot: slot3, templates: templates });
        var slotLeft_layout = selectLayoutFromTemplate({ block: slotLeft_block, slot: slot1 });
        var slotCenter_layout = selectLayoutFromTemplate({ block: slotCenter_block, slot: slot2 });
        var slotRight_layout = selectLayoutFromTemplate({ block: slotRight_block, slot: slot3 });
        var slot1_spaces = selectLayoutColsFromSlot(slot1 === null || slot1 === void 0 ? void 0 : slot1.len1, slotLeft_block.spaces);
        var slot2_spaces = selectLayoutColsFromSlot(slot2 === null || slot2 === void 0 ? void 0 : slot2.len1, slotCenter_block.spaces);
        var slot3_spaces = selectLayoutColsFromSlot(slot3 === null || slot3 === void 0 ? void 0 : slot3.len1, slotRight_block.spaces);
        var slotsHaveSecionTitle = (slot1 === null || slot1 === void 0 ? void 0 : slot1.title) !== '' || (slot2 === null || slot2 === void 0 ? void 0 : slot2.title) !== '' || (slot3 === null || slot3 === void 0 ? void 0 : slot3.title) !== '';
        /** * Carousel Props */
        var slotLeft_carousel = get(slotLeft_block, 'carousel', {});
        var slotCenter_carousel = get(slotCenter_block, 'carousel', {});
        var slotRight_carousel = get(slotRight_block, 'carousel', {});
        /** * Slot Teaser mb */
        var slot1_space_bottom = get(slotLeft_block, 'space_bottom', []);
        var slot2_space_bottom = get(slotCenter_block, 'space_bottom', []);
        var slot3_space_bottom = get(slotRight_block, 'space_bottom', []);
        return (React.createElement(Template33, { slotAds: {
                column_items: 0,
                column_padding: 0,
                layouts: slotLeft_layout,
                preview: preview,
                site_data: site_data,
                slot: [],
                slot_parser: slot_parser,
                spaceB: slot4_slotList,
                spaceTopLeft: slot5_slotList,
                spaceTopCenter: slot6_slotList,
                spaceTopRight: slot7_slotList,
            }, slotLeft: {
                amp: amp,
                bgcolor: slot1 === null || slot1 === void 0 ? void 0 : slot1.bgcolor,
                color: slot1 === null || slot1 === void 0 ? void 0 : slot1.color,
                carousel: slotLeft_carousel,
                column_items: slot1_spaces + 1,
                column_padding: slot1_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                layouts: slotLeft_layout,
                min_height: slotLeft_block.min_height,
                order: slot1 === null || slot1 === void 0 ? void 0 : slot1.order,
                more: slot1 === null || slot1 === void 0 ? void 0 : slot1.more,
                more_title: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_title,
                more_link: slot1 === null || slot1 === void 0 ? void 0 : slot1.more_link,
                pagination: slot1 === null || slot1 === void 0 ? void 0 : slot1.pagination,
                preview: preview,
                search_len: slot1 === null || slot1 === void 0 ? void 0 : slot1.search_len,
                site_data: site_data,
                slot: slot1 === null || slot1 === void 0 ? void 0 : slot1.list1,
                slot_parser: slot_parser,
                slot_position: 1,
                spaceA: slotsHaveSecionTitle ? slot1_title : null,
                spaceB: slot1_slotList,
                space_bottom: slot1_space_bottom
            }, slotCenter: {
                amp: amp,
                bgcolor: slot2 === null || slot2 === void 0 ? void 0 : slot2.bgcolor,
                color: slot2 === null || slot2 === void 0 ? void 0 : slot2.color,
                carousel: slotCenter_carousel,
                column_items: slot2_spaces + 1,
                column_padding: slot2_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                layouts: slotCenter_layout,
                min_height: slotCenter_block.min_height,
                order: slot2 === null || slot2 === void 0 ? void 0 : slot2.order,
                more: slot2 === null || slot2 === void 0 ? void 0 : slot2.more,
                more_title: slot2 === null || slot2 === void 0 ? void 0 : slot2.more_title,
                more_link: slot2 === null || slot2 === void 0 ? void 0 : slot2.more_link,
                pagination: slot2 === null || slot2 === void 0 ? void 0 : slot2.pagination,
                preview: preview,
                search_len: slot2 === null || slot2 === void 0 ? void 0 : slot2.search_len,
                site_data: site_data,
                slot: slot2 === null || slot2 === void 0 ? void 0 : slot2.list1,
                slot_parser: slot_parser,
                slot_position: 2,
                spaceA: slotsHaveSecionTitle ? slot2_title : null,
                spaceB: slot2_slotList,
                space_bottom: slot2_space_bottom
            }, slotRight: {
                amp: amp,
                bgcolor: slot3 === null || slot3 === void 0 ? void 0 : slot3.bgcolor,
                color: slot3 === null || slot3 === void 0 ? void 0 : slot3.color,
                carousel: slotRight_carousel,
                column_items: slot3_spaces + 1,
                column_padding: slot3_spaces,
                domain: domain,
                eventTracking: eventTracking,
                fallback_image_url: fallback_image_url,
                layouts: slotRight_layout,
                min_height: slotRight_block.min_height,
                order: slot3 === null || slot3 === void 0 ? void 0 : slot3.order,
                more: slot3 === null || slot3 === void 0 ? void 0 : slot3.more,
                more_title: slot3 === null || slot3 === void 0 ? void 0 : slot3.more_title,
                more_link: slot3 === null || slot3 === void 0 ? void 0 : slot3.more_link,
                pagination: slot3 === null || slot3 === void 0 ? void 0 : slot3.pagination,
                preview: preview,
                search_len: slot3 === null || slot3 === void 0 ? void 0 : slot3.search_len,
                site_data: site_data,
                slot: slot3 === null || slot3 === void 0 ? void 0 : slot3.list1,
                slot_parser: slot_parser,
                slot_position: 3,
                spaceA: slotsHaveSecionTitle ? slot3_title : null,
                spaceB: slot3_slotList,
                space_bottom: slot3_space_bottom
            } }));
    }
    return React.createElement("pre", null, "template not found");
};
var index$1 = withTheme(PageBlock);

function getMenuPosition(_a) {
    var menuAnchor = _a.menuAnchor;
    if (menuAnchor === 'left') {
        return "\n      left: 0px;\n    ";
    }
    if (menuAnchor === 'right') {
        return "\n      right: 0px;\n    ";
    }
}
function getBackgroundColor(_a) {
    var $backgroundColor = _a.$backgroundColor, theme = _a.theme;
    var color = get(theme.colors, $backgroundColor, '');
    return "background-color: ".concat(color, ";");
}
function getHeight(_a) {
    var $height = _a.$height;
    return "height: ".concat($height, ";");
}
function getResponsiveWidth(_a) {
    var theme = _a.theme, $width = _a.$width;
    return "\n    width: ".concat($width[0], ";\n    @media (min-width: ").concat(theme.queries.md, ") {\n      width: ").concat($width[1], ";\n    }\n  ");
}
var Backdrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  z-index: 10;\n"], ["\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  z-index: 10;\n"])));
var Content = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  display: block;\n  overflow-y: auto;\n  position: fixed;\n  top: 0px;\n  z-index: 100;\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  display: block;\n  overflow-y: auto;\n  position: fixed;\n  top: 0px;\n  z-index: 100;\n"])), padding, getMenuPosition, getBackgroundColor, getHeight, getResponsiveWidth);
var AmpMenuContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  amp-sidebar {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n"], ["\n  amp-sidebar {\n    ", ";\n    ", ";\n    ", ";\n    ", ";\n  }\n"])), padding, getBackgroundColor, getHeight, getResponsiveWidth);
var WebMenuContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  .Prensa_sidemenu_content[open] {\n    animation-name: Prensa_Sidemenu_slideInLeft;\n    animation-duration: 233ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n  }\n  .Prensa_sidemenu_content[hidden] {\n    animation-name: Prensa_Sidemenu_slideOutLeft;\n    animation-duration: 300ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n    top: -8000px;\n    transform: translateX(-100%);\n    transition: top 0.01s 1s;\n  }\n  .Prensa_sidemenu_backdrop[open] {\n    animation-name: Prensa_Sidemenu_backdropIn;\n    animation-duration: 233ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n  }\n  .Prensa_sidemenu_backdrop[hidden] {\n    animation-name: Prensa_Sidemenu_backdropOut;\n    animation-duration: 300ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n  }\n  @keyframes Prensa_Sidemenu_slideInLeft {\n    0% { transform: translateX(-100%); }\n    100% { transform: translateX(0%); }\n  }\n  @keyframes Prensa_Sidemenu_slideOutLeft {\n    0% { transform: translateX(0%); }\n    100% { transform: translateX(-100%); }\n  }\n  @keyframes Prensa_Sidemenu_backdropIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n  }\n  @keyframes Prensa_Sidemenu_backdropOut {\n    0% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n"], ["\n  .Prensa_sidemenu_content[open] {\n    animation-name: Prensa_Sidemenu_slideInLeft;\n    animation-duration: 233ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n  }\n  .Prensa_sidemenu_content[hidden] {\n    animation-name: Prensa_Sidemenu_slideOutLeft;\n    animation-duration: 300ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n    top: -8000px;\n    transform: translateX(-100%);\n    transition: top 0.01s 1s;\n  }\n  .Prensa_sidemenu_backdrop[open] {\n    animation-name: Prensa_Sidemenu_backdropIn;\n    animation-duration: 233ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n  }\n  .Prensa_sidemenu_backdrop[hidden] {\n    animation-name: Prensa_Sidemenu_backdropOut;\n    animation-duration: 300ms;\n    animation-fill-mode: forwards;\n    animation-timing-function: cubic-bezier(0,0,.21,1);\n  }\n  @keyframes Prensa_Sidemenu_slideInLeft {\n    0% { transform: translateX(-100%); }\n    100% { transform: translateX(0%); }\n  }\n  @keyframes Prensa_Sidemenu_slideOutLeft {\n    0% { transform: translateX(0%); }\n    100% { transform: translateX(-100%); }\n  }\n  @keyframes Prensa_Sidemenu_backdropIn {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n  }\n  @keyframes Prensa_Sidemenu_backdropOut {\n    0% { opacity: 1; }\n    100% { opacity: 0; }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var AmpMenu = function (_a) {
    var backgroundColor = _a.backgroundColor, children = _a.children, height = _a.height, id = _a.id, layout = _a.layout, menuAnchor = _a.menuAnchor, px = _a.px, py = _a.py, width = _a.width;
    return (React.createElement(AmpMenuContainer, { px: px, py: py, "$backgroundColor": backgroundColor, "$height": height, "$width": width },
        React.createElement("amp-sidebar", { id: id, layout: layout, side: menuAnchor }, children)));
};

var Menu = function (_a) {
    var backgroundColor = _a.backgroundColor, children = _a.children, close = _a.close, height = _a.height, menuAnchor = _a.menuAnchor, open = _a.open, px = _a.px, py = _a.py, width = _a.width;
    return (React.createElement(WebMenuContainer, null,
        React.createElement(Backdrop, { className: 'Prensa_sidemenu_backdrop', open: open, hidden: !open, onClick: close }),
        React.createElement(Content, { className: 'Prensa_sidemenu_content', open: open, hidden: !open, px: px, py: py, menuAnchor: menuAnchor, "$backgroundColor": backgroundColor, "$height": height, "$width": width }, children)));
};

/**
 * Prensa | SideMenu
 */
var SideMenu = function (_a) {
    var amp = _a.amp, otherProps = __rest(_a, ["amp"]);
    if (amp) {
        return React.createElement(AmpMenu, __assign({}, otherProps));
    }
    else {
        return React.createElement(Menu, __assign({}, otherProps));
    }
};
SideMenu.defaultProps = {
    backgroundColor: 'white',
    height: '100vh',
    layout: 'nodisplay',
    menuAnchor: 'left',
    width: ['300px', '360px']
};

const SocialMedias = props => {
  const {
    content
  } = props;
  if (!content) return null;
  const propsSocialMedia = {
    align: 'row evenly'
  };
  const propsSocialCirlce = {
    mr: '1',
    custom: 'social-circle',
    'md': {
      mr: '0',
      ml: '1'
    }
  };
  return /*#__PURE__*/React.createElement(Block$1, propsSocialMedia, map(content, (item, k) => /*#__PURE__*/React.createElement("a", {
    href: item.path,
    key: k
  }, /*#__PURE__*/React.createElement(Block$1, propsSocialCirlce, item.icon))));
};

SocialMedias.propTypes = {
  content: PropTypes.array.isRequired
};

const parseColorVariation = props => {
  if (props.transparent === true) return `
    color: ${props.theme.parseColor(props, props.theme, 'subjectColor')};
  `;
  return `
    color: ${props.theme.colors.white};
  `;
};

const parseBackgroundVariation = props => {
  if (props.transparent === true) return 'background-color: transparent;';
  return `background-color: ${props.theme.parseColor(props, props.theme, 'subjectColor')};`;
};

const Container$1 = styled.div.withConfig({
  displayName: "Subject__Container",
  componentId: "sc-yxg9ah-0"
})(["display:flex;align-items:center;justify-content:center;width:max-content;height:28px;", ";", ";", ";", ";"], props => props.theme.parsePadding(props, props.theme), props => props.theme.parseMargin(props, props.theme), props => props.theme.parseRadius(props, 'borderRadius'), props => parseBackgroundVariation(props));
const Typography = styled.span.withConfig({
  displayName: "Subject__Typography",
  componentId: "sc-yxg9ah-1"
})(["font-size:14px;text-transform:uppercase;font-family:", ";font-weight:", ";", ";"], props => props.theme.fonts.secondary, props => props.$fontWeight, props => parseColorVariation(props));

const Subject = ({
  children,
  color,
  radius,
  px,
  mb,
  style,
  transparent,
  weight
}) => {
  if (!children) return null;
  return /*#__PURE__*/React.createElement(Container$1, {
    subjectColor: color,
    borderRadius: radius,
    px: px,
    mb: mb,
    transparent: transparent,
    style: style
  }, /*#__PURE__*/React.createElement(Typography, {
    $fontWeight: weight,
    transparent: transparent
  }, children));
};

Subject.defaultProps = {
  px: 1,
  radius: 'alternative',
  transparent: false,
  weight: 700
};
Subject.propTypes = {
  /**
   * Recebe o valor/texto escrito que será exibido no componente
   */
  children: PropTypes.string.isRequired,

  /**
   * Recebe um token de cor
   */
  color: PropTypes.string,

  /**
   * Ativa/desativa a variação transparente
   */
  transparent: PropTypes.bool,

  /**
   * Prop que permite estilo customizado inline
   */
  style: PropTypes.object,

  /**
   * Permite alterar a variação de border-radius para o componente
   */
  radius: PropTypes.oneOf([false, 'default', 'alternative']),

  /**
   * Permite alterar o espaçamento interno horizontal do componente
   */
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Permite alterar a margem aplicada abaixo do componente
   */
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Permite alterar o peso da fonte
   */
  weight: PropTypes.oneOf([300, 400, 500, 600, 700])
};
var index = withTheme(Subject);

var TemplateContainer = function (_a) {
    var background = _a.background, children = _a.children, _b = _a.mb, mb = _b === void 0 ? [0, 0] : _b, _c = _a.mt, mt = _c === void 0 ? [0, 0] : _c, theme = _a.theme;
    return (React.createElement(Block$1, { align: 'column', alignx: 'center', bgColor: background, width: '100%' },
        React.createElement(Block$1, { mb: mb[0], mt: mt[0], width: '100%', lg: {
                maxWidth: theme.queries.xl,
                mb: mb[1],
                mt: mt[1],
                width: 'calc(100% - 32px)'
            } }, children)));
};
var TemplateContainer$1 = withTheme(TemplateContainer);

var IcBioFacebook = function (_a) {
    var color = _a.color, href = _a.href;
    return (React.createElement(Link$1, { href: href, "aria-label": 'Logo Facebook', target: '_blank', rel: 'noreferrer', title: 'Facebook', mr: 3 },
        React.createElement(Icon, { color: color, width: '24', height: '24', viewBox: '0 0 24 24' },
            React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M0.5232 2.6208C0 3.648 0 4.992 0 7.68V16.32C0 19.008 0 20.352 0.5232 21.3792C0.983385 22.2823 1.71766 23.0166 2.6208 23.4768C3.648 24 4.992 24 7.68 24H16.32C19.008 24 20.352 24 21.3792 23.4768C22.2823 23.0166 23.0166 22.2823 23.4768 21.3792C24 20.352 24 19.008 24 16.32V7.68C24 4.992 24 3.648 23.4768 2.6208C23.0166 1.71766 22.2823 0.983385 21.3792 0.5232C20.352 0 19.008 0 16.32 0H7.68C4.992 0 3.648 0 2.6208 0.5232C1.71766 0.983385 0.983385 1.71766 0.5232 2.6208V2.6208ZM12.894 20.76V12.6684H16.302L16.8156 9.6516H12.894V8.244C12.8876 7.7232 13.0883 7.22118 13.4519 6.84831C13.8156 6.47544 14.3124 6.26224 14.8332 6.2556H16.8612V3.24H14.8332C13.5251 3.25959 12.2783 3.79784 11.367 4.73643C10.4556 5.67501 9.95428 6.93709 9.9732 8.2452V9.6516H7.1412V12.6684H9.9732V20.76H12.894Z', fill: '#5C637A' }))));
};

var IcBioInstagram = function (_a) {
    var color = _a.color, href = _a.href;
    return (React.createElement(Link$1, { href: href, "aria-label": 'Logo Instagram', target: '_blank', rel: 'noreferrer', title: 'Instagram', mr: 3 },
        React.createElement(Icon, { color: color, width: '24', height: '24', viewBox: '0 0 24 24' },
            React.createElement("path", { d: 'M12.0004 8.3999C11.2884 8.3999 10.5924 8.61104 10.0003 9.00661C9.40832 9.40219 8.9469 9.96443 8.67443 10.6222C8.40195 11.2801 8.33066 12.0039 8.46957 12.7022C8.60847 13.4006 8.95134 14.042 9.45481 14.5455C9.95828 15.049 10.5997 15.3918 11.2981 15.5307C11.9964 15.6696 12.7202 15.5983 13.3781 15.3259C14.0359 15.0534 14.5981 14.592 14.9937 14C15.3893 13.4079 15.6004 12.7119 15.6004 11.9999C15.6004 11.0451 15.2211 10.1294 14.546 9.45432C13.8708 8.77919 12.9552 8.3999 12.0004 8.3999Z', fill: '#5C637A' }),
            React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M0.5232 2.6208C0 3.648 0 4.992 0 7.68V16.32C0 19.008 0 20.352 0.5232 21.3792C0.983385 22.2823 1.71766 23.0166 2.6208 23.4768C3.648 24 4.992 24 7.68 24H16.32C19.008 24 20.352 24 21.3792 23.4768C22.2823 23.0166 23.0166 22.2823 23.4768 21.3792C24 20.352 24 19.008 24 16.32V7.68C24 4.992 24 3.648 23.4768 2.6208C23.0166 1.71766 22.2823 0.983385 21.3792 0.5232C20.352 0 19.008 0 16.32 0H7.68C4.992 0 3.648 0 2.6208 0.5232C1.71766 0.983385 0.983385 1.71766 0.5232 2.6208ZM19.2504 6.1008C19.4977 6.1008 19.7395 6.02747 19.9451 5.89007C20.1507 5.75267 20.311 5.55739 20.4056 5.32891C20.5003 5.10043 20.525 4.84901 20.4768 4.60646C20.4285 4.36391 20.3094 4.14111 20.1346 3.96623C19.9597 3.79136 19.7369 3.67227 19.4943 3.62403C19.2518 3.57578 19.0004 3.60054 18.7719 3.69518C18.5434 3.78982 18.3481 3.95009 18.2107 4.15572C18.0733 4.36134 18 4.60309 18 4.8504C18.0003 5.18182 18.1322 5.49956 18.3667 5.73379C18.6011 5.96803 18.919 6.0996 19.2504 6.0996V6.1008ZM6 12C6 10.8133 6.35189 9.65327 7.01118 8.66658C7.67047 7.67988 8.60754 6.91085 9.7039 6.45672C10.8003 6.0026 12.0067 5.88378 13.1705 6.11529C14.3344 6.3468 15.4035 6.91824 16.2426 7.75736C17.0818 8.59647 17.6532 9.66557 17.8847 10.8295C18.1162 11.9933 17.9974 13.1997 17.5433 14.2961C17.0892 15.3925 16.3201 16.3295 15.3334 16.9888C14.3467 17.6481 13.1867 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12Z', fill: '#5C637A' }))));
};

var IcBioLinkedin = function (_a) {
    var color = _a.color, href = _a.href;
    return (React.createElement(Link$1, { href: href, "aria-label": 'Logo Linkedin', target: '_blank', rel: 'noreferrer', title: 'Linkedin', mr: 3 },
        React.createElement(Icon, { color: color, width: '24', height: '24', viewBox: '0 0 24 24' },
            React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M0.5232 2.6208C0 3.648 0 4.992 0 7.68V16.32C0 19.008 0 20.352 0.5232 21.3792C0.983385 22.2823 1.71766 23.0166 2.6208 23.4768C3.648 24 4.992 24 7.68 24H16.32C19.008 24 20.352 24 21.3792 23.4768C22.2823 23.0166 23.0166 22.2823 23.4768 21.3792C24 20.352 24 19.008 24 16.32V7.68C24 4.992 24 3.648 23.4768 2.6208C23.0166 1.71766 22.2823 0.983385 21.3792 0.5232C20.352 0 19.008 0 16.32 0H7.68C4.992 0 3.648 0 2.6208 0.5232C1.71766 0.983385 0.983385 1.71766 0.5232 2.6208ZM4.9992 8.0004V18.9996H7.9992V8.0004H4.9992ZM4.7508 4.968C4.75341 5.3137 4.8583 5.65089 5.05226 5.93707C5.24622 6.22325 5.52056 6.44559 5.84069 6.57609C6.16083 6.70658 6.51244 6.73937 6.85118 6.67033C7.18993 6.6013 7.50066 6.43352 7.74419 6.18814C7.98773 5.94277 8.15317 5.6308 8.21966 5.29154C8.28615 4.95228 8.25072 4.60093 8.11783 4.28179C7.98493 3.96264 7.76053 3.68997 7.47291 3.49817C7.18528 3.30637 6.84731 3.20401 6.5016 3.204C6.03556 3.20591 5.58934 3.39279 5.26104 3.72357C4.93273 4.05435 4.74921 4.50196 4.7508 4.968ZM17.0016 18.9996H20.0016V12.24C20.0016 6.9864 14.3976 7.1772 13.0008 9.7632V8.0004H10.0008V18.9996H13.0008V13.3956C13.0008 10.2828 17.0016 10.0284 17.0016 13.3956V18.9996Z', fill: '#5C637A' }))));
};

var IcBioTwitter = function (_a) {
    var color = _a.color, href = _a.href;
    return (React.createElement(Link$1, { href: href, "aria-label": 'Logo Twitter', target: '_blank', rel: 'noreferrer', title: 'Twitter' },
        React.createElement(Icon, { color: color, width: '24', height: '24', viewBox: '0 0 24 24' },
            React.createElement("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M0 7.68C0 4.992 0 3.648 0.5232 2.6208C0.983385 1.71766 1.71766 0.983385 2.6208 0.5232C3.648 0 4.992 0 7.68 0H16.32C19.008 0 20.352 0 21.3792 0.5232C22.2823 0.983385 23.0166 1.71766 23.4768 2.6208C24 3.648 24 4.992 24 7.68V16.32C24 19.008 24 20.352 23.4768 21.3792C23.0166 22.2823 22.2823 23.0166 21.3792 23.4768C20.352 24 19.008 24 16.32 24H7.68C4.992 24 3.648 24 2.6208 23.4768C1.71766 23.0166 0.983385 22.2823 0.5232 21.3792C0 20.352 0 19.008 0 16.32V7.68ZM18.2088 9.12C18.2392 10.3421 18.0271 11.558 17.5848 12.6976C17.1425 13.8372 16.4787 14.8779 15.6317 15.7594C14.7848 16.6409 13.7716 17.3458 12.6506 17.8334C11.5296 18.3209 10.3231 18.5815 9.1008 18.6C7.35622 18.598 5.65117 18.0803 4.2 17.112C4.45275 17.1436 4.70728 17.1588 4.962 17.1576C6.41313 17.1562 7.81876 16.6511 8.9388 15.7284C8.2602 15.7075 7.60558 15.4726 7.0685 15.0573C6.53143 14.642 6.13938 14.0675 5.9484 13.416C6.42635 13.5099 6.91969 13.4897 7.3884 13.3572C6.65194 13.1875 5.99581 12.7707 5.52922 12.1762C5.06264 11.5817 4.81376 10.8453 4.824 10.0896V10.0452C5.26597 10.299 5.76307 10.4415 6.2724 10.4604C5.8299 10.1464 5.46954 9.73049 5.22181 9.24777C4.97408 8.76505 4.84627 8.22977 4.8492 7.6872C4.84676 7.09957 4.99509 6.52114 5.28 6.0072C6.06626 7.02658 7.06256 7.86492 8.20133 8.46536C9.3401 9.0658 10.5947 9.4143 11.88 9.4872C11.8275 9.23736 11.8001 8.98289 11.7984 8.7276C11.7836 7.86232 12.1122 7.02641 12.7122 6.40278C13.3122 5.77916 14.1348 5.4186 15 5.4C15.4414 5.40133 15.8775 5.49575 16.2799 5.67709C16.6823 5.85844 17.0419 6.12262 17.3352 6.4524C18.0575 6.30696 18.7483 6.03432 19.3752 5.6472C19.1413 6.41137 18.6404 7.06598 17.964 7.4916C18.5995 7.40894 19.2186 7.22967 19.8 6.96C19.3738 7.62615 18.8326 8.21124 18.2016 8.688C18.2088 8.8368 18.2088 8.9796 18.2088 9.12Z', fill: '#5C637A' }))));
};

var Bio = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography$2, __assign({ element: 'span', mb: 2, textAlign: 'center', width: '100%', lg: { textAlign: 'left' } }, otherProps), children));
};
var Name = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography$2, __assign({ element: 'span', mb: 2, textAlign: 'center', width: '100%', lg: { textAlign: 'left' } }, otherProps), children));
};
var Title = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Typography$2, __assign({ element: 'span', textAlign: 'center', width: '100%', lg: { textAlign: 'left' } }, otherProps), children));
};
// Containers
var Container = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(Block$1, __assign({ aligny: 'middle', alignx: 'center', width: 'calc(100% - 2px)' }, otherProps), children));
};
var ImageContainer = function (_a) {
    var children = _a.children, _b = _a.mb, mb = _b === void 0 ? [2, '0px'] : _b, _c = _a.mr, mr = _c === void 0 ? [undefined, 2] : _c;
    return (React.createElement(Block$1, { alignx: 'center', mb: mb[0], mr: mr[0], width: '100%', lg: {
            width: 'unset',
            mb: mb[1],
            mr: mr[1],
        } }, children));
};
// Wraps
var ContentWrap = function (_a) {
    var children = _a.children;
    return (React.createElement(Block$1, { align: 'column', aligny: 'middle', px: 2, py: 2, width: 'calc(100% - 32px)', lg: { align: 'row' } }, children));
};
var ImageWrap = function (_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? ['80px', '104px'] : _b, otherProps = __rest(_a, ["children", "size"]);
    return (React.createElement(Block$1, __assign({ height: size[0], minWidth: size[0], width: size[0], lg: {
            height: size[1],
            minWidth: size[1],
            width: size[1]
        } }, otherProps), children));
};
var SocialMediasWrap = function (_a) {
    var children = _a.children;
    return (React.createElement(Block$1, { align: 'row', alignx: 'center', width: '100%', lg: { custom: 'justify-content: flex-start' } }, children));
};
var TextWrap = function (_a) {
    var children = _a.children;
    return (React.createElement(Block$1, { align: 'column', width: '100%' }, children));
};

var AuthorBio = function (_a) {
    var amp = _a.amp, bio = _a.bio, bioProps = _a.bioProps, containerProps = _a.containerProps, href = _a.href, imagePath = _a.imagePath, imageProps = _a.imageProps, name = _a.name, nameProps = _a.nameProps, title = _a.title, titleProps = _a.titleProps, facebookUrl = _a.facebookUrl, instagramUrl = _a.instagramUrl, linkedinUrl = _a.linkedinUrl, twitterUrl = _a.twitterUrl;
    var imageSize = get(imageProps, 'size', ['80px', '104px']);
    return (React.createElement(Container, __assign({}, containerProps),
        React.createElement(ContentWrap, null,
            React.createElement(ImageContainer, null,
                React.createElement(Link$1, { path: href },
                    React.createElement(ImageWrap, __assign({}, imageProps),
                        React.createElement(Image$1, { amp: amp, custom_class: 'image-with-radius', title: name, layout_desktop: {
                                enabled: true,
                                height: imageSize[1],
                                width: imageSize[1],
                                path: imagePath,
                                type: 'responsive'
                            }, layout_mobile: {
                                enabled: true,
                                height: imageSize[0],
                                width: imageSize[0],
                                path: imagePath,
                                type: 'responsive'
                            } })))),
            React.createElement(TextWrap, null,
                title &&
                    React.createElement(Block$1, { alignx: 'center', lg: {
                            align: 'row',
                            alignx: 'left'
                        }, mb: 1, width: '100%' },
                        React.createElement(Link$1, { path: href },
                            React.createElement(Title, __assign({}, titleProps), title))),
                name &&
                    React.createElement(Name, __assign({}, nameProps), name),
                bio &&
                    React.createElement(Bio, __assign({}, bioProps), bio),
                React.createElement(SocialMediasWrap, null,
                    facebookUrl && React.createElement(IcBioFacebook, { href: facebookUrl }),
                    instagramUrl && React.createElement(IcBioInstagram, { href: instagramUrl }),
                    linkedinUrl && React.createElement(IcBioLinkedin, { href: linkedinUrl }),
                    twitterUrl && React.createElement(IcBioTwitter, { href: twitterUrl }))))));
};

var SUBJECT_DEFAULT = {
    bg_color: 'white',
    color: 'primary1',
    enabled: true,
    font_size: ['14px', '14px'],
    line_height: ['16px', '16px'],
    variant: 'default'
};
var SUBJECT_FILLED = {
    bg_color: 'primary1',
    color: 'white',
    enabled: true,
    font_size: ['16px', '16px'],
    line_height: ['18px', '18px'],
    variant: 'filled'
};

/**
 * CreateTeaser function docs
 * @param {object} data - An object that define properties for a new teaser
 */
function CreateTeaser(data) {
    return data;
}

/**
 * CreateTemplate function docs
 * @param {object} data - An object that define properties for a new template
 */
function CreateTemplate(data) {
    return data;
}

/**
 * IconMenu example component
 * @param props
 * @returns Prensa Icon component with SVG path
 */
var IconMenu = function (props) {
    return (React.createElement(Icon, __assign({ width: "18px", height: "12px", viewBox: "0 0 18 12", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" })));
};
var ICONS = {
    IconMenu: React.createElement(IconMenu, null)
};

const parseBgColor = (props, theme) => {
  if (!props || !props.bgColor) return '';
  const selected = get(theme, `colors.${props.bgColor}`, '');
  if (!selected) return '';
  return `background-color: ${selected};`;
};

const parseFontColor = (props, theme) => {
  if (!props || !props.fontColor) return '';
  const selected = get(theme, `colors.${props.fontColor}`, '');
  if (!selected) return '';
  return `color: ${selected};`;
};

const parseColor = (props, theme, propName) => {
  if (!propName) return console.error('PRENSA :: Não existe nome de prop para buscar no parseColor');
  const propValue = get(props, propName, 'activeColor');
  if (propValue.startsWith('#')) return propValue;
  const parsedValue = get(theme, `colors.${propValue}`, '');
  if (!parsedValue) return console.error(`PRENSA :: Não existe valor correspondente para a prop de nome ${propName} passada na função parseColor`);
  return parsedValue;
};

const parseCustom = props => {
  if (!props || !props.custom) return '';
  let object = [];
  object.push(`${props.custom}`);
  return object.join('');
};

const parseCustomDef = props => {
  if (!props || !props.customDef) return '';
  let object = [];

  switch (props.customDef) {
    case 'demo':
      object.push(`
        background-color: rgba(1, 22, 39, 0.2);
        color: rgba(255, 55, 255, 1);
        font-weight: bold;
        height: 100px;
        span { 
          border: 1px solid rgba(255, 55, 255, 1);
          font-size: 11px;
          padding: 3px;
          margin: 0px; 
        }
      `);
  }

  return object.join('');
};

const parseFontFamily = (props, theme) => {
  if (!props) return '';
  const selected = theme.fonts[props.typography];
  if (!selected) return '';
  return `font-family: ${selected};`;
};

const parseMargin = (props, theme) => {
  if (!props) return '';
  const {
    mx,
    my,
    mt,
    mr,
    mb,
    ml
  } = props;
  let object = [];
  let factor = theme.factors.margin;
  mx !== undefined && isNaN(mx) ? object.push(`
      margin-left: ${mx}; 
      margin-right: ${mx};`) : mx && object.push(`
      margin-left: ${factor * mx}px; 
      margin-right: ${factor * mx}px;
    `);
  my !== undefined && isNaN(my) ? object.push(`
      margin-top: ${my}; 
      margin-bottom: ${my};`) : my && object.push(`
      margin-top: ${factor * my}px; 
      margin-bottom: ${factor * my}px;
    `);
  mt !== undefined && isNaN(mt) ? object.push(`
      margin-top: ${mt};`) : mt && object.push(`
      margin-top: ${factor * mt}px;
    `);
  mr !== undefined && isNaN(mr) ? object.push(`
      margin-right: ${mr};`) : mr && object.push(`
      margin-right: ${factor * mr}px;
    `);
  mb !== undefined && isNaN(mb) ? object.push(`
      margin-bottom: ${mb};`) : mb && object.push(`
      margin-bottom: ${factor * mb}px;
    `);
  ml !== undefined && isNaN(ml) ? object.push(`
      margin-left: ${ml};`) : ml && object.push(`
      margin-left: ${factor * ml}px;
    `);
  return object.join('');
};

const parsePadding = (props, theme) => {
  if (!props) return '';
  const {
    px,
    py,
    pt,
    pr,
    pb,
    pl
  } = props;
  let object = [];
  let factor = theme.factors.padding;
  px !== undefined && isNaN(px) ? object.push(`
      padding-left: ${px}; 
      padding-right: ${px};
    `) : px && object.push(`
      padding-left: ${factor * px}px; 
      padding-right: ${factor * px}px
    ;`);
  py !== undefined && isNaN(py) ? object.push(`
      padding-top: ${py}; 
      padding-bottom: ${py};
    `) : py && object.push(`
      padding-top: ${factor * py}px; 
      padding-bottom: ${factor * py}px
    ;`);
  pt !== undefined && isNaN(pt) ? object.push(`
      padding-top: ${pt};
    `) : pt && object.push(`
      padding-top: ${factor * pt}px
    ;`);
  pr !== undefined && isNaN(pr) ? object.push(`
      padding-right: ${pr};
    `) : pr && object.push(`
      padding-right: ${factor * pr}px
    ;`);
  pb !== undefined && isNaN(pb) ? object.push(`
      padding-bottom: ${pb};
    `) : pb && object.push(`
      padding-bottom: ${factor * pb}px
    ;`);
  pl !== undefined && isNaN(pl) ? object.push(`
      padding-left: ${pl};
    `) : pl && object.push(`
      padding-left: ${factor * pl}px
    ;`);
  return object.join('');
};

const parseRadius = (props, propName) => {
  const propValue = get(props, propName);
  if (!propValue) return '';
  const selected = theme.radius[propValue];

  if (!selected) {
    console.error(`PRENSA :: Erro ao traduzir token "${propValue}" no parseRadius`);
    return '';
  }

  return `border-radius: ${selected}`;
};

//TODO: Move parsers to styled-system
var default_theme = {
    fonts: {
        primary: 'Work Sans',
        secondary: 'Nunito Sans'
    },
    factors: {
        dimensions: 10,
        padding: 8,
        margin: 8,
    },
    icons: ICONS,
    queries: {
        xs: '360px',
        sm: '460px',
        md: '768px',
        lg: '1016px',
        xl: '1280px'
    },
    radius: {
        unset: '0px',
        alternative: '5px',
        default: '3px',
        rounded: '99px',
        circle: '50%'
    },
    teasers: {},
    templates: {},
    parseBgColor: parseBgColor,
    parseCustom: parseCustom,
    parseCustomDef: parseCustomDef,
    parseFontColor: parseFontColor,
    parseFontFamily: parseFontFamily,
    parseMargin: parseMargin,
    parsePadding: parsePadding,
    parseRadius: parseRadius,
    parseColor: parseColor,
};

/**
 * CreateTheme function docs
 * @param {object} data - An object that defines/overrides properties in theme
 */
function CreateTheme(data) {
    return merge(default_theme, data);
}
var theme = CreateTheme({});

export { AccordionEditorial, Article$1 as Article, AuthorBio, AuthorProfile, Block$1 as Block, Button$1 as Button, Carousel$1 as Carousel, Copyright, CreateTeaser, CreateTemplate, CreateTheme, Dialog, EditArea, index$4 as Embeds, ErrorPage, index$2 as Field, index$3 as Form, Icon, Image$1 as Image, ImageGallery, Link$1 as Link, index$1 as PageBlock, Pagination, SUBJECT_DEFAULT, SUBJECT_FILLED, SectionTitle$2 as SectionTitle, SideMenu, SocialMedias, Share as SocialShare, index as Subject, Template100, Template33, Template5050, Template7030, TemplateContainer$1 as TemplateContainer, Typography$2 as Typography, parseImagePath, theme };
//# sourceMappingURL=index.esm.js.map
