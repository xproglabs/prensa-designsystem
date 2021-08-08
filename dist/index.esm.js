import { get, map, filter, find, replace } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled, { withTheme, css } from 'styled-components';
import { FacebookShareButton as FacebookShareButton$1, TwitterShareButton as TwitterShareButton$1, WhatsappShareButton as WhatsappShareButton$1 } from 'react-share';
import { html2json } from 'html2json';
import InputMask from 'react-input-mask';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var dimensions = function dimensions(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$$width = _ref.$width,
      $width = _ref$$width === void 0 ? '' : _ref$$width,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? '' : _ref$maxWidth,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? '' : _ref$minWidth;
  var unit = get(theme, 'factors.dimensions', 10);
  var object = [];

  if (maxWidth) {
    if (typeof maxWidth === 'string') {
      object.push("max-width: ".concat(maxWidth, ";"));
    } else {
      object.push("max-width: ".concat(maxWidth * unit, "px;"));
    }
  }

  if (minWidth) {
    if (typeof minWidth === 'string') {
      object.push("min-width: ".concat(minWidth, ";"));
    } else {
      object.push("min-width: ".concat(minWidth * unit, "px;"));
    }
  }

  if ($width) {
    if (typeof $width === 'string') {
      object.push("width: ".concat($width, ";"));
    } else {
      object.push("width: ".concat($width * unit, "px;"));
    }
  }

  return object.join('');
};

var parseAlign = function parseAlign(props) {
  var align = get(props, 'align', undefined);
  var alignx = get(props, 'alignx', undefined);
  var aligny = get(props, 'aligny', undefined);
  var object = [];
  var alignItems = '';
  var display = 'flex';
  var flexDirection = '';
  var justifyContent = ''; // check if is column

  if (align === 'column') {
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


  if (align === 'row') {
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


  alignItems !== '' && object.push("align-items: ".concat(alignItems, ";"));
  object.push("display: ".concat(display, ";"));
  flexDirection !== '' && object.push("flex-direction: ".concat(flexDirection, ";"));
  justifyContent !== '' && object.push("justify-content: ".concat(justifyContent, ";")); // end

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

var parseHeight = function parseHeight(props, theme) {
  var unit = theme.factors.padding;
  var height = get(props, '$height', undefined);
  var fullHeight = get(props, 'fullHeight', undefined);
  var py = get(props, 'py', undefined);
  var pt = get(props, 'pt', undefined);
  var pb = get(props, 'pb', undefined);

  if (fullHeight) {
    if (py) {
      if (typeof py === 'string') return "height calc(100% - ".concat(py, " - ").concat(py, ")");
      return "height: calc(100% - ".concat(py * unit, "px - ").concat(py * unit, "px)");
    }

    if (py && pb) {
      if (typeof pt === 'string' && typeof pb === 'string') return "height calc(100% - ".concat(pt, " - ").concat(pb, ")");
      return "height: calc(100% - ".concat(pt * unit, "px - ").concat(pb * unit, "px)");
    }

    if (pt) {
      if (typeof pt === 'string') return "height calc(100% - ".concat(pt, ")");
      return "height: calc(100% - ".concat(pt * unit, "px)");
    }

    if (pb) {
      if (typeof pb === 'string') return "height calc(100% - ".concat(pb, ")");
      return "height calc(100% - ".concat(pb * unit, "px)");
    }

    return 'height: 100%';
  } else if (!height) {
    return '';
  } else if (typeof height === 'string') {
    if (py && fullHeight) return "height: calc(100% - ".concat(py, " - ").concat(py, ")");
    return "height: ".concat(height);
  } else {
    if (py && fullHeight) return "height: calc(100% - ".concat(height * theme.factors.dimensions, "px)");
    return "height: ".concat(height * theme.factors.dimensions, "px");
  }
};

var parseStyle$2 = function parseStyle(props, theme) {
  return "\n    ".concat(dimensions(_objectSpread2(_objectSpread2({}, props), {}, {
    theme: theme
  })), ";\n    ").concat(parseAlign(props), ";\n    ").concat(parseHeight(props, theme), ";\n    ").concat(theme.parseBgColor(props, theme), ";\n    ").concat(theme.parseFontColor(props, theme), ";\n    ").concat(theme.parseFontFamily(props, theme), ";\n    ").concat(theme.parseCustomDef(props, theme), ";\n    ").concat(theme.parseCustom(props, theme), ";\n    ").concat(theme.parseMargin(props, theme), ";\n    ").concat(theme.parsePadding(props, theme), ";\n  ");
};

var parseProps$2 = function parseProps(media, props) {
  switch (media) {
    case 'xs':
      return "\n        @media (min-width: ".concat(props.theme.queries.xs, ") {\n          ").concat(parseStyle$2(props.xs, props.theme), "\n        }\n      ");

    case 'sm':
      return "\n        @media (min-width: ".concat(props.theme.queries.sm, ") {\n          ").concat(parseStyle$2(props.sm, props.theme), "\n        }\n      ");

    case 'md':
      return "\n        @media (min-width: ".concat(props.theme.queries.md, ") {\n          ").concat(parseStyle$2(props.md, props.theme), "\n        }\n      ");

    case 'lg':
      return "\n        @media (min-width: ".concat(props.theme.queries.lg, ") {\n          ").concat(parseStyle$2(props.lg, props.theme), "\n        }\n      ");

    case 'xl':
      return "\n        @media (min-width: ".concat(props.theme.queries.xl, ") {\n          ").concat(parseStyle$2(props.xl, props.theme), "\n        }\n      ");

    default:
      return "".concat(parseStyle$2(props, props.theme));
  }
};

var Component = styled.div.withConfig({
  displayName: "Block__Component",
  componentId: "sc-179lk0t-0"
})(["", ";", ";", ";", ";", ";", ";"], function (props) {
  return parseProps$2('', props);
}, function (props) {
  return props.xs && parseProps$2('xs', props);
}, function (props) {
  return props.sm && parseProps$2('sm', props);
}, function (props) {
  return props.md && parseProps$2('md', props);
}, function (props) {
  return props.lg && parseProps$2('lg', props);
}, function (props) {
  return props.xl && parseProps$2('xl', props);
});

var Block = function Block(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      alignx = _ref.alignx,
      aligny = _ref.aligny,
      bgColor = _ref.bgColor,
      customDef = _ref.customDef,
      fontColor = _ref.fontColor,
      py = _ref.py,
      px = _ref.px,
      pt = _ref.pt,
      pr = _ref.pr,
      pb = _ref.pb,
      pl = _ref.pl,
      my = _ref.my,
      mx = _ref.mx,
      mt = _ref.mt,
      mr = _ref.mr,
      mb = _ref.mb,
      ml = _ref.ml,
      typography = _ref.typography,
      onClick = _ref.onClick,
      fullHeight = _ref.fullHeight,
      custom = _ref.custom,
      width = _ref.width,
      height = _ref.height,
      id = _ref.id,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth;

  var getXsProps = function getXsProps() {
    return xs && _objectSpread2(_objectSpread2({}, xs), {}, {
      $width: xs.width ? xs.width : width,
      $height: xs.height ? xs.height : height
    });
  };

  var getSmProps = function getSmProps() {
    return sm && _objectSpread2(_objectSpread2({}, sm), {}, {
      $width: sm.width ? sm.width : width,
      $height: sm.height ? sm.height : height
    });
  };

  var getMdProps = function getMdProps() {
    return md && _objectSpread2(_objectSpread2({}, md), {}, {
      $width: md.width ? md.width : width,
      $height: md.height ? md.height : height
    });
  };

  var getLgProps = function getLgProps() {
    return lg && _objectSpread2(_objectSpread2({}, lg), {}, {
      $width: lg.width ? lg.width : width,
      $height: lg.height ? lg.height : height
    });
  };

  var getXlProps = function getXlProps() {
    return xl && _objectSpread2(_objectSpread2({}, xl), {}, {
      $width: xl.width ? xl.width : width,
      $height: xl.height ? xl.height : height
    });
  };

  return /*#__PURE__*/React.createElement(Component, {
    className: className,
    align: align,
    alignx: alignx,
    aligny: aligny,
    bgColor: bgColor,
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
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
var Block$1 = withTheme(Block);

var Container$8 = function Container(_ref) {
  var children = _ref.children,
      maxWidth = _ref.maxWidth;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "column",
    alignx: "center",
    lg: {
      custom: "max-width: ".concat(maxWidth, ";")
    },
    width: "100%"
  }, children);
};
Container$8.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
var Content$4 = function Content(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    px: "3",
    width: "calc(100% - 48px)",
    lg: {
      px: '0px',
      width: '100%'
    }
  }, children);
};
Content$4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
var ContainerFeatured = function ContainerFeatured(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "column",
    aligny: "bottom",
    alignx: "center",
    bgColor: "neutral2",
    mb: "4",
    width: "100%"
  }, children);
};
ContainerFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
var ContentFeatured = function ContentFeatured(_ref4) {
  var children = _ref4.children,
      maxWidth = _ref4.maxWidth;
  return /*#__PURE__*/React.createElement(Block$1, {
    alignx: "left",
    custom: "\n      max-width: ".concat(maxWidth, ";\n      position: absolute;\n    "),
    px: "3",
    pb: "2",
    width: "calc(100% - 48px)"
  }, children);
};
ContentFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
var ContentImage = function ContentImage(_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    custom: "\n      opacity: 0.5;\n    ",
    lg: {
      height: '520px'
    },
    height: "420px",
    width: "100%"
  }, children);
};
ContentImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
var MaxWidth = function MaxWidth(_ref6) {
  var children = _ref6.children,
      maxWidth = _ref6.maxWidth;
  return /*#__PURE__*/React.createElement(Block$1, {
    custom: "max-width: ".concat(maxWidth, ";"),
    width: "100%"
  }, children);
};
MaxWidth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
var Page = function Page(_ref7) {
  var children = _ref7.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    lg: {
      align: 'column',
      alignx: 'center'
    },
    width: "100%"
  }, children);
};
Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

var align = function align(props) {
  var align = get(props, 'align', undefined);
  var alignx = get(props, 'alignx', undefined);
  var aligny = get(props, 'aligny', undefined);
  var object = [];
  var alignItems = '';
  var display = 'flex';
  var flexDirection = '';
  var justifyContent = ''; // check if is column

  if (align === 'column') {
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


  if (align === 'row') {
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


  alignItems !== '' && object.push("align-items: ".concat(alignItems, ";"));
  object.push("display: ".concat(display, ";"));
  flexDirection !== '' && object.push("flex-direction: ".concat(flexDirection, ";"));
  justifyContent !== '' && object.push("justify-content: ".concat(justifyContent, ";")); // end

  return object.join('');
};

var margin = function margin(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$mx = _ref.mx,
      mx = _ref$mx === void 0 ? '' : _ref$mx,
      _ref$my = _ref.my,
      my = _ref$my === void 0 ? '' : _ref$my,
      _ref$mt = _ref.mt,
      mt = _ref$mt === void 0 ? '' : _ref$mt,
      _ref$mr = _ref.mr,
      mr = _ref$mr === void 0 ? '' : _ref$mr,
      _ref$mb = _ref.mb,
      mb = _ref$mb === void 0 ? '' : _ref$mb,
      _ref$ml = _ref.ml,
      ml = _ref$ml === void 0 ? '' : _ref$ml,
      _ref$m = _ref.m,
      m = _ref$m === void 0 ? '' : _ref$m;
  var unit = get(theme, 'factors.margin', 8);
  var object = [];
  mt !== undefined && isNaN(mt) ? object.push("margin-top: ".concat(mt, ";")) : mt && object.push("margin-top: ".concat(unit * mt, "px;"));
  mr !== undefined && isNaN(mr) ? object.push("margin-right: ".concat(mr, ";")) : mr && object.push("margin-right: ".concat(unit * mr, "px;"));
  mb !== undefined && isNaN(mb) ? object.push("margin-bottom: ".concat(mb, ";")) : mb && object.push("margin-bottom: ".concat(unit * mb, "px;"));
  ml !== undefined && isNaN(ml) ? object.push("margin-left: ".concat(ml, ";")) : ml && object.push("margin-left: ".concat(unit * ml, "px;"));
  mx !== undefined && isNaN(mx) ? object.push("margin-left: ".concat(mx, ";margin-right: ").concat(mx, ";")) : mx && object.push("margin-left: ".concat(unit * mx, "px;margin-right: ").concat(unit * mx, "px;"));
  my !== undefined && isNaN(my) ? object.push("margin-top: ".concat(my, ";margin-bottom: ").concat(my, ";")) : my && object.push("margin-top: ".concat(unit * my, "px;margin-bottom: ").concat(unit * my, "px;"));
  m !== undefined && isNaN(m) ? object.push("margin: ".concat(m, ";")) : m && object.push("margin: ".concat(m * unit, "px;"));
  return object.join('');
};

var getMinWidthValue = function getMinWidthValue(_ref) {
  var $size = _ref.$size;
  if (!$size) return '';
  return "min-width: ".concat($size, "px");
};

var getItemMarginStyle = function getItemMarginStyle(_ref2) {
  var theme = _ref2.theme,
      itemProps = _ref2.itemProps;
  return margin(_objectSpread2({
    theme: theme
  }, itemProps));
};

var Container$7 = styled.div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1uztpcx-0"
})(["", ";", ";width:100%;amp-social-share[type=\"facebook\"]{", ";", ";background-image:", ";background-color:transparent;&:hover{opacity:80%;}}amp-social-share[type=\"twitter\"]{", ";", ";background-image:", ";background-color:transparent;&:hover{opacity:80%;}}amp-social-share[type=\"whatsapp\"]{", ";background-image:", ";background-color:transparent;&:hover{opacity:80%;}}@media (min-width:", "){width:50%;justify-content:flex-end;}"], align, margin, getMinWidthValue, getItemMarginStyle, function (props) {
  return "url(".concat(props.facebookPath, ")");
}, getMinWidthValue, getItemMarginStyle, function (props) {
  return "url(".concat(props.twitterPath, ")");
}, getMinWidthValue, function (props) {
  return "url(".concat(props.whatsappPath, ")");
}, function (props) {
  return props.theme.queries.md;
});

var _excluded$5 = ["fbappid", "size", "facebookPath", "facebookProps", "twitterPath", "twitterProps", "whatsappPath", "whatsappProps"];

