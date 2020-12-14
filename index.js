'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classnames = require('classnames');
var PropTypes = require('prop-types');
var React = require('react');
var lodash = require('lodash');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
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

var Block = function Block(props) {
  var children = props.children,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      onClick = props.onClick;

  var defProps = function defProps(prefix, props) {
    var _classnames;

    var checkAttr = function checkAttr(_props, name) {
      return _props.align && _props.align.indexOf(name) > -1;
    };

    var direction = props && props.align && (props.align.indexOf('row') > -1 ? 'row' : 'col');
    return classnames__default['default']((_classnames = {}, _defineProperty(_classnames, "fx-col".concat(prefix), direction === 'col'), _defineProperty(_classnames, "fx-row".concat(prefix), direction === 'row'), _defineProperty(_classnames, "".concat(direction, "-between").concat(prefix), checkAttr(props, 'between')), _defineProperty(_classnames, "".concat(direction, "-bottom").concat(prefix), checkAttr(props, 'bottom')), _defineProperty(_classnames, "".concat(direction, "-center").concat(prefix), checkAttr(props, 'center')), _defineProperty(_classnames, "".concat(direction, "-evenly").concat(prefix), checkAttr(props, 'evenly')), _defineProperty(_classnames, "".concat(direction, "-left").concat(prefix), checkAttr(props, 'left')), _defineProperty(_classnames, "".concat(direction, "-middle").concat(prefix), checkAttr(props, 'middle')), _defineProperty(_classnames, "".concat(direction, "-right").concat(prefix), checkAttr(props, 'right')), _defineProperty(_classnames, "".concat(direction, "-top").concat(prefix), checkAttr(props, 'top')), _defineProperty(_classnames, "".concat(direction, "-wrap").concat(prefix), checkAttr(props, 'wrap')), _defineProperty(_classnames, "bg-".concat(props.bg).concat(prefix), props.bg), _defineProperty(_classnames, "cursor-".concat(props.cursor).concat(prefix), props.cursor), _defineProperty(_classnames, "fc-".concat(props.fc).concat(prefix), props.fc), _defineProperty(_classnames, "h-".concat(props.h).concat(prefix), props.h), _defineProperty(_classnames, "m-".concat(props.m).concat(prefix), props.m), _defineProperty(_classnames, "mt-".concat(props.mt).concat(prefix), props.mt), _defineProperty(_classnames, "mr-".concat(props.mr).concat(prefix), props.mr), _defineProperty(_classnames, "mb-".concat(props.mb).concat(prefix), props.mb), _defineProperty(_classnames, "ml-".concat(props.ml).concat(prefix), props.ml), _defineProperty(_classnames, "p-".concat(props.p).concat(prefix), props.p), _defineProperty(_classnames, "pt-".concat(props.pt).concat(prefix), props.pt), _defineProperty(_classnames, "pr-".concat(props.pr).concat(prefix), props.pr), _defineProperty(_classnames, "pb-".concat(props.pb).concat(prefix), props.pb), _defineProperty(_classnames, "pl-".concat(props.pl).concat(prefix), props.pl), _defineProperty(_classnames, "w-".concat(props.w).concat(prefix), props.w), _defineProperty(_classnames, "".concat(props.custom), props.custom), _classnames));
  };

  var dProps = defProps('', props);
  var xsProps = xs && defProps('--xs', xs);
  var smProps = sm && defProps('--sm', sm);
  var mdProps = md && defProps('--md', md);
  var lgProps = lg && defProps('--lg', lg);
  var xlProps = xl && defProps('--xl', xl);
  var classProps = {
    className: classnames__default['default'](dProps, xsProps, smProps, mdProps, lgProps, xlProps) || 'block',
    children: children,
    onClick: onClick
  };
  return /*#__PURE__*/React__default['default'].createElement("div", classProps);
};

var propTypesSizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
Block.propTypes = {
  align: PropTypes__default['default'].string,
  bg: PropTypes__default['default'].oneOf(colors),
  fc: PropTypes__default['default'].oneOf(colors),
  cursor: PropTypes__default['default'].string,
  m: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  mt: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  mr: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  mb: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  ml: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  p: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  pt: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  pr: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  pb: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  pl: PropTypes__default['default'].oneOf([].concat(propTypesSizes)),
  xs: PropTypes__default['default'].object,
  sm: PropTypes__default['default'].object,
  md: PropTypes__default['default'].object,
  lg: PropTypes__default['default'].object,
  xl: PropTypes__default['default'].object,
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].array, PropTypes__default['default'].object, PropTypes__default['default'].node]),
  custom: PropTypes__default['default'].string,
  onClick: PropTypes__default['default'].func,
  w: PropTypes__default['default'].string,
  h: PropTypes__default['default'].string
};

var weights = [
	"thin",
	"light",
	"regular",
	"medium",
	"bold",
	"italic"
];

