'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classnames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

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
	"editorial-1",
	"editorial-2",
	"editorial-3",
	"editorial-4",
	"editorial-5",
	"black:",
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
	"white:",
	"ads",
	"success-1",
	"success-2",
	"success-3",
	"error-1",
	"error-2",
	"error-3"
];

var SubjectTypography = function SubjectTypography(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Subject-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1, 2, 3]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var NewsTitle = function NewsTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-NewsTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("h2", {
    className: classes,
    style: style
  }, children);
};
NewsTitle.defaultProps = {
  color: 'primary-1',
  size: 1,
  weight: 'regular'
};
NewsTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var Subtitle = function Subtitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Subtitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("h3", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var Date = function Date(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Date-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var Author = function Author(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Author-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var Paragraph = function Paragraph(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size;
  var classes = classnames((_classnames = {
    'Typography-Paragraph-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("p", {
    className: classes,
    style: style
  }, children);
};
Paragraph.defaultProps = {
  color: 'black',
  size: 1
};
Paragraph.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object
};

var Byline = function Byline(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Byline-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var InterTitle = function InterTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-InterTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var Citation = function Citation(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Citation-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var UrlLink = function UrlLink(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-UrlLink-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("a", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var TagTypography = function TagTypography(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Tag-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("p", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var SectionTitle = function SectionTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size;
  var classes = classnames((_classnames = {
    'Typography-SectionTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
    className: classes,
    style: style
  }, children);
};
SectionTitle.defaultProps = {
  color: 'primary-1',
  size: 1
};
SectionTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object
};

var EditorialTitle = function EditorialTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-EditorialTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var ButtonTypography = function ButtonTypography(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-Button-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("p", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var MostReadNumber = function MostReadNumber(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-MostReadNumber-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var MenuSideTitle = function MenuSideTitle(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-MenuSideTitle-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var MenuSideItem = function MenuSideItem(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-MenuSideItem-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

var MenuTopItem = function MenuTopItem(props) {
  var _classnames;

  var className = props.className,
      children = props.children,
      color = props.color,
      style = props.style,
      size = props.size,
      weight = props.weight;
  var classes = classnames((_classnames = {
    'Typography-MenuTopItem-root': true
  }, _defineProperty(_classnames, "size-".concat(size, " ").concat(weight, " color-").concat(color), true), _defineProperty(_classnames, className, className), _classnames));
  return /*#__PURE__*/React.createElement("span", {
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
  children: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(['thin', 'light', 'regular', 'medium', 'bold', 'italic'])
};

exports.Author = Author;
exports.ButtonTypography = ButtonTypography;
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