var Share$1 = function Share(props) {
  var fbappid = props.fbappid,
      size = props.size,
      facebookPath = props.facebookPath,
      facebookProps = props.facebookProps,
      twitterPath = props.twitterPath,
      twitterProps = props.twitterProps,
      whatsappPath = props.whatsappPath,
      whatsappProps = props.whatsappProps,
      otherProps = _objectWithoutProperties(props, _excluded$5);

  return /*#__PURE__*/React.createElement(Container$7, _extends({
    facebookPath: fbappid ? facebookPath : null,
    twitterPath: twitterPath,
    whatsappPath: whatsappPath,
    $size: size
  }, otherProps), fbappid && /*#__PURE__*/React.createElement("amp-social-share", _extends({
    type: "facebook",
    width: size,
    height: size,
    "data-param-app_id": fbappid
  }, facebookProps)), twitterPath && /*#__PURE__*/React.createElement("amp-social-share", _extends({
    type: "twitter",
    width: size,
    height: size
  }, twitterProps)), whatsappPath && /*#__PURE__*/React.createElement("amp-social-share", _extends({
    type: "whatsapp",
    width: size,
    height: size
  }, whatsappProps)));
};

Share$1.defaultProps = {
  align: 'row',
  facebookPath: 'assets/facebook.svg',
  size: '24',
  twitterPath: 'assets/twitter.svg',
  whatsappPath: 'assets/whatsapp.svg'
};
Share$1.propTypes = {
  fbappid: PropTypes.string,
  size: PropTypes.string,
  itemProps: PropTypes.object,
  facebookPath: PropTypes.string,
  facebookProps: PropTypes.object,
  twitterPath: PropTypes.string,
  twitterProps: PropTypes.object,
  whatsappPath: PropTypes.string,
  whatsappProps: PropTypes.object
};

var getColor = function getColor(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$$color = _ref.$color,
      $color = _ref$$color === void 0 ? '' : _ref$$color;
  var value = get(theme.colors, $color, '');
  return value;
};

var Svg = styled.svg.withConfig({
  displayName: "styled__Svg",
  componentId: "sc-tgqrzv-0"
})(["", ";fill:", ";"], margin, getColor);

var _excluded$4 = ["children", "color", "height", "viewBox", "width"];

var Icon = function Icon(_ref) {
  var children = _ref.children,
      color = _ref.color,
      height = _ref.height,
      viewBox = _ref.viewBox,
      width = _ref.width,
      otherProps = _objectWithoutProperties(_ref, _excluded$4);

  return /*#__PURE__*/React.createElement(Svg, _extends({
    xmlns: "http://www.w3.org/2000/svg",
    $color: color,
    height: height,
    viewBox: viewBox,
    width: width
  }, otherProps), children);
};

Icon.defaultProps = {
  color: 'neutral3',
  height: '24px',
  viewBox: '0 0 24 24',
  width: '24px'
};
Icon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  otherProps: PropTypes.any
};

var IcFaceboook = function IcFaceboook(_ref) {
  var color = _ref.color,
      height = _ref.height,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(Icon, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    $color: color,
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22.23,4.15H19.16c-3.45,0-5.69,2.29-5.69,5.83v2.69H10.38a.49.49,0,0,0-.48.48v3.9a.49.49,0,0,0,.48.49h3.09v9.83a.48.48,0,0,0,.49.48h4a.47.47,0,0,0,.48-.48V17.54h3.62a.49.49,0,0,0,.48-.49v-3.9a.49.49,0,0,0-.14-.34.48.48,0,0,0-.34-.14H18.47V10.39c0-1.1.26-1.65,1.69-1.65h2.07a.49.49,0,0,0,.49-.49V4.63A.49.49,0,0,0,22.23,4.15Z"
  }));
};

IcFaceboook.defaultProps = {
  width: '24',
  height: '24',
  color: 'primary1'
};
IcFaceboook.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

var IcTwitter = function IcTwitter(_ref) {
  var color = _ref.color,
      height = _ref.height,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(Icon, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    $color: color,
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("path", {
    d: "M30,7.33a11.92,11.92,0,0,1-3.31.9A5.65,5.65,0,0,0,29.2,5.06a11.4,11.4,0,0,1-3.63,1.39,5.74,5.74,0,0,0-9.92,3.92,6.19,6.19,0,0,0,.13,1.31A16.23,16.23,0,0,1,4,5.68a5.82,5.82,0,0,0-.78,2.9,5.75,5.75,0,0,0,2.54,4.77,5.73,5.73,0,0,1-2.59-.71v.06a5.77,5.77,0,0,0,4.6,5.64,5.68,5.68,0,0,1-1.51.19,4.88,4.88,0,0,1-1.08-.1,5.78,5.78,0,0,0,5.36,4,11.5,11.5,0,0,1-7.11,2.45A10.54,10.54,0,0,1,2,24.79a16.13,16.13,0,0,0,8.8,2.57c10.55,0,16.32-8.74,16.32-16.31,0-.26,0-.5,0-.75A11.3,11.3,0,0,0,30,7.33Z"
  }));
};

IcTwitter.defaultProps = {
  width: '24',
  height: '24',
  color: 'primary1'
};
IcTwitter.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

var IcWhatsapp = function IcWhatsapp(_ref) {
  var color = _ref.color,
      height = _ref.height,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(Icon, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    $color: color,
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.43,4.24A11.69,11.69,0,0,0,4.32,15.94a11.52,11.52,0,0,0,1.27,5.27l-1.24,6a.45.45,0,0,0,.55.53l5.9-1.39a11.57,11.57,0,0,0,5,1.21,11.68,11.68,0,1,0-.39-23.34Zm7,18.13A9.17,9.17,0,0,1,11.93,24.1l-.82-.41-3.62.86.76-3.7-.4-.79A9.15,9.15,0,0,1,22.47,9.44a9.05,9.05,0,0,1,2.68,6.46A9.16,9.16,0,0,1,22.47,22.37Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.67,18.44l-2.26-.65a.85.85,0,0,0-.84.22l-.55.56a.82.82,0,0,1-.9.19,11.88,11.88,0,0,1-3.89-3.44.82.82,0,0,1,.06-.91l.48-.62a.86.86,0,0,0,.11-.86l-1-2.15a.85.85,0,0,0-1.32-.31,3.83,3.83,0,0,0-1.47,2.25c-.16,1.58.52,3.58,3.09,6,3,2.78,5.35,3.14,6.89,2.77a3.87,3.87,0,0,0,2-1.77A.84.84,0,0,0,21.67,18.44Z"
  }));
};

IcWhatsapp.defaultProps = {
  width: '24',
  height: '24',
  color: 'primary1'
};
IcWhatsapp.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

var _excluded$3 = ["itemProps", "facebookProps", "twitterProps", "whatsappProps"];

var getShareButtonSize = function getShareButtonSize(_ref) {
  var size = _ref.size;
  return "".concat(size, "px");
};

var getHoverStyle$1 = function getHoverStyle() {
  return css(["&:hover{opacity:0.8;}"]);
};

var FacebookShareButton = styled(FacebookShareButton$1).withConfig({
  displayName: "Share__FacebookShareButton",
  componentId: "sc-1mfy9v8-0"
})(["width:", ";height:", ";", ";", ";"], getShareButtonSize, getShareButtonSize, getHoverStyle$1, margin);
var TwitterShareButton = styled(TwitterShareButton$1).withConfig({
  displayName: "Share__TwitterShareButton",
  componentId: "sc-1mfy9v8-1"
})(["width:", ";height:", ";", ";", ";"], getShareButtonSize, getShareButtonSize, getHoverStyle$1, margin);
var WhatsappShareButton = styled(WhatsappShareButton$1).withConfig({
  displayName: "Share__WhatsappShareButton",
  componentId: "sc-1mfy9v8-2"
})(["width:", ";height:", ";", ";"], getShareButtonSize, getShareButtonSize, getHoverStyle$1);
var itemDefaultProps = {
  size: 24,
  mr: 4
};

var Share = function Share(props) {
  var itemProps = props.itemProps,
      facebookProps = props.facebookProps,
      twitterProps = props.twitterProps,
      whatsappProps = props.whatsappProps,
      otherProps = _objectWithoutProperties(props, _excluded$3);

  return /*#__PURE__*/React.createElement(Block$1, _extends({
    align: "row",
    width: "100%",
    alignx: "right"
  }, otherProps), /*#__PURE__*/React.createElement(FacebookShareButton, _extends({}, itemDefaultProps, itemProps, facebookProps), /*#__PURE__*/React.createElement(IcFaceboook, null)), /*#__PURE__*/React.createElement(TwitterShareButton, _extends({}, itemDefaultProps, itemProps, twitterProps), /*#__PURE__*/React.createElement(IcTwitter, null)), /*#__PURE__*/React.createElement(WhatsappShareButton, _extends({}, itemDefaultProps, itemProps, whatsappProps), /*#__PURE__*/React.createElement(IcWhatsapp, null)));
};

Share.defaultProps = {
  align: 'row',
  size: '24'
};
Share.propTypes = {
  size: PropTypes.string,
  itemProps: PropTypes.object,
  facebookProps: PropTypes.object,
  twitterProps: PropTypes.object,
  whatsappProps: PropTypes.object
};

var SocialShare = function SocialShare(props) {
  var amp = props.amp;
  if (amp) return /*#__PURE__*/React.createElement(Share$1, props);
  return /*#__PURE__*/React.createElement(Share, props);
};

SocialShare.propTypes = {
  amp: PropTypes.bool
};

var border = function border(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$bt = _ref.bt,
      bt = _ref$bt === void 0 ? '' : _ref$bt,
      _ref$br = _ref.br,
      br = _ref$br === void 0 ? '' : _ref$br,
      _ref$bb = _ref.bb,
      bb = _ref$bb === void 0 ? '' : _ref$bb,
      _ref$bl = _ref.bl,
      bl = _ref$bl === void 0 ? '' : _ref$bl,
      _ref$b = _ref.b,
      b = _ref$b === void 0 ? '' : _ref$b,
      _ref$borderColor = _ref.borderColor,
      borderColor = _ref$borderColor === void 0 ? '' : _ref$borderColor,
      _ref$borderStyle = _ref.borderStyle,
      borderStyle = _ref$borderStyle === void 0 ? 'solid' : _ref$borderStyle;
  var colors = get(theme, 'colors', {});
  var selectedColor = colors[borderColor];
  var object = [];

  if (bt) {
    object.push("border-top-color: ".concat(selectedColor, ";"));
    object.push("border-top-style: ".concat(borderStyle, ";"));

    if (typeof bt === 'string') {
      object.push("border-top-width: ".concat(bt, ";"));
    } else {
      object.push("border-top-width: ".concat(bt, "px;"));
    }
  }

  if (br) {
    object.push("border-right-color: ".concat(selectedColor, ";"));
    object.push("border-right-style: ".concat(borderStyle, ";"));

    if (typeof br === 'string') {
      object.push("border-right-width: ".concat(br, ";"));
    } else {
      object.push("border-right-width: ".concat(br, "px;"));
    }
  }

  if (bb) {
    object.push("border-bottom-color: ".concat(selectedColor, ";"));
    object.push("border-bottom-style: ".concat(borderStyle, ";"));

    if (typeof bb === 'string') {
      object.push("border-bottom-width: ".concat(bb, ";"));
    } else {
      object.push("border-bottom-width: ".concat(bb, "px;"));
    }
  }

  if (bl) {
    object.push("border-left-color: ".concat(selectedColor, ";"));
    object.push("border-left-style: ".concat(borderStyle, ";"));

    if (typeof bl === 'string') {
      object.push("border-left-width: ".concat(bl, ";"));
    } else {
      object.push("border-left-width: ".concat(bl, "px;"));
    }
  }

  if (b) {
    object.push("border-color: ".concat(selectedColor, ";"));
    object.push("border-style: ".concat(borderStyle, ";"));

    if (typeof b === 'string') {
      object.push("border-width: ".concat(b, ";"));
    } else {
      object.push("border-width: ".concat(b, "px;"));
    }
  }

  return object.join('');
};

var padding = function padding(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$px = _ref.px,
      px = _ref$px === void 0 ? '' : _ref$px,
      _ref$py = _ref.py,
      py = _ref$py === void 0 ? '' : _ref$py,
      _ref$pt = _ref.pt,
      pt = _ref$pt === void 0 ? '' : _ref$pt,
      _ref$pr = _ref.pr,
      pr = _ref$pr === void 0 ? '' : _ref$pr,
      _ref$pb = _ref.pb,
      pb = _ref$pb === void 0 ? '' : _ref$pb,
      _ref$pl = _ref.pl,
      pl = _ref$pl === void 0 ? '' : _ref$pl,
      _ref$p = _ref.p,
      p = _ref$p === void 0 ? '' : _ref$p;
  var unit = get(theme, 'factors.padding', 8);
  var object = [];
  pt !== undefined && isNaN(pt) ? object.push("padding-top: ".concat(pt, ";")) : pt && object.push("padding-top: ".concat(unit * pt, "px;"));
  pr !== undefined && isNaN(pr) ? object.push("padding-right: ".concat(pr, ";")) : pr && object.push("padding-right: ".concat(unit * pr, "px;"));
  pb !== undefined && isNaN(pb) ? object.push("padding-bottom: ".concat(pb, ";")) : pb && object.push("padding-bottom: ".concat(unit * pb, "px;"));
  pl !== undefined && isNaN(pl) ? object.push("padding-left: ".concat(pl, ";")) : pl && object.push("padding-left: ".concat(unit * pl, "px;"));
  px !== undefined && isNaN(px) ? object.push("padding-left: ".concat(px, ";padding-right: ").concat(px, ";")) : px && object.push("padding-left: ".concat(unit * px, "px;padding-right: ").concat(unit * px, "px;"));
  py !== undefined && isNaN(py) ? object.push("padding-top: ".concat(py, ";padding-bottom: ").concat(py, ";")) : py && object.push("padding-top: ".concat(unit * py, "px;padding-bottom: ").concat(unit * py, "px;"));
  p !== undefined && isNaN(p) ? object.push("padding: ".concat(p, ";")) : p && object.push("padding: ".concat(p * unit, "px;"));
  return object.join('');
};

var parseFontFamily$2 = function parseFontFamily(props) {
  var fonts = get(props, 'theme.fonts', {});
  var propValue = get(props, '$fontFamily', '');
  var selected = get(fonts, propValue, '');
  return selected;
};

var parseSize = function parseSize(props, propName) {
  var factor = get(props, 'theme.factors.margin', {});
  var propValue = get(props, "$".concat(propName));
  var isNumber = typeof propValue === 'number';
  if (isNumber) return "".concat(propValue * factor, "px");
  return propValue;
};

var handleHover = function handleHover(props) {
  if (props.opacityOnHover) {
    return css(["&:hover{opacity:0.8;}"]);
  } else {
    return '';
  }
};

var parseTextDecoration = function parseTextDecoration(_ref) {
  var textDecoration = _ref.textDecoration;
  if (!textDecoration) return '';
  return "text-decoration: ".concat(textDecoration, ";");
};

var parseTextTransform = function parseTextTransform(_ref2) {
  var $transform = _ref2.$transform;
  if (!$transform) return '';
  return "text-transform: ".concat($transform, ";");
};

var parseTextAlign = function parseTextAlign(_ref3) {
  var textAlign = _ref3.textAlign;
  if (!textAlign) return '';
  return "text-align: ".concat(textAlign, ";");
};