var SubjectTypography = function SubjectTypography(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Subject-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
SubjectTypography.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
SubjectTypography.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1, 2, 3]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var NewsTitle = function NewsTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight,
      disableHover = props.disableHover;
  var classes = classnames__default['default']((_classnames = {
    'Typography-NewsTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, 'has-hover', !disableHover), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("h2", {
    className: classes,
    style: style
  }, children);
};
NewsTitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular',
  disableHover: false
};
NewsTitle.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  disableHover: PropTypes__default['default'].bool,
  size: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6, 7]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var Subtitle = function Subtitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Subtitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("h3", {
    className: classes,
    style: style
  }, children);
};
Subtitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
Subtitle.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var Date$1 = function Date(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Date-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
Date$1.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
Date$1.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var Author = function Author(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Author-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
Author.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
Author.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var Paragraph = function Paragraph(props) {
  var _classnames;

  var className = props.className,
      color = props.color,
      gutter = props.gutter,
      style = props.style,
      size = props.size,
      weight = props.weight,
      maxWidth = props.maxWidth,
      setInnerHtml = props.setInnerHtml;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Paragraph-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color, " ").concat(maxWidth), true), _defineProperty(_classnames, "gutter-".concat(gutter), gutter), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("p", {
    className: classes,
    style: style,
    gutter: gutter,
    dangerouslySetInnerHTML: {
      __html: setInnerHtml
    }
  });
};
Paragraph.defaultProps = {
  color: 'black',
  size: 1,
  weight: 'regular',
  maxWidth: 'md'
};
Paragraph.propTypes = {
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  gutter: PropTypes__default['default'].oneOf([1, 2, 3]),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights),
  maxWidth: PropTypes__default['default'].oneOf(['sm', 'md', 'lg']),
  setInnerHtml: PropTypes__default['default'].string
};

var Byline = function Byline(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Byline-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
Byline.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
Byline.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var InterTitle = function InterTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-InterTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
InterTitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
InterTitle.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var Citation = function Citation(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Citation-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
Citation.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
Citation.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var UrlLink = function UrlLink(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-UrlLink-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("a", {
    className: classes,
    style: style
  }, children);
};
UrlLink.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
UrlLink.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var TagTypography = function TagTypography(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Tag-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("p", {
    className: classes,
    style: style
  }, children);
};
TagTypography.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
TagTypography.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var SectionTitle = function SectionTitle(_ref) {
  var _classnames;

  var className = _ref.className,
      children = _ref.children,
      color = _ref.color,
      gutter = _ref.gutter,
      style = _ref.style,
      size = _ref.size,
      uppercase = _ref.uppercase,
      weight = _ref.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-SectionTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color, " mb-").concat(gutter), true), _defineProperty(_classnames, 'uppercase', uppercase), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("h1", {
    className: classes,
    style: style
  }, children);
};
SectionTitle.defaultProps = {
  color: 'primary-1',
  gutter: 1,
  size: 1,
  weight: 'regular',
  uppercase: true
};
SectionTitle.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  gutter: PropTypes__default['default'].oneOf([0, 1, 2, 3]),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  uppercase: PropTypes__default['default'].bool,
  weight: PropTypes__default['default'].oneOf(weights)
};

