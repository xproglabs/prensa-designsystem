'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PropTypes = require('prop-types');
var React = require('react');
var styled = require('styled-components');
var lodash = require('lodash');
require('date-fns');
require('date-fns/locale');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
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

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var parseAlign = function parseAlign(props) {
  var align = lodash.get(props, 'align', undefined);
  var alignx = lodash.get(props, 'alignx', undefined);
  var aligny = lodash.get(props, 'aligny', undefined);
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

var parseWidth = function parseWidth(props, theme) {
  var unit = theme.factors.padding;
  var width = lodash.get(props, '$width', undefined);
  var fullWidth = lodash.get(props, 'fullWidth', undefined);
  var px = lodash.get(props, 'px', undefined);
  var pl = lodash.get(props, 'pl', undefined);
  var pr = lodash.get(props, 'pr', undefined);

  if (fullWidth) {
    if (px) {
      if (typeof px === 'string') return "width: calc(100% - ".concat(px, " - ").concat(px, ")");
      return "width: calc(100% - ".concat(px * unit, "px - ").concat(px * unit, "px)");
    }

    if (pl && pr) {
      if (typeof pl === 'string' && typeof pr === 'string') return "width: calc(100% - ".concat(pl, " - ").concat(pr, ")");
      return "width: calc(100% - ".concat(pl * unit, "px - ").concat(pr * unit, "px)");
    }

    if (pl) {
      if (typeof pl === 'string') return "width: calc(100% - ".concat(pl, ")");
      return "width: calc(100% - ".concat(pl * unit, "px)");
    }

    if (pr) {
      if (typeof pr === 'string') return "width: calc(100% - ".concat(pr, ")");
      return "width: calc(100% - ".concat(pr * unit, "px)");
    }

    return 'width: 100%';
  } else if (!width) {
    return '';
  } else if (typeof width === 'string') {
    return "width: ".concat(width);
  } else {
    return "width: ".concat(width * theme.factors.dimensions, "px");
  }
};
var parseHeight = function parseHeight(props, theme) {
  var unit = theme.factors.padding;
  var height = lodash.get(props, '$height', undefined);
  var fullHeight = lodash.get(props, 'fullHeight', undefined);
  var py = lodash.get(props, 'py', undefined);
  var pt = lodash.get(props, 'pt', undefined);
  var pb = lodash.get(props, 'pb', undefined);

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

var parseStyle = function parseStyle(props, theme) {
  return "\n    ".concat(parseAlign(props), ";\n    ").concat(parseWidth(props, theme), ";\n    ").concat(parseHeight(props, theme), ";\n    ").concat(theme.parseBgColor(props, theme), ";\n    ").concat(theme.parseFontColor(props, theme), ";\n    ").concat(theme.parseFontFamily(props, theme), ";\n    ").concat(theme.parseCustomDef(props, theme), ";\n    ").concat(theme.parseCustom(props, theme), ";\n    ").concat(theme.parseMargin(props, theme), ";\n    ").concat(theme.parsePadding(props, theme), ";\n  ");
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

var _templateObject;
var Component = styled__default['default'].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) {
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

var Block = function Block(props) {
  var getXsProps = function getXsProps() {
    return props.xs && _objectSpread2(_objectSpread2({}, props.xs), {}, {
      $width: props.xs.width ? props.xs.width : props.width,
      $height: props.xs.height ? props.xs.height : props.height
    });
  };

  var getSmProps = function getSmProps() {
    return props.sm && _objectSpread2(_objectSpread2({}, props.sm), {}, {
      $width: props.sm.width ? props.sm.width : props.width,
      $height: props.sm.height ? props.sm.height : props.height
    });
  };

  var getMdProps = function getMdProps() {
    return props.md && _objectSpread2(_objectSpread2({}, props.md), {}, {
      $width: props.md.width ? props.md.width : props.width,
      $height: props.md.height ? props.md.height : props.height
    });
  };

  var getLgProps = function getLgProps() {
    return props.lg && _objectSpread2(_objectSpread2({}, props.lg), {}, {
      $width: props.lg.width ? props.lg.width : props.width,
      $height: props.lg.height ? props.lg.height : props.height
    });
  };

  var getXlProps = function getXlProps() {
    return props.xl && _objectSpread2(_objectSpread2({}, props.xl), {}, {
      $width: props.xl.width ? props.xl.width : props.width,
      $height: props.xl.height ? props.xl.height : props.height
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(Component, {
    align: props.align,
    alignx: props.alignx,
    aligny: props.aligny,
    bgColor: props.bgColor,
    customDef: props.customDef,
    fontColor: props.fontColor,
    py: props.py,
    px: props.px,
    pt: props.pt,
    pr: props.pr,
    pb: props.pb,
    pl: props.pl,
    my: props.my,
    mx: props.mx,
    mt: props.mt,
    mr: props.mr,
    mb: props.mb,
    ml: props.ml,
    typography: props.typography,
    onClick: props.onClick,
    fullWidth: props.fullWidth,
    fullHeight: props.fullHeight,
    custom: props.custom,
    $width: props.width,
    $height: props.height,
    id: props.id,
    xs: getXsProps(),
    sm: getSmProps(),
    md: getMdProps(),
    lg: getLgProps(),
    xl: getXlProps()
  }, props.children);
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
  align: PropTypes__default['default'].oneOf(['column', 'column-reverse', 'row', 'row-reverse']),

  /**
   * Configuração da posição horizontal (eixo x)
   */
  alignx: PropTypes__default['default'].oneOf(['left', 'center', 'right', 'evenly', 'between']),

  /**
   * Configuração da posição vertical (eixo y)
   */
  aligny: PropTypes__default['default'].oneOf(['top', 'middle', 'bottom', 'evenly', 'between']),

  /**
   * Define propriedade de background-color
   */
  bgColor: PropTypes__default['default'].string,

  /**
   * Define estilo customizado para o bloco
   */
  custom: PropTypes__default['default'].string,

  /**
   * Seleciona estilo customizado para o bloco
   */
  customDef: PropTypes__default['default'].string,

  /**
   * Renderiza os blocos filhos
   */
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].object, PropTypes__default['default'].string]),

  /**
   * Define propriedade de color
   */
  fontColor: PropTypes__default['default'].string,

  /**
   * Define propriedade de padding
   */
  py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  pt: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  pr: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  pb: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  pl: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),

  /**
   * Define propriedade de margin
   */
  my: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  mx: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  mt: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  mr: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  mb: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  ml: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),

  /**
   * Define propriedade de color
   */
  typography: PropTypes__default['default'].oneOf(['primary', 'secondary']),

  /**
   * Define propriedade de dimensões
   */
  height: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),
  width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),

  /**
   * Propriedades responsivas
   */
  xs: PropTypes__default['default'].object,
  sm: PropTypes__default['default'].object,
  md: PropTypes__default['default'].object,
  lg: PropTypes__default['default'].object,
  xl: PropTypes__default['default'].object,

  /**
   * Propriedades de ações
   */
  onClick: PropTypes__default['default'].func,

  /**
   * Faz o elemento crescer 100% e ocupar todo o espaço disponível para largura
   */
  fullWidth: PropTypes__default['default'].bool,

  /**
   * Faz o elemento crescer 100% e ocupar todo o espaço disponível para altura
   */
  fullHeight: PropTypes__default['default'].bool,

  /**
   * Permite passagem de id para o componente raíz
   */
  id: PropTypes__default['default'].string
};
var Block$1 = styled.withTheme(Block);

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
  if (!$width) return '';
  var factor = theme.factors.margin;
  if (typeof $width === 'string') return "width: ".concat($width);
  if ($width) return "width: ".concat(factor * $width, "px");
  if (props.fullWidth) return 'width: 100%;';
  return 'width: max-content;';
}; //Get button variations from props (return style matching the variation)


