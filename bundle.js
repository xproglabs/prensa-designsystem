'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var version = "1.1.0";

var Forms = function Forms() {
  console.log('form ' + version);
  return /*#__PURE__*/React.createElement("p", null, "form.loaded");
};

var Version = function Version() {
  console.log('version ' + version);
  return /*#__PURE__*/React.createElement("p", null, "version: ", version);
};

exports.Forms = Forms;
exports.Version = Version;