var EditorialTitle = function EditorialTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-EditorialTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
EditorialTitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
EditorialTitle.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var ButtonTypography = function ButtonTypography(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-Button-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("p", {
    className: classes,
    style: style
  }, children);
};
ButtonTypography.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
ButtonTypography.propTypes = {
  children: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].object, PropTypes__default['default'].array]),
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var MostReadNumber = function MostReadNumber(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-MostReadNumber-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
MostReadNumber.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
MostReadNumber.propTypes = {
  children: PropTypes__default['default'].number,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var MenuSideTitle = function MenuSideTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-MenuSideTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
MenuSideTitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
MenuSideTitle.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var MenuSideItem = function MenuSideItem(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-MenuSideItem-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
MenuSideItem.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
MenuSideItem.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var MenuTopItem = function MenuTopItem(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames__default['default']((_classnames = {
    'Typography-MenuTopItem-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("span", {
    className: classes,
    style: style
  }, children);
};
MenuTopItem.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
MenuTopItem.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights)
};

var Button = function Button(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      disabled = _ref.disabled,
      fontColor = _ref.fontColor,
      fullWidth = _ref.fullWidth,
      leftIcon = _ref.leftIcon,
      onClick = _ref.onClick,
      radius = _ref.radius,
      rightIcon = _ref.rightIcon,
      size = _ref.size,
      style = _ref.style,
      variant = _ref.variant,
      weight = _ref.weight,
      loading = _ref.loading,
      enterKey = _ref.enterKey;
  var reference = React.useRef();
  React.useEffect(function () {
    var handleEvent = function handleEvent(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        enterKey();
      }
    };

    reference.current.addEventListener('onEnterKey', handleEvent);
    return function () {
      return reference.removeEventListener('onEnterKey');
    };
  });
  var getClass = classnames__default['default']((_classnames = {
    'Prensa-Button-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(variant, " color-").concat(color, " radius-").concat(radius), true), _defineProperty(_classnames, 'disabled', disabled), _defineProperty(_classnames, 'fullWidth', fullWidth), _defineProperty(_classnames, 'has-leftIcon', leftIcon), _defineProperty(_classnames, 'has-rightIcon', rightIcon), _defineProperty(_classnames, "".concat(className), className), _classnames));

  var getFontColor = function getFontColor() {
    if (fontColor) return fontColor;

    if (variant === 'outlined') {
      if (disabled) return 'neutral-8';
      return color;
    }

    return 'white';
  };

  var getChildren = function getChildren() {
    if (loading) return 'Carregando...';
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, leftIcon && leftIcon, children, rightIcon && rightIcon);
  };

  return /*#__PURE__*/React__default['default'].createElement("button", {
    className: getClass,
    disabled: disabled,
    onClick: !disabled && onClick,
    style: style,
    ref: reference
  }, /*#__PURE__*/React__default['default'].createElement(ButtonTypography, {
    color: getFontColor(),
    weight: weight
  }, getChildren()));
};

Button.propTypes = {
  /**
   * Permite a estilização do componente
   */
  className: PropTypes__default['default'].string,
  children: PropTypes__default['default'].node,
  disabled: PropTypes__default['default'].bool,
  fullWidth: PropTypes__default['default'].bool,
  leftIcon: PropTypes__default['default'].oneOfType([PropTypes__default['default'].object, PropTypes__default['default'].element]),
  onClick: PropTypes__default['default'].func,
  variant: PropTypes__default['default'].oneOf(['filled', 'outlined']),
  color: PropTypes__default['default'].oneOf(colors),
  fontColor: PropTypes__default['default'].oneOf(colors),
  radius: PropTypes__default['default'].oneOf([false, 'default', 'alternative']),
  rightIcon: PropTypes__default['default'].oneOf([PropTypes__default['default'].object, PropTypes__default['default'].element]),
  size: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weights),
  loading: PropTypes__default['default'].bool,
  enterKey: PropTypes__default['default'].func
};
Button.defaultProps = {
  disabled: false,
  variant: 'filled',
  color: 'primary-1',
  radius: 'default',
  size: 1,
  weight: 'regular',
  loading: false
};

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
  return /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "row",
    custom: "column-header",
    mb: "3",
    p: "3",
    w: "100p-6"
  }, /*#__PURE__*/React__default['default'].createElement(Block, null, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Imagem do colunista ".concat(column_name)
  }, /*#__PURE__*/React__default['default'].createElement(Image, {
    domain: domain,
    content: image
  }))), /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "middle",
    ml: "2"
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "title"
  }, column_name), /*#__PURE__*/React__default['default'].createElement(Block, {
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
var index = {
  Input: Input
};

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 400;\n  font-family: ", ";\n  color: ", ";\n  margin-top: 4px;\n  margin-bottom: 0px;\n  height: 16px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 16px);\n  height: calc(100% - 2px);\n  padding-left: 8px;\n  padding-right: 8px;\n  font-size: 14px;\n  font-weight: 400;\n  font-family: ", ";\n  border-radius: ", ";\n  border-color: unset;\n  border-width: unset;\n  border-style: unset;\n  &:focus {\n    outline-color: unset;\n    outline-width: unset;\n    outline-style: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: white;\n  width: calc(100% - 2px);\n  height: 40px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: ", ";\n  border-radius: ", ";\n  display: flex;\n  align-items: center;\n  svg {\n    width: 32px;\n    height: 32px;\n    margin-right: 8px;\n    fill: ", ";\n    cursor: pointer;\n  }\n  &:focus-within {\n    border-color: ", ";\n    border-width: 2px;\n    width: calc(100% - 3px);\n    height: calc(40px - 2px);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 400;\n  font-family: ", ";\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var parseNumberToString = function parseNumberToString(param) {
  return "".concat(param, "px");
};

var getFromProps = function getFromProps(props, param, defaultValue) {
  var defaultIsNumber = Number.isInteger(defaultValue);
  var value = defaultIsNumber ? parseNumberToString(defaultValue) : defaultValue;
  return lodash.get(props, param, value);
};

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

var Container = styled__default['default'].div(_templateObject(), function (props) {
  return getFromProps(props, 'marginTop', 0);
}, function (props) {
  return getFromProps(props, 'marginBottom', props.validation === false ? 12 : 32);
}, function (props) {
  return getFromProps(props, 'marginLeft', 0);
}, function (props) {
  return getFromProps(props, 'marginRight', 0);
});
var StyledLabel = styled__default['default'].label(_templateObject2(), function (props) {
  return props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary;
}, function (props) {
  return getFromProps(props, 'fontColor', props.theme.colors.neutral5);
});
var InputContainer = styled__default['default'].div(_templateObject3(), function (props) {
  return validateStyle(props);
}, function (props) {
  return getFromProps(props, 'radius', 5);
}, function (props) {
  return validateIcon(props);
}, function (props) {
  return getFromProps(props, 'activeColor', props.theme.colors.primary1);
});
var StyledInput = styled__default['default'].input(_templateObject4(), function (props) {
  return props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary;
}, function (props) {
  return getFromProps(props, 'radius', 5);
});
var ErrorMessage = styled__default['default'].p(_templateObject5(), function (props) {
  return props.fontFamily ? props.fontFamily : props.theme.fonts.fontPrimary;
}, function (props) {
  return props.theme.colors.error1;
});

var Field = function Field(_ref) {
  var marginTop = _ref.marginTop,
      marginRight = _ref.marginRight,
      marginBottom = _ref.marginBottom,
      marginLeft = _ref.marginLeft,
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
      placeholder = _ref.placeholder;

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
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    validation: validation
  }, /*#__PURE__*/React__default['default'].createElement(StyledLabel, {
    fontColor: fontColor
  }, capitalizeFirstLetter(label)), /*#__PURE__*/React__default['default'].createElement(InputContainer, {
    radius: radius,
    activeColor: activeColor,
    validation: validation,
    borderColor: borderColor,
    iconColor: iconColor
  }, /*#__PURE__*/React__default['default'].createElement(StyledInput, {
    type: type,
    value: value,
    onChange: handleChange,
    radius: radius,
    fontFamily: fontFamily,
    activeColor: activeColor,
    borderColor: borderColor,
    validation: validation,
    fontColor: fontColor,
    placeholder: placeholder
  }), icon && getIconFromProps()), validation === false && /*#__PURE__*/React__default['default'].createElement(ErrorMessage, null, validationMessage));
};

Field.propTypes = {
  /**
  *Corresponde ao placeholder
  */
  placeholder: PropTypes__default['default'].string,

  /**
   * Corresponde a um margin-top
   */
  marginTop: PropTypes__default['default'].number,

  /**
   * Corresponde a um margin-right
   */
  marginRight: PropTypes__default['default'].number,

  /**
   * Corresponde a um margin-bottom
   */
  marginBottom: PropTypes__default['default'].number,

  /**
   * Corresponde a um margin-left
   */
  marginLeft: PropTypes__default['default'].number,

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
   * Props que recebe o type do Field (prop nativa do elemento)
   */
  type: PropTypes__default['default'].string,

  /**
   * Recebe o valor do Field (prop nativa do elemento)
   */
  value: PropTypes__default['default'].string,

  /**
   * Recebe o estado do componente (true para padrão e false para erro)
   */
  validation: PropTypes__default['default'].oneOf([true, false]).isRequired,

  /**
   * Recebe a mensagem de validação (renderizada quando validation = false)
   */
  validationMessage: PropTypes__default['default'].string.isRequired,
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
  iconColor: PropTypes__default['default'].oneOf(colors)
};
Field.defaultProps = {
  validation: true
};
var index$1 = styled.withTheme(Field);

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
    return /*#__PURE__*/React__default['default'].createElement(Block, {
      custom: "image-box ".concat(custom),
      w: "100p"
    }, /*#__PURE__*/React__default['default'].createElement("img", {
      alt: caption_byline ? '$Legenda da imagem: {caption_byline}' : 'Legenda da imagem: Reprodução',
      src: content_path
    }), /*#__PURE__*/React__default['default'].createElement(Block, {
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
    width: 32
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
  return /*#__PURE__*/React__default['default'].createElement(Block, propsGallery, /*#__PURE__*/React__default['default'].createElement("img", {
    className: "image-file",
    src: linkurl,
    alt: "".concat(name)
  }), /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "image-name"
  }, name), /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "image-lead"
  }, lead));
};

