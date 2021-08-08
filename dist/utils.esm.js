import { format, formatDistance, differenceInHours } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { map, get } from 'lodash';

var datePtBrFull = function datePtBrFull(date) {
  if (!date) return false;
  var d = date.replace('T', ' ');

  var _y = d.split('-');

  var _d = _y[2].split(' ');

  var _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  var _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]);

  if (!(_date instanceof Date)) return false;
  return "".concat(format(_date, 'dd/MM/yyyy'), " \xE0s ").concat(format(_date, 'HH:mm'));
};

var dateDistance = function dateDistance(date, limit) {
  if (!date) return false;
  var d = date.replace('T', ' ');

  var _y = d.split('-');

  var _d = _y[2].split(' ');

  var _t = _d.length > 1 ? _d[1].split(':') : [0, 0];

  var _now = new Date().getTime();

  var _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]).getTime();

  var distanteInWords = formatDistance(_now, _date, {
    locale: ptBR
  });
  var diffHours = differenceInHours(_now, _date, {
    locale: ptBR
  });
  if (diffHours > limit) return datePtBrFull(date);
  var replaces = [['aproximadamente ', '']];
  var date_string = distanteInWords;
  map(replaces, function (r) {
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
  return get(props, numberToString(param), value);
};

var pathToImage = function pathToImage(derivative, domain, policy_id, width) {
  if (!policy_id) return null;
  var w = width || 1000;
  var r = domain || 'https://costanorte.com.br';
  var d = derivative || '2x1';
  var id = policy_id.split('.');
  var string = id.length > 2 ? "".concat(policy_id, ":").concat(id[2]) : "".concat(policy_id);
  var path = "".concat(r, "/image/policy:").concat(string, "/image.jpg?f=").concat(d, "&w=").concat(w);
  return path;
};

var getImagePath = function getImagePath(derivative, policy_id, width) {
  if (!policy_id) return null;
  var w = width || 1000;
  var d = derivative || '2x1';
  var path = "/image/policy:".concat(policy_id, "/image.jpg?f=").concat(d, "&w=").concat(w);
  return path;
};

export { dateDistance, datePtBrFull, getFromProps, getImagePath, numberToString, pathToImage };
//# sourceMappingURL=utils.esm.js.map