var parseFontWeight$1 = function parseFontWeight(_ref4) {
  var $fontWeight = _ref4.$fontWeight;
  if (!$fontWeight) return '';
  return "font-weight: ".concat($fontWeight, ";");
};

var parseStyle$1 = function parseStyle(props, theme) {
  return "\n    font-family: ".concat(parseFontFamily$2(props), ";\n    font-size: ").concat(parseSize(props, 'fontSize'), ";\n    line-height: ").concat(parseSize(props, 'lineHeight'), ";\n    color: ").concat(theme.parseColor(props, theme, '$color'), ";\n    ").concat(theme.parseCustom(props), ";\n    ").concat(dimensions(props), ";\n    ").concat(padding(props), ";\n    ").concat(margin(props), ";\n    ").concat(border(props), ";\n    ").concat(handleHover(props), ";\n    ").concat(parseTextDecoration(props), ";\n    ").concat(parseTextTransform(props), ";\n    ").concat(parseTextAlign(props), ";\n    ").concat(parseFontWeight$1(props), ";\n  ");
};

var parseProps$1 = function parseProps(media, props) {
  switch (media) {
    case 'xs':
      return "\n        @media (min-width: ".concat(props.theme.queries.xs, ") {\n          ").concat(parseStyle$1(props.xs, props.theme), "\n        }\n      ");

    case 'sm':
      return "\n        @media (min-width: ".concat(props.theme.queries.sm, ") {\n          ").concat(parseStyle$1(props.sm, props.theme), "\n        }\n      ");

    case 'md':
      return "\n        @media (min-width: ".concat(props.theme.queries.md, ") {\n          ").concat(parseStyle$1(props.md, props.theme), "\n        }\n      ");

    case 'lg':
      return "\n        @media (min-width: ".concat(props.theme.queries.lg, ") {\n          ").concat(parseStyle$1(props.lg, props.theme), "\n        }\n      ");

    case 'xl':
      return "\n        @media (min-width: ".concat(props.theme.queries.xl, ") {\n          ").concat(parseStyle$1(props.xl, props.theme), "\n        }\n      ");

    default:
      return "".concat(parseStyle$1(props, props.theme));
  }
};

var HeadingOne = styled.h1.withConfig({
  displayName: "styled__HeadingOne",
  componentId: "sc-1bxdmvf-0"
})(["", ""], function (props) {
  return props.$style;
});
var HeadingTwo = styled.h2.withConfig({
  displayName: "styled__HeadingTwo",
  componentId: "sc-1bxdmvf-1"
})(["", ""], function (props) {
  return props.$style;
});
var HeadingThree = styled.h3.withConfig({
  displayName: "styled__HeadingThree",
  componentId: "sc-1bxdmvf-2"
})(["", ""], function (props) {
  return props.$style;
});
var HeadingFour = styled.h4.withConfig({
  displayName: "styled__HeadingFour",
  componentId: "sc-1bxdmvf-3"
})(["", ""], function (props) {
  return props.$style;
});
var HeadingFive = styled.h5.withConfig({
  displayName: "styled__HeadingFive",
  componentId: "sc-1bxdmvf-4"
})(["", ""], function (props) {
  return props.$style;
});
var HeadingSix = styled.h6.withConfig({
  displayName: "styled__HeadingSix",
  componentId: "sc-1bxdmvf-5"
})(["", ""], function (props) {
  return props.$style;
});
var Paragraph$1 = styled.p.withConfig({
  displayName: "styled__Paragraph",
  componentId: "sc-1bxdmvf-6"
})(["", ""], function (props) {
  return props.$style;
});
var Span = styled.span.withConfig({
  displayName: "styled__Span",
  componentId: "sc-1bxdmvf-7"
})(["", ""], function (props) {
  return props.$style;
});
var Label = styled.label.withConfig({
  displayName: "styled__Label",
  componentId: "sc-1bxdmvf-8"
})(["", ""], function (props) {
  return props.$style;
});
var Cite = styled.cite.withConfig({
  displayName: "styled__Cite",
  componentId: "sc-1bxdmvf-9"
})(["", ""], function (props) {
  return props.$style;
});
var A = styled.a.withConfig({
  displayName: "styled__A",
  componentId: "sc-1bxdmvf-10"
})(["", ""], function (props) {
  return props.$style;
});

var _excluded$2 = ["children", "color", "element", "fontSize", "fontFamily", "fontWeight", "href", "lineHeight", "textAlign", "transform", "mx", "my", "mt", "mb", "ml", "mr", "px", "py", "pt", "pb", "pl", "pr", "bt", "br", "bb", "bl", "b", "borderColor", "borderStyle", "xs", "sm", "md", "lg", "xl", "theme", "custom", "width", "fullWidth", "maxWidth", "minWidth", "opacityOnHover", "target", "dangerouslySetInnerHTML"];

var Typography$1 = function Typography(_ref) {
  var children = _ref.children,
      color = _ref.color,
      element = _ref.element,
      fontSize = _ref.fontSize,
      fontFamily = _ref.fontFamily,
      fontWeight = _ref.fontWeight,
      href = _ref.href,
      lineHeight = _ref.lineHeight,
      textAlign = _ref.textAlign,
      transform = _ref.transform,
      mx = _ref.mx,
      my = _ref.my,
      mt = _ref.mt,
      mb = _ref.mb,
      ml = _ref.ml,
      mr = _ref.mr,
      px = _ref.px,
      py = _ref.py,
      pt = _ref.pt,
      pb = _ref.pb,
      pl = _ref.pl,
      pr = _ref.pr,
      bt = _ref.bt,
      br = _ref.br,
      bb = _ref.bb,
      bl = _ref.bl,
      b = _ref.b,
      borderColor = _ref.borderColor,
      borderStyle = _ref.borderStyle,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      theme = _ref.theme,
      custom = _ref.custom,
      width = _ref.width,
      fullWidth = _ref.fullWidth,
      maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      opacityOnHover = _ref.opacityOnHover,
      target = _ref.target,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML,
      otherProps = _objectWithoutProperties(_ref, _excluded$2);

  var styles = css(["", ";", ";", ";", ";", ";", ";"], function (props) {
    return parseProps$1('', props);
  }, function (props) {
    return props.xs && parseProps$1('xs', props);
  }, function (props) {
    return props.sm && parseProps$1('sm', props);
  }, function (props) {
    return props.md && parseProps$1('md', props);
  }, function (props) {
    return props.lg && parseProps$1('lg', props);
  }, function (props) {
    return props.xl && parseProps$1('xl', props);
  });

  var getXsProps = function getXsProps() {
    return xs && _objectSpread2(_objectSpread2({}, xs), {}, {
      theme: theme,
      $fontWeight: xs.fontWeight ? xs.fontWeight : fontWeight,
      $fontSize: xs.fontSize ? xs.fontSize : fontSize,
      $fontFamily: xs.fontFamily ? xs.fontFamily : fontFamily,
      $lineHeight: xs.lineHeight ? xs.lineHeight : lineHeight,
      $transform: xs.transform ? xs.transform : transform,
      $color: xs.color ? xs.color : color,
      textAlign: xs.textAlign ? xs.textAlign : textAlign,
      $width: xs.width && xs.width,
      fullWidth: xs.fullWidth && xs.fullWidth
    });
  };

  var getSmProps = function getSmProps() {
    return sm && _objectSpread2(_objectSpread2({}, sm), {}, {
      theme: theme,
      $fontWeight: sm.fontWeight ? sm.fontWeight : fontWeight,
      $fontSize: sm.fontSize ? sm.fontSize : fontSize,
      $fontFamily: sm.fontFamily ? sm.fontFamily : fontFamily,
      $lineHeight: sm.lineHeight ? sm.lineHeight : lineHeight,
      $transform: sm.transform ? sm.transform : transform,
      $color: sm.color ? sm.color : color,
      textAlign: sm.textAlign ? sm.textAlign : textAlign,
      $width: sm.width && sm.width,
      fullWidth: sm.fullWidth && sm.fullWidth
    });
  };

  var getMdProps = function getMdProps() {
    return md && _objectSpread2(_objectSpread2({}, md), {}, {
      theme: theme,
      $fontWeight: md.fontWeight ? md.fontWeight : fontWeight,
      $fontSize: md.fontSize ? md.fontSize : fontSize,
      $fontFamily: md.fontFamily ? md.fontFamily : fontFamily,
      $lineHeight: md.lineHeight ? md.lineHeight : lineHeight,
      $transform: md.transform ? md.transform : transform,
      $color: md.color ? md.color : color,
      textAlign: md.textAlign ? md.textAlign : textAlign,
      $width: md.width && md.width,
      fullWidth: md.fullWidth && md.fullWidth
    });
  };

  var getLgProps = function getLgProps() {
    return lg && _objectSpread2(_objectSpread2({}, lg), {}, {
      theme: theme,
      $fontWeight: lg.fontWeight ? lg.fontWeight : fontWeight,
      $fontSize: lg.fontSize ? lg.fontSize : fontSize,
      $fontFamily: lg.fontFamily ? lg.fontFamily : fontFamily,
      $lineHeight: lg.lineHeight ? lg.lineHeight : lineHeight,
      $transform: lg.transform ? lg.transform : transform,
      $color: lg.color ? lg.color : color,
      textAlign: lg.textAlign ? lg.textAlign : textAlign,
      $width: lg.width && lg.width,
      fullWidth: lg.fullWidth && lg.fullWidth
    });
  };

  var getXlProps = function getXlProps() {
    return xl && _objectSpread2(_objectSpread2({}, xl), {}, {
      theme: theme,
      $fontWeight: xl.fontWeight ? xl.fontWeight : fontWeight,
      $fontSize: xl.fontSize ? xl.fontSize : fontSize,
      $fontFamily: xl.fontFamily ? xl.fontFamily : fontFamily,
      $lineHeight: xl.lineHeight ? xl.lineHeight : lineHeight,
      $transform: xl.transform ? xl.transform : transform,
      $color: xl.color ? xl.color : color,
      textAlign: xl.textAlign ? xl.textAlign : textAlign,
      $width: xl.width && xl.width,
      fullWidth: xl.fullWidth && xl.fullWidth
    });
  };

  var props = _objectSpread2({
    $fontWeight: fontWeight,
    $fontSize: fontSize,
    $fontFamily: fontFamily,
    $lineHeight: lineHeight,
    $transform: transform,
    $color: color,
    $width: width,
    href: href ? href : undefined,
    textAlign: textAlign,
    custom: custom,
    children: dangerouslySetInnerHTML ? undefined : children,
    mx: mx,
    my: my,
    mt: mt,
    mb: mb,
    ml: ml,
    mr: mr,
    px: px,
    py: py,
    pt: pt,
    pr: pr,
    pb: pb,
    pl: pl,
    bt: bt,
    br: br,
    bb: bb,
    bl: bl,
    b: b,
    borderColor: borderColor,
    borderStyle: borderStyle,
    fullWidth: fullWidth,
    maxWidth: maxWidth,
    minWidth: minWidth,
    opacityOnHover: opacityOnHover,
    target: target,
    xs: getXsProps(),
    sm: getSmProps(),
    md: getMdProps(),
    lg: getLgProps(),
    xl: getXlProps(),
    dangerouslySetInnerHTML: dangerouslySetInnerHTML ? {
      __html: dangerouslySetInnerHTML
    } : undefined
  }, otherProps);

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
  transform: PropTypes.oneOf(['none', 'inherit', 'capitalize', 'uppercase', 'lowercase']),

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
  borderStyle: PropTypes.string
};
var Typography$2 = withTheme(Typography$1);