var ImageGallery = function ImageGallery(_ref2) {
  var items = _ref2.items,
      selected = _ref2.selected,
      on = _ref2.on;
  if (!items || items.length === 0) return false;
  var item_selected = selected ? selected : items[0];
  return /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "article-image-gallery",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "row",
    custom: "image-selected",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(RenderItem, _extends({}, item_selected, {
    selected: true,
    on: on
  }))), items.length > 1 && /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "row",
    custom: "box-list",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "row center middle",
    custom: "arrow-left"
  }, /*#__PURE__*/React__default['default'].createElement(SvgIcArrowBack, null)), /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "row",
    custom: "image-list",
    w: "100p"
  }, lodash.map(items, function (item, key) {
    return /*#__PURE__*/React__default['default'].createElement(RenderItem, _extends({}, item, {
      key: key,
      on: on
    }));
  })), /*#__PURE__*/React__default['default'].createElement(Block, {
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

var SearchForm = function SearchForm(_ref) {
  var functions = _ref.functions,
      state = _ref.state,
      buttonSize = _ref.buttonSize,
      buttonWeight = _ref.buttonWeight,
      buttonColor = _ref.buttonColor;
  var fieldValue = state.fieldValue,
      setFieldValue = state.setFieldValue;

  var handleSubmit = function handleSubmit() {
    var string = fieldValue;
    string = string.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    functions.onSubmit(string);
  };

  var fieldController = {
    type: 'text',
    className: 'search-field',
    placeholder: 'O que você está procurando?',
    onChange: function onChange(event) {
      return setFieldValue(event.target.value);
    },
    onKeyPress: function onKeyPress(event) {
      return event.key === 'Enter' && handleSubmit();
    }
  };
  return /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "right",
    custom: 'search-form'
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    mb: "1",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement("input", fieldController)), /*#__PURE__*/React__default['default'].createElement(Button, {
    disabled: false,
    size: buttonSize,
    weight: buttonWeight,
    color: buttonColor,
    onClick: function onClick() {
      return handleSubmit();
    }
  }, "Buscar"));
};

SearchForm.propTypes = {
  buttonSize: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5]),
  buttonWeight: PropTypes__default['default'].oneOf(weights),
  buttonColor: PropTypes__default['default'].oneOf(colors),
  content: PropTypes__default['default'].object.isRequired,
  functions: PropTypes__default['default'].shape({
    onSubmit: PropTypes__default['default'].func
  }),
  state: PropTypes__default['default'].shape({
    fieldValue: PropTypes__default['default'].string,
    setFieldValue: PropTypes__default['default'].func
  })
};
SearchForm.defaultProps = {
  content: {},
  functions: {
    onSubmit: function onSubmit() {
      return null;
    }
  },
  state: {
    fieldValue: '',
    setFieldValue: function setFieldValue() {
      return null;
    }
  }
};

var SearchMenu = function SearchMenu(_ref) {
  var children = _ref.children,
      functions = _ref.functions,
      status = _ref.status;
  var menuIsOpen = status.opened ? 'opened' : 'closed';
  return /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "menu-modal ".concat(menuIsOpen)
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "menu-opacity",
    onClick: functions.onCloseModal
  }), /*#__PURE__*/React__default['default'].createElement(Block, {
    bg: "neutral-10",
    custom: "menu-right",
    p: "4"
  }, children && children));
};

SearchMenu.propTypes = {
  children: PropTypes__default['default'].node,
  content: PropTypes__default['default'].object.isRequired,
  functions: PropTypes__default['default'].shape({
    onCloseModal: PropTypes__default['default'].func
  }),
  status: PropTypes__default['default'].shape({
    opened: PropTypes__default['default'].bool
  })
};
SearchMenu.defaultProps = {
  content: {},
  functions: {
    onCloseModal: function onCloseModal() {
      return null;
    }
  },
  status: {
    opened: false
  }
};

