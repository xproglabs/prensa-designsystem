'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

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

function SvgArrowCircleDownBlack18Dp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: 18,
    height: 18
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 10V8h-2v4H8l4 4 4-4h-3z"
  }));
}

function SvgIcArrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    height: 24,
    width: 24
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }));
}

exports.ArrowCircleDownBlack18Dp = SvgArrowCircleDownBlack18Dp;
exports.IcArrow = SvgIcArrow;
