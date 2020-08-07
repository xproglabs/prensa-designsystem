'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var classnames = _interopDefault(require('classnames'));
var dateFns = require('date-fns');
var lodash = require('lodash');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

var Block = function Block(props) {
  var children = props.children,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      onClick = props.onClick;

  var defProps = function defProps(prefix, props) {
    var _classnames;

    var checkAttr = function checkAttr(_props, name) {
      return _props.align && _props.align.indexOf(name) > -1;
    };

    var direction = props && props.align && (props.align.indexOf('row') > -1 ? 'row' : 'col');
    return classnames((_classnames = {}, _defineProperty(_classnames, "fx-col".concat(prefix), direction === 'col'), _defineProperty(_classnames, "fx-row".concat(prefix), direction === 'row'), _defineProperty(_classnames, "".concat(direction, "-between").concat(prefix), checkAttr(props, 'between')), _defineProperty(_classnames, "".concat(direction, "-bottom").concat(prefix), checkAttr(props, 'bottom')), _defineProperty(_classnames, "".concat(direction, "-center").concat(prefix), checkAttr(props, 'center')), _defineProperty(_classnames, "".concat(direction, "-evenly").concat(prefix), checkAttr(props, 'evenly')), _defineProperty(_classnames, "".concat(direction, "-left").concat(prefix), checkAttr(props, 'left')), _defineProperty(_classnames, "".concat(direction, "-middle").concat(prefix), checkAttr(props, 'middle')), _defineProperty(_classnames, "".concat(direction, "-right").concat(prefix), checkAttr(props, 'right')), _defineProperty(_classnames, "".concat(direction, "-top").concat(prefix), checkAttr(props, 'top')), _defineProperty(_classnames, "".concat(direction, "-wrap").concat(prefix), checkAttr(props, 'wrap')), _defineProperty(_classnames, "bg-".concat(props.bg).concat(prefix), props.bg), _defineProperty(_classnames, "cursor-".concat(props.cursor).concat(prefix), props.cursor), _defineProperty(_classnames, "fc-".concat(props.color).concat(prefix), props.color), _defineProperty(_classnames, "h-".concat(props.h).concat(prefix), props.h), _defineProperty(_classnames, "m-".concat(props.m).concat(prefix), props.m), _defineProperty(_classnames, "mt-".concat(props.mt).concat(prefix), props.mt), _defineProperty(_classnames, "mr-".concat(props.mr).concat(prefix), props.mr), _defineProperty(_classnames, "mb-".concat(props.mb).concat(prefix), props.mb), _defineProperty(_classnames, "ml-".concat(props.ml).concat(prefix), props.ml), _defineProperty(_classnames, "p-".concat(props.p).concat(prefix), props.p), _defineProperty(_classnames, "pt-".concat(props.pt).concat(prefix), props.pt), _defineProperty(_classnames, "pr-".concat(props.pr).concat(prefix), props.pr), _defineProperty(_classnames, "pb-".concat(props.pb).concat(prefix), props.pb), _defineProperty(_classnames, "pl-".concat(props.pl).concat(prefix), props.pl), _defineProperty(_classnames, "w-".concat(props.w).concat(prefix), props.w), _defineProperty(_classnames, "".concat(props.custom), props.custom), _classnames));
  };

  var dProps = defProps('', props);
  var xsProps = xs && defProps('--xs', xs);
  var smProps = sm && defProps('--sm', sm);
  var mdProps = md && defProps('--md', md);
  var lgProps = lg && defProps('--lg', lg);
  var xlProps = xl && defProps('--xl', xl);
  var classProps = {
    className: classnames(dProps, xsProps, smProps, mdProps, lgProps, xlProps) || 'block',
    children: children,
    onClick: onClick
  };
  return /*#__PURE__*/React.createElement("div", classProps);
};

var propTypesSizes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
Block.propTypes = {
  align: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  cursor: PropTypes.string,
  m: PropTypes.oneOf([].concat(propTypesSizes)),
  mt: PropTypes.oneOf([].concat(propTypesSizes)),
  mr: PropTypes.oneOf([].concat(propTypesSizes)),
  mb: PropTypes.oneOf([].concat(propTypesSizes)),
  ml: PropTypes.oneOf([].concat(propTypesSizes)),
  p: PropTypes.oneOf([].concat(propTypesSizes)),
  pt: PropTypes.oneOf([].concat(propTypesSizes)),
  pr: PropTypes.oneOf([].concat(propTypesSizes)),
  pb: PropTypes.oneOf([].concat(propTypesSizes)),
  pl: PropTypes.oneOf([].concat(propTypesSizes)),
  xs: PropTypes.object,
  sm: PropTypes.object,
  md: PropTypes.object,
  lg: PropTypes.object,
  xl: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]),
  custom: PropTypes.string,
  onClick: PropTypes.func,
  w: PropTypes.string,
  h: PropTypes.string
};
Block.defaultProps = {};