var SideMenu = function SideMenu(_ref) {
  var children = _ref.children,
      functions = _ref.functions,
      status = _ref.status;
  var menuIsOpen = status.opened ? 'opened' : 'closed';
  return /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "menu-modal ".concat(menuIsOpen)
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "menu-opacity",
    onClick: functions.onCloseModal
  }), /*#__PURE__*/React__default['default'].createElement(Block, {
    bg: "white",
    custom: "menu-left",
    p: "4"
  }, children && children));
};

SideMenu.propTypes = {
  children: PropTypes__default['default'].node,
  content: PropTypes__default['default'].object.isRequired,
  functions: PropTypes__default['default'].shape({
    onCloseModal: PropTypes__default['default'].func
  }),
  status: PropTypes__default['default'].shape({
    opened: PropTypes__default['default'].bool
  })
};
SideMenu.defaultProps = {
  content: {},
  functions: {
    onCloseModal: function onCloseModal() {
      return null;
    }
  },
  status: {
    opened: false
  }
};

function SvgIcArrowMenu(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: 24,
    width: 24
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }));
}

var SideMenuItems = function SideMenuItems(_ref) {
  var content = _ref.content,
      functions = _ref.functions;

  var Item = function Item(_ref2) {
    var item = _ref2.item;
    var hasSubitems = item.subitems.length > 0;
    return /*#__PURE__*/React__default['default'].createElement(Block, {
      custom: "sidemenu-group",
      mb: "3"
    }, /*#__PURE__*/React__default['default'].createElement(Block, {
      custom: "sidemenu-group-item",
      pb: "2",
      align: "row between middle",
      onClick: function onClick() {
        return functions.onMenuItem(item);
      }
    }, !hasSubitems ? /*#__PURE__*/React__default['default'].createElement("a", {
      href: item.path
    }, item.name) : /*#__PURE__*/React__default['default'].createElement("span", {
      href: item.path
    }, item.name), /*#__PURE__*/React__default['default'].createElement(SvgIcArrowMenu, null)));
  };

  Item.propTypes = {
    item: PropTypes__default['default'].object
  };
  return /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "sidemenu-items"
  }, lodash.map(content.items, function (item, key) {
    return /*#__PURE__*/React__default['default'].createElement(Item, {
      item: item,
      key: key
    });
  }));
};

SideMenuItems.propTypes = {
  content: PropTypes__default['default'].object,
  functions: PropTypes__default['default'].shape({
    onMenuItem: PropTypes__default['default'].func
  })
};
SideMenuItems.defaultProps = {
  content: {}
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
  return /*#__PURE__*/React__default['default'].createElement(Block, propsSocialMedia, lodash.map(content, function (item, k) {
    return /*#__PURE__*/React__default['default'].createElement("a", {
      href: item.path,
      key: k
    }, /*#__PURE__*/React__default['default'].createElement(Block, propsSocialCirlce, item.icon));
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
  return /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "row center",
    bg: color,
    fc: "white",
    custom: "Topbar-Prensa-root",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    align: "row middle between",
    custom: "wrap",
    w: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "left"
  }, leftContent && leftContent), /*#__PURE__*/React__default['default'].createElement(Block, null, centerContent && centerContent), /*#__PURE__*/React__default['default'].createElement(Block, {
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

var Subject = function Subject(props) {
  var _classnames;

  var children = props.children,
      color = props.color,
      className = props.className,
      style = props.style,
      size = props.size,
      filled = props.filled,
      weight = props.weight;
  if (!children) return null;
  var classes = classnames__default['default']((_classnames = {
    'Prensa-Subject-root': true,
    'filled': filled
  }, _defineProperty(_classnames, "color-".concat(color), true), _defineProperty(_classnames, "".concat(className), className), _classnames));
  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes,
    style: style
  }, /*#__PURE__*/React__default['default'].createElement(SubjectTypography, {
    size: size,
    color: filled ? 'white' : color,
    weight: weight
  }, children));
};

Subject.defaultProps = {
  color: 'primary-1',
  filled: false,
  size: 1
};
Subject.propTypes = {
  children: PropTypes__default['default'].string.isRequired,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  filled: PropTypes__default['default'].bool,
  style: PropTypes__default['default'].object,
  size: PropTypes__default['default'].oneOf([1, 2, 3]),
  weight: PropTypes__default['default'].oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

var MILLISECONDS_IN_HOUR = 3600000;
/**
 * @name differenceInHours
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */

function differenceInHours(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var dateLeft = toDate(dirtyDateLeft);
  var dateRight = toDate(dirtyDateRight);
  var sign = compareAsc(dateLeft, dateRight);
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value

  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign;
  var result = sign * (difference - isLastMonthNotFull); // Prevent negative zero

  return result === 0 ? 0 : result;
}

/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments);
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

function cloneObject(dirtyObject) {
  return assign({}, dirtyObject);
}

var MILLISECONDS_IN_MINUTE = 60000;

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE;
}
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */


function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime());
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset());
  date.setSeconds(0, 0);
  var hasNegativeUTCOffset = baseTimezoneOffset > 0;
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) % MILLISECONDS_IN_MINUTE : getDateMillisecondsPart(date);
  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset;
}