var getOutlinedCSS = function getOutlinedCSS(props, theme) {
  return "\n  background-color: transparent;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ".concat(theme.parseColor(props, theme, '$color'), ";\n  &:disabled {\n    border-color: ").concat(theme.colors.neutral8, ";\n  }\n");
};

var getGhostCSS = function getGhostCSS() {
  return "\n  background-color: transparent;\n";
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


var parseFontColor = function parseFontColor(props, theme) {
  var fontColor = props.fontColor,
      $variant = props.$variant,
      disabled = props.disabled;
  if (disabled && $variant !== 'filled') return theme.colors.neutral8;
  if (fontColor) return theme.parseColor(props, theme, 'fontColor');
  if ($variant === 'outlined' || $variant === 'ghost') return theme.parseColor(props, theme, '$color');
  return theme.colors.white;
};

var parseFontFamily = function parseFontFamily(props, theme) {
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
  if (props.removeText === true) return "\n    span {\n      display: none;\n    }\n  ";else return "\n    span {\n      display: inline;\n      margin-left: 8px;\n      margin-right: 8px;\n      color: ".concat(parseFontColor(props, theme), ";\n      font-size: ").concat(parseFontSize(props), "px;\n      font-weight: ").concat(parseFontWeight(props), ";\n      font-family: ").concat(parseFontFamily(props, theme), ";\n    }\n  ");
};

var parseIcon = function parseIcon(props, theme) {
  return "\n    svg {\n      fill: ".concat(parseFontColor(props, theme), ";\n      width: ").concat(props.iconSize ? props.iconSize : '24px', ";\n      height: ").concat(props.iconSize ? props.iconSize : '24px', ";\n    }\n  ");
}; //main function


var parseStyle$1 = function parseStyle(props, theme) {
  var parsePadding = theme.parsePadding,
      parseRadius = theme.parseRadius,
      parseCustom = theme.parseCustom;
  if (!props) return '';
  return "\n    ".concat(parseVariation(props, theme), ";\n    ").concat(parseTypography(props, theme), ";\n    ").concat(getSize(props, theme), ";\n    ").concat(getWidth(props, theme), ";\n    ").concat(parseRadius(props, '$radius'), ";    \n    ").concat(parsePadding(props, theme), ";\n    ").concat(parseIcon(props, theme), ";\n    ").concat(parseCustom(props), ";\n  ");
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

var _templateObject$1, _templateObject2;
var StyledButton = styled__default['default'].button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: max-content;\n  text-transform: uppercase;\n  border: unset;\n  cursor: pointer;\n  &:disabled {\n    cursor: unset;\n    &:hover {\n      animation-name: none;\n    }\n  }\n  &:hover {\n    animation-name: buttonHover;\n    animation-duration: 0.3s;\n    animation-fill-mode: forwards;\n  }\n  @keyframes buttonHover {\n    from {opacity: 100%;}\n    to {opacity: 80%;}\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) {
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
var StyledAria = styled__default['default'].a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-width: max-content;\n  text-decoration: unset;\n"])));

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
      type = _ref.type;
  //check if children is string
  var childrenIsString = typeof children === 'string'; // Trigger to Handle enter keydown for forms

  var handleKeyPress = function handleKeyPress(event) {
    if (event.keyCode === 13) enterKey();
  };

  React.useEffect(function () {
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

  var renderRoot = function renderRoot() {
    return /*#__PURE__*/React__default['default'].createElement(StyledButton, {
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
      type: type
    }, loading && 'Carregando...', leftIcon && leftIcon, children && childrenIsString && /*#__PURE__*/React__default['default'].createElement("span", null, children), children && !childrenIsString && children, rightIcon && rightIcon);
  };

  return path ? /*#__PURE__*/React__default['default'].createElement(StyledAria, {
    href: path,
    target: "_blank"
  }, renderRoot()) : renderRoot();
};

Button.propTypes = {
  /**
   * Corresponde ao texto escrito do botão
   */
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].node]),

  /**
   * Permite estilos customizados no componente
   */
  custom: PropTypes__default['default'].string,

  /**
   * Altera a cor geral do componente
   */
  color: PropTypes__default['default'].string,

  /**
   * Ativa/desativa o estado disabed nativo do elemento
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Permite a troca da cor da fonte para casos específicos
   */
  fontColor: PropTypes__default['default'].string,

  /**
   * Ativa o estilo com largura máxima para o botão (cresce 100% do width disponível)
   */
  fullWidth: PropTypes__default['default'].bool,

  /**
   * Permite alterar a largura do componente (disponível a família de tamanhos em Number e String)
   */
  width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].bool, PropTypes__default['default'].string]),

  /**
   * Permite a passagem de um componente SVG para ícone no lado esquerdo
   */
  leftIcon: PropTypes__default['default'].element,

  /**
   * Lida com o evento de clique do botão
   */
  onClick: PropTypes__default['default'].func,

  /**
   * Permite a escolha do token para border-radius
   */
  radius: PropTypes__default['default'].oneOf(['unset', 'default', 'alternative']),

  /**
   * Permite a passagem de um ícone à direita
   */
  rightIcon: PropTypes__default['default'].element,

  /**
   * Permite a escolha de um tamanho (height) para o botão
   */
  size: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),

  /**
   * Passagem de estilos customizados inline
   */
  style: PropTypes__default['default'].object,

  /**
   * Permite a escolha de uma das variações de estrutura do componente
   */
  variant: PropTypes__default['default'].oneOf(['filled', 'outlined', 'ghost']),

  /**
   * Ativa a informação "Carregando"
   */
  loading: PropTypes__default['default'].bool,

  /**
   * Recebe o evento de clique na tecla enter | return através de uma função
   */
  enterKey: PropTypes__default['default'].func,

  /**
   * Permite alterar o espaçamento (x) interno no botão
   */
  px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),

  /**
   * Permite alterar o espaçamento (y) interno no botão
   */
  py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),

  /** 
   * Permite remover o texto do botão
   */
  removeText: PropTypes__default['default'].bool,

  /**
   * Permite escolha de uma das propriedades do theme para font-family
   */
  fontFamily: PropTypes__default['default'].string,

  /**
   * Permite a escolha de um font-weight para o texto do botão
   */
  fontWeight: PropTypes__default['default'].number,

  /**
   * Permite alterar o tamanho da fonte interior do botão
   */
  fontSize: PropTypes__default['default'].number,

  /**
   * AMP :: Props equivalente a onClick, executa a ação do clique no AMP
   */
  on: PropTypes__default['default'].string,

  /**
   * AMP :: Props equivalente a onClick, executa a ação de clique para links externos
   */
  path: PropTypes__default['default'].string,

  /**
   * Permite aumentar ou diminuir o tamanho do ícone no interior do botão
   */
  iconSize: PropTypes__default['default'].string,
  xs: PropTypes__default['default'].shape({
    color: PropTypes__default['default'].string,
    variant: PropTypes__default['default'].oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes__default['default'].oneOf(['unset', 'default', 'alternative']),
    size: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    removeText: PropTypes__default['default'].bool,
    iconSize: PropTypes__default['default'].string,
    px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string])
  }),
  sm: PropTypes__default['default'].shape({
    color: PropTypes__default['default'].string,
    variant: PropTypes__default['default'].oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes__default['default'].oneOf(['unset', 'default', 'alternative']),
    size: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    removeText: PropTypes__default['default'].bool,
    iconSize: PropTypes__default['default'].string,
    px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string])
  }),
  md: PropTypes__default['default'].shape({
    color: PropTypes__default['default'].string,
    variant: PropTypes__default['default'].oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes__default['default'].oneOf(['unset', 'default', 'alternative']),
    size: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    removeText: PropTypes__default['default'].bool,
    iconSize: PropTypes__default['default'].string,
    px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string])
  }),
  lg: PropTypes__default['default'].shape({
    color: PropTypes__default['default'].string,
    variant: PropTypes__default['default'].oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes__default['default'].oneOf(['unset', 'default', 'alternative']),
    size: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    removeText: PropTypes__default['default'].bool,
    iconSize: PropTypes__default['default'].string,
    px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string])
  }),
  xl: PropTypes__default['default'].shape({
    color: PropTypes__default['default'].string,
    variant: PropTypes__default['default'].oneOf(['filled', 'outlined', 'ghost']),
    radius: PropTypes__default['default'].oneOf(['unset', 'default', 'alternative']),
    size: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    width: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    removeText: PropTypes__default['default'].bool,
    iconSize: PropTypes__default['default'].string,
    px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),
    py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string])
  }),

  /**
   * Permite passagem de um id para o elemento raíz button
   */
  id: PropTypes__default['default'].string,

  /**
   * Permite a definição da prop type HTML para o componente
   */
  type: PropTypes__default['default'].string
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
var index = styled.withTheme(Button);

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

