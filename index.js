'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var Input = function Input(_ref) {
  var disabled = _ref.disabled,
      invalid = _ref.invalid,
      label = _ref.label,
      onEnter = _ref.onEnter,
      setValue = _ref.setValue,
      type = _ref.type,
      value = _ref.value,
      warning = _ref.warning;

  var KeyDown = function KeyDown(_ref2) {
    var key = _ref2.key;
    return key === "Enter" && onEnter && onEnter();
  };

  var Label = function Label() {
    return /*#__PURE__*/React.createElement("p", {
      className: "label"
    }, label && label);
  };

  var Warning = function Warning() {
    return invalid ? /*#__PURE__*/React.createElement("p", {
      className: "warning"
    }, warning && warning) : "";
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "input-field ".concat(invalid ? "invalid" : "", " ").concat(type ? type : "")
  }, /*#__PURE__*/React.createElement(Label, null), type === "textarea" ? /*#__PURE__*/React.createElement("textarea", {
    defaultValue: value,
    disabled: disabled ? disabled : false,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setValue(target.value);
    },
    onKeyDown: KeyDown
  }) : /*#__PURE__*/React.createElement("input", {
    defaultValue: value,
    disabled: disabled,
    onChange: function onChange(_ref4) {
      var target = _ref4.target;
      return setValue(target.value);
    },
    onKeyDown: KeyDown,
    type: type ? type : "text"
  }), /*#__PURE__*/React.createElement(Warning, null));
};

Input.propTypes = {
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  warning: PropTypes.string
};
var index = {
  Input: Input
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

var version = "1.1.4";

var Version = function Version() {
  console.log('version ' + version);
  return /*#__PURE__*/React.createElement("p", null, "version: ", version);
};

exports.Form = index;
exports.Icon = Icon;
exports.Version = Version;