var Author = function Author(_ref) {
  var children = _ref.children,
      color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight;
  return /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    element: "span",
    fontFamily: fontFamily,
    fontWeight: 700,
    fontSize: fontSize[0],
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    },
    mb: "4px"
  }, children);
};
Author.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};
var Container$6 = function Container(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    width: "100%",
    lg: {
      align: 'row',
      alignx: 'between'
    }
  }, children);
};
Container$6.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
var Content$3 = function Content(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    width: "100%",
    align: "column",
    mb: 4,
    md: {
      align: 'row',
      aligny: 'middle'
    },
    lg: {
      mb: 5
    }
  }, children);
};
Content$3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
var DateLine = function DateLine(_ref4) {
  var children = _ref4.children,
      custom = _ref4.custom;
  return /*#__PURE__*/React.createElement(Block$1, {
    custom: custom,
    mb: "2",
    md: {
      mb: '0px'
    },
    width: "calc(100% - 76px)"
  }, children);
};
DateLine.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  custom: PropTypes.string
};
var TimeEntry = function TimeEntry(_ref5) {
  var children = _ref5.children,
      color = _ref5.color,
      fontSize = _ref5.fontSize,
      fontFamily = _ref5.fontFamily,
      lineHeight = _ref5.lineHeight;
  return /*#__PURE__*/React.createElement(Typography$2, {
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
};
TimeEntry.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};

var Byline = function Byline(_ref) {
  var amp = _ref.amp,
      author = _ref.author,
      customContent = _ref.customContent,
      datetime = _ref.datetime,
      share = _ref.share;
  return /*#__PURE__*/React.createElement(Container$6, null, /*#__PURE__*/React.createElement(Content$3, null, /*#__PURE__*/React.createElement(DateLine, {
    custom: customContent
  }, /*#__PURE__*/React.createElement(Author, author, author.value), /*#__PURE__*/React.createElement(TimeEntry, datetime, "Publicado em ", datetime.time_published), /*#__PURE__*/React.createElement(TimeEntry, datetime, "Atualizado h\xE1 ", datetime.time_modified)), /*#__PURE__*/React.createElement(SocialShare, _extends({
    amp: amp
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
  datetime: {
    color: 'neutral2',
    fontFamily: 'secondary',
    fontSize: ['12px', '12px'],
    lineHeight: ['16px', '16px'],
    time_modified: '18 dias atrás',
    time_published: '21/05/2021 às 23:20'
  },
  medias: {
    color: '#999999'
  }
};
Byline.propTypes = {
  amp: PropTypes.bool,
  author: PropTypes.object,
  customContent: PropTypes.string,
  datetime: PropTypes.object,
  medias: PropTypes.object,
  share: PropTypes.object
};

var Subject$1 = function Subject(_ref) {
  var bgColor = _ref.bgColor,
      borderRadius = _ref.borderRadius,
      color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight,
      mb = _ref.mb,
      mt = _ref.mt,
      px = _ref.px,
      py = _ref.py,
      transform = _ref.transform,
      value = _ref.value;
  return /*#__PURE__*/React.createElement(Block$1, {
    bgColor: bgColor,
    custom: "\n        border-radius: ".concat(borderRadius, ";\n      "),
    mb: mb[0],
    mt: mt[0],
    px: px,
    py: py,
    lg: {
      mb: mb[1],
      mt: mt[1]
    }
  }, /*#__PURE__*/React.createElement(Typography$2, {
    color: color,
    dangerouslySetInnerHTML: value,
    element: "span",
    fontFamily: fontFamily,
    fontSize: fontSize[0],
    fontWeight: 700,
    lineHeight: lineHeight[0],
    lg: {
      fontSize: fontSize[1],
      lineHeight: lineHeight[1]
    },
    transform: transform
  }));
};

Subject$1.defaultProps = {
  bgColor: 'primary1',
  borderRadius: '3px',
  color: 'white',
  fontFamily: 'secondary',
  fontSize: ['14px', '14px'],
  lineHeight: ['20px', '20px'],
  transform: 'none',
  mb: ['1', '2'],
  mt: ['2', '4'],
  px: '2',
  py: '4px',
  value: 'MÍDIA DIGITAL'
};
Subject$1.propTypes = {
  bgColor: PropTypes.string,
  borderRadius: PropTypes.string,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  mt: PropTypes.array,
  px: PropTypes.string,
  py: PropTypes.string,
  transform: PropTypes.string,
  value: PropTypes.string
};

var Subtitle$1 = function Subtitle(_ref) {
  var color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      lineHeight = _ref.lineHeight,
      mb = _ref.mb,
      value = _ref.value;
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
  mb: ['2', '2']
};
Subtitle$1.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

var Container$5 = styled.div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-1a85jn4-0"
})(["height:max-content;margin-bottom:24px;width:100%;@media (min-width:", "){width:", ";height:", ";}"], function (props) {
  return props.theme.queries.md;
}, function (props) {
  return props.$width;
}, function (props) {
  return props.$height;
});

({
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  px: PropTypes.array,
  py: PropTypes.array,
  width: PropTypes.array
});

({
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
});

var ImageGallery = function ImageGallery(_ref) {
  var items = _ref.items,
      height = _ref.height,
      width = _ref.width;
  return /*#__PURE__*/React.createElement(Container$5, {
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("amp-carousel", {
    lightbox: true,
    height: "500",
    layout: "responsive",
    type: "slides",
    width: "768"
  }, map(items, function (item, key) {
    return /*#__PURE__*/React.createElement("figure", {
      style: {
        margin: '0'
      },
      key: key
    }, /*#__PURE__*/React.createElement("amp-img", {
      alt: item.caption,
      src: item.value,
      layout: "responsive",
      height: "384",
      key: key,
      width: "768"
    }), /*#__PURE__*/React.createElement("figcaption", null, item.caption));
  })));
};
ImageGallery.defaultProps = {
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%']
  },
  height: '500px',
  width: '768px'
};
ImageGallery.propTypes = {
  caption: PropTypes.object,
  items: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string
};

var Citation = function Citation(_ref) {
  var color = _ref.color,
      customCite = _ref.customCite,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      lineHeight = _ref.lineHeight,
      mb = _ref.mb,
      pl = _ref.pl,
      value = _ref.value,
      maxWidth = _ref.maxWidth,
      width = _ref.width;
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
  mb: ['3', '3'],
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

var Container$4 = styled.div.withConfig({
  displayName: "styled__Container",
  componentId: "sc-q9nbe9-0"
})(["height:max-content;margin-bottom:24px;width:100%;@media (min-width:", "){width:", ";height:", ";}"], function (props) {
  return props.theme.queries.md;
}, function (props) {
  return props.$width;
}, function (props) {
  return props.$height;
});

var FacebookEmbed = function FacebookEmbed(_ref) {
  var url = _ref.url,
      height = _ref.height,
      width = _ref.width;

  if (!url) {
    console.error('FacebookEmbed LOGGER: missing url');
    return null;
  }

  return /*#__PURE__*/React.createElement(Container$4, {
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("amp-facebook", {
    "data-align-center": true,
    "data-href": url,
    layout: "responsive",
    height: "310",
    width: "552"
  }));
};
FacebookEmbed.defaultProps = {
  height: 'max-content',
  width: '552px'
};
FacebookEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

var InstagramEmbed = function InstagramEmbed(_ref) {
  var url = _ref.url,
      height = _ref.height,
      width = _ref.width;

  if (!url) {
    console.error('InstagramEmbed LOGGER: missing url');
    return null;
  }

  var parsedPrefix = url.split('instagram.com/p/');
  if (!parsedPrefix[1]) return null;
  var parsedSufix = parsedPrefix[1] && parsedPrefix[1].split('/');
  var dataShortcode = parsedSufix[0] ? parsedSufix[0] : parsedPrefix[1];
  return /*#__PURE__*/React.createElement(Container$4, {
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("amp-instagram", {
    "data-captioned": true,
    "data-shortcode": dataShortcode,
    layout: "responsive",
    height: "552",
    width: "552"
  }));
};
InstagramEmbed.defaultProps = {
  height: 'max-content',
  width: '552px'
};
InstagramEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

var TwitterEmbed = function TwitterEmbed(_ref) {
  var url = _ref.url,
      height = _ref.height,
      width = _ref.width;

  if (!url) {
    console.error('TwitterEmbed LOGGER: missing tweet id');
    return null;
  }

  return /*#__PURE__*/React.createElement(Container$4, {
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("amp-twitter", {
    "data-tweetid": url,
    layout: "responsive",
    height: "472",
    width: "552"
  }));
};
TwitterEmbed.defaultProps = {
  height: 'max-content',
  width: '100%'
};
TwitterEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

var parseYoutubeLink = function parseYoutubeLink(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
};

var YouTubeEmbed = function YouTubeEmbed(_ref) {
  var url = _ref.url,
      height = _ref.height,
      width = _ref.width;

  if (!url) {
    console.error('YouTubeEmbed LOGGER: missing url');
    return null;
  }

  var parsedUrl = parseYoutubeLink(url);
  return /*#__PURE__*/React.createElement(Container$4, {
    $height: height,
    $width: width
  }, /*#__PURE__*/React.createElement("amp-youtube", {
    "data-videoid": parsedUrl,
    height: height,
    layout: "responsive",
    width: width
  }));
};
YouTubeEmbed.defaultProps = {
  height: '360px',
  width: '720px'
};
YouTubeEmbed.propTypes = {
  url: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

var Heading2 = function Heading2(_ref) {
  var color = _ref.color,
      element = _ref.element,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      lineHeight = _ref.lineHeight,
      maxWidth = _ref.maxWidth,
      mb = _ref.mb,
      value = _ref.value;
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
  mb: ['3', '3'],
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

var Heading3 = function Heading3(_ref) {
  var color = _ref.color,
      element = _ref.element,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      lineHeight = _ref.lineHeight,
      maxWidth = _ref.maxWidth,
      mb = _ref.mb,
      value = _ref.value;
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
  mb: ['2', '2'],
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

var Heading4 = function Heading4(_ref) {
  var color = _ref.color,
      element = _ref.element,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      lineHeight = _ref.lineHeight,
      maxWidth = _ref.maxWidth,
      mb = _ref.mb,
      value = _ref.value;
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
  mb: ['2', '2'],
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

var Paragraph = function Paragraph(_ref) {
  var color = _ref.color,
      element = _ref.element,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      lineHeight = _ref.lineHeight,
      maxWidth = _ref.maxWidth,
      mb = _ref.mb,
      value = _ref.value;
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
  mb: ['3', '3'],
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

var Container$3 = function Container(_ref) {
  var children = _ref.children,
      maxWidth = _ref.maxWidth;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "column",
    mb: 5,
    maxWidth: maxWidth,
    width: "100%",
    lg: {
      align: 'row',
      custom: "\n        flex-wrap: wrap;\n      "
    }
  }, children);
};
Container$3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
};
var Tag = function Tag(_ref2) {
  var children = _ref2.children,
      color = _ref2.color;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "column",
    mr: 2,
    mb: 2,
    px: 2,
    py: 1,
    custom: "border: 1px solid ".concat(color, ";border-radius: 3px;")
  }, children);
};
Tag.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  color: PropTypes.string
};

var Tags = function Tags(_ref) {
  var color = _ref.color,
      fontFamily = _ref.fontFamily,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      items = _ref.items,
      maxWidth = _ref.maxWidth;
  return /*#__PURE__*/React.createElement(Container$3, {
    maxWidth: maxWidth
  }, map(items, function (item, key) {
    return /*#__PURE__*/React.createElement(Tag, {
      color: color,
      key: key
    }, /*#__PURE__*/React.createElement(Typography$2, {
      color: color,
      element: "span",
      fontFamily: fontFamily,
      fontSize: fontSize[0],
      fontWeight: fontWeight
    }, item));
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
  maxWidth: PropTypes.string
};

var Box = function Box(_ref) {
  var children = _ref.children,
      mb = _ref.mb;
  return /*#__PURE__*/React.createElement(Block$1, {
    custom: "\n      img {\n        width: 100%;\n      }\n    ",
    mb: mb[0],
    lg: {
      mb: mb[1]
    },
    width: "100%"
  }, children);
};
Box.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array
};
var BoxFeatured = function BoxFeatured(_ref2) {
  var children = _ref2.children,
      mb = _ref2.mb,
      value = _ref2.value;
  return /*#__PURE__*/React.createElement(Block$1, {
    custom: "\n      background-image: url('".concat(value, "');\n      background-repeat: no-repeat;\n      background-size: cover;\n    "),
    mb: mb[0],
    lg: {
      mb: mb[1]
    },
    height: "100%",
    width: "100%"
  }, children);
};
BoxFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mb: PropTypes.array,
  value: PropTypes.string
};
var SubtitleBox = function SubtitleBox(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    bgColor: "neutral9",
    px: 3,
    py: 3,
    width: "calc(100% - 48px)",
    lg: {
      px: 4,
      py: 2,
      width: 'calc(100% - 64px)'
    }
  }, children);
};
SubtitleBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  px: PropTypes.array,
  py: PropTypes.array,
  width: PropTypes.array
};
var Subtitle = function Subtitle(_ref4) {
  var children = _ref4.children,
      fontFamily = _ref4.fontFamily,
      fontSize = _ref4.fontSize,
      lineHeight = _ref4.lineHeight;
  return /*#__PURE__*/React.createElement(Typography$2, {
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
};
Subtitle.propTypes = {
  children: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.array,
  lineHeight: PropTypes.array
};

var Container$2 = function Container(_ref) {
  var children = _ref.children,
      featured = _ref.featured,
      mb = _ref.mb,
      value = _ref.value;
  if (featured) return /*#__PURE__*/React.createElement(BoxFeatured, {
    mb: mb,
    value: value
  });
  return /*#__PURE__*/React.createElement(Box, {
    mb: mb
  }, children);
};

Container$2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  featured: PropTypes.bool,
  mb: PropTypes.array,
  value: PropTypes.string
};

var TopImage = function TopImage(_ref2) {
  var amp = _ref2.amp,
      caption = _ref2.caption,
      featured = _ref2.featured,
      image = _ref2.image,
      mb = _ref2.mb,
      value = _ref2.value;
  if (!image) return null;
  var caption_value = get(caption, 'value', '');
  var fontFamily = get(caption, 'fontFamily', '');
  var fontSize = get(caption, 'fontSize', '');
  var lineHeight = get(caption, 'lineHeight', '');
  return /*#__PURE__*/React.createElement(Container$2, {
    featured: featured,
    mb: mb,
    value: value
  }, amp ? /*#__PURE__*/React.createElement("amp-img", {
    alt: caption_value,
    src: value,
    layout: "responsive",
    style: {
      display: 'inline-flex',
      width: '100%'
    },
    height: "640px",
    width: "1280px"
  }) : !featured && /*#__PURE__*/React.createElement("img", {
    alt: caption_value,
    src: value,
    style: {
      width: '100%'
    }
  }), caption && caption.show && /*#__PURE__*/React.createElement(SubtitleBox, null, /*#__PURE__*/React.createElement(Subtitle, {
    fontFamily: fontFamily,
    fontSize: fontSize,
    lineHeight: lineHeight
  }, caption_value)));
};

TopImage.defaultProps = {
  amp: false,
  featured: false,
  image: true,
  caption: {
    fontFamily: 'secondary',
    fontSize: ['14px', '14px'],
    lineHeight: ['130%', '130%'],
    show: true,
    value: 'Legenda da Imagem'
  },
  mb: ['2', '2'],
  value: 'https://xprog.com.br/static/images/img-destak.jpg'
};
TopImage.propTypes = {
  amp: PropTypes.bool,
  featured: PropTypes.bool,
  image: PropTypes.bool,
  caption: PropTypes.object,
  mb: PropTypes.array,
  value: PropTypes.string
};

var Body = function Body(_ref) {
  var bodyWidth = _ref.bodyWidth,
      children = _ref.children,
      hyperlinkColor = _ref.hyperlinkColor;
  return /*#__PURE__*/React.createElement(Block$1, {
    custom: "\n      a {\n        color: ".concat(hyperlinkColor, ";\n        word-break: break-all;\n      }\n      max-width: ").concat(bodyWidth, ";\n    "),
    lg: {
      align: 'column',
      alignx: 'center',
      px: '0px',
      width: '100%'
    },
    px: "3",
    width: "calc(100% - 48px)"
  }, children);
};
Body.propTypes = {
  bodyWidth: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  hyperlinkColor: PropTypes.string
};
({
  children: PropTypes.string,
  color: PropTypes.string
});

var parse_content = function parse_content(content) {
  var bodyItems = [];
  var tagItems = [];

  var renderChildValue = function renderChildValue(child) {
    return child && child.length > 0 && child[0].text;
  };

  var renderItemsFromList = function renderItemsFromList(child) {
    var list_items = filter(child, {
      tag: 'li'
    });
    var ul_content = [];
    map(list_items, function (it) {
      map(it.child, function (_ref) {
        var text = _ref.text;
        ul_content.push("<li>".concat(text, "</li>"));
      });
    });
    return ul_content.join('');
  };

  var switchNode = function switchNode(obj) {
    var attr = obj.attr,
        child = obj.child,
        node = obj.node,
        tag = obj.tag,
        text = obj.text;

    if (tag === 'p' || tag === 'br') {
      tagItems.push({
        'type': 'p',
        'value': ''
      });
    }

    if (tag === 'strong') {
      tagItems.push({
        'type': 'text',
        'value': "<strong>".concat(renderChildValue(child), "</strong>")
      });
      return true;
    }

    if (tag === 'u') {
      tagItems.push({
        'type': 'text',
        'value': "<u>".concat(renderChildValue(child), "</u>")
      });
      return true;
    }

    if (tag === 'ul') {
      tagItems.push({
        'type': 'text',
        'value': "<ul>".concat(renderItemsFromList(child), "</ul>")
      });
      return true;
    }

    if (tag === 'ol') {
      tagItems.push({
        'type': 'text',
        'value': "<ol>".concat(renderItemsFromList(child), "</ol>")
      });
      return true;
    }

    if (tag === 'li') {
      tagItems.push({
        'type': 'text',
        'value': "<li>".concat(renderChildValue(child), "</li>")
      });
      return true;
    }

    if (tag === 'em') {
      tagItems.push({
        'type': 'text',
        'value': "<em>".concat(renderChildValue(child), "</em>")
      });
      return true;
    }

    if (tag === 'cite') {
      tagItems.push({
        'type': 'cite',
        'value': "".concat(renderChildValue(child))
      });
      return true;
    }

    if (tag === 'h2') {
      tagItems.push({
        'type': 'h2',
        'value': "".concat(renderChildValue(child))
      });
      return true;
    }

    if (tag === 'h3') {
      tagItems.push({
        'type': 'h3',
        'value': "".concat(renderChildValue(child))
      });
      return true;
    }

    if (tag === 'h4') {
      tagItems.push({
        'type': 'h4',
        'value': "".concat(renderChildValue(child))
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


    if (tag === 'a' && attr["class"] && attr["class"] === 'p-smartembed') {
      var childImage = find(child, {
        tag: 'img'
      });

      if (childImage) {
        var subtitle = childImage && childImage.attr && childImage.attr['alt'] ? childImage.attr['alt'].join(' ') : '';
        subtitle = subtitle && subtitle !== undefined && subtitle !== 'undefined' ? subtitle : '';
        var propsImage = {
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
        } else if (attr['name'].indexOf('youtube.com') > -1) {
          tagItems.push({
            type: 'Youtube',
            value: attr['name']
          });
          return true;
        }
      } else {
        var child_string = renderChildValue(child) || attr.href;
        tagItems.push({
          'type': 'text',
          'value': "<a href=\"".concat(attr.href, "\" target=\"_blank\">").concat(child_string, "</a>")
        });
        return true;
      }
    }

    var child_len = child && child.length;

    if (child && child_len > 0) {
      map(child, function (item) {
        switchNode(item);
      });
    }
  }; // convert html


  var parsed = content.replace(/(\r\n|\n|\r)/gm, '');
  parsed = html2json(parsed);
  var elements = filter(parsed.child, {
    node: 'element'
  });
  elements = elements.size === 0 || {
    type: 'p',
    value: parsed
  }; // parse elements

  map(elements, function (item) {
    return switchNode(item);
  }); // render

  var p_text = ''; // discard text empty

  var discard_text = [' ', '&nbsp;'];

  var add_text = function add_text(value) {
    var invalid_text = discard_text.includes(value);
    var is_valid = value && value !== '' && value !== ' ' && !invalid_text;

    if (is_valid) {
      bodyItems.push({
        type: 'Paragraph',
        value: value
      });
      p_text = '';
    }

    return is_valid;
  };

  map(tagItems, function (_ref2) {
    var type = _ref2.type,
        value = _ref2.value;

    if (type !== 'text') {
      var _added = add_text(p_text);

      if (_added) {
        p_text = '';
      }
    }

    switch (type) {
      case 'cite':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Cite',
            value: value
          });
        }

        break;

      case 'h2':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Heading2',
            value: value
          });
        }

        break;

      case 'h3':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Heading3',
            value: value
          });
        }

        break;

      case 'h4':
        if (value && value !== '') {
          bodyItems.push({
            type: 'Heading4',
            value: value
          });
        }

        break;

      case 'p':
        // insert if exist and clean
        break;

      case 'text':
        p_text = "".concat(p_text).concat(value);
        break;

      default:
        bodyItems.push({
          type: type,
          value: value
        });
        break;
    }
  });
  var added = add_text(p_text);

  if (added) {
    p_text = '';
  }

  return bodyItems;
};

