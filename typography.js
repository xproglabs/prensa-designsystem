'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classnames = require('classnames');
var PropTypes = require('prop-types');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

var weight = [
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
};

var Date = function Date(props) {
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
Date.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
Date.propTypes = {
  children: PropTypes__default['default'].string,
  className: PropTypes__default['default'].string,
  color: PropTypes__default['default'].oneOf(colors),
  size: PropTypes__default['default'].oneOf([1]),
  style: PropTypes__default['default'].object,
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight),
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
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
  weight: PropTypes__default['default'].oneOf(weight)
};

exports.Author = Author;
exports.Byline = Byline;
exports.Citation = Citation;
exports.Date = Date;
exports.EditorialTitle = EditorialTitle;
exports.InterTitle = InterTitle;
exports.MenuSideItem = MenuSideItem;
exports.MenuSideTitle = MenuSideTitle;
exports.MenuTopItem = MenuTopItem;
exports.MostReadNumber = MostReadNumber;
exports.NewsTitle = NewsTitle;
exports.Paragraph = Paragraph;
exports.SectionTitle = SectionTitle;
exports.SubjectTypography = SubjectTypography;
exports.Subtitle = Subtitle;
exports.TagTypography = TagTypography;
exports.UrlLink = UrlLink;