var Image = function Image(_ref) {
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

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "image-background ".concat(custom || ''),
    style: image_style
  }, children && children);
};

Image.propTypes = {
  children: PropTypes__default['default'].node,
  content: PropTypes__default['default'].object.isRequired,
  custom: PropTypes__default['default'].string,
  domain: PropTypes__default['default'].string,
  height: PropTypes__default['default'].string,
  lazy: PropTypes__default['default'].func,
  placeholder: PropTypes__default['default'].string
};
Image.defaultProps = {
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
  return /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row",
    custom: "column-header",
    mb: "3",
    p: "3",
    w: "100p-6"
  }, /*#__PURE__*/React__default['default'].createElement(Block$1, null, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Imagem do colunista ".concat(column_name)
  }, /*#__PURE__*/React__default['default'].createElement(Image, {
    domain: domain,
    content: image
  }))), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "middle",
    ml: "2"
  }, /*#__PURE__*/React__default['default'].createElement(Block$1, {
    custom: "title"
  }, column_name), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    custom: "subtitle"
  }, column_description)));
};

ColumnHeader.propTypes = {
  domain: PropTypes__default['default'].string,
  item: PropTypes__default['default'].object
};
ColumnHeader.defaultProps = {
  item: []
};

var Input = function Input(_ref) {
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
    return /*#__PURE__*/React__default['default'].createElement("p", {
      className: 'label'
    }, label && label);
  };

  var Warning = function Warning() {
    return /*#__PURE__*/React__default['default'].createElement("p", {
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
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: "form-field ".concat(invalid ? 'invalid' : '', " ").concat(type)
  }, /*#__PURE__*/React__default['default'].createElement(Label, null), type === 'textarea' && /*#__PURE__*/React__default['default'].createElement("textarea", props), type !== 'textarea' && /*#__PURE__*/React__default['default'].createElement("input", props), /*#__PURE__*/React__default['default'].createElement(Warning, null));
};

