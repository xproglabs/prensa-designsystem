'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dateFns = require('date-fns');
var locale = require('date-fns/locale');
var lodash = require('lodash');

var datePtBrFull = function datePtBrFull(date) {
  if (!date) return false;
  var d = date.replace('T', ' ');

  var _y = d.split('-');

  var _d = _y[2].split(' ');

  var _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  var _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]);

  if (!(_date instanceof Date)) return false;
  return "".concat(dateFns.format(_date, 'dd/MM/yyyy'), " \xE0s ").concat(dateFns.format(_date, 'HH:mm'));
};

var dateDistance = function dateDistance(date, limit) {
  if (!date) return false;
  var d = date.replace('T', ' ');

  var _y = d.split('-');

  var _d = _y[2].split(' ');

  var _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  var _now = new Date().getTime();

  var _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]).getTime();

  var distanteInWords = dateFns.formatDistance(_now, _date, {
    locale: locale.ptBR
  });
  var diffHours = dateFns.differenceInHours(_now, _date, {
    locale: locale.ptBR
  });
  if (diffHours > limit) return datePtBrFull(date);
  var replaces = [['aproximadamente ', '']];
  var date_string = distanteInWords;
  lodash.map(replaces, function (r) {
    date_string = date_string.replace(r[0], r[1]);
  });
  return "H\xE1 ".concat(date_string);
};

var numberToString = function numberToString(param) {
  return "".concat(param, "px");
};

var getFromProps = function getFromProps(props, param) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var defaultIsNumber = Number.isInteger(defaultValue);
  var value = defaultIsNumber ? numberToString(defaultValue) : defaultValue;
  return lodash.get(props, numberToString(param), value);
};

exports.dateDistance = dateDistance;
exports.datePtBrFull = datePtBrFull;
exports.getFromProps = getFromProps;
exports.numberToString = numberToString;