var Image = function Image(_ref) {
  var domain = _ref.domain,
      value = _ref.value;
  if (!value || !value['image-contentId']) return false;
  var contentid = value['image-contentId'];
  var width = 1000;
  var derivative = '2x1';
  var imagePath = "".concat(domain, "/image/policy:").concat(contentid, "/image.jpg?f=").concat(derivative, "&w=").concat(width);
  var policyid = contentid.replace('.', '-').replace('.', '-');
  var inlinestyle = "\n    .image-background.policy-".concat(policyid, " {\n      background-image: url(").concat(imagePath, ");\n    }");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: inlinestyle
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "image-background policy-".concat(policyid)
  }));
};

Image.propTypes = {
  domain: PropTypes.string,
  value: PropTypes.object.isRequired
};
Image.defaultProps = {
  value: {}
};

var Typography = function Typography(props) {
  var _classnames;

  var children = props.children,
      custom = props.custom,
      size = props.size,
      tokenVariant = props.tokenVariant;

  var getTokenVariant = function getTokenVariant() {
    switch (tokenVariant) {
      case 'article-title':
        return 'article-title';

      case 'article-subtitle':
        return 'article-subtitle';

      case 'article-paragraph':
        return 'article-paragraph';

      case 'article-tag':
        return 'article-tag';

      case 'title':
        return "title-".concat(size);

      case 'subtitle':
        return "subtitle-".concat(size);

      case 'paragraph':
        return "paragraph-".concat(size);

      case 'subject':
        return "subject-".concat(size);

      case 'system':
        return "system-".concat(size);

      case 'system-bold':
        return "system-".concat(size, " bold");

      default:
        return '';
    }
  };

  var classes = classnames((_classnames = {
    'typography-root': true
  }, _defineProperty(_classnames, getTokenVariant(), true), _defineProperty(_classnames, "".concat(custom), custom), _classnames));

  switch (tokenVariant) {
    case 'article-title':
    case 'title':
      return /*#__PURE__*/React.createElement("h1", {
        className: classes
      }, children);

    case 'article-paragraph':
      return /*#__PURE__*/React.createElement("p", {
        className: classes,
        dangerouslySetInnerHTML: {
          __html: children
        }
      });

    default:
      return /*#__PURE__*/React.createElement("span", {
        className: classes
      }, children);
  }
};