Input.propTypes = {
  autoFocus: PropTypes__default['default'].bool,
  disabled: PropTypes__default['default'].bool,
  invalid: PropTypes__default['default'].bool,
  label: PropTypes__default['default'].string,
  onEnter: PropTypes__default['default'].func,
  setValue: PropTypes__default['default'].func.isRequired,
  type: PropTypes__default['default'].string,
  value: PropTypes__default['default'].string.isRequired,
  warning: PropTypes__default['default'].string
};
Input.defaultProps = {
  autofocus: false,
  disabled: 'disabled',
  invalid: false,
  type: 'text'
};
var index$1 = {
  Input: Input
};

var colors = [
	"primary-1",
	"primary-2",
	"primary-3",
	"secondary-1",
	"secondary-2",
	"secondary-3",
	"product-1",
	"product-2",
	"product-3",
	"product-4",
	"product-5",
	"editorial-1",
	"editorial-2",
	"editorial-3",
	"editorial-4",
	"editorial-5",
	"black",
	"neutral-1",
	"neutral-2",
	"neutral-3",
	"neutral-4",
	"neutral-5",
	"neutral-6",
	"neutral-7",
	"neutral-8",
	"neutral-9",
	"neutral-10",
	"neutral-11",
	"white",
	"ads",
	"success-1",
	"success-2",
	"success-3",
	"error-1",
	"error-2",
	"error-3"
];

var numberToString = function numberToString(param) {
  return "".concat(param, "px");
};

var getFromProps = function getFromProps(props, param) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var defaultIsNumber = Number.isInteger(defaultValue);
  var value = defaultIsNumber ? numberToString(defaultValue) : defaultValue;
  return lodash.get(props, numberToString(param), value);
};

var _templateObject$2, _templateObject2$1, _templateObject3, _templateObject4, _templateObject5;

var validateStyle = function validateStyle(props) {
  var isValid = lodash.get(props, 'validation', true);
  if (!isValid) return props.theme.colors.error1;
  if (props.borderColor) return props.borderColor;
  return props.theme.colors.neutral9;
};

var validateIcon = function validateIcon(props) {
  var isValid = lodash.get(props, 'validation', true);
  if (!isValid) return props.theme.colors.error1;
  if (props.iconColor) return props.iconColor;
  return props.theme.colors.neutral5;
};

