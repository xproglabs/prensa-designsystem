'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var Input = function Input(_ref) {
  var disabled = _ref.disabled,
      onEnter = _ref.onEnter,
      setValue = _ref.setValue,
      value = _ref.value;

  var handleKeyDown = function handleKeyDown(_ref2) {
    var key = _ref2.key;
    return key === "Enter" && onEnter && onEnter();
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "input-field"
  }, /*#__PURE__*/React.createElement("input", {
    defaultValue: value,
    disabled: disabled ? disabled : false,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setValue(target.value);
    },
    onKeyDown: handleKeyDown,
    type: "text"
  }));
};

Input.propTypes = {
  disabled: PropTypes.bool,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
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
