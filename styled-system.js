'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

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
  var colors = lodash.get(theme, 'colors', {});
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

var dimensions = function dimensions(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$$width = _ref.$width,
      $width = _ref$$width === void 0 ? '' : _ref$$width,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? '' : _ref$maxWidth,
      _ref$minWidth = _ref.minWidth,
      minWidth = _ref$minWidth === void 0 ? '' : _ref$minWidth;
  var unit = lodash.get(theme, 'factors.dimensions', 10);
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
  var unit = lodash.get(theme, 'factors.margin', 8);
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
  var unit = lodash.get(theme, 'factors.padding', 8);
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

var getColor = function getColor(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      _ref$$color = _ref.$color,
      $color = _ref$$color === void 0 ? '' : _ref$$color;
  var value = lodash.get(theme.colors, $color, '');
  return value;
};

exports.border = border;
exports.dimensions = dimensions;
exports.getColor = getColor;
exports.margin = margin;
exports.padding = padding;