var TextBody = function TextBody(props) {
  var ads = props.ads,
      amp = props.amp,
      bodyWidth = props.bodyWidth,
      citation = props.citation,
      content = props.content,
      gallery = props.gallery,
      heading2 = props.heading2,
      heading3 = props.heading3,
      heading4 = props.heading4,
      hyperlink = props.hyperlink,
      images = props.images,
      paragraph = props.paragraph,
      tags = props.tags;
  if (!content) return null;
  var adsContent = get(ads, 'content', []);
  var adsRender = get(ads, 'render');
  var readmore = [];
  var intervention_amount = get(ads, 'interventionAmount', 3);
  var intervention_readmore_inserted = false;
  var intervention_status = false;
  var paragraph_length = 0;
  var ad_counter = 0; // let intervention_readmore = false;

  var body_items = parse_content(content);

  var render_image = function render_image(value) {
    if (!value) return null;
    var image_items = get(images, 'items', []);
    var image_data = undefined;
    map(image_items, function (item) {
      var item_value = get(item, 'contentId', '');

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

  var render_paragraph = function render_paragraph(value) {
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


    var ad_data_key = ad_counter - 1;
    var ad_content = adsContent[ad_data_key];
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Paragraph, _extends({}, paragraph, {
      maxWidth: bodyWidth,
      value: value
    })), adsRender && intervention_status && /*#__PURE__*/React.cloneElement(adsRender, {
      amp: amp,
      content: ad_content
    }));
  };

  var get_hyperlink_color = function get_hyperlink_color() {
    var color = 'primary1';
    if (hyperlink) color = hyperlink;
    return get(props, "theme.colors.".concat(color));
  };

  var switch_component = function switch_component(type, value) {
    switch (type) {
      case 'Cite':
        return /*#__PURE__*/React.createElement(Citation, _extends({}, citation, {
          maxWidth: bodyWidth,
          value: value
        }));

      case 'Facebook':
        return /*#__PURE__*/React.createElement(FacebookEmbed, {
          maxWidth: bodyWidth,
          url: value
        });

      case 'Instagram':
        return /*#__PURE__*/React.createElement(InstagramEmbed, {
          maxWidth: bodyWidth,
          url: value
        });

      case 'Tweet':
        return /*#__PURE__*/React.createElement(TwitterEmbed, {
          maxWidth: bodyWidth,
          url: value
        });

      case 'Youtube':
        return /*#__PURE__*/React.createElement(YouTubeEmbed, {
          maxWidth: bodyWidth,
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

      default:
        return /*#__PURE__*/React.createElement("pre", null, "erro no parse do conte\xFAdo");
    }
  };

  return /*#__PURE__*/React.createElement(Body, {
    hyperlinkColor: get_hyperlink_color()
  }, map(body_items, function (_ref, key) {
    var type = _ref.type,
        value = _ref.value;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: key
    }, switch_component(type, value));
  }), gallery && gallery.length > 0 && /*#__PURE__*/React.createElement(ImageGallery, {
    items: gallery
  }), /*#__PURE__*/React.createElement(Tags, _extends({}, tags, {
    maxWidth: bodyWidth
  })));
};

TextBody.propTypes = {
  ads: PropTypes.object,
  AdPlaceholder: PropTypes.func,
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  content: PropTypes.string,
  citation: PropTypes.object,
  gallery: PropTypes.array,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  tags: PropTypes.object
};
var TextBody$1 = withTheme(TextBody);

var Title = function Title(_ref) {
  var color = _ref.color,
      fontSize = _ref.fontSize,
      fontWeight = _ref.fontWeight,
      lineHeight = _ref.lineHeight,
      mb = _ref.mb,
      value = _ref.value;
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

Title.defaultProps = {
  color: 'neutral2',
  fontSize: ['38px', '56px'],
  fontWeight: 700,
  lineHeight: ['110%', '110%'],
  mb: ['2', '3']
};
Title.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.array,
  fontWeight: PropTypes.number,
  lineHeight: PropTypes.array,
  mb: PropTypes.array,
  value: PropTypes.string
};

var Article = function Article(props) {
  var ads = props.ads,
      amp = props.amp,
      bodyWidth = props.bodyWidth,
      byline = props.byline,
      citation = props.citation,
      featured = props.featured,
      gallery = props.gallery,
      headWidth = props.headWidth,
      heading2 = props.heading2,
      heading3 = props.heading3,
      heading4 = props.heading4,
      hyperlink = props.hyperlink,
      images = props.images,
      paragraph = props.paragraph,
      subject = props.subject,
      subtitle = props.subtitle,
      title = props.title,
      tags = props.tags,
      textbody = props.textbody,
      topimage = props.topimage; // prepare article slots

  var adsBody = get(ads, 'body', {});
  var adTopImage = get(ads, 'topImage', false);
  var adTopBody = get(ads, 'topBody', false);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Container$8, null, featured && featured.enabled ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ContainerFeatured, null, /*#__PURE__*/React.createElement(ContentImage, null, /*#__PURE__*/React.createElement(TopImage, _extends({
    amp: amp
  }, topimage))), /*#__PURE__*/React.createElement(ContentFeatured, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(Subject$1, subject), /*#__PURE__*/React.createElement(Title, title), /*#__PURE__*/React.createElement(Subtitle$1, subtitle))), /*#__PURE__*/React.createElement(MaxWidth, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(Content$4, null, /*#__PURE__*/React.createElement(Byline, _extends({
    amp: amp
  }, byline)))), adTopImage && /*#__PURE__*/React.cloneElement(adTopImage)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MaxWidth, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(Content$4, null, /*#__PURE__*/React.createElement(Subject$1, subject), /*#__PURE__*/React.createElement(Title, title), /*#__PURE__*/React.createElement(Subtitle$1, subtitle), /*#__PURE__*/React.createElement(Byline, _extends({
    amp: amp
  }, byline)))), adTopImage && /*#__PURE__*/React.cloneElement(adTopImage), /*#__PURE__*/React.createElement(MaxWidth, {
    maxWidth: headWidth
  }, /*#__PURE__*/React.createElement(TopImage, _extends({
    amp: amp
  }, topimage))), adTopBody && /*#__PURE__*/React.cloneElement(adTopBody)), /*#__PURE__*/React.createElement(TextBody$1, {
    ads: adsBody,
    amp: amp,
    bodyWidth: bodyWidth,
    citation: citation,
    content: textbody,
    gallery: gallery,
    heading2: heading2,
    heading3: heading3,
    heading4: heading4,
    hyperlink: hyperlink,
    images: images,
    paragraph: paragraph,
    tags: tags
  })));
};

Article.defaultProps = {
  amp: false,
  bodyWidth: '768px',
  headWidth: '1016px'
};
Article.propTypes = {
  ads: PropTypes.shape({
    body: PropTypes.shape({
      content: PropTypes.object,
      render: PropTypes.node,
      interventionAmount: PropTypes.number
    }),
    topImage: PropTypes.node,
    topBody: PropTypes.node
  }),
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  byline: PropTypes.object,
  citation: PropTypes.object,
  featured: PropTypes.object,
  gallery: PropTypes.array,
  headWidth: PropTypes.string,
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  subject: PropTypes.object,
  subtitle: PropTypes.object,
  tags: PropTypes.object,
  textbody: PropTypes.string,
  title: PropTypes.object,
  topimage: PropTypes.object
};
var Article$1 = withTheme(Article);

var ChevronRight = function ChevronRight(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
    d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
  }));
};

var ExpandLessIcon = function ExpandLessIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
    d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"
  }));
};

var ExpandMoreIcon = function ExpandMoreIcon(props) {
  return /*#__PURE__*/React.createElement(Icon, props, /*#__PURE__*/React.createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
  }));
};

var CONFIGS = {
  GROUP_ICON_CLASS: 'accordion-editorial-amp',
  GROUP_TITLE_DEFAULT_PROPS: {
    color: 'neutral2',
    element: 'span',
    lineHeight: '40px',
    fontFamily: 'secondary',
    fontSize: '20px'
  },
  GROUP_SUBITEM_DEFAULT_PROPS: {
    color: 'neutral2',
    element: 'a',
    fontFamily: 'secondary',
    fontSize: '16px'
  }
};

var Hyperlink = styled.a.withConfig({
  displayName: "styled__Hyperlink",
  componentId: "sc-1eylgru-0"
})(["text-decoration:none;font-size:16px;font-family:", ";color:", ";&:hover{opacity:0.8;}"], function (props) {
  return props.theme.fonts.secondary;
}, function (props) {
  return props.theme.colors.neutral5;
});
styled.div.withConfig({
  displayName: "styled__HeaderContainer",
  componentId: "sc-1eylgru-1"
})(["display:flex;flex-direction:column;width:100%;padding-bottom:16px;margin-bottom:16px;border-bottom:1px solid;border-color:", ";"], function (props) {
  return props.theme.colors.neutral9;
});
var GroupSection = styled.section.withConfig({
  displayName: "styled__GroupSection",
  componentId: "sc-1eylgru-2"
})(["width:100%;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:", ";padding-bottom:8px;margin-bottom:8px;.group-closed{display:none;}.hidden{display:none;}@media (min-width:", "){width:340px;}"], function (props) {
  return props.theme.colors.neutral9;
}, function (props) {
  return props.theme.queries.md;
});

var getGroupBorder = function getGroupBorder(_ref) {
  var removeBorders = _ref.removeBorders;
  if (removeBorders) return '';
  return css(["border-left-width:4px;border-left-style:solid;border-left-color:", ";"], function (props) {
    return props.theme.colors[props.$color];
  });
};

var GroupTitleContainer = styled.div.withConfig({
  displayName: "styled__GroupTitleContainer",
  componentId: "sc-1eylgru-3"
})(["", ";", ";cursor:pointer;display:flex;align-items:center;justify-content:space-between;.", "{fill:", ";}"], getGroupBorder, padding, CONFIGS.GROUP_ICON_CLASS, function (props) {
  return getColor(_objectSpread2(_objectSpread2({}, props), {}, {
    $color: props.iconColor
  }));
});
var GroupContent = styled.div.withConfig({
  displayName: "styled__GroupContent",
  componentId: "sc-1eylgru-4"
})(["margin-top:8px;"]);

var _excluded$1 = ["name"];

var GroupTitle = function GroupTitle(_ref) {
  var name = _ref.name,
      otherProps = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement(Typography$2, _extends({}, CONFIGS.GROUP_TITLE_DEFAULT_PROPS, otherProps), name);
};

