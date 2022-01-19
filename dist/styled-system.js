'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

function parseAlignX(align, alignx) {
    var styles = [];
    var alignItems = '';
    var justifyContent = '';
    if (align === 'column') {
        if (alignx === 'left')
            alignItems = 'flex-start';
        if (alignx === 'center')
            alignItems = 'center';
        if (alignx === 'right')
            alignItems = 'flex-end';
        if (alignx === 'evenly')
            justifyContent = 'space-evenly';
        if (alignx === 'between')
            justifyContent = 'space-between';
    }
    if (align === 'row') {
        if (alignx === 'left')
            alignItems = 'flex-start';
        if (alignx === 'center')
            justifyContent = 'center';
        if (alignx === 'right')
            justifyContent = 'flex-end';
        if (alignx === 'evenly')
            justifyContent = 'space-evenly';
        if (alignx === 'between')
            justifyContent = 'space-between';
    }
    alignItems !== '' && styles.push("align-items: ".concat(alignItems, ";"));
    justifyContent !== '' && styles.push("justify-content: ".concat(justifyContent, ";"));
    return styles.join('');
}
function parseAlignY(align, aligny) {
    var styles = [];
    var alignItems = '';
    var justifyContent = '';
    if (align === 'row') {
        if (aligny === 'top')
            alignItems = 'flex-start';
        if (aligny === 'middle')
            alignItems = 'center';
        if (aligny === 'bottom')
            alignItems = 'flex-end';
        if (aligny === 'evenly')
            justifyContent = 'space-evenly';
        if (aligny === 'between')
            justifyContent = 'space-between';
    }
    if (align === 'column') {
        if (aligny === 'top')
            justifyContent = 'flex-start';
        if (aligny === 'middle')
            justifyContent = 'center';
        if (aligny === 'bottom')
            justifyContent = 'flex-end';
        if (aligny === 'evenly')
            justifyContent = 'space-evenly';
        if (aligny === 'between')
            justifyContent = 'space-between';
    }
    alignItems !== '' && styles.push("align-items: ".concat(alignItems, ";"));
    justifyContent !== '' && styles.push("justify-content: ".concat(justifyContent, ";"));
    return styles.join('');
}
function parseAlign(align) {
    var styles = [];
    var flexDirection = '';
    if (align === 'row') {
        flexDirection = 'row';
    }
    if (align === 'column') {
        flexDirection = 'column';
    }
    flexDirection !== '' && styles.push("flex-direction: ".concat(flexDirection, ";"));
    return styles.join('');
}

function responsiveEngine(value, theme, parsers) {
    var stringParser = lodash.get(parsers, 'string', null);
    var numberParser = lodash.get(parsers, 'number', null);
    var queries = lodash.get(theme, 'queries', {});
    var css = [];
    function generateNewCssValue(value) {
        if (typeof value === 'string')
            return stringParser(value);
        if (typeof value === 'number')
            return numberParser(value);
    }
    function generateNewCss(value, querie) {
        return "\n      @media(min-width: ".concat(querie, ") {\n        ").concat(typeof value === 'string' ? stringParser(value) : '', "\n        ").concat(typeof value === 'number' ? numberParser(value) : '', "\n      }\n    ");
    }
    if (value.length == 2) {
        css.push(generateNewCssValue(value[0]), generateNewCss(value[1], queries.lg));
    }
    if (value.length == 3) {
        css.push(generateNewCssValue(value[0]), generateNewCss(value[1], queries.md), generateNewCss(value[2], queries.lg));
    }
    return css.join('').replace(/(\r\n|\n|\r)/gm, '').replace(/ /g, '');
}
function generateNewMediaQuerie(css, querie) {
    if (!css || css === '')
        return '';
    return "@media(min-width:".concat(querie, "){").concat(css, "}");
}

