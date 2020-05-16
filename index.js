'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classnames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

var Button = function Button(props) {
  var style = classnames({
    'button': true,
    'primary': props.style === 'primary' && !props.disabled,
    'secondary': props.style === 'secondary' && !props.disabled,
    'tertiary': props.style === 'tertiary' && !props.disabled,
    'disabled': props.disabled
  });
  return /*#__PURE__*/React.createElement("button", {
    className: style,
    onClick: props.disabled ? null : props.onClick
  }, props.children);
};

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
Button.defaultProps = {
  children: 'Label',
  style: 'primary'
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

Input.propTypes = {
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
Input.defaultProps = {
  autofocus: false,
  disabled: 'disabled',
  invalid: false,
  type: 'text'
};
var index = {
  Input: Input
};

var goToPage = function goToPage(location) {
  return window.location = location;
};

var Block = function Block(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-block ".concat(props["class"])
  }, props.children);
};

var ButtonPrimary = function ButtonPrimary(_ref) {
  var children = _ref.children,
      goTo = _ref.goTo;

  var handeClick = function handeClick() {
    return goTo ? goToPage(goTo) : false;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fr-button-primary",
    onClick: handeClick
  }, children);
};

var ButtonSecondary = function ButtonSecondary(_ref2) {
  var children = _ref2.children,
      goTo = _ref2.goTo;

  var handeClick = function handeClick() {
    return goTo ? goToPage(goTo) : false;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fr-button-secondary",
    onClick: handeClick
  }, children);
};

var Card = function Card(props) {
  var handeClick = function handeClick() {
    return goToPage('/frames/page');
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fr-card",
    onClick: handeClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "fr-card-image"
  }, props.image), /*#__PURE__*/React.createElement("div", {
    className: "fr-card-text"
  }, props.children ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Line, {
    "class": "card-title"
  }), /*#__PURE__*/React.createElement(Line, {
    "class": "card-title"
  }), /*#__PURE__*/React.createElement(Line, {
    "class": "card-lead"
  }), /*#__PURE__*/React.createElement(FlexBtwn, null, /*#__PURE__*/React.createElement(Line, {
    "class": "card-author"
  }), /*#__PURE__*/React.createElement(Line, {
    "class": "card-date"
  })))));
};

var Container = function Container(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-container"
  }, props.children);
};

var FX = function FX(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-fx"
  }, props.children);
};

var FY = function FY(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-fy"
  }, props.children);
};

var FlexBtwn = function FlexBtwn(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-flex-btwn"
  }, props.children);
};

var FlexEnd = function FlexEnd(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-flex-end"
  }, props.children);
};

var FlexStart = function FlexStart(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-flex-start"
  }, props.children);
};

var Footer = function Footer(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-footer"
  }, props.children);
};

var FooterLead = function FooterLead(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-footer-lead"
  }, /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", null), /*#__PURE__*/React.createElement("p", null));
};

var Grid = function Grid(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-grid"
  }, props.children);
};

var ListView = function ListView(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-listview"
  }, props.children);
};

var Line = function Line(props) {
  return /*#__PURE__*/React.createElement("p", {
    className: "fr-line ".concat(props["class"])
  }, props.children);
};

var Logo = function Logo(_ref3) {
  var children = _ref3.children,
      goTo = _ref3.goTo;

  var handeClick = function handeClick() {
    return goTo ? goToPage(goTo) : false;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fr-logo",
    onClick: handeClick
  }, children);
};

var Slide = function Slide(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-slide ".concat(props["class"])
  }, props.children);
};

var SlideLead = function SlideLead(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-slide-lead"
  }, props.children);
};

var SlideText = function SlideText(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-slide-text"
  }, props.children ? props.children : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Line, {
    "class": "home-lead"
  }), /*#__PURE__*/React.createElement(Line, {
    "class": "home-lead"
  }), /*#__PURE__*/React.createElement(Line, {
    "class": "home-lead"
  })));
};

var SlideTitle = function SlideTitle(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-slide-title"
  }, props.value ? /*#__PURE__*/React.createElement(Text, {
    "class": "home-title",
    value: props.value
  }) : /*#__PURE__*/React.createElement(Line, {
    "class": "home-title mkp"
  }));
};

var Text = function Text(props) {
  return /*#__PURE__*/React.createElement("p", {
    className: "fr-text ".concat(props.value ? props["class"] : "mkp")
  }, props.value);
};

var Topbar = function Topbar(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fr-topbar"
  }, props.children);
};

var index$1 = {
  Block: Block,
  ButtonPrimary: ButtonPrimary,
  ButtonSecondary: ButtonSecondary,
  Card: Card,
  Container: Container,
  FX: FX,
  FY: FY,
  FlexBtwn: FlexBtwn,
  FlexEnd: FlexEnd,
  FlexStart: FlexStart,
  Footer: Footer,
  FooterLead: FooterLead,
  Grid: Grid,
  Line: Line,
  ListView: ListView,
  Logo: Logo,
  Slide: Slide,
  SlideText: SlideText,
  SlideTitle: SlideTitle,
  SlideLead: SlideLead,
  Text: Text,
  Topbar: Topbar
};

var Icon = function Icon(data) {
  return /*#__PURE__*/React.createElement("svg", data, data.children);
};

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired])
};
Icon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24'
};

var Panel = function Panel(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    className: "panel-body ".concat(style ? style : '')
  }, children && children);
};

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.string
};

var version = "1.1.6";

var Version = function Version() {
  console.log('version ' + version);
  return /*#__PURE__*/React.createElement("p", null, "version: ", version);
};

exports.Button = Button;
exports.Form = index;
exports.Frame = index$1;
exports.Icon = Icon;
exports.Panel = Panel;
exports.Version = Version;