var Container = styled__default['default'].div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n  width: 100%;\n  ", ";\n"])), function (props) {
  return props.theme.parseMargin(props, props.theme);
});
var StyledLabel = styled__default['default'].label(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 400;\n  font-family: ", ";\n  color: ", ";\n"])), function (props) {
  return props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary;
}, function (props) {
  return getFromProps(props, 'fontColor', props.theme.colors.neutral5);
});
var InputContainer = styled__default['default'].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: white;\n  width: calc(100% - 2px);\n  height: 40px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  align-items: center;\n  svg {\n    width: 32px;\n    height: 32px;\n    margin-right: 8px;\n    fill: ", ";\n    cursor: pointer;\n  }\n  &:focus-within {\n    border-color: ", ";\n    border-width: 2px;\n    width: calc(100% - 3px);\n    height: calc(40px - 2px);\n  }\n"])), function (props) {
  return validateStyle(props);
}, function (props) {
  return getFromProps(props, 'radius', 5);
}, function (props) {
  return validateIcon(props);
}, function (props) {
  return getFromProps(props, 'activeColor', props.theme.colors.primary1);
});
var StyledInput = styled__default['default'].input(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: calc(100% - 16px);\n  height: calc(100% - 2px);\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: ", ";\n  border-radius: ", ";\n  border-color: unset;\n  border-width: unset;\n  border-style: unset;\n  &:focus {\n    outline-color: unset;\n    outline-width: unset;\n    outline-style: none;\n  }\n"])), function (props) {
  return props.$fontFamily ? props.$fontFamily : props.theme.fonts.fontPrimary;
}, function (props) {
  return getFromProps(props, 'radius', 5);
});
var ErrorMessage = styled__default['default'].p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 400;\n  font-family: ", ";\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 0px;\n  height: 16px;\n"])), function (props) {
  return props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary;
}, function (props) {
  return props.theme.colors.error1;
});

var Field = function Field(_ref) {
  var mt = _ref.mt,
      mr = _ref.mr,
      mb = _ref.mb,
      ml = _ref.ml,
      icon = _ref.icon,
      label = _ref.label,
      radius = _ref.radius,
      onChange = _ref.onChange,
      onIconClick = _ref.onIconClick,
      type = _ref.type,
      value = _ref.value,
      fontFamily = _ref.fontFamily,
      activeColor = _ref.activeColor,
      borderColor = _ref.borderColor,
      fontColor = _ref.fontColor,
      iconColor = _ref.iconColor,
      validation = _ref.validation,
      validationMessage = _ref.validationMessage,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      on = _ref.on,
      id = _ref.id,
      name = _ref.name;

  var handleChange = function handleChange(event) {
    onChange(event.target.value);
  };

  var getIconFromProps = function getIconFromProps() {
    var iconHasOnClick = icon.props && icon.props.onClick ? icon.props.onClick : false;
    return /*#__PURE__*/React__default['default'].cloneElement(icon, {
      onClick: iconHasOnClick ? iconHasOnClick : onIconClick
    });
  };

  var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return /*#__PURE__*/React__default['default'].createElement(Container, {
    mt: mt,
    mr: mr,
    mb: mb,
    ml: ml
  }, label && /*#__PURE__*/React__default['default'].createElement(StyledLabel, {
    fontColor: fontColor
  }, capitalizeFirstLetter(label)), /*#__PURE__*/React__default['default'].createElement(InputContainer, {
    radius: radius,
    activeColor: activeColor,
    validation: validation,
    borderColor: borderColor,
    iconColor: iconColor
  }, /*#__PURE__*/React__default['default'].createElement(StyledInput, {
    name: name,
    id: id,
    on: on,
    type: type,
    value: value,
    onChange: handleChange,
    radius: radius,
    $fontFamily: fontFamily,
    activeColor: activeColor,
    borderColor: borderColor,
    validation: validation,
    fontColor: fontColor,
    placeholder: placeholder,
    disabled: disabled
  }), icon && getIconFromProps()), validation === false && /*#__PURE__*/React__default['default'].createElement(ErrorMessage, null, validationMessage));
};