function alignResponsive(align, alignx, aligny, theme) {
    var queries = lodash.get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (lodash.isArray(align) && align.length === 2) {
        mobileStyles.push(parseAlign(align[0]));
        desktopStyles.push(parseAlign(align[1]));
    }
    if (lodash.isArray(align) && align.length === 3) {
        mobileStyles.push(parseAlign(align[0]));
        tabletStyles.push(parseAlign(align[1]));
        desktopStyles.push(parseAlign(align[2]));
    }
    if (lodash.isArray(alignx) && alignx.length === 2) {
        mobileStyles.push(parseAlignX(align[0], alignx[0]));
        desktopStyles.push(parseAlignX(align[1], alignx[1]));
    }
    if (lodash.isArray(alignx) && alignx.length === 3) {
        mobileStyles.push(parseAlignX(align[0], alignx[0]));
        tabletStyles.push(parseAlignX(align[1], alignx[1]));
        desktopStyles.push(parseAlignX(align[2], alignx[2]));
    }
    if (lodash.isArray(aligny) && aligny.length === 2) {
        mobileStyles.push(parseAlignY(align[0], aligny[0]));
        desktopStyles.push(parseAlignY(align[1], aligny[1]));
    }
    if (lodash.isArray(aligny) && aligny.length === 3) {
        mobileStyles.push(parseAlignY(align[0], aligny[0]));
        tabletStyles.push(parseAlignY(align[1], aligny[1]));
        desktopStyles.push(parseAlignY(align[2], aligny[2]));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | align flex
 * @param props Expect an Object containing props from component that is invoking this function
 * align: 'row' | 'column'
 * alignx: 'left' | 'center' | 'right' | 'evenly' | 'between'
 * aligny: 'top' | 'middle' | 'bottom' | 'evenly' | 'between'
 * @returns a string with CSS syntax
 */
function align(props) {
    if (!props)
        return '';
    var align = props.align, alignx = props.alignx, aligny = props.aligny, theme = props.theme;
    var styles = [];
    styles.push('display: flex;');
    styles.push(typeof align === 'string' ? parseAlign(align) : '', typeof alignx === 'string' ? parseAlignX(align, alignx) : '', typeof aligny === 'string' ? parseAlignY(align, aligny) : '');
    styles.push(alignResponsive(align, alignx, aligny, theme));
    return styles.join('');
}

/**
 * Prensa | Border Styled Function
 * @param {Object} props Expects props from a React Styled Component
 * @returns String with processed CSS from props input.
 */

function border(props) {
  // TODO: transform to typescript
  // export function border(props: BorderStyledFunction) {
  const {
    theme = {},
    bt = '',
    br = '',
    bb = '',
    bl = '',
    // bx = '',
    // by = '',
    b = '',
    borderColor = '',
    borderStyle = 'solid',
    radius
  } = props;
  const colors = lodash.get(theme, 'colors', {});
  const radius_options = lodash.get(theme, 'radius');
  const selectedColor = lodash.get(colors, borderColor);
  let object = [];

  if (bt) {
    object.push(`border-top-color: ${selectedColor};`);
    object.push(`border-top-style: ${borderStyle};`);
    object.push(`border-top-width: ${bt};`);
  }

  if (br) {
    object.push(`border-right-color: ${selectedColor};`);
    object.push(`border-right-style: ${borderStyle};`);
    object.push(`border-right-width: ${br};`);
  }

  if (bb) {
    object.push(`border-bottom-color: ${selectedColor};`);
    object.push(`border-bottom-style: ${borderStyle};`);
    object.push(`border-bottom-width: ${bb};`);
  }

  if (bl) {
    object.push(`border-left-color: ${selectedColor};`);
    object.push(`border-left-style: ${borderStyle};`);
    object.push(`border-left-width: ${bl};`);
  }

  if (b) {
    object.push(`border-color: ${selectedColor};`);
    object.push(`border-style: ${borderStyle};`);
    object.push(`border-width: ${b};`);
  }

  if (radius) {
    object.push(`border-radius: ${radius_options[radius]}`);
  }

  return object.join('');
}

/**
 * Prensa Styled System | boxShadow
 * @param props Expect a string matching box-shadow css requirements
 * boxShadow: string;
 * @returns a string with CSS syntax
 */
function boxShadow({
  boxShadow
}) {
  if (!boxShadow) return '';
  return `box-shadow: ${boxShadow};`;
}

const dimensions = ({
  theme = {},
  $width = '',
  maxWidth = '',
  minWidth = ''
}) => {
  const unit = lodash.get(theme, 'factors.dimensions', 10);
  let object = [];

  if (maxWidth) {
    if (typeof maxWidth === 'string') {
      object.push(`max-width: ${maxWidth};`);
    } else {
      object.push(`max-width: ${maxWidth * unit}px;`);
    }
  }

  if (minWidth) {
    if (typeof minWidth === 'string') {
      object.push(`min-width: ${minWidth};`);
    } else {
      object.push(`min-width: ${minWidth * unit}px;`);
    }
  }

  if ($width) {
    if (typeof $width === 'string') {
      object.push(`width: ${$width};`);
    } else {
      object.push(`width: ${$width * unit}px;`);
    }
  }

  return object.join('');
};

function parseStringHeight(value) {
    return "height: ".concat(value, ";");
}
function parseNumberHeight(value, factor) {
    return "height: ".concat(value * factor, ";");
}

/**
 * Prensa Styled System | height
 * @param props Expect an Object containing props from component that is invoking this function
 * $height: string | number | Array<string | number>;
 * @returns a string with CSS syntax
 */
function height(props) {
    var value = lodash.get(props, '$height', undefined);
    var theme = lodash.get(props, 'theme', undefined);
    var factor = lodash.get(theme, 'factors.dimensions', undefined);
    if (typeof value === 'string') {
        return parseStringHeight(value);
    }
    if (typeof value === 'number') {
        return parseNumberHeight(value, factor);
    }
    if (lodash.isArray(value)) {
        return responsiveEngine(value, theme, {
            string: parseStringHeight,
            number: parseNumberHeight
        });
    }
}

function generateMT(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-top: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-top: ".concat(value * factor, "px;");
}
function generateMR(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-right: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-right: ".concat(value * factor, "px;");
}
function generateMB(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-bottom: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-bottom: ".concat(value * factor, "px;");
}
function generateML(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "margin-left: ".concat(value, ";");
    if (typeof value === 'number')
        return "margin-left: ".concat(value * factor, "px;");
}
function generateMX(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    margin-left: ".concat(value, ";\n    margin-right: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    margin-left: ".concat(value * factor, "px;\n    margin-right: ").concat(value * factor, "px;\n  ");
}
function generateMY(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    margin-top: ".concat(value, ";\n    margin-bottom: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    margin-top: ".concat(value * factor, "px;\n    margin-bottom: ").concat(value * factor, "px;\n  ");
}
function generateM(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    margin-top: ".concat(value, ";\n    margin-right: ").concat(value, ";\n    margin-bottom: ").concat(value, ";\n    margin-left: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    margin-top: ".concat(value * factor, "px;\n    margin-right: ").concat(value * factor, "px;\n    margin-bottom: ").concat(value * factor, "px;\n    margin-left: ").concat(value * factor, "px;\n  ");
}

function marginResponsive(mt, mr, mb, ml, mx, my, m, theme) {
    var factor = lodash.get(theme, 'factors.margin', 1);
    var queries = lodash.get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (lodash.isArray(mt) && mt.length === 2) {
        mobileStyles.push(generateMT(mt[0], factor));
        desktopStyles.push(generateMT(mt[1], factor));
    }
    if (lodash.isArray(mt) && mt.length === 3) {
        mobileStyles.push(generateMT(mt[0], factor));
        tabletStyles.push(generateMT(mt[1], factor));
        desktopStyles.push(generateMT(mt[2], factor));
    }
    if (lodash.isArray(mr) && mr.length === 2) {
        mobileStyles.push(generateMR(mr[0], factor));
        desktopStyles.push(generateMR(mr[1], factor));
    }
    if (lodash.isArray(mr) && mr.length === 3) {
        mobileStyles.push(generateMR(mr[0], factor));
        tabletStyles.push(generateMR(mr[1], factor));
        desktopStyles.push(generateMR(mr[2], factor));
    }
    if (lodash.isArray(mb) && mb.length === 2) {
        mobileStyles.push(generateMB(mb[0], factor));
        desktopStyles.push(generateMB(mb[1], factor));
    }
    if (lodash.isArray(mb) && mb.length === 3) {
        mobileStyles.push(generateMB(mb[0], factor));
        tabletStyles.push(generateMB(mb[1], factor));
        desktopStyles.push(generateMB(mb[2], factor));
    }
    if (lodash.isArray(ml) && ml.length === 2) {
        mobileStyles.push(generateML(ml[0], factor));
        desktopStyles.push(generateML(ml[1], factor));
    }
    if (lodash.isArray(ml) && ml.length === 3) {
        mobileStyles.push(generateML(ml[0], factor));
        tabletStyles.push(generateML(ml[1], factor));
        desktopStyles.push(generateML(ml[2], factor));
    }
    if (lodash.isArray(mx) && mx.length === 2) {
        mobileStyles.push(generateMX(mx[0], factor));
        desktopStyles.push(generateMX(mx[1], factor));
    }
    if (lodash.isArray(mx) && mx.length === 3) {
        mobileStyles.push(generateMX(mx[0], factor));
        tabletStyles.push(generateMX(mx[1], factor));
        desktopStyles.push(generateMX(mx[2], factor));
    }
    if (lodash.isArray(my) && my.length === 2) {
        mobileStyles.push(generateMY(my[0], factor));
        desktopStyles.push(generateMY(my[1], factor));
    }
    if (lodash.isArray(my) && my.length === 3) {
        mobileStyles.push(generateMY(my[0], factor));
        tabletStyles.push(generateMY(my[1], factor));
        desktopStyles.push(generateMY(my[2], factor));
    }
    if (lodash.isArray(m) && m.length === 2) {
        mobileStyles.push(generateM(m[0], factor));
        desktopStyles.push(generateM(m[1], factor));
    }
    if (lodash.isArray(m) && m.length === 3) {
        mobileStyles.push(generateM(m[0], factor));
        tabletStyles.push(generateM(m[1], factor));
        desktopStyles.push(generateM(m[2], factor));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | margin
 * @param props Expect an Object containing props from component that is invoking this function
 * mt: string | number | Array<string|number>;
 * mr: string | number | Array<string|number>;
 * mb: string | number | Array<string|number>;
 * ml: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
function margin(props) {
    if (!props)
        return '';
    var mt = props.mt, mr = props.mr, mb = props.mb, ml = props.ml, mx = props.mx, my = props.my, m = props.m, theme = props.theme;
    var factor = theme.factors.margin;
    var styles = [];
    if (mt)
        styles.push(generateMT(mt, factor));
    if (mr)
        styles.push(generateMR(mr, factor));
    if (mb)
        styles.push(generateMB(mb, factor));
    if (ml)
        styles.push(generateML(ml, factor));
    if (mx)
        styles.push(generateMX(mx, factor));
    if (my)
        styles.push(generateMY(my, factor));
    if (m)
        styles.push(generateM(m, factor));
    styles.push(marginResponsive(mt, mr, mb, ml, mx, my, m, theme));
    return styles.join('');
}

function generatePT(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-top: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-top: ".concat(value * factor, "px;");
}
function generatePR(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-right: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-right: ".concat(value * factor, "px;");
}
function generatePB(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-bottom: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-bottom: ".concat(value * factor, "px;");
}
function generatePL(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "padding-left: ".concat(value, ";");
    if (typeof value === 'number')
        return "padding-left: ".concat(value * factor, "px;");
}
function generatePX(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    padding-left: ".concat(value, ";\n    padding-right: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    padding-left: ".concat(value * factor, "px;\n    padding-right: ").concat(value * factor, "px;\n  ");
}
function generatePY(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    padding-top: ".concat(value, ";\n    padding-bottom: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    padding-top: ".concat(value * factor, "px;\n    padding-bottom: ").concat(value * factor, "px;\n  ");
}
function generateP(value, factor) {
    if (!value)
        return '';
    if (typeof value === 'string')
        return "\n    padding-top: ".concat(value, ";\n    padding-right: ").concat(value, ";\n    padding-bottom: ").concat(value, ";\n    padding-left: ").concat(value, ";\n  ");
    if (typeof value === 'number')
        return "\n    padding-top: ".concat(value * factor, "px;\n    padding-right: ").concat(value * factor, "px;\n    padding-bottom: ").concat(value * factor, "px;\n    padding-left: ").concat(value * factor, "px;\n  ");
}

function paddingResponsive(pt, pr, pb, pl, px, py, p, theme) {
    var factor = lodash.get(theme, 'factors.padding', 1);
    var queries = lodash.get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (lodash.isArray(pt) && pt.length === 2) {
        mobileStyles.push(generatePT(pt[0], factor));
        desktopStyles.push(generatePT(pt[1], factor));
    }
    if (lodash.isArray(pt) && pt.length === 3) {
        mobileStyles.push(generatePT(pt[0], factor));
        tabletStyles.push(generatePT(pt[1], factor));
        desktopStyles.push(generatePT(pt[2], factor));
    }
    if (lodash.isArray(pr) && pr.length === 2) {
        mobileStyles.push(generatePR(pr[0], factor));
        desktopStyles.push(generatePR(pr[1], factor));
    }
    if (lodash.isArray(pr) && pr.length === 3) {
        mobileStyles.push(generatePR(pr[0], factor));
        tabletStyles.push(generatePR(pr[1], factor));
        desktopStyles.push(generatePR(pr[2], factor));
    }
    if (lodash.isArray(pb) && pb.length === 2) {
        mobileStyles.push(generatePB(pb[0], factor));
        desktopStyles.push(generatePB(pb[1], factor));
    }
    if (lodash.isArray(pb) && pb.length === 3) {
        mobileStyles.push(generatePB(pb[0], factor));
        tabletStyles.push(generatePB(pb[1], factor));
        desktopStyles.push(generatePB(pb[2], factor));
    }
    if (lodash.isArray(pl) && pl.length === 2) {
        mobileStyles.push(generatePL(pl[0], factor));
        desktopStyles.push(generatePL(pl[1], factor));
    }
    if (lodash.isArray(pl) && pl.length === 3) {
        mobileStyles.push(generatePL(pl[0], factor));
        tabletStyles.push(generatePL(pl[1], factor));
        desktopStyles.push(generatePL(pl[2], factor));
    }
    if (lodash.isArray(px) && px.length === 2) {
        mobileStyles.push(generatePX(px[0], factor));
        desktopStyles.push(generatePX(px[1], factor));
    }
    if (lodash.isArray(px) && px.length === 3) {
        mobileStyles.push(generatePX(px[0], factor));
        tabletStyles.push(generatePX(px[1], factor));
        desktopStyles.push(generatePX(px[2], factor));
    }
    if (lodash.isArray(py) && py.length === 2) {
        mobileStyles.push(generatePY(py[0], factor));
        desktopStyles.push(generatePY(py[1], factor));
    }
    if (lodash.isArray(py) && py.length === 3) {
        mobileStyles.push(generatePY(py[0], factor));
        tabletStyles.push(generatePY(py[1], factor));
        desktopStyles.push(generatePY(py[2], factor));
    }
    if (lodash.isArray(p) && p.length === 2) {
        mobileStyles.push(generateP(p[0], factor));
        desktopStyles.push(generateP(p[1], factor));
    }
    if (lodash.isArray(p) && p.length === 3) {
        mobileStyles.push(generateP(p[0], factor));
        tabletStyles.push(generateP(p[1], factor));
        desktopStyles.push(generateP(p[2], factor));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | padding
 * @param props Expect an Object containing props from component that is invoking this function
 * pt: string | number | Array<string|number>;
 * pr: string | number | Array<string|number>;
 * pb: string | number | Array<string|number>;
 * pl: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
function padding(props) {
    if (!props)
        return '';
    var pt = props.pt, pr = props.pr, pb = props.pb, pl = props.pl, px = props.px, py = props.py, p = props.p, theme = props.theme;
    var factor = theme.factors.margin;
    var styles = [];
    if (pt)
        styles.push(generatePT(pt, factor));
    if (pr)
        styles.push(generatePR(pr, factor));
    if (pb)
        styles.push(generatePB(pb, factor));
    if (pl)
        styles.push(generatePL(pl, factor));
    if (px)
        styles.push(generatePX(px, factor));
    if (py)
        styles.push(generatePY(py, factor));
    if (p)
        styles.push(generateP(p, factor));
    styles.push(paddingResponsive(pt, pr, pb, pl, px, py, p, theme));
    return styles.join('');
}

function generateWidth(value, factor) {
    if (typeof value === 'string')
        return "width: ".concat(value, ";");
    if (typeof value === 'number')
        return "width: ".concat(value * factor, ";");
}

function widthResponsive(width, theme) {
    var factor = lodash.get(theme, 'factors.dimensions', 1);
    var queries = lodash.get(theme, 'queries', {});
    var styles = [];
    var mobileStyles = [];
    var tabletStyles = [];
    var desktopStyles = [];
    if (lodash.isArray(width) && width.length === 2) {
        mobileStyles.push(generateWidth(width[0], factor));
        desktopStyles.push(generateWidth(width[1], factor));
    }
    if (lodash.isArray(width) && width.length === 3) {
        mobileStyles.push(generateWidth(width[0], factor));
        tabletStyles.push(generateWidth(width[1], factor));
        desktopStyles.push(generateWidth(width[2], factor));
    }
    styles.push(mobileStyles.join(''));
    styles.push(generateNewMediaQuerie(tabletStyles.join(''), queries.md));
    styles.push(generateNewMediaQuerie(desktopStyles.join(''), queries.lg));
    return styles.join('');
}

/**
 * Prensa Styled System | width
 * @param props Expect an Object containing props from component that is invoking this function
 * $width: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
function width(props) {
    if (!props)
        return '';
    var $width = props.$width, theme = props.theme;
    var factor = theme.factors.dimensions;
    var styles = [];
    if ($width)
        styles.push(generateWidth($width, factor));
    styles.push(widthResponsive($width, theme));
    return styles.join('');
}

const getColor = ({
  theme = {},
  $color = ''
}) => {
  const value = lodash.get(theme.colors, $color, '');
  return value;
};

exports.align = align;
exports.border = border;
exports.boxShadow = boxShadow;
exports.dimensions = dimensions;
exports.getColor = getColor;
exports.height = height;
exports.margin = margin;
exports.padding = padding;
exports.width = width;
//# sourceMappingURL=styled-system.js.map