var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance$1(dirtyDate, dirtyBaseDate, dirtyOptions) {
  requiredArgs(2, arguments);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;

  if (!locale$1.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = compareAsc(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = cloneObject(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = toDate(dirtyBaseDate);
    dateRight = toDate(dirtyDate);
  } else {
    dateLeft = toDate(dirtyDate);
    dateRight = toDate(dirtyBaseDate);
  }

  var seconds = differenceInSeconds(dateRight, dateLeft);
  var offsetInSeconds = (getTimezoneOffsetInMilliseconds(dateRight) - getTimezoneOffsetInMilliseconds(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale$1.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale$1.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale$1.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale$1.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale$1.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale$1.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale$1.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale$1.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale$1.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale$1.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale$1.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale$1.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale$1.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale$1.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = differenceInMonths(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale$1.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale$1.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale$1.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale$1.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

var formatDistanceLocale$1 = {
  lessThanXSeconds: {
    one: 'menos de um segundo',
    other: 'menos de {{count}} segundos'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },
  halfAMinute: 'meio minuto',
  lessThanXMinutes: {
    one: 'menos de um minuto',
    other: 'menos de {{count}} minutos'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },
  aboutXHours: {
    one: 'aproximadamente 1 hora',
    other: 'aproximadamente {{count}} horas'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },
  xDays: {
    one: '1 dia',
    other: '{{count}} dias'
  },
  aboutXWeeks: {
    one: 'aproximadamente 1 mês',
    // TODO
    other: 'aproximadamente {{count}} meses' // TODO

  },
  xWeeks: {
    one: '1 mês',
    // TODO
    other: '{{count}} meses' // TODO

  },
  aboutXMonths: {
    one: 'aproximadamente 1 mês',
    other: 'aproximadamente {{count}} meses'
  },
  xMonths: {
    one: '1 mês',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'aproximadamente 1 ano',
    other: 'aproximadamente {{count}} anos'
  },
  xYears: {
    one: '1 ano',
    other: '{{count}} anos'
  },
  overXYears: {
    one: 'mais de 1 ano',
    other: 'mais de {{count}} anos'
  },
  almostXYears: {
    one: 'quase 1 ano',
    other: 'quase {{count}} anos'
  }
};
function formatDistance$2(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale$1[token] === 'string') {
    result = formatDistanceLocale$1[token];
  } else if (count === 1) {
    result = formatDistanceLocale$1[token].one;
  } else {
    result = formatDistanceLocale$1[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'daqui a ' + result;
    } else {
      return 'há ' + result;
    }
  }

  return result;
}

var dateFormats$1 = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d 'de' MMM 'de' y",
  short: 'dd/MM/y'
};
var timeFormats$1 = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats$1 = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong$1 = {
  date: buildFormatLongFn({
    formats: dateFormats$1,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats$1,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats$1,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale$1 = {
  lastWeek: "'na última' eeee 'às' p",
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P'
};
function formatRelative$1(token, _date, _baseDate, _options) {
  return formatRelativeLocale$1[token];
}

function ordinalNumber$1(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + 'º';
}

var eraValues$1 = {
  narrow: ['aC', 'dC'],
  abbreviated: ['a.C.', 'd.C.'],
  wide: ['antes de Cristo', 'depois de Cristo']
};
var quarterValues$1 = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues$1 = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  wide: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
};
var dayValues$1 = {
  narrow: ['d', 's', 't', 'q', 'q', 's', 's'],
  short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  abbreviated: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
};
var dayPeriodValues$1 = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'noite',
    night: 'madrugada'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'noite',
    night: 'madrugada'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'noite',
    night: 'madrugada'
  }
};
var formattingDayPeriodValues$1 = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da noite',
    night: 'da madrugada'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da noite',
    night: 'da madrugada'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da noite',
    night: 'da madrugada'
  }
};
var localize$1 = {
  ordinalNumber: ordinalNumber$1,
  era: buildLocalizeFn({
    values: eraValues$1,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues$1,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues$1,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues$1,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues$1,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues$1,
    defaultFormattingWidth: 'wide'
  })
};

var matchOrdinalNumberPattern$1 = /^(\d+)(º|ª)?/i;
var parseOrdinalNumberPattern$1 = /\d+/i;
var matchEraPatterns$1 = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
};
var parseEraPatterns$1 = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]
};
var matchQuarterPatterns$1 = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º|ª)? trimestre/i
};
var parseQuarterPatterns$1 = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns$1 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns$1 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns$1 = {
  narrow: /^[dstq]/i,
  short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
  wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
};
var parseDayPatterns$1 = {
  narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i]
};
var matchDayPeriodPatterns$1 = {
  narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
  any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
};
var parseDayPeriodPatterns$1 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^meia/i,
    noon: /^meio/i,
    morning: /manh[ãa]/i,
    afternoon: /tarde/i,
    evening: /noite/i,
    night: /madrugada/i
  }
};
var match$1 = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern$1,
    parsePattern: parseOrdinalNumberPattern$1,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns$1,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns$1,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns$1,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns$1,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns$1,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns$1,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns$1,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary Portuguese locale.
 * @language Portuguese
 * @iso-639-2 por
 * @author Dário Freire [@dfreire]{@link https://github.com/dfreire}
 * @author Adrián de la Rosa [@adrm]{@link https://github.com/adrm}
 */

var locale$1 = {
  code: 'pt',
  formatDistance: formatDistance$2,
  formatLong: formatLong$1,
  formatRelative: formatRelative$1,
  localize: localize$1,
  match: match$1,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 4
  }
};

/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  return !isNaN(date);
}

/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
  var year = getUTCWeekYear(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, dirtyOptions);
  return date;
}

var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}