Field.propTypes = {
  /**
   * Ativa/desativa o estado disabled do input
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Ativa ou desativa o uso do placeholder (recebe o texto)
   */
  placeholder: PropTypes__default['default'].string,

  /**
   * Corresponde a um margin-top
   */
  mt: PropTypes__default['default'].number,

  /**
   * Corresponde a um margin-right
   */
  mr: PropTypes__default['default'].number,

  /**
   * Corresponde a um margin-bottom
   */
  mb: PropTypes__default['default'].number,

  /**
   * Corresponde a um margin-left
   */
  ml: PropTypes__default['default'].number,

  /**
   * Possibilita adicionar um ícone à direita do Field
   */
  icon: PropTypes__default['default'].element,

  /**
   * Função executada ao clicar no ícone
   */
  onIconClick: PropTypes__default['default'].func,

  /**
   * Adiciona um label ao Field
   */
  label: PropTypes__default['default'].string,

  /**
   * Modifica o radius do Field
   */
  radius: PropTypes__default['default'].number,

  /**
   * Função executada ao modificar o valor do Field
   */
  onChange: PropTypes__default['default'].func.isRequired,

  /**
   * Permite assinalar um id para o elemento input raíz
   */
  id: PropTypes__default['default'].string,

  /**
   * Props que recebe o type do Field (prop nativa do elemento)
   */
  type: PropTypes__default['default'].string,

  /**
   * Recebe o valor do Field (prop nativa do elemento)
   */
  value: PropTypes__default['default'].string,

  /**
   * Prop para nomear o elemento HTML raíz
   */
  name: PropTypes__default['default'].string,

  /**
   * Recebe o estado do componente (true para padrão e false para erro)
   */
  validation: PropTypes__default['default'].oneOf([true, false]).isRequired,

  /**
   * Recebe a mensagem de validação (renderizada quando validation = false)
   */
  validationMessage: PropTypes__default['default'].string,
  //STYLE PROPS

  /**
   * Altera a família da fonte do input (conectada ao theme)
   */
  fontFamily: PropTypes__default['default'].string,

  /**
   * Altera a cor do Field quando estiver no estado ATIVO (focused) (conectada ao theme)
   */
  activeColor: PropTypes__default['default'].oneOf(colors),

  /**
   * Altera a cor da borda do Field (conectada ao theme)
   */
  borderColor: PropTypes__default['default'].oneOf(colors),

  /**
   * Altera a cor da fonte do Field (conectada ao theme)
   */
  fontColor: PropTypes__default['default'].oneOf(colors),

  /**
   * Altera a cor do ícone (caso ativo) (conectada ao theme)
   */
  iconColor: PropTypes__default['default'].oneOf(colors),

  /**
   * AMP: Permite ação de clique e manipulação do estado
   */
  on: PropTypes__default['default'].string
};
Field.defaultProps = {
  validation: true
};
var index$2 = styled.withTheme(Field);

var Image$1 = function Image(_ref) {
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
    return /*#__PURE__*/React__default['default'].createElement(Block$1, {
      custom: "image-box ".concat(custom),
      w: "100p"
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      alt: caption_byline ? '$Legenda da imagem: {caption_byline}' : 'Legenda da imagem: Reprodução',
      src: content_path
    }), /*#__PURE__*/React__default['default'].createElement(Block$1, {
      custom: "label"
    }, caption_byline));
  }

  return /*#__PURE__*/React__default['default'].createElement("pre", null, "no-image");
};

Image$1.propTypes = {
  content: PropTypes__default['default'].object.isRequired,
  custom: PropTypes__default['default'].string,
  domain: PropTypes__default['default'].string,
  lazy: PropTypes__default['default'].func,
  placeholder: PropTypes__default['default'].string
};
Image$1.defaultProps = {
  content: {}
};

function SvgIcArrowBack(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: 32,
    viewBox: "0 0 24 24",
    width: 32
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
  }));
}

function SvgIcArrowForward(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: 32,
    viewBox: "0 0 24 24",
    width: 24
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"
  }));
}

var RenderItem = function RenderItem(_ref) {
  var linkurl = _ref.linkurl,
      name = _ref.name,
      lead = _ref.lead,
      selected = _ref.selected,
      on = _ref.on;
  var propsGallerySelected = {
    custom: 'gallery-selected',
    w: '100p',
    mb: '2'
  };
  var propsGalleryItem = {
    custom: 'gallery-item',
    mr: '2',
    onClick: function onClick() {
      return on({
        linkurl: linkurl,
        name: name,
        lead: lead
      });
    }
  };
  var propsGallery = selected ? propsGallerySelected : propsGalleryItem;
  return /*#__PURE__*/React__default['default'].createElement(Block$1, propsGallery, /*#__PURE__*/React__default['default'].createElement("img", {
    className: "image-file",
    src: linkurl,
    alt: "".concat(name)
  }), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    custom: "image-name"
  }, name), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    custom: "image-lead"
  }, lead));
};

var ImageGallery = function ImageGallery(_ref2) {
  var items = _ref2.items,
      selected = _ref2.selected,
      on = _ref2.on;
  if (!items || items.length === 0) return false;
  var item_selected = selected ? selected : items[0];
  return /*#__PURE__*/React__default['default'].createElement(Block$1, {
    custom: "article-image-gallery",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row",
    custom: "image-selected",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(RenderItem, _extends({}, item_selected, {
    selected: true,
    on: on
  }))), items.length > 1 && /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row",
    custom: "box-list",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row center middle",
    custom: "arrow-left"
  }, /*#__PURE__*/React__default['default'].createElement(SvgIcArrowBack, null)), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row",
    custom: "image-list",
    w: "100p"
  }, lodash.map(items, function (item, key) {
    return /*#__PURE__*/React__default['default'].createElement(RenderItem, _extends({}, item, {
      key: key,
      on: on
    }));
  })), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row center middle",
    custom: "arrow-right"
  }, /*#__PURE__*/React__default['default'].createElement(SvgIcArrowForward, null))));
};

ImageGallery.propTypes = {
  items: PropTypes__default['default'].array,
  selected: PropTypes__default['default'].shape({
    lead: PropTypes__default['default'].string,
    linkUrl: PropTypes__default['default'].string,
    name: PropTypes__default['default'].string
  }),
  on: PropTypes__default['default'].func
};
RenderItem.propTypes = {
  linkurl: PropTypes__default['default'].string,
  name: PropTypes__default['default'].string,
  lead: PropTypes__default['default'].string,
  selected: PropTypes__default['default'].bool,
  on: PropTypes__default['default'].func.isRequired
};
ImageGallery.defaultProps = {
  selected: false,
  items: []
};