var MenuItem$1 = function MenuItem(_ref2) {
  var color = _ref2.color,
      content = _ref2.content,
      groupItemProps = _ref2.groupItemProps,
      groupSubItemProps = _ref2.groupSubItemProps,
      groupTitleProps = _ref2.groupTitleProps,
      removeBorders = _ref2.removeBorders;
  // 1. Creates one state for each item in list | state name is polopoly prefix + stateId
  // 2. State does not accept special chars or Numbers as key, so we use a prefix to identify it (state L.14)
  // 3. To make state work it is necessary a user click to activate initialState. Before this the values submitted to client are the ones in HTML props
  // 4. In this context the state trigger is everytime user click on MenuButton
  // 5. Subgroup is not displayed when it is rendered with class 'group-closed'
  var itemColor = color;
  if (color === 'unique' && content.color) itemColor = content.color;
  var contentId = content.contentId,
      name = content.name,
      path = content.path,
      subitems = content.subitems,
      target = content.target;
  var parsedContentId = replace(contentId, '.', '');
  var isGroup = subitems.length > 0;
  var stateId = "state".concat(parsedContentId);
  var initialState = "{ \"".concat(stateId, "\": { \"status\": true } }");
  var newState = "tap:AMP.setState({ ".concat(stateId, ": {status: !").concat(stateId, ".status} })");
  var contentClass = "".concat(stateId, ".status ? 'group-open' : 'group-closed'");
  var expandMoreIconClass = "".concat(stateId, ".status ? \"").concat(CONFIGS.GROUP_ICON_CLASS, " hidden\" : \"").concat(CONFIGS.GROUP_ICON_CLASS, " visible\"");
  var expandLessIconClass = "".concat(stateId, ".status ? \"").concat(CONFIGS.GROUP_ICON_CLASS, " visible\" : \"").concat(CONFIGS.GROUP_ICON_CLASS, " hidden\"");
  var iconColor = get(groupItemProps, 'iconColor', 'neutral3');
  var itemId = "accordion-item-".concat(parsedContentId);

  var HyperlinkGroup = function HyperlinkGroup() {
    return /*#__PURE__*/React.createElement(Hyperlink, {
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
  };

  var Group = function Group() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GroupTitleContainer, _extends({
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
    })), /*#__PURE__*/React.createElement(GroupContent, {
      "data-amp-bind-class": contentClass
    }, map(subitems, function (_ref3, key) {
      var contentId = _ref3.contentId,
          path = _ref3.path,
          name = _ref3.name;
      return /*#__PURE__*/React.createElement(Block$1, {
        ml: "20px",
        mb: 2,
        mt: 2,
        key: key
      }, /*#__PURE__*/React.createElement(Typography$2, _extends({
        id: "accordion-item-".concat(replace(contentId, '.', ''))
      }, CONFIGS.GROUP_SUBITEM_DEFAULT_PROPS, {
        href: path
      }, groupSubItemProps), name));
    })));
  };

  return /*#__PURE__*/React.createElement(GroupSection, null, /*#__PURE__*/React.createElement("amp-state", {
    id: stateId
  }, /*#__PURE__*/React.createElement("script", {
    type: "application/json",
    dangerouslySetInnerHTML: {
      __html: "".concat(JSON.stringify(initialState))
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

var MenuItem = function MenuItem(_ref) {
  var color = _ref.color,
      content = _ref.content,
      groupItemProps = _ref.groupItemProps,
      groupSubItemProps = _ref.groupSubItemProps,
      groupTitleProps = _ref.groupTitleProps,
      removeBorders = _ref.removeBorders;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpenStatus = _useState2[1];

  var contentId = content.contentId,
      name = content.name,
      path = content.path,
      subitems = content.subitems;
  var isGroup = subitems.length > 0;
  var iconColor = get(groupItemProps, 'iconColor', 'neutral3');
  var itemColor = color;
  if (color === 'unique' && content.color) itemColor = content.color;

  var handleItemClick = function handleItemClick() {
    setOpenStatus(!open);
  };

  var GroupTitle = function GroupTitle() {
    return /*#__PURE__*/React.createElement(Typography$2, _extends({}, CONFIGS.GROUP_TITLE_DEFAULT_PROPS, groupTitleProps), name);
  };

  var HyperlinkGroup = function HyperlinkGroup() {
    return /*#__PURE__*/React.createElement(Hyperlink, {
      href: path
    }, /*#__PURE__*/React.createElement(GroupTitleContainer, _extends({
      $color: itemColor,
      removeBorders: removeBorders
    }, groupItemProps), /*#__PURE__*/React.createElement(GroupTitle, null), /*#__PURE__*/React.createElement(ChevronRight, {
      color: iconColor
    })));
  };

  var Group = function Group() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GroupTitleContainer, _extends({
      id: contentId,
      onClick: handleItemClick,
      removeBorders: removeBorders,
      $color: itemColor
    }, groupItemProps), /*#__PURE__*/React.createElement(GroupTitle, null), open ? /*#__PURE__*/React.createElement(ExpandLessIcon, {
      color: iconColor
    }) : /*#__PURE__*/React.createElement(ExpandMoreIcon, {
      color: iconColor
    })), /*#__PURE__*/React.createElement(GroupContent, null, open && map(subitems, function (_ref2, key) {
      var name = _ref2.name,
          path = _ref2.path;
      return /*#__PURE__*/React.createElement(Block$1, {
        ml: "20px",
        mb: 2,
        mt: 2,
        key: key
      }, /*#__PURE__*/React.createElement(Typography$2, _extends({}, CONFIGS.GROUP_SUBITEM_DEFAULT_PROPS, {
        href: path
      }, groupSubItemProps), name));
    })));
  };

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

var titleDefaultProps = {
  element: 'p',
  color: 'neutral3',
  fontFamily: 'secondary',
  fontSize: '14px',
  transform: 'uppercase',
  mb: 3
};

var AccordionEditorial = function AccordionEditorial(_ref) {
  var amp = _ref.amp,
      color = _ref.color,
      items = _ref.items,
      title = _ref.title,
      titleProps = _ref.titleProps,
      groupItemProps = _ref.groupItemProps,
      groupSubItemProps = _ref.groupSubItemProps,
      groupTitleProps = _ref.groupTitleProps,
      px = _ref.px,
      py = _ref.py,
      removeBorders = _ref.removeBorders;
  return /*#__PURE__*/React.createElement(Block$1, {
    px: px,
    py: py
  }, title && /*#__PURE__*/React.createElement(Typography$2, _extends({}, titleDefaultProps, titleProps), title), items && map(items, function (item, key) {
    return amp ? /*#__PURE__*/React.createElement(MenuItem$1, {
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
    });
  }));
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

//Get button size (height)
var getSize = function getSize(props, theme) {
  var $size = props.$size,
      iconSize = props.iconSize;
  if (!$size) return '';
  var factor = theme.factors.margin;
  var size = $size;
  if (isNaN(size)) return "height: ".concat(size);
  if (size < 4) return "height: ".concat(factor * 4, "px");
  if (iconSize) return 'height: max-content';
  return "height: ".concat(factor * $size, "px");
}; //Get button width variations from props


var getWidth = function getWidth(props, theme) {
  var $width = props.$width;
  if (props.fullWidth) return 'width: 100%;';
  if (!$width) return '';
  var factor = theme.factors.margin;
  if (typeof $width === 'string') return "width: ".concat($width);
  if ($width) return "width: ".concat(factor * $width, "px");
  return 'width: max-content;';
}; //Get button variations from props (return style matching the variation)


var getOutlinedCSS = function getOutlinedCSS(props, theme) {
  return "\n  background-color: transparent;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ".concat(theme.parseColor(props, theme, '$color'), ";\n  &:disabled {\n    border-color: ").concat(theme.colors.neutral8, ";\n  }\n");
};

var getGhostCSS = function getGhostCSS() {
  return "\n  background-color: transparent;\n  border-width: none;\n  border-style: none;\n  border-color: none;\n";
};

var getFilledCSS = function getFilledCSS(props, theme) {
  return "\n  background-color: ".concat(theme.parseColor(props, theme, '$color'), ";\n  &:disabled {\n    background-color: ").concat(theme.colors.neutral8, ";\n  }\n");
};

var parseVariation = function parseVariation(props, theme) {
  var $variant = props.$variant;
  if (!$variant) return '';
  if ($variant === 'outlined') return getOutlinedCSS(props, theme);
  if ($variant === 'ghost') return getGhostCSS();
  return getFilledCSS(props, theme);
}; //parse typography


var parseFontColor$1 = function parseFontColor(props, theme) {
  var fontColor = props.fontColor,
      $variant = props.$variant,
      disabled = props.disabled;
  if (disabled && $variant !== 'filled') return theme.colors.neutral8;
  if (fontColor) return theme.parseColor(props, theme, 'fontColor');
  if ($variant === 'outlined' || $variant === 'ghost') return theme.parseColor(props, theme, '$color');
  return theme.colors.white;
};

var parseFontFamily$1 = function parseFontFamily(props, theme) {
  var $fontFamily = props.$fontFamily;
  var selected = theme.fonts[$fontFamily];
  if (!$fontFamily || !selected) return theme.fonts.primary;
  return selected;
};

var parseFontWeight = function parseFontWeight(props) {
  var $fontWeight = props.$fontWeight;
  if (!$fontWeight) return 400;
  return $fontWeight;
};

var parseFontSize = function parseFontSize(props) {
  var $fontSize = props.$fontSize;
  if (!$fontSize) return 14;
  return $fontSize;
};

var parseTypography = function parseTypography(props, theme) {
  if (props.removeText === true) return "\n    span {\n      display: none;\n    }\n  ";else return "\n    span {\n      display: inline;\n      margin-left: 8px;\n      margin-right: 8px;\n      color: ".concat(parseFontColor$1(props, theme), ";\n      font-size: ").concat(parseFontSize(props), "px;\n      font-weight: ").concat(parseFontWeight(props), ";\n      font-family: ").concat(parseFontFamily$1(props, theme), ";\n    }\n  ");
};

var parseIcon = function parseIcon(props, theme) {
  return "\n    svg {\n      fill: ".concat(parseFontColor$1(props, theme), ";\n      width: ").concat(props.iconSize ? props.iconSize : '24px', ";\n      height: ").concat(props.iconSize ? props.iconSize : '24px', ";\n    }\n  ");
}; //main function


var parseStyle = function parseStyle(props, theme) {
  var parsePadding = theme.parsePadding,
      parseRadius = theme.parseRadius,
      parseCustom = theme.parseCustom;
  if (!props) return '';
  return "\n    ".concat(parseVariation(props, theme), ";\n    ").concat(parseTypography(props, theme), ";\n    ").concat(getSize(props, theme), ";\n    ").concat(getWidth(props, theme), ";\n    ").concat(parseRadius(props, '$radius'), ";    \n    ").concat(parsePadding(props, theme), ";\n    ").concat(parseIcon(props, theme), ";\n    ").concat(parseCustom(props), ";\n  ");
};

var parseProps = function parseProps(media, props) {
  switch (media) {
    case 'xs':
      return "\n        @media (min-width: ".concat(props.theme.queries.xs, ") {\n          ").concat(parseStyle(props.xs, props.theme), "\n        }\n      ");

    case 'sm':
      return "\n        @media (min-width: ".concat(props.theme.queries.sm, ") {\n          ").concat(parseStyle(props.sm, props.theme), "\n        }\n      ");

    case 'md':
      return "\n        @media (min-width: ".concat(props.theme.queries.md, ") {\n          ").concat(parseStyle(props.md, props.theme), "\n        }\n      ");

    case 'lg':
      return "\n        @media (min-width: ".concat(props.theme.queries.lg, ") {\n          ").concat(parseStyle(props.lg, props.theme), "\n        }\n      ");

    case 'xl':
      return "\n        @media (min-width: ".concat(props.theme.queries.xl, ") {\n          ").concat(parseStyle(props.xl, props.theme), "\n        }\n      ");

    default:
      return "".concat(parseStyle(props, props.theme));
  }
};

var getDisabledStyle = function getDisabledStyle() {
  return css(["&:disabled{cursor:unset;&:hover{animation-name:none;}}"]);
};

var getHoverStyle = function getHoverStyle() {
  return css(["@keyframes buttonHover{from{opacity:100%;}to{opacity:80%;}}&:hover{animation-name:buttonHover;animation-duration:0.3s;animation-fill-mode:forwards;}"]);
};

var getParsePropsValue = function getParsePropsValue() {
  return css(["", ";", ";", ";", ";", ";", ";"], function (props) {
    return parseProps('', props);
  }, function (props) {
    return props.xs && parseProps('xs', props);
  }, function (props) {
    return props.sm && parseProps('sm', props);
  }, function (props) {
    return props.md && parseProps('md', props);
  }, function (props) {
    return props.lg && parseProps('lg', props);
  }, function (props) {
    return props.xl && parseProps('xl', props);
  });
};

var Button$2 = styled.button.withConfig({
  displayName: "styled__Button",
  componentId: "sc-gs7w7j-0"
})(["display:flex;align-items:center;justify-content:center;min-width:max-content;text-transform:uppercase;border:unset;cursor:pointer;", " ", " ", ""], getDisabledStyle, getHoverStyle, getParsePropsValue);
var Link = styled.a.withConfig({
  displayName: "styled__Link",
  componentId: "sc-gs7w7j-1"
})(["display:flex;align-items:center;justify-content:center;min-width:max-content;text-transform:uppercase;border:unset;cursor:pointer;", " ", " ", ""], getDisabledStyle, getHoverStyle, getParsePropsValue);

var _excluded = ["children", "color", "disabled", "fontColor", "fontFamily", "fontWeight", "fontSize", "width", "fullWidth", "leftIcon", "onClick", "radius", "rightIcon", "size", "style", "variant", "loading", "enterKey", "removeText", "px", "py", "on", "path", "iconSize", "xs", "sm", "md", "lg", "xl", "custom", "id", "type", "ariaLabel"];

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      disabled = _ref.disabled,
      fontColor = _ref.fontColor,
      fontFamily = _ref.fontFamily,
      fontWeight = _ref.fontWeight,
      fontSize = _ref.fontSize,
      width = _ref.width,
      fullWidth = _ref.fullWidth,
      leftIcon = _ref.leftIcon,
      onClick = _ref.onClick,
      radius = _ref.radius,
      rightIcon = _ref.rightIcon,
      size = _ref.size,
      style = _ref.style,
      variant = _ref.variant,
      loading = _ref.loading,
      enterKey = _ref.enterKey,
      removeText = _ref.removeText,
      px = _ref.px,
      py = _ref.py,
      on = _ref.on,
      path = _ref.path,
      iconSize = _ref.iconSize,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      custom = _ref.custom,
      id = _ref.id,
      type = _ref.type,
      ariaLabel = _ref.ariaLabel,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  //check if children is string
  var childrenIsString = typeof children === 'string'; // Trigger to Handle enter keydown for forms

  var handleKeyPress = function handleKeyPress(event) {
    if (event.keyCode === 13) enterKey();
  };

  useEffect(function () {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return function () {
      return enterKey && window.removeEventListener('keydown', handleKeyPress);
    };
  }); //All props with $ are forwarded ONLY to components (Not to HTML like onClick)

  var getXsProps = function getXsProps() {
    return xs && {
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
  };

  var getSmProps = function getSmProps() {
    return sm && {
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
  };

  var getMdProps = function getMdProps() {
    return md && {
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
  };

  var getLgProps = function getLgProps() {
    return lg && {
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
  };

  var getXlProps = function getXlProps() {
    return xl && {
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
  };

  var buttonProps = _objectSpread2({
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
    'aria-label': ariaLabel
  }, otherProps);

  var renderButton = function renderButton() {
    return /*#__PURE__*/React.createElement(Button$2, buttonProps, loading && 'Carregando...', leftIcon && leftIcon, children && childrenIsString && /*#__PURE__*/React.createElement("span", null, children), children && !childrenIsString && children, rightIcon && rightIcon);
  };

  var renderLink = function renderLink() {
    return /*#__PURE__*/React.createElement(Link, _extends({
      href: path
    }, buttonProps, otherProps), loading && 'Carregando...', leftIcon && leftIcon, children && childrenIsString && /*#__PURE__*/React.createElement("span", null, children), children && !childrenIsString && children, rightIcon && rightIcon);
  };

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

var pathToImage = function pathToImage(derivative, domain, policy_id, width) {
  if (!policy_id) return null;
  var w = width || 1000;
  var r = domain || 'https://costanorte.com.br';
  var d = derivative || '2x1';
  var id = policy_id.split('.');
  var string = id.length > 2 ? "".concat(policy_id, ":").concat(id[2]) : "".concat(policy_id);
  var path = "".concat(r, "/image/policy:").concat(string, "/image.jpg?f=").concat(d, "&w=").concat(w);
  return path;
};

var Image$1 = function Image(_ref) {
  var children = _ref.children,
      content = _ref.content,
      custom = _ref.custom,
      domain = _ref.domain,
      height = _ref.height,
      lazy = _ref.lazy,
      placeholder = _ref.placeholder;
  var img_placeholder = placeholder || null;

  if (content['image-contentId']) {
    var policy_id = content['image-contentId'];
    var derivative = '2x1';
    var width = 1000;
    content['image-path'] = pathToImage(derivative, domain, policy_id, width);
    img_placeholder = img_placeholder || pathToImage(derivative, domain, policy_id, 10);
  }

  var content_path = content['image-path'];
  var image_style;

  if (lazy) {
    image_style = {
      backgroundImage: "url(".concat(lazy(content_path, img_placeholder), ")")
    };
  } else {
    image_style = {
      backgroundImage: "url(".concat(content_path, ")")
    };
  }

  if (height) {
    image_style.height = height;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: "image-background ".concat(custom || ''),
    style: image_style
  }, children && children);
};

Image$1.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object.isRequired,
  custom: PropTypes.string,
  domain: PropTypes.string,
  height: PropTypes.string,
  lazy: PropTypes.func,
  placeholder: PropTypes.string
};
Image$1.defaultProps = {
  content: {}
};

var ColumnHeader = function ColumnHeader(_ref) {
  var domain = _ref.domain,
      item = _ref.item;
  if (!item) return null;
  var path = '';
  var image = item['column-image'] && item['column-image']['image-contentId'] && item['column-image'];
  var column_name = item['column-name'];
  var column_description = item['column-desc'];
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "row",
    custom: "column-header",
    mb: "3",
    p: "3",
    w: "100p-6"
  }, /*#__PURE__*/React.createElement(Block$1, null, /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Imagem do colunista ".concat(column_name)
  }, /*#__PURE__*/React.createElement(Image$1, {
    domain: domain,
    content: image
  }))), /*#__PURE__*/React.createElement(Block$1, {
    align: "middle",
    ml: "2"
  }, /*#__PURE__*/React.createElement(Block$1, {
    custom: "title"
  }, column_name), /*#__PURE__*/React.createElement(Block$1, {
    custom: "subtitle"
  }, column_description)));
};

ColumnHeader.propTypes = {
  domain: PropTypes.string,
  item: PropTypes.object
};
ColumnHeader.defaultProps = {
  item: []
};

var parseBgColor = function parseBgColor(props, theme) {
  if (!props || !props.bgColor) return '';
  var selected = theme.colors[props.bgColor];
  if (!selected) return '';
  return "background-color: ".concat(selected, ";");
};

var parseFontColor = function parseFontColor(props, theme) {
  if (!props || !props.fontColor) return '';
  var selected = theme.colors[props.fontColor];
  if (!selected) return '';
  return "color: ".concat(selected, ";");
};

var parseColor = function parseColor(props, theme, propName) {
  if (!propName) return console.error('PRENSA :: Não existe nome de prop para buscar no parseColor');
  var propValue = get(props, propName, 'activeColor');
  if (propValue.startsWith('#')) return propValue;
  var parsedValue = theme.colors[propValue];
  if (!parsedValue) return console.error("PRENSA :: N\xE3o existe valor correspondente para a prop de nome ".concat(propName, " passada na fun\xE7\xE3o parseColor"));
  return parsedValue;
};

var parseCustom = function parseCustom(props) {
  if (!props || !props.custom) return '';
  var object = [];
  object.push("".concat(props.custom));
  return object.join('');
};

var parseCustomDef = function parseCustomDef(props) {
  if (!props || !props.customDef) return '';
  var object = [];

  switch (props.customDef) {
    case 'demo':
      object.push("\n        background-color: rgba(1, 22, 39, 0.2);\n        color: rgba(255, 55, 255, 1);\n        font-weight: bold;\n        height: 100px;\n        span { \n          border: 1px solid rgba(255, 55, 255, 1);\n          font-size: 11px;\n          padding: 3px;\n          margin: 0px; \n        }\n      ");
  }

  return object.join('');
};

var parseFontFamily = function parseFontFamily(props, theme) {
  if (!props) return '';
  var selected = theme.fonts[props.typography];
  if (!selected) return '';
  return "font-family: ".concat(selected, ";");
};

var parseMargin = function parseMargin(props, theme) {
  if (!props) return '';
  var mx = props.mx,
      my = props.my,
      mt = props.mt,
      mr = props.mr,
      mb = props.mb,
      ml = props.ml;
  var object = [];
  var factor = theme.factors.margin;
  mx !== undefined && isNaN(mx) ? object.push("\n      margin-left: ".concat(mx, "; \n      margin-right: ").concat(mx, ";")) : mx && object.push("\n      margin-left: ".concat(factor * mx, "px; \n      margin-right: ").concat(factor * mx, "px;\n    "));
  my !== undefined && isNaN(my) ? object.push("\n      margin-top: ".concat(my, "; \n      margin-bottom: ").concat(my, ";")) : my && object.push("\n      margin-top: ".concat(factor * my, "px; \n      margin-bottom: ").concat(factor * my, "px;\n    "));
  mt !== undefined && isNaN(mt) ? object.push("\n      margin-top: ".concat(mt, ";")) : mt && object.push("\n      margin-top: ".concat(factor * mt, "px;\n    "));
  mr !== undefined && isNaN(mr) ? object.push("\n      margin-right: ".concat(mr, ";")) : mr && object.push("\n      margin-right: ".concat(factor * mr, "px;\n    "));
  mb !== undefined && isNaN(mb) ? object.push("\n      margin-bottom: ".concat(mb, ";")) : mb && object.push("\n      margin-bottom: ".concat(factor * mb, "px;\n    "));
  ml !== undefined && isNaN(ml) ? object.push("\n      margin-left: ".concat(ml, ";")) : ml && object.push("\n      margin-left: ".concat(factor * ml, "px;\n    "));
  return object.join('');
};

var parsePadding = function parsePadding(props, theme) {
  if (!props) return '';
  var px = props.px,
      py = props.py,
      pt = props.pt,
      pr = props.pr,
      pb = props.pb,
      pl = props.pl;
  var object = [];
  var factor = theme.factors.padding;
  px !== undefined && isNaN(px) ? object.push("\n      padding-left: ".concat(px, "; \n      padding-right: ").concat(px, ";\n    ")) : px && object.push("\n      padding-left: ".concat(factor * px, "px; \n      padding-right: ").concat(factor * px, "px\n    ;"));
  py !== undefined && isNaN(py) ? object.push("\n      padding-top: ".concat(py, "; \n      padding-bottom: ").concat(py, ";\n    ")) : py && object.push("\n      padding-top: ".concat(factor * py, "px; \n      padding-bottom: ").concat(factor * py, "px\n    ;"));
  pt !== undefined && isNaN(pt) ? object.push("\n      padding-top: ".concat(pt, ";\n    ")) : pt && object.push("\n      padding-top: ".concat(factor * pt, "px\n    ;"));
  pr !== undefined && isNaN(pr) ? object.push("\n      padding-right: ".concat(pr, ";\n    ")) : pr && object.push("\n      padding-right: ".concat(factor * pr, "px\n    ;"));
  pb !== undefined && isNaN(pb) ? object.push("\n      padding-bottom: ".concat(pb, ";\n    ")) : pb && object.push("\n      padding-bottom: ".concat(factor * pb, "px\n    ;"));
  pl !== undefined && isNaN(pl) ? object.push("\n      padding-left: ".concat(pl, ";\n    ")) : pl && object.push("\n      padding-left: ".concat(factor * pl, "px\n    ;"));
  return object.join('');
};

var parseRadius = function parseRadius(props, propName) {
  var propValue = get(props, propName);
  if (!propValue) return '';
  var selected = theme.radius[propValue];

  if (!selected) {
    console.error("PRENSA :: Erro ao traduzir token \"".concat(propValue, "\" no parseRadius"));
    return '';
  }

  return "border-radius: ".concat(selected);
};

var theme = {
  colors: {
    activeColor: '#09B77B',
    primary1: '#063F8F',
    primary2: '#446FAB',
    primary3: '#829EC7',
    secondary1: '#E5471A',
    secondary2: '#EB7553',
    secondary3: '#F2A28C',
    black: '#000000',
    neutral1: '#151515',
    neutral2: '#333333',
    neutral3: '#555555',
    neutral4: '#666666',
    neutral5: '#707070',
    neutral6: '#999999',
    neutral7: '#B5B5B5',
    neutral8: '#D7D7D7',
    neutral9: '#EAEAEA',
    neutral10: '#F2F2F2',
    neutral11: '#FAFAFA',
    white: '#FFFFFF',
    colorAds: '#5421C2',
    editorial1: '#2C1D15',
    editorial2: '#73B6D3',
    editorial3: '#00A070',
    editorial4: '#B455A0',
    editorial5: '#F37042',
    product1: '#0975B7',
    product2: '#AB001B',
    product3: '#BFA525',
    product4: '#080808',
    product5: '#09B77B',
    success1: '#3C8D40',
    success2: '#50AE55',
    success3: '#83C686',
    error1: '#D13135',
    error2: '#F1453D',
    error3: '#E37475'
  },
  fonts: {
    primary: 'Work Sans',
    secondary: 'Nunito Sans'
  },
  factors: {
    dimensions: 10,
    padding: 8,
    margin: 8
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  },
  radius: {
    unset: '0px',
    "default": '3px',
    alternative: '5px'
  },
  parseBgColor: parseBgColor,
  parseCustom: parseCustom,
  parseCustomDef: parseCustomDef,
  parseFontColor: parseFontColor,
  parseFontFamily: parseFontFamily,
  parseMargin: parseMargin,
  parsePadding: parsePadding,
  parseRadius: parseRadius,
  parseColor: parseColor
};

var Area = function Area(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "row",
    aligny: "middle",
    alignx: "center",
    bgColor: "neutral9",
    width: "100%",
    custom: "\n      position: fixed;\n      left: 0;\n      bottom: 0;\n      z-index: 10;\n    "
  }, children);
};
Area.propTypes = {
  children: PropTypes.object
};
var ButtonSubmit = function ButtonSubmit(_ref2) {
  var buttonAction = _ref2.buttonAction,
      children = _ref2.children;
  return /*#__PURE__*/React.createElement(Button$1, {
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
};
ButtonSubmit.propTypes = {
  buttonAction: PropTypes.func,
  children: PropTypes.string
};
var Container$1 = function Container(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "column",
    aligny: "middle",
    alignx: "center",
    py: 2,
    px: 2,
    width: "calc(100% - 32px)",
    custom: "\n      min-height: calc(72px - 32px);\n      max-width: 1024px;\n    ",
    sm: {
      align: 'row',
      aligny: 'middle',
      alignx: 'center'
    }
  }, children);
};
Container$1.propTypes = {
  children: PropTypes.array
};
var Content$2 = function Content(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement(Block$1, {
    align: "row",
    aligny: "middle",
    alignx: "center",
    custom: "\n      a {\n        color: ".concat(theme.colors['primary3'], ";\n        cursor: pointer;\n        text-decoration: underline;\n      }\n    "),
    width: "100%"
  }, children);
};
Content$2.propTypes = {
  children: PropTypes.object
};
var Message = function Message(_ref5) {
  var text = _ref5.text;
  return /*#__PURE__*/React.createElement(Typography$2, {
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
};
Message.propTypes = {
  text: PropTypes.string
};

var Dialog = function Dialog(_ref) {
  var buttonAction = _ref.buttonAction,
      buttonText = _ref.buttonText,
      message = _ref.message;
  return /*#__PURE__*/React.createElement(Area, null, /*#__PURE__*/React.createElement(Container$1, null, /*#__PURE__*/React.createElement(Content$2, null, /*#__PURE__*/React.createElement(Message, {
    text: message
  }, message)), /*#__PURE__*/React.createElement(ButtonSubmit, {
    buttonAction: buttonAction
  }, buttonText)));
};
Dialog.defaultProps = {
  buttonAction: function buttonAction() {
    return null;
  },
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

var Input$1 = function Input(_ref) {
  var autoFocus = _ref.autoFocus,
      disabled = _ref.disabled,
      invalid = _ref.invalid,
      label = _ref.label,
      onEnter = _ref.onEnter,
      setValue = _ref.setValue,
      type = _ref.type,
      value = _ref.value,
      warning = _ref.warning;

  var KeyDown = function KeyDown(_ref2) {
    var key = _ref2.key;
    return key === 'Enter' && onEnter && onEnter();
  };

  var Label = function Label() {
    return /*#__PURE__*/React.createElement("p", {
      className: 'label'
    }, label && label);
  };

  var Warning = function Warning() {
    return /*#__PURE__*/React.createElement("p", {
      className: 'warning'
    }, warning && invalid ? warning : ' ');
  };

  var props = {
    autoFocus: autoFocus,
    defaultValue: value,
    disabled: disabled,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setValue(target.value);
    },
    onKeyDown: KeyDown,
    type: type
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "form-field ".concat(invalid ? 'invalid' : '', " ").concat(type)
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

var colors_props = ["activeColor", "primary1", "primary2", "primary3", "secondary1", "secondary2", "secondary3", "product1", "product2", "product3", "product4", "product5", "editorial1", "editorial2", "editorial3", "editorial4", "editorial5", "black", "neutral1", "neutral2", "neutral3", "neutral4", "neutral5", "neutral6", "neutral7", "neutral8", "neutral9", "neutral10", "neutral11", "white", "ads", "success1", "success2", "success3", "error1", "error2", "error3"];

var FieldLabel = function FieldLabel(props) {
  var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return /*#__PURE__*/React.createElement(Typography$2, _extends({
    element: "label"
  }, props), capitalizeFirstLetter(props.children));
};

FieldLabel.propTypes = {
  children: PropTypes.node
};

var FieldErrorMessage = function FieldErrorMessage(props) {
  return /*#__PURE__*/React.createElement(Typography$2, _extends({
    element: "p"
  }, props), props.children);
};

FieldErrorMessage.propTypes = {
  children: PropTypes.string
};

var handleFontFamily = function handleFontFamily(props) {
  var theme = get(props, 'theme.fonts');
  var value = get(props, '$fontFamily');
  return theme[value];
};

var handleFontSize = function handleFontSize(props) {
  var unit = get(props, 'theme.factors.dimensions', 10);
  var value = get(props, '$fontSize');
  if (typeof value === 'string') return value;else return "".concat(value * unit, "px");
};

var handleBorderRadius = function handleBorderRadius(props) {
  var theme = get(props, 'theme.radius');
  var value = get(props, '$radius');
  return theme[value];
};

var handlePlaceholderColor = function handlePlaceholderColor(props) {
  var theme = get(props, 'theme.colors');
  var value = get(props, 'placeholderColor');
  return theme[value];
}; //TODO: Unificar as funções de getColor do theme


var handleInputColor = function handleInputColor(props) {
  var isValid = get(props, 'validation');
  var theme = get(props, 'theme.colors');
  var value = get(props, '$color'); //Static rule for false validation (apply color error1)

  if (isValid === false) return theme.error1;
  return theme[value];
};

var handleColor = function handleColor(props) {
  var theme = get(props, 'theme.colors');
  var value = get(props, '$color');
  return theme[value];
};

var handleFocusedColor = function handleFocusedColor(props) {
  var isValid = get(props, 'validation');
  var theme = get(props, 'theme.colors');
  if (isValid === false) return theme.error1; //Static rule to return activeSystemColor to label border

  return theme.activeColor;
};

var handleSize = function handleSize(props) {
  if (typeof props.size === 'string') return props.size;
  return "".concat(props.size, "px");
};

var Input = styled.input.withConfig({
  displayName: "styled__Input",
  componentId: "sc-pfex0l-0"
})(["width:calc(100% - 16px);padding-left:8px;padding-right:8px;font-size:", ";font-weight:400;font-family:", ";color:", ";border-radius:", ";border-color:unset;border-width:unset;border-style:unset;&:focus{outline-color:unset;outline-width:unset;outline-style:none;}::placeholder{color:", ";}"], handleFontSize, handleFontFamily, handleColor, handleBorderRadius, handlePlaceholderColor);
var InputContainer = styled.div.withConfig({
  displayName: "styled__InputContainer",
  componentId: "sc-pfex0l-1"
})(["background-color:white;width:100%;height:", ";box-shadow:", ";display:flex;align-items:center;border-radius:", ";&:focus-within{box-shadow:", ";}"], handleSize, function (props) {
  return "0 0 0 1px ".concat(handleInputColor(props));
}, handleBorderRadius, function (props) {
  return "0 0 0 2px ".concat(handleFocusedColor(props));
});

var Field = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var icon = props.icon,
      label = props.label,
      styledLabel = props.styledLabel,
      styledMessage = props.styledMessage,
      styledInput = props.styledInput,
      styledField = props.styledField,
      styledRoot = props.styledRoot,
      onChange = props.onChange,
      onIconClick = props.onIconClick,
      type = props.type,
      value = props.value,
      validation = props.validation,
      validationMessage = props.validationMessage,
      placeholder = props.placeholder,
      disabled = props.disabled,
      on = props.on,
      id = props.id,
      name = props.name,
      mask = props.mask,
      onEnterKey = props.onEnterKey,
      size = props.size;
  var styledLabelDefaultProps = {
    fontSize: get(styledLabel, 'fontSize', '14px'),
    fontWeight: get(styledLabel, 'fontWeight', 400),
    fontFamily: get(styledLabel, 'fontFamily', 'secondary'),
    color: get(styledLabel, 'color', 'neutral5'),
    mt: get(styledLabel, 'mt', 0.5),
    mr: get(styledLabel, 'mr', undefined),
    mb: get(styledLabel, 'mb', 0.5),
    ml: get(styledLabel, 'ml', undefined)
  };
  var styledMessageDefaultProps = {
    fontSize: get(styledMessage, 'fontSize', '14px'),
    fontWeight: get(styledMessage, 'fontWeight', 400),
    fontFamily: get(styledMessage, 'fontFamily', 'secondary'),
    color: get(styledMessage, 'color', 'error1'),
    mt: get(styledMessage, 'mt', 0.5),
    mr: get(styledMessage, 'mr', undefined),
    mb: get(styledMessage, 'mb', 0.5),
    ml: get(styledMessage, 'ml', undefined)
  };
  var styledInputDefaultProps = {
    $color: get(styledInput, 'color', 'neutral5'),
    $radius: get(styledInput, 'radius', 'default'),
    size: size
  };
  var styledRootDefaultProps = {
    $fontSize: get(styledRoot, 'fontSize', '14px'),
    $fontWeight: get(styledRoot, 'fontWeight', 400),
    $fontFamily: get(styledRoot, 'fontFamily', 'secondary'),
    $color: get(styledRoot, 'color', 'neutral2'),
    placeholderColor: get(styledRoot, 'placeholderColor'),
    $radius: get(styledInput, 'radius', 'default')
  };
  var styledFieldDefaultProps = {
    mt: get(styledField, 'mt', 0.5),
    mr: get(styledField, 'mr', undefined),
    mb: get(styledField, 'mb', 0.5),
    ml: get(styledField, 'ml', undefined)
  };

  var handleChange = function handleChange(event) {
    onChange(event.target.value);
  };

  var renderIcon = function renderIcon() {
    if (!icon) return null;
    var iconHasOnClick = icon.props && icon.props.onClick ? icon.props.onClick : false;
    return /*#__PURE__*/React.cloneElement(icon, {
      onClick: iconHasOnClick ? iconHasOnClick : onIconClick
    });
  };

  var renderLabel = function renderLabel() {
    if (!label) return null;
    return /*#__PURE__*/React.createElement(FieldLabel, styledLabelDefaultProps, label);
  };

  var renderMessage = function renderMessage() {
    if (validation === true) return null;
    return /*#__PURE__*/React.createElement(FieldErrorMessage, styledMessageDefaultProps, validationMessage);
  };

  var handleKeyPress = function handleKeyPress(_ref) {
    var key = _ref.key;

    if (typeof onEnterKey === 'function') {
      if (key === 'Enter') onEnterKey();
    }
  };

  var inputProps = {
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
    color: PropTypes.oneOf(colors_props),
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
    color: PropTypes.oneOf(colors_props),
    mt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    ml: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),

  /**
   * Props de estilo para o elemento input HTML
   */
  styledInput: PropTypes.shape({
    color: PropTypes.oneOf(colors_props),
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

var Image = function Image(_ref) {
  var content = _ref.content,
      custom = _ref.custom,
      domain = _ref.domain,
      lazy = _ref.lazy,
      placeholder = _ref.placeholder;
  var img_placeholder = placeholder || null;

  if (content['image-contentId']) {
    var policy_id = content['image-contentId'];
    var derivative = '2x1';
    var width = 1000;
    content['image-path'] = pathToImage(derivative, domain, policy_id, width);
    img_placeholder = img_placeholder || pathToImage(derivative, domain, policy_id, 10);
  }

  if (content['image-legacy']) {
    content['image-path'] = content['image-legacy'];
    content['image-subtitle'] = 'Imagem importada do sistema legado / Reprodução';
    img_placeholder = '';
  }

  if (content['image-path']) {
    var content_path = content['image-path'];

    if (lazy) {
      content_path = lazy(content_path, img_placeholder);
    }

    var byline = !content['image-byline'] || content['image-byline'] == 'undefined' ? null : content['image-byline'];
    var caption_byline = content['image-subtitle'] ? "".concat(content['image-subtitle']).concat(byline ? " (".concat(byline, ")") : '') : "".concat(content['image-subtitle-original']).concat(byline ? " (".concat(byline, ")") : '');
    return /*#__PURE__*/React.createElement(Block$1, {
      custom: "image-box ".concat(custom),
      w: "100p"
    }, /*#__PURE__*/React.createElement("img", {
      alt: caption_byline ? '$Legenda da imagem: {caption_byline}' : 'Legenda da imagem: Reprodução',
      src: content_path
    }), /*#__PURE__*/React.createElement(Block$1, {
      custom: "label"
    }, caption_byline));
  }

  return /*#__PURE__*/React.createElement("pre", null, "no-image");
};

Image.propTypes = {
  content: PropTypes.object.isRequired,
  custom: PropTypes.string,
  domain: PropTypes.string,
  lazy: PropTypes.func,
  placeholder: PropTypes.string
};
Image.defaultProps = {
  content: {}
};

var Content$1 = styled.div.withConfig({
  displayName: "styled__Content",
  componentId: "sc-1uwlec8-0"
})(["", ""], padding);
var StyledContainer = styled.div.withConfig({
  displayName: "styled__StyledContainer",
  componentId: "sc-1uwlec8-1"
})(["amp-sidebar{background-color:", ";}"], function (props) {
  return props.theme.colors[props.$backgroundColor];
});

var AmpMenu = function AmpMenu(_ref) {
  var backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      id = _ref.id,
      layout = _ref.layout,
      menuAnchor = _ref.menuAnchor,
      px = _ref.px,
      py = _ref.py;
  return /*#__PURE__*/React.createElement(StyledContainer, {
    $backgroundColor: backgroundColor
  }, /*#__PURE__*/React.createElement("amp-sidebar", {
    id: id,
    layout: layout,
    side: menuAnchor
  }, /*#__PURE__*/React.createElement(Content$1, {
    px: px,
    py: py
  }, children)));
};

AmpMenu.defaultProps = {
  backgroundColor: 'white',
  layout: 'nodisplay',
  menuAnchor: 'left'
};
AmpMenu.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  layout: PropTypes.string,
  menuAnchor: PropTypes.oneOf(['left', 'right']),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

var Backdrop = styled.div.withConfig({
  displayName: "styled__Backdrop",
  componentId: "sc-jx75yj-0"
})(["background-color:rgba(0,0,0,0.5);height:100vh;position:fixed;top:0px;left:0px;width:100vw;z-index:10;"]);

var parsePosition = function parsePosition(_ref) {
  var menuAnchor = _ref.menuAnchor;
  if (menuAnchor === 'left') return 'left: 0px;';
  if (menuAnchor === 'right') return 'right: 0px;';
};

var Content = styled.div.withConfig({
  displayName: "styled__Content",
  componentId: "sc-jx75yj-1"
})(["", ";", ";", ";background-color:", ";display:block;height:100vh;overflow-y:auto;position:fixed;top:0px;z-index:11;@media (min-width:", "){width:max-content;}"], dimensions, parsePosition, padding, function (props) {
  return props.theme.colors[props.$backgroundColor];
}, function (props) {
  return props.theme.queries.md;
});

var Menu = function Menu(_ref) {
  var backgroundColor = _ref.backgroundColor,
      children = _ref.children,
      close = _ref.close,
      open = _ref.open,
      menuAnchor = _ref.menuAnchor,
      px = _ref.px,
      py = _ref.py,
      width = _ref.width;
  if (!open) return null;
  return /*#__PURE__*/React.createElement(Block$1, null, /*#__PURE__*/React.createElement(Backdrop, {
    onClick: close
  }), /*#__PURE__*/React.createElement(Content, {
    $backgroundColor: backgroundColor,
    px: px,
    py: py,
    menuAnchor: menuAnchor,
    $width: width
  }, children));
};

Menu.defaultProps = {
  backgroundColor: 'white',
  menuAnchor: 'left',
  width: 'max-content'
};
Menu.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  close: PropTypes.func,
  menuAnchor: PropTypes.oneOf(['left', 'right']),
  open: PropTypes.bool,
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.string
};
var Menu$1 = withTheme(Menu);

var SideMenu = function SideMenu(props) {
  var amp = props.amp;
  if (amp) return /*#__PURE__*/React.createElement(AmpMenu, props);else return /*#__PURE__*/React.createElement(Menu$1, props);
};

var SocialMedias = function SocialMedias(props) {
  var content = props.content;
  if (!content) return null;
  var propsSocialMedia = {
    align: 'row evenly'
  };
  var propsSocialCirlce = {
    mr: '1',
    custom: 'social-circle',
    'md': {
      mr: '0',
      ml: '1'
    }
  };
  return /*#__PURE__*/React.createElement(Block$1, propsSocialMedia, map(content, function (item, k) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.path,
      key: k
    }, /*#__PURE__*/React.createElement(Block$1, propsSocialCirlce, item.icon));
  }));
};

SocialMedias.propTypes = {
  content: PropTypes.array.isRequired
};

var parseColorVariation = function parseColorVariation(props) {
  if (props.transparent === true) return "\n    color: ".concat(props.theme.parseColor(props, props.theme, 'subjectColor'), ";\n  ");
  return "\n    color: ".concat(props.theme.colors.white, ";\n  ");
};

var parseBackgroundVariation = function parseBackgroundVariation(props) {
  if (props.transparent === true) return 'background-color: transparent;';
  return "background-color: ".concat(props.theme.parseColor(props, props.theme, 'subjectColor'), ";");
};

var Container = styled.div.withConfig({
  displayName: "Subject__Container",
  componentId: "sc-5qi5c5-0"
})(["display:flex;align-items:center;justify-content:center;width:max-content;height:28px;", ";", ";", ";", ";"], function (props) {
  return props.theme.parsePadding(props, props.theme);
}, function (props) {
  return props.theme.parseMargin(props, props.theme);
}, function (props) {
  return props.theme.parseRadius(props, 'borderRadius');
}, function (props) {
  return parseBackgroundVariation(props);
});
var Typography = styled.span.withConfig({
  displayName: "Subject__Typography",
  componentId: "sc-5qi5c5-1"
})(["font-size:14px;text-transform:uppercase;font-family:", ";font-weight:", ";", ";"], function (props) {
  return props.theme.fonts.secondary;
}, function (props) {
  return props.$fontWeight;
}, function (props) {
  return parseColorVariation(props);
});

var Subject = function Subject(_ref) {
  var children = _ref.children,
      color = _ref.color,
      radius = _ref.radius,
      px = _ref.px,
      mb = _ref.mb,
      style = _ref.style,
      transparent = _ref.transparent,
      weight = _ref.weight;
  if (!children) return null;
  return /*#__PURE__*/React.createElement(Container, {
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
var index$1 = withTheme(Subject);

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Facebok: FacebookEmbed,
  Twitter: TwitterEmbed,
  Instagram: InstagramEmbed,
  YouTube: YouTubeEmbed
});

export { AccordionEditorial, Article$1 as Article, Block$1 as Block, Button$1 as Button, ColumnHeader, Dialog, index as Embeds, index$2 as Field, index$3 as Form, Icon, Image, Image$1 as ImageBackground, ImageGallery, SideMenu, SocialMedias, SocialShare, index$1 as Subject, Typography$2 as Typography, theme };
//# sourceMappingURL=index.esm.js.map