Typography.defaultProps = {
  weight: 'regular',
  size: 'sm'
};
Typography.propTypes = {
  /**
   * Texto que será inserido na tela
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,

  /**
   * Permite a passagem de class customizado para o componente
   */
  custom: PropTypes.string,

  /**
   * Modifica o tamanho da fonte de acordo com as guias do design
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
  tokenVariant: PropTypes.oneOf(['article-title', 'article-subtitle', 'article-paragraph', 'article-tag', 'title', 'subtitle', 'paragraph', 'paragraph-inner', 'subject', 'system', 'system-bold'])
};

var Subject = function Subject(props) {
  var children = props.children,
      custom = props.custom,
      filled = props.filled;
  if (!children) return null;
  var classes = classnames(_defineProperty({
    'subject-root': true,
    'filled bg-primary-1': filled
  }, "".concat(custom), custom));
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "subject"
  }, children));
};

Subject.propTypes = {
  children: PropTypes.string.isRequired,
  custom: PropTypes.string,
  filled: PropTypes.bool // size: PropTypes.oneOf([
  //   'sm', 'md', 'lg'
  // ])

};

function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'menos de um segundo',
    other: 'menos de {{count}} segundos'
  },
  xSeconds: {
    one: '1 segundo',
    other: '{{count}} segundos'
  },
  halfAMinute: 'meio minuto',
  lessThanXMinutes: {
    one: 'menos de um minuto',
    other: 'menos de {{count}} minutos'
  },
  xMinutes: {
    one: '1 minuto',
    other: '{{count}} minutos'
  },
  aboutXHours: {
    one: 'aproximadamente 1 hora',
    other: 'aproximadamente {{count}} horas'
  },
  xHours: {
    one: '1 hora',
    other: '{{count}} horas'
  },
  xDays: {
    one: '1 dia',
    other: '{{count}} dias'
  },
  aboutXWeeks: {
    one: 'aproximadamente 1 mês',
    // TODO
    other: 'aproximadamente {{count}} meses' // TODO

  },
  xWeeks: {
    one: '1 mês',
    // TODO
    other: '{{count}} meses' // TODO

  },
  aboutXMonths: {
    one: 'aproximadamente 1 mês',
    other: 'aproximadamente {{count}} meses'
  },
  xMonths: {
    one: '1 mês',
    other: '{{count}} meses'
  },
  aboutXYears: {
    one: 'aproximadamente 1 ano',
    other: 'aproximadamente {{count}} anos'
  },
  xYears: {
    one: '1 ano',
    other: '{{count}} anos'
  },
  overXYears: {
    one: 'mais de 1 ano',
    other: 'mais de {{count}} anos'
  },
  almostXYears: {
    one: 'quase 1 ano',
    other: 'quase {{count}} anos'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'daqui a ' + result;
    } else {
      return 'há ' + result;
    }
  }

  return result;
}

var dateFormats = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d 'de' MMM 'de' y",
  short: 'dd/MM/y'
};
var timeFormats = {
  full: 'HH:mm:ss zzzz',
  long: 'HH:mm:ss z',
  medium: 'HH:mm:ss',
  short: 'HH:mm'
};
var dateTimeFormats = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};

var formatRelativeLocale = {
  lastWeek: "'na última' eeee 'às' p",
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + 'º';
}

var eraValues = {
  narrow: ['aC', 'dC'],
  abbreviated: ['a.C.', 'd.C.'],
  wide: ['antes de Cristo', 'depois de Cristo']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['T1', 'T2', 'T3', 'T4'],
  wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
};
var monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
  abbreviated: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  wide: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
};
var dayValues = {
  narrow: ['d', 's', 't', 'q', 'q', 's', 's'],
  short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  abbreviated: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
};
var dayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'noite',
    night: 'madrugada'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'noite',
    night: 'madrugada'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'manhã',
    afternoon: 'tarde',
    evening: 'noite',
    night: 'madrugada'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da noite',
    night: 'da madrugada'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da noite',
    night: 'da madrugada'
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'meia-noite',
    noon: 'meio-dia',
    morning: 'da manhã',
    afternoon: 'da tarde',
    evening: 'da noite',
    night: 'da madrugada'
  }
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};

var matchOrdinalNumberPattern = /^(\d+)(º|ª)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
};
var parseEraPatterns = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º|ª)? trimestre/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[dstq]/i,
  short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
  wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
  any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^meia/i,
    noon: /^meio/i,
    morning: /manh[ãa]/i,
    afternoon: /tarde/i,
    evening: /noite/i,
    night: /madrugada/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};

/**
 * @type {Locale}
 * @category Locales
 * @summary Portuguese locale.
 * @language Portuguese
 * @iso-639-2 por
 * @author Dário Freire [@dfreire]{@link https://github.com/dfreire}
 * @author Adrián de la Rosa [@adrm]{@link https://github.com/adrm}
 */

var locale = {
  code: 'pt',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1
    /* Monday */
    ,
    firstWeekContainsDate: 4
  }
};

var convertDateFromPtBrToDistance = function convertDateFromPtBrToDistance(date) {
  var a = date ? date.trim().split(".") : "";
  var b = a[2] ? a[2].split(" ") : "";
  var c = b[1] ? b[1].split(":") : "";
  var new_date = new Date(b[0], a[1], a[0], c[0], c[1]);
  var distanteInWords = dateFns.distanceInWords(new_date, new Date(), {
    locale: locale
  });
  var replaces = [["less than a minute", "menos de 1 minuto"], ["about", ""], ["over", ""], ["almost", ""], ["hour", "hora"], ["hours", "horas"], ["month", "meses"], ["months", "meses"], ["minute", "minuto"], ["minutes", "minutos"], ["year", "ano"], ["years", "anos"], ["day", "dia"], ["days", "dias"]];
  var date_string = distanteInWords;
  lodash.map(replaces, function (r, k) {
    date_string = date_string.replace(r[0], r[1]);
  });
  return "H\xE1 ".concat(date_string);
};