var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters$1 = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return formatters.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = getUTCISOWeekYear(date); // Padding

    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return formatters.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = getUTCWeek(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = getUTCISOWeek(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return formatters.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = getUTCDayOfYear(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return formatters.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return formatters.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return formatters.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return formatters.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return formatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aaa  | AM, PM                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 0001, ..., 999               |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 05/29/1453                        | 7     |
 * |                                 | PP      | May 29, 1453                      | 7     |
 * |                                 | PPP     | May 29th, 1453                    | 7     |
 * |                                 | PPPP    | Sunday, May 29th, 1453            | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 05/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | May 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | May 29th, 1453 at ...             | 7     |
 * |                                 | PPPPpppp| Sunday, May 29th, 1453 at ...     | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || locale;
  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale$1.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale$1.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = toDate(dirtyDate);

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale$1.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = formatters$1[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale$1.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

var datePtBrFull = function datePtBrFull(date) {
  if (!date) return false;
  var d = date.replace('T', ' ');

  var _y = d.split('-');

  var _d = _y[2].split(' ');

  var _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  var _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]);

  if (!(_date instanceof Date)) return false;
  return "".concat(format(_date, 'dd/MM/yyyy'), " \xE0s ").concat(format(_date, 'HH:mm'));
};

var dateDistance = function dateDistance(date, limit) {
  if (!date) return false;
  var d = date.replace('T', ' ');

  var _y = d.split('-');

  var _d = _y[2].split(' ');

  var _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  var _now = new Date().getTime();

  var _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]).getTime();

  var distanteInWords = formatDistance$1(_now, _date, {
    locale: locale$1
  });
  var diffHours = differenceInHours(_now, _date, {
    locale: locale$1
  });
  if (diffHours > limit) return datePtBrFull(date);
  var replaces = [['aproximadamente ', '']];
  var date_string = distanteInWords;
  lodash.map(replaces, function (r) {
    date_string = date_string.replace(r[0], r[1]);
  });
  return "H\xE1 ".concat(date_string);
};

var utils = {
  dateDistance: dateDistance,
  datePtBrFull: datePtBrFull
};

var _PropTypes$shape;

var Teaser = function Teaser(_ref) {
  var customClass = _ref.customClass,
      content = _ref.content,
      datePublished = _ref.datePublished,
      disableImage = _ref.disableImage,
      domain = _ref.domain,
      hasImageTop = _ref.hasImageTop,
      hasSubjectFilled = _ref.hasSubjectFilled,
      hasSubtitle = _ref.hasSubtitle,
      hasDate = _ref.hasDate,
      lazy = _ref.lazy,
      subjectColor = _ref.subjectColor,
      subjectSize = _ref.subjectSize,
      subjectWeight = _ref.subjectWeight,
      titleSize = _ref.titleSize,
      subtitleSize = _ref.subtitleSize,
      dateSize = _ref.dateSize,
      titleColor = _ref.titleColor,
      subtitleColor = _ref.subtitleColor,
      dateColor = _ref.dateColor,
      titleWeight = _ref.titleWeight,
      subtitleWeight = _ref.subtitleWeight,
      dateWeight = _ref.dateWeight,
      isTeaserFeatured = _ref.isTeaserFeatured;
  var image = content.image,
      name = content.name,
      path = content.path,
      subject = content.subject,
      subtitle = content.subtitle;
  var hasImage = image['image-contentId'];
  var propsTeaser = {
    align: hasImageTop ? 'col' : 'row left',
    custom: "teaser-default ".concat(customClass ? customClass : ''),
    mb: '2'
  };
  var propsImage = {
    align: 'row',
    custom: "teaser-image ".concat(!isTeaserFeatured ? hasImageTop ? 'image-top' : 'image-left' : 'image-featured')
  };
  var propsContent = {
    custom: 'teaser-content',
    align: 'col',
    mb: '3',
    ml: !hasImage ? '0' : '2',
    mr: '2',
    mt: '3',
    w: '100p-4'
  };
  var propsSubTitle = {
    mb: '2',
    lg: {
      mb: '8'
    }
  };
  var propsDateContainer = {
    h: '100p',
    align: 'bottom'
  };
  var propsDate = {
    custom: 'teaser-date',
    w: '100p'
  };
  var propsSubject = {
    custom: 'teaser-subject',
    mb: '1'
  };
  var propsTitle = {
    custom: 'teaser-title'
  };
  if (!content['time-published']) return false;
  var dateValue = !datePublished && content['time-modifiedDate'] ? utils.dateDistance(content['time-modifiedDate'], 2880) : utils.datePtBrFull(content['time-published']);
  dateValue = datePublished ? "Publicado em ".concat(dateValue) : dateValue.startsWith('Há') ? dateValue.replace('Há', 'Atualizado há') : "Atualizado em ".concat(dateValue);
  var path_split = path.split(':8080');
  var url_rewrite = path_split.length > 1 ? "".concat(domain).concat(path_split[1]) : path;

  var TeaserImage = function TeaserImage() {
    return /*#__PURE__*/React__default['default'].createElement(Block, propsImage, /*#__PURE__*/React__default['default'].createElement("a", {
      className: "teaser-aria",
      href: url_rewrite,
      "aria-label": "Imagem da mat\xE9ria ".concat(name)
    }, /*#__PURE__*/React__default['default'].createElement(Image, {
      domain: domain,
      content: image,
      lazy: lazy
    })));
  };

  return /*#__PURE__*/React__default['default'].createElement(Block, propsTeaser, hasImage && !disableImage && /*#__PURE__*/React__default['default'].createElement(TeaserImage, null), /*#__PURE__*/React__default['default'].createElement(Block, propsContent, /*#__PURE__*/React__default['default'].createElement(Block, {
    custom: "top-content",
    h: "100p"
  }, /*#__PURE__*/React__default['default'].createElement(Block, null, subject && /*#__PURE__*/React__default['default'].createElement(Block, propsSubject, /*#__PURE__*/React__default['default'].createElement(Subject, {
    size: subjectSize,
    color: subjectColor,
    filled: hasSubjectFilled,
    weight: subjectWeight
  }, subject))), /*#__PURE__*/React__default['default'].createElement(Block, null, /*#__PURE__*/React__default['default'].createElement(Block, propsTitle, /*#__PURE__*/React__default['default'].createElement("a", {
    className: "teaser-aria",
    href: url_rewrite,
    "aria-label": "Abrir mat\xE9ria ".concat(name)
  }, /*#__PURE__*/React__default['default'].createElement(NewsTitle, {
    size: titleSize,
    color: titleColor,
    weight: titleWeight
  }, name))), subtitle && hasSubtitle && /*#__PURE__*/React__default['default'].createElement(Block, propsSubTitle, /*#__PURE__*/React__default['default'].createElement(Subtitle, {
    size: subtitleSize,
    color: subtitleColor,
    weight: subtitleWeight
  }, subtitle)))), /*#__PURE__*/React__default['default'].createElement(Block, propsDateContainer, dateValue && hasDate && /*#__PURE__*/React__default['default'].createElement(Block, propsDate, /*#__PURE__*/React__default['default'].createElement(Date$1, {
    size: dateSize,
    color: dateColor,
    weight: dateWeight
  }, dateValue)))));
};

