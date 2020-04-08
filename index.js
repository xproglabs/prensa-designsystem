'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var version = "1.1.1";

var Forms = function Forms() {
  console.log('form ' + version);
  return /*#__PURE__*/React.createElement("p", null, "form.loaded");
};

var Version = function Version() {
  console.log('version ' + version);
  return /*#__PURE__*/React.createElement("p", null, "version: ", version);
};

var Icon = function Icon(data) {
  return /*#__PURE__*/React.createElement("svg", data, data.children);
};

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};
Icon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24'
};

exports.Forms = Forms;
exports.Icon = Icon;
exports.Version = Version;
