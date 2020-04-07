'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var version = "1.1.0";

var VersionCpto = function VersionCpto() {
  console.log('version ' + version);
  return /*#__PURE__*/React.createElement("p", null, "version: ", version);
};

module.exports = VersionCpto;
