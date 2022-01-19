'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dateFns = require('date-fns');
var locale = require('date-fns/locale');
var lodash = require('lodash');

const datePtBrFull = date => {
  if (!date) return false;
  let d = date.replace('T', ' ');

  let _y = d.split('-');

  let _d = _y[2].split(' ');

  let _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  let _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]);

  if (!(_date instanceof Date)) return false;
  return `${dateFns.format(_date, 'dd/MM/yyyy')} às ${dateFns.format(_date, 'HH:mm')}`;
};

const dateDistance = (date, limit) => {
  if (!date) return false;
  let d = date.replace('T', ' ');

  let _y = d.split('-');

  let _d = _y[2].split(' ');

  let _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  let _now = new Date().getTime();

  let _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]).getTime();

  const distanteInWords = dateFns.formatDistance(_now, _date, {
    locale: locale.ptBR
  });
  const diffHours = dateFns.differenceInHours(_now, _date, {
    locale: locale.ptBR
  });
  if (diffHours > limit) return datePtBrFull(date);
  const replaces = [['aproximadamente ', '']];
  let date_string = distanteInWords;
  lodash.map(replaces, r => {
    date_string = date_string.replace(r[0], r[1]);
  });
  return `Há ${date_string}`;
};

const numberToString = param => {
  return `${param}px`;
};

const getFromProps = (props, param, defaultValue = false) => {
  const defaultIsNumber = Number.isInteger(defaultValue);
  const value = defaultIsNumber ? numberToString(defaultValue) : defaultValue;
  return lodash.get(props, numberToString(param), value);
};

const pathToImage = (derivative, domain, policy_id, width) => {
  if (!policy_id) return null;
  let w = width || 1000;
  let r = domain || 'https://costanorte.com.br';
  let d = derivative || '2x1';
  let id = policy_id.split('.');
  let string = id.length > 2 ? `${policy_id}:${id[2]}` : `${policy_id}`;
  let path = `${r}/image/policy:${string}/image.jpg?f=${d}&w=${w}`;
  return path;
};

const getImagePath = (derivative, policy_id, width) => {
  if (!policy_id) return null;
  const w = width || 1000;
  const d = derivative || '2x1';
  const path = `/image/policy:${policy_id}/image.jpg?f=${d}&w=${w}`;
  return path;
};

/**
 * Transform contentId or contentIdVersioned in a contentIdString
 * @param contentId contentId or contentIdVersioned
 * @returns a valid contentIdString
 */
function parseContentId(contentId) {
    var splitter;
    splitter = contentId.split(':');
    contentId = lodash.get(splitter, '[0]', '');
    splitter = contentId.split('.');
    contentId = "".concat(lodash.get(splitter, '[0]'), ".").concat(lodash.get(splitter, '[1]'));
    return contentId;
}

exports.dateDistance = dateDistance;
exports.datePtBrFull = datePtBrFull;
exports.getFromProps = getFromProps;
exports.getImagePath = getImagePath;
exports.numberToString = numberToString;
exports.parseContentId = parseContentId;
exports.pathToImage = pathToImage;
//# sourceMappingURL=utils.js.map