var Teaser = function Teaser(_ref) {
  var content = _ref.content,
      domain = _ref.domain,
      hasImageTop = _ref.hasImageTop,
      hasSubjectFilled = _ref.hasSubjectFilled,
      hasSubtitle = _ref.hasSubtitle,
      hasDate = _ref.hasDate,
      status = _ref.status;
  var image = content.image,
      name = content.name,
      path = content.path,
      subject = content.subject,
      subtitle = content.subtitle;
  var loading = status.loading,
      error = status.error;
  var propsTeaser = {
    align: hasImageTop ? 'col' : 'row left',
    custom: 'teaser-default',
    mb: '4'
  };
  var propsImage = {
    align: 'row',
    custom: "teaser-image ".concat(hasImageTop ? 'image-top' : 'image-left')
  };
  var propsContent = {
    custom: 'teaser-content',
    mb: '3',
    ml: '2',
    mr: '2',
    mt: '3',
    w: '100p-4'
  };
  var propsDate = {
    custom: 'teaser-date',
    mt: '4',
    w: '100p'
  };
  var propsSubject = {
    custom: 'teaser-subject',
    mb: '1'
  };
  var propsTitle = {
    custom: 'teaser-title'
  };

  var TeaserImage = function TeaserImage() {
    if (loading || error || !image) return /*#__PURE__*/React.createElement("div", {
      className: "image-box skeleton"
    });
    if (!image['image-contentId']) return null;
    return /*#__PURE__*/React.createElement(Block, propsImage, /*#__PURE__*/React.createElement("a", {
      className: "teaser-aria",
      href: path,
      "aria-label": "Imagem da mat\xE9ria ".concat(name)
    }, /*#__PURE__*/React.createElement(Image, {
      domain: domain,
      value: image
    })));
  };

  var dateDistance = convertDateFromPtBrToDistance(content['time-published']);
  return /*#__PURE__*/React.createElement(Block, propsTeaser, /*#__PURE__*/React.createElement(TeaserImage, null), /*#__PURE__*/React.createElement(Block, propsContent, subject && /*#__PURE__*/React.createElement(Block, propsSubject, /*#__PURE__*/React.createElement(Subject, {
    filled: hasSubjectFilled
  }, subject)), /*#__PURE__*/React.createElement(Block, propsTitle, /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Abrir mat\xE9ria ".concat(name)
  }, /*#__PURE__*/React.createElement(Typography, {
    custom: "teaser-title"
  }, name))), subtitle && hasSubtitle && /*#__PURE__*/React.createElement(Block, null, /*#__PURE__*/React.createElement(Typography, {
    custom: "teaser-subtitle"
  }, subtitle)), dateDistance && hasDate && /*#__PURE__*/React.createElement(Block, propsDate, /*#__PURE__*/React.createElement(Typography, {
    custom: "teaser-datetime"
  }, dateDistance))));
};

Teaser.propTypes = {
  content: PropTypes.shape(_defineProperty({
    image: PropTypes.object,
    name: PropTypes.string,
    path: PropTypes.string,
    subtitle: PropTypes.string,
    subject: PropTypes.string
  }, 'time-published', PropTypes.string)),
  domain: PropTypes.string,
  hasImageTop: PropTypes.bool,
  hasSubtitle: PropTypes.bool,
  hasDate: PropTypes.bool,
  hasSubjectFilled: PropTypes.bool,
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};
Teaser.defaultProps = {
  hasSubjectFilled: false,
  hasImageTop: false,
  hasSubtitle: false,
  hasDate: true
};

var RenderImageBackground = function RenderImageBackground(props) {
  var _props$data = props.data,
      imageUrl = _props$data.imageUrl,
      captionAndByline = _props$data.captionAndByline;
  var background = {
    backgroundImage: "url('".concat(imageUrl, "')")
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "image-box",
    style: background
  }, /*#__PURE__*/React.createElement("p", {
    className: "label"
  }, captionAndByline));
};

RenderImageBackground.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    captionAndByline: PropTypes.string
  })
};

var TeaserFeatured = function TeaserFeatured(props) {
  var _props$content = props.content,
      name = _props$content.name,
      subject = _props$content.subject,
      path = _props$content.path,
      image = _props$content.image;
  var _props$status = props.status,
      loading = _props$status.loading,
      error = _props$status.error;

  var getImageFromProps = function getImageFromProps() {
    if (loading || error) return /*#__PURE__*/React.createElement("div", {
      className: "image-box skeleton"
    });
    return /*#__PURE__*/React.createElement(RenderImageBackground, {
      data: image
    });
  };

  var teaserHasImage = image ? 'has-image' : 'no-image';
  return /*#__PURE__*/React.createElement("div", {
    className: "teaser-featured ".concat(teaserHasImage)
  }, image && /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Imagem da mat\xE9ria ".concat(name)
  }, getImageFromProps()), /*#__PURE__*/React.createElement("div", {
    className: "teaser-content"
  }, subject && /*#__PURE__*/React.createElement(Subject, {
    filled: true
  }, subject), /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Abrir mat\xE9ria ".concat(name)
  }, /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "title",
    size: "xl"
  }, name))));
};