var SideMenu = function SideMenu(props) {
  var children = props.children,
      isOpen = props.isOpen,
      onClose = props.onClose,
      menuSize = props.menuSize,
      menuAnchor = props.menuAnchor,
      bgColor = props.bgColor;
  if (!isOpen) return null;

  var parsePosition = function parsePosition() {
    if (menuAnchor === 'left') return 'left: 0px;';
    if (menuAnchor === 'right') return 'right: 0px;';
  };

  var menuCustomStyle = "\n    position: fixed;\n    display: block;\n    overflow-y: auto;\n    z-index: 11;\n    top: 0px;\n    ".concat(parsePosition(), ";\n  ");
  var outerContainerCustomStyle = "\n    position: fixed;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 10;\n    top: 0px;\n  ";
  return /*#__PURE__*/React__default['default'].createElement(Block$1, null, /*#__PURE__*/React__default['default'].createElement(Block$1, {
    width: "100vw",
    height: "100vh",
    onClick: onClose,
    custom: outerContainerCustomStyle
  }), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    width: "100%",
    md: {
      width: menuSize
    },
    fullHeight: true,
    bgColor: bgColor,
    custom: menuCustomStyle
  }, children));
};

SideMenu.defaultProps = {
  menuAnchor: 'left',
  menuSize: '350px',
  px: 4,
  py: 4,
  bgColor: 'neutral10'
};
SideMenu.propTypes = {
  /**
   * Permite passagem de conteúdo para o Menu Lateral
   */
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].object, PropTypes__default['default'].node]),

  /**
   * Define a âncora onde o menu será renderizado (esquerda e direita da tela)
   */
  menuAnchor: PropTypes__default['default'].oneOf(['left', 'right']),

  /**
   * Define o tamanho do menu '[number]px'
   */
  menuSize: PropTypes__default['default'].string,

  /**
   * Controla a exibição ou não do Menu
   */
  isOpen: PropTypes__default['default'].bool.isRequired,

  /**
   * Controla a ação de fechamento do Menu
   */
  onClose: PropTypes__default['default'].func.isRequired,

  /**
   * Define a cor de fundo do conteúdo
   */
  bgColor: PropTypes__default['default'].string
};
var index$3 = styled.withTheme(SideMenu);

var _templateObject$3;
var StyledAria$1 = styled__default['default'].a(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-decoration: none;\n"])));

var MenuItem = function MenuItem(_ref) {
  var children = _ref.children,
      mb = _ref.mb,
      px = _ref.px,
      py = _ref.py,
      color = _ref.color,
      onClick = _ref.onClick,
      path = _ref.path,
      theme = _ref.theme,
      id = _ref.id;
  var customStyle = "\n    border-bottom: 1px solid rgba(0,0,0,0.1);    \n    cursor: pointer;\n    text-decoration: unset;\n    svg {\n      width: 24px;\n      height: 24px;\n      fill: ".concat(color ? theme.parseColor({
    color: color
  }, theme, 'color') : theme.colors.primary1, ";\n    }\n    &:hover {\n      background-color: ").concat(theme.colors.neutral10, ";\n      opacity: 0.8;\n    }\n  ");

  var renderContent = function renderContent() {
    return /*#__PURE__*/React__default['default'].createElement(Block$1, {
      onClick: !path ? onClick : null,
      width: "100%",
      mb: mb,
      id: id
    }, /*#__PURE__*/React__default['default'].createElement(Block$1, {
      fullWidth: true,
      align: "row",
      alignx: "between",
      aligny: "middle",
      fontColor: color,
      px: px,
      py: py,
      custom: customStyle
    }, children ? children : /*#__PURE__*/React__default['default'].createElement("span", null, "Content here"), /*#__PURE__*/React__default['default'].createElement(SvgIcArrowForward, null)));
  };

  return path ? /*#__PURE__*/React__default['default'].createElement(StyledAria$1, {
    href: path
  }, renderContent()) : renderContent();
};

MenuItem.defaultProps = {
  px: 1,
  py: 1,
  color: 'primary1'
};
MenuItem.propTypes = {
  /**
   * Permite passagem de conteúdo para o componente
   */
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].object, PropTypes__default['default'].array]).isRequired,

  /**
   * Permite alterar o padding-x (horizontal) do container interno
   */
  px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),

  /**
   * Permite alterar o padding-y (vertical) do container interno
   */
  py: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),

  /**
   * Permite adicionar margem abaixo do componente, no container externo
   */
  mb: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),

  /**
   * Realiza a navegação do usuário através de um href
   */
  path: PropTypes__default['default'].string,

  /**
   * Permite customizar a cor do texto e ícone
   */
  color: PropTypes__default['default'].string,

  /**
   * Prop que recebe o evento de clique para WEB
   */
  onClick: PropTypes__default['default'].func,
  theme: PropTypes__default['default'].object,

  /**
   * Permite passagem de id para componente raíz
   */
  id: PropTypes__default['default'].string
};
var index$4 = styled.withTheme(MenuItem);

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
  return /*#__PURE__*/React__default['default'].createElement(Block$1, propsSocialMedia, lodash.map(content, function (item, k) {
    return /*#__PURE__*/React__default['default'].createElement("a", {
      href: item.path,
      key: k
    }, /*#__PURE__*/React__default['default'].createElement(Block$1, propsSocialCirlce, item.icon));
  }));
};