Teaser.propTypes = {
  customClass: PropTypes__default['default'].string,
  content: PropTypes__default['default'].shape((_PropTypes$shape = {
    image: PropTypes__default['default'].object,
    name: PropTypes__default['default'].string,
    path: PropTypes__default['default'].string,
    subtitle: PropTypes__default['default'].string,
    subject: PropTypes__default['default'].string
  }, _defineProperty(_PropTypes$shape, 'time-published', PropTypes__default['default'].string), _defineProperty(_PropTypes$shape, 'time-modifiedDate', PropTypes__default['default'].string), _PropTypes$shape)),
  datePublished: PropTypes__default['default'].bool,
  domain: PropTypes__default['default'].string,
  disableImage: PropTypes__default['default'].bool,
  isTeaserFeatured: PropTypes__default['default'].bool,
  hasImageTop: PropTypes__default['default'].bool,
  hasSubtitle: PropTypes__default['default'].bool,
  hasDate: PropTypes__default['default'].bool,
  hasSubjectFilled: PropTypes__default['default'].bool,
  lazy: PropTypes__default['default'].func,
  status: PropTypes__default['default'].shape({
    loading: PropTypes__default['default'].bool,
    error: PropTypes__default['default'].bool
  }),
  subjectColor: PropTypes__default['default'].oneOf(colors),
  subjectSize: PropTypes__default['default'].oneOf([1, 2, 3]),
  titleSize: PropTypes__default['default'].oneOf([1, 2, 3, 4, 5, 6, 7]),
  subtitleSize: PropTypes__default['default'].oneOf([1]),
  dateSize: PropTypes__default['default'].oneOf([1]),
  titleColor: PropTypes__default['default'].oneOf(colors),
  subtitleColor: PropTypes__default['default'].oneOf(colors),
  dateColor: PropTypes__default['default'].oneOf(colors),
  titleWeight: PropTypes__default['default'].oneOf(weights),
  subtitleWeight: PropTypes__default['default'].oneOf(weights),
  dateWeight: PropTypes__default['default'].oneOf(weights),
  subjectWeight: PropTypes__default['default'].oneOf(weights)
};
Teaser.defaultProps = {
  hasSubjectFilled: false,
  hasImageTop: false,
  hasSubtitle: false,
  hasDate: true,
  subjectSize: 1,
  subjectColor: 'primary-1',
  disableImage: false
};

var Tag = function Tag(_ref) {
  var content = _ref.content,
      color = _ref.color,
      onClick = _ref.onClick,
      radius = _ref.radius,
      weight = _ref.weight;
  var classes = classnames__default['default'](_defineProperty({
    'Prensa-Tag-root': true
  }, "color-".concat(color, " radius-").concat(radius, " ").concat(weight), true));

  var handleClick = function handleClick() {
    onClick(content);
  };

  return /*#__PURE__*/React__default['default'].createElement("div", {
    className: classes,
    onClick: handleClick
  }, /*#__PURE__*/React__default['default'].createElement(TagTypography, {
    weight: weight,
    color: color
  }, content));
};

Tag.defaultProps = {
  color: 'primary-1',
  weight: 'regular',
  radius: 'default'
};
Tag.propTypes = {
  content: PropTypes__default['default'].string.isRequired,
  color: PropTypes__default['default'].oneOf(colors),
  onClick: PropTypes__default['default'].func.isRequired,
  radius: PropTypes__default['default'].oneOf([false, 'default', 'alternative']),
  weight: PropTypes__default['default'].oneOf(weights)
};

exports.Block = Block;
exports.Button = Button;
exports.ColumnHeader = ColumnHeader;
exports.Field = index$1;
exports.Form = index;
exports.Image = Image$1;
exports.ImageBackground = Image;
exports.ImageGallery = ImageGallery;
exports.SearchForm = SearchForm;
exports.SearchMenu = SearchMenu;
exports.SideMenu = SideMenu;
exports.SideMenuItems = SideMenuItems;
exports.SocialMedias = SocialMedias;
exports.Subject = Subject;
exports.Tag = Tag;
exports.Teaser = Teaser;
exports.Topbar = Topbar;
exports.utils = utils;