TeaserFeatured.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    subject: PropTypes.string,
    path: PropTypes.string,
    image: PropTypes.object
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};

var Featured = function Featured(props) {
  var content = props.content,
      domain = props.domain,
      status = props.status;
  var items = content.items;

  if (items.length === 1) {
    return /*#__PURE__*/React.createElement(Block, {
      custom: "templates-featured one"
    }, /*#__PURE__*/React.createElement(Teaser, {
      content: items[0],
      domain: domain,
      hasSubjectFilled: true,
      hasSubtitle: true,
      status: status
    }));
  }

  if (items.length === 3) {
    var propsTemplate = {
      custom: 'templates-featured three',
      md: {
        align: 'row between'
      }
    };
    return /*#__PURE__*/React.createElement(Block, propsTemplate, /*#__PURE__*/React.createElement(Block, {
      custom: "block-left"
    }, /*#__PURE__*/React.createElement(Teaser, {
      content: items[0],
      domain: domain,
      hasSubjectFilled: true,
      status: status
    })), /*#__PURE__*/React.createElement(Block, {
      custom: "block-right"
    }, /*#__PURE__*/React.createElement(Teaser, {
      content: items[1],
      domain: domain,
      status: status
    }), /*#__PURE__*/React.createElement(Teaser, {
      content: items[2],
      domain: domain,
      status: status
    })));
  }

  return null;
};

Featured.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  status: PropTypes.object
};

var SectionTitle = function SectionTitle(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/React.createElement(Block, {
    custom: "section-title-block",
    mt: "2",
    mb: "4"
  }, /*#__PURE__*/React.createElement(Typography, {
    custom: "section-title"
  }, name));
};

SectionTitle.propTypes = {
  name: PropTypes.string
};

var GridNews = function GridNews(props) {
  var content = props.content,
      domain = props.domain,
      status = props.status;
  var items = content.items,
      title = content.title;
  var propsTemplate = {
    align: 'between',
    custom: 'templates-newsgrid',
    md: {
      align: 'row'
    }
  };

  if (items.length === 3) {
    propsTemplate.custom = 'templates-newsgrid three';
  }

  if (items.length === 4) {
    propsTemplate.custom = 'templates-newsgrid four';
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, title && title !== "" && /*#__PURE__*/React.createElement(SectionTitle, {
    name: title
  }), /*#__PURE__*/React.createElement(Block, propsTemplate, lodash.map(items, function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      key: key,
      content: item,
      domain: domain,
      hasImageTop: true,
      status: status
    });
  })));
};

GridNews.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  status: PropTypes.object
};

var MostReadItem = function MostReadItem(_ref) {
  var content = _ref.content,
      number = _ref.number;
  var name = content.name,
      path = content.path;
  var propsMostItem = {
    align: 'row left',
    custom: 'most-read-item',
    mb: '4'
  };
  var propsContent = {
    custom: 'most-read-content',
    mb: '3',
    ml: '2',
    mr: '2',
    mt: '3',
    w: '100p-3'
  };
  var propsNumber = {
    custom: 'most-read-number'
  };
  var propsTitle = {
    custom: 'most-read-title',
    ml: '3',
    w: '100p-8'
  };
  var position = number + 1;
  return /*#__PURE__*/React.createElement(Block, propsMostItem, /*#__PURE__*/React.createElement(Block, _extends({}, propsContent, {
    align: "row"
  }), /*#__PURE__*/React.createElement(Block, _extends({}, propsNumber, {
    align: "row center middle"
  }), position), /*#__PURE__*/React.createElement(Block, propsTitle, /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Abrir mat\xE9ria ".concat(name)
  }, /*#__PURE__*/React.createElement(Typography, {
    custom: "teaser-title"
  }, name)))));
};

MostReadItem.propTypes = {
  content: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string
  }),
  number: PropTypes.number
};