SocialMedias.propTypes = {
  content: PropTypes__default['default'].array.isRequired
};

var Topbar = function Topbar(_ref) {
  var content = _ref.content,
      theme = _ref.theme;
  var leftContent = content.leftContent,
      centerContent = content.centerContent,
      rightContent = content.rightContent;
  var color = theme.color;
  return /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row center",
    bg: color,
    fc: "white",
    custom: "Topbar-Prensa-root",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block$1, {
    align: "row middle between",
    custom: "wrap",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block$1, {
    custom: "left"
  }, leftContent && leftContent), /*#__PURE__*/React__default['default'].createElement(Block$1, null, centerContent && centerContent), /*#__PURE__*/React__default['default'].createElement(Block$1, {
    custom: "right"
  }, rightContent && rightContent)));
};

Topbar.propTypes = {
  content: PropTypes__default['default'].shape({
    leftContent: PropTypes__default['default'].object,
    centerContent: PropTypes__default['default'].object,
    rightContent: PropTypes__default['default'].object
  }),
  theme: PropTypes__default['default'].shape({
    color: PropTypes__default['default'].oneOf(colors)
  })
};
Topbar.defaultProps = {
  theme: {
    color: 'primary-1'
  }
};

var parseBgColor = function parseBgColor(props, theme) {
  if (!props || !props.bgColor) return '';
  var selected = theme.colors[props.bgColor];
  if (!selected) return '';
  return "background-color: ".concat(selected, ";");
};

var parseFontColor$1 = function parseFontColor(props, theme) {
  if (!props || !props.fontColor) return '';
  var selected = theme.colors[props.fontColor];
  if (!selected) return '';
  return "color: ".concat(selected, ";");
};

var parseColor = function parseColor(props, theme, propName) {
  if (!propName) return console.error('PRENSA :: Não existe nome de prop para buscar no parseColor');
  var propValue = lodash.get(props, propName, 'activeColor');
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

var parseFontFamily$1 = function parseFontFamily(props, theme) {
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
  var propValue = lodash.get(props, propName);
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
  parseFontColor: parseFontColor$1,
  parseFontFamily: parseFontFamily$1,
  parseMargin: parseMargin,
  parsePadding: parsePadding,
  parseRadius: parseRadius,
  parseColor: parseColor
};

var _templateObject$4, _templateObject2$2;

var parseColorVariation = function parseColorVariation(props) {
  if (props.transparent === true) return "\n    color: ".concat(props.theme.parseColor(props, props.theme, 'subjectColor'), ";\n  ");
  return "\n    color: ".concat(props.theme.colors.white, ";\n  ");
};

var parseBackgroundVariation = function parseBackgroundVariation(props) {
  if (props.transparent === true) return 'background-color: transparent;';
  return "background-color: ".concat(props.theme.parseColor(props, props.theme, 'subjectColor'), ";");
};

var Container$1 = styled__default['default'].div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: max-content;\n  height: 28px;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.parsePadding(props, props.theme);
}, function (props) {
  return props.theme.parseMargin(props, props.theme);
}, function (props) {
  return props.theme.parseRadius(props, 'borderRadius');
}, function (props) {
  return parseBackgroundVariation(props);
});
var Typography = styled__default['default'].span(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  text-transform: uppercase;\n  font-family: ", ";\n  font-weight: ", ";\n  ", ";\n"])), function (props) {
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
  return /*#__PURE__*/React__default['default'].createElement(Container$1, {
    subjectColor: color,
    borderRadius: radius,
    px: px,
    mb: mb,
    transparent: transparent,
    style: style
  }, /*#__PURE__*/React__default['default'].createElement(Typography, {
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
  children: PropTypes__default['default'].string.isRequired,

  /**
   * Recebe um token de cor
   */
  color: PropTypes__default['default'].string,

  /**
   * Ativa/desativa a variação transparente
   */
  transparent: PropTypes__default['default'].bool,

  /**
   * Prop que permite estilo customizado inline
   */
  style: PropTypes__default['default'].object,

  /**
   * Permite alterar a variação de border-radius para o componente
   */
  radius: PropTypes__default['default'].oneOf([false, 'default', 'alternative']),

  /**
   * Permite alterar o espaçamento interno horizontal do componente
   */
  px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),

  /**
   * Permite alterar a margem aplicada abaixo do componente
   */
  mb: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number]),

  /**
   * Permite alterar o peso da fonte
   */
  weight: PropTypes__default['default'].oneOf([300, 400, 500, 600, 700])
};
var index$5 = styled.withTheme(Subject);

exports.Block = Block$1;
exports.Button = index;
exports.ColumnHeader = ColumnHeader;
exports.Field = index$2;
exports.Form = index$1;
exports.Image = Image$1;
exports.ImageBackground = Image;
exports.ImageGallery = ImageGallery;
exports.MenuItem = index$4;
exports.SideMenu = index$3;
exports.SocialMedias = SocialMedias;
exports.Subject = index$5;
exports.Topbar = Topbar;
exports.theme = theme;