var MostRead = function MostRead(props) {
  var content = props.content,
      domain = props.domain,
      status = props.status;
  var propsTemplate = {
    custom: 'templates-most-read',
    lg: {
      align: 'row between'
    }
  };
  return /*#__PURE__*/React.createElement(Block, propsTemplate, lodash.map(content, function (item, key) {
    return /*#__PURE__*/React.createElement(MostReadItem, {
      content: item,
      domain: domain,
      key: key,
      status: status,
      number: key
    });
  }));
};

MostRead.propTypes = {
  content: PropTypes.array,
  domain: PropTypes.string,
  status: PropTypes.object
};

var Latest = function Latest(_ref) {
  var content = _ref.content,
      domain = _ref.domain,
      ReadMore = _ref.ReadMore,
      status = _ref.status;
  var propsContainer = {
    custom: 'templates-latest-news',
    align: 'col left',
    w: '100p',
    md: {
      align: 'row between'
    }
  };
  var propsPageLeft = {
    custom: 'page-left',
    mb: '4'
  };
  var propsPageRight = {
    custom: 'page-right',
    mb: '4'
  };
  var title = content.title;
  return /*#__PURE__*/React.createElement(Block, propsContainer, /*#__PURE__*/React.createElement(Block, propsPageLeft, /*#__PURE__*/React.createElement(SectionTitle, {
    name: title ? title : "ÚLTIMAS NOTÍCIAS"
  }), /*#__PURE__*/React.createElement(Block, {
    custom: "latest-news"
  }, lodash.map(content["items-latest"], function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      content: item,
      domain: domain,
      hasSubjectFilled: true,
      hasImageTop: true,
      status: status,
      key: key
    });
  })), ReadMore && /*#__PURE__*/React.createElement(ReadMore, null)), /*#__PURE__*/React.createElement(Block, propsPageRight, /*#__PURE__*/React.createElement(SectionTitle, {
    name: "MAIS LIDAS"
  }), /*#__PURE__*/React.createElement(MostRead, {
    content: content["items-mostread"],
    status: status
  })));
};

Latest.propTypes = {
  content: PropTypes.object,
  ReadMore: PropTypes.func,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

var ListNews = function ListNews(_ref) {
  var content = _ref.content,
      domain = _ref.domain,
      status = _ref.status;

  if (!content || content.length === 0) {
    return /*#__PURE__*/React.createElement("pre", null, "Items not found");
  }

  return /*#__PURE__*/React.createElement(Block, {
    custom: "list-news"
  }, lodash.map(content, function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      content: item,
      domain: domain,
      hasSubjectFilled: true,
      hasImageTop: true,
      status: status,
      key: key
    });
  }));
};

ListNews.propTypes = {
  content: PropTypes.array.isRequired,
  domain: PropTypes.string,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

var Subjects = function Subjects(props) {
  var content = props.content,
      domain = props.domain,
      status = props.status;
  var title = content.title;
  var propsTemplate = {
    custom: 'templates-subjects',
    lg: {
      align: 'row between'
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && title !== "" && /*#__PURE__*/React.createElement(SectionTitle, {
    name: title
  }), /*#__PURE__*/React.createElement(Block, propsTemplate, /*#__PURE__*/React.createElement(Block, {
    custom: "col left"
  }, lodash.map(content['items-left'], function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      content: item,
      domain: domain,
      key: key,
      status: status
    });
  })), /*#__PURE__*/React.createElement(Block, {
    custom: "col center"
  }, lodash.map(content['items-center'], function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      content: item,
      domain: domain,
      key: key,
      status: status
    });
  })), /*#__PURE__*/React.createElement(Block, {
    custom: "col right"
  }, lodash.map(content['items-right'], function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      content: item,
      domain: domain,
      key: key,
      status: status
    });
  }))));
};

Subjects.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  status: PropTypes.object
};

var Columnists = function Columnists(props) {
  var content = props.content,
      domain = props.domain,
      status = props.status;
  var title = content.title;
  var propsTemplate = {
    custom: 'templates-columnists',
    lg: {
      align: 'row between wrap'
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, title && title !== "" && /*#__PURE__*/React.createElement(SectionTitle, {
    name: title
  }), /*#__PURE__*/React.createElement(Block, propsTemplate, lodash.map(content['items'], function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      content: item,
      domain: domain,
      key: key,
      status: status
    });
  })));
};

Columnists.propTypes = {
  content: PropTypes.object,
  domain: PropTypes.string,
  status: PropTypes.object
};

exports.Columnists = Columnists;
exports.Featured = Featured;
exports.GridNews = GridNews;
exports.Latest = Latest;
exports.MostRead = MostRead;
exports.NewsList = ListNews;
exports.Subjects = Subjects;
