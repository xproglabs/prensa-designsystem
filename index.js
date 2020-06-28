'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var classnames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

var Button = function Button(props) {
  var style = classnames({
    'button': true,
    'primary': props.style === 'primary' && !props.disabled,
    'secondary': props.style === 'secondary' && !props.disabled,
    'tertiary': props.style === 'tertiary' && !props.disabled,
    'disabled': props.disabled
  });
  return /*#__PURE__*/React.createElement("button", {
    className: style,
    onClick: props.disabled ? null : props.onClick
  }, props.children);
};

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};
Button.defaultProps = {
  style: 'primary'
};

var Input = function Input(_ref) {
  var autoFocus = _ref.autoFocus,
      disabled = _ref.disabled,
      invalid = _ref.invalid,
      label = _ref.label,
      onEnter = _ref.onEnter,
      setValue = _ref.setValue,
      type = _ref.type,
      value = _ref.value,
      warning = _ref.warning;

  var KeyDown = function KeyDown(_ref2) {
    var key = _ref2.key;
    return key === 'Enter' && onEnter && onEnter();
  };

  var Label = function Label() {
    return /*#__PURE__*/React.createElement("p", {
      className: 'label'
    }, label && label);
  };

  var Warning = function Warning() {
    return /*#__PURE__*/React.createElement("p", {
      className: 'warning'
    }, warning && invalid ? warning : ' ');
  };

  var props = {
    autoFocus: autoFocus,
    defaultValue: value,
    disabled: disabled,
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return setValue(target.value);
    },
    onKeyDown: KeyDown,
    type: type
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "form-field ".concat(invalid ? 'invalid' : '', " ").concat(type)
  }, /*#__PURE__*/React.createElement(Label, null), type === 'textarea' && /*#__PURE__*/React.createElement("textarea", props), type !== 'textarea' && /*#__PURE__*/React.createElement("input", props), /*#__PURE__*/React.createElement(Warning, null));
};

Input.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  invalid: PropTypes.bool,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  warning: PropTypes.string
};
Input.defaultProps = {
  autofocus: false,
  disabled: 'disabled',
  invalid: false,
  type: 'text'
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

var Block = function Block(props) {
  var _classnames;

  var alignBetween = props.alignBetween,
      alignBottom = props.alignBottom,
      alignCenter = props.alignCenter,
      alignEvenly = props.alignEvenly,
      alignLeft = props.alignLeft,
      alignMiddle = props.alignMiddle,
      alignRight = props.alignRight,
      alignTop = props.alignTop,
      bgColor = props.bgColor,
      custom = props.custom,
      functions = props.functions,
      fColor = props.fColor,
      fitH = props.fitH,
      fitW = props.fitW,
      m = props.m,
      mb = props.mb,
      ml = props.ml,
      mr = props.mr,
      mt = props.mt,
      p = props.p,
      pb = props.pb,
      pl = props.pl,
      pr = props.pr,
      pt = props.pt,
      row = props.row,
      height = props.height,
      width = props.width,
      style = props.style;

  var getStyle = function getStyle() {
    switch (style) {
      case '3-col':
        return 'block-three-col';

      case '4-col':
        return 'block-four-col';

      default:
        return '';
    }
  };

  var classes = classnames((_classnames = {
    'ds-block': true,
    'fx-align-between': !row && alignBetween,
    'fx-align-bottom': !row && alignBottom,
    'fx-align-center': !row && alignCenter,
    'fx-align-evenly': !row && alignEvenly,
    'fx-align-left': !row && alignLeft,
    'fx-align-middle': !row && alignMiddle,
    'fx-align-right': !row && alignRight,
    'fx-align-top': !row && alignTop,
    'fy-align-between': row && alignBetween,
    'fy-align-bottom': row && alignBottom,
    'fy-align-center': row && alignCenter,
    'fy-align-evenly': row && alignEvenly,
    'fy-align-left': row && alignLeft,
    'fy-align-middle': row && alignMiddle,
    'fy-align-right': row && alignRight,
    'fy-align-top': row && alignTop,
    'fx-dir-col': !row,
    'fx-dir-row': row,
    'fx-fit-h': fitH,
    'fx-fit-w': fitW
  }, _defineProperty(_classnames, "xp-bg-".concat(bgColor), bgColor), _defineProperty(_classnames, "xp-f-".concat(fColor), fColor), _defineProperty(_classnames, "xp-h-".concat(height), height), _defineProperty(_classnames, "xp-m-".concat(m), m), _defineProperty(_classnames, "xp-mb-".concat(mb), mb), _defineProperty(_classnames, "xp-ml-".concat(ml), ml), _defineProperty(_classnames, "xp-mr-".concat(mr), mr), _defineProperty(_classnames, "xp-mt-".concat(mt), mt), _defineProperty(_classnames, "xp-p-".concat(p), p), _defineProperty(_classnames, "xp-pb-".concat(pb), pb), _defineProperty(_classnames, "xp-pl-".concat(pl), pl), _defineProperty(_classnames, "xp-pr-".concat(pr), pr), _defineProperty(_classnames, "xp-pt-".concat(pt), pt), _defineProperty(_classnames, "xp-w-".concat(width), width), _defineProperty(_classnames, "".concat(custom), custom), _classnames));
  var handleClick = functions.handleClick;
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(classes, getStyle()),
    onClick: handleClick && handleClick
  }, props.children && props.children);
};

Block.propTypes = {
  alignBetween: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignEvenly: PropTypes.bool,
  alignLeft: PropTypes.bool,
  alignMiddle: PropTypes.bool,
  alignRight: PropTypes.bool,
  alignTop: PropTypes.bool,
  bgColor: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.node]),
  custom: PropTypes.string,
  functions: PropTypes.object,
  fColor: PropTypes.string,
  fitH: PropTypes.bool,
  fitW: PropTypes.bool,
  m: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  mb: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  ml: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  mr: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  mt: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  p: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  pb: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  pl: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  pr: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  pt: PropTypes.oneOf(['0', 'xs', 'sm', 'md', 'lg', 'xl']),
  row: PropTypes.bool,
  height: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'full']),
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'full']),
  style: PropTypes.oneOf(['3-col', '4-col'])
};
Block.defaultProps = {
  functions: {},
  p: 'md'
};

var MainTopbar = function MainTopbar(_ref) {
  var content = _ref.content,
      functions = _ref.functions;
  var LeftContent = content.LeftContent,
      CenterContent = content.CenterContent,
      RightContent = content.RightContent;
  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-topbar",
    alignBetween: true,
    alignMiddle: true,
    bgColor: "primary-1",
    p: "0",
    row: true,
    width: "full"
  }, /*#__PURE__*/React.createElement(Block, null, LeftContent && /*#__PURE__*/React.createElement(LeftContent, {
    functions: functions
  })), /*#__PURE__*/React.createElement(Block, null, CenterContent && /*#__PURE__*/React.createElement(CenterContent, null)), /*#__PURE__*/React.createElement(Block, null, RightContent && /*#__PURE__*/React.createElement(RightContent, null)));
};

var LeftMenuIcon = function LeftMenuIcon(_ref2) {
  var functions = _ref2.functions;
  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-menu-left-icon",
    bgColor: "neutral-6",
    functions: {
      handleClick: functions.onLeftIcon
    },
    p: "sm"
  }, "ICON");
};

var CenterContentMockup = function CenterContentMockup() {
  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-mockup",
    bgColor: "neutral-4",
    p: "sm"
  }, "CenterContent");
};

var RightContentMockup = function RightContentMockup() {
  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-mockup",
    bgColor: "neutral-6",
    p: "sm"
  }, "RightContent");
};
/* required props */


LeftMenuIcon.propTypes = {
  functions: PropTypes.shape({
    onLeftIcon: PropTypes.func
  })
};
MainTopbar.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onLeftIcon: PropTypes.func
  })
};
MainTopbar.defaultProps = {
  content: {
    LeftContent: LeftMenuIcon,
    CenterContent: CenterContentMockup,
    RightContent: RightContentMockup
  }
};

var MenuLeft = function MenuLeft(_ref) {
  var functions = _ref.functions,
      status = _ref.status;
  var menuModalClasses = status.opened ? 'opened' : 'closed';
  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-menu-modal ".concat(menuModalClasses),
    p: "0"
  }, /*#__PURE__*/React.createElement(Block, {
    custom: "xp-menu-opacity",
    functions: {
      handleClick: functions.onCloseModal
    },
    p: "0"
  }), /*#__PURE__*/React.createElement(Block, {
    custom: "xp-menu-left",
    bgColor: "white",
    p: "0"
  }, "LeftContent===!284397q"));
};
/* required props */


MenuLeft.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
MenuLeft.defaultProps = {
  content: {},
  functions: {
    onCloseModal: function onCloseModal() {
      return null;
    }
  },
  status: {
    opened: false
  }
};

var index$1 = {
  MenuLeft: MenuLeft,
  MainTopbar: MainTopbar
};

var Panel = function Panel(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return /*#__PURE__*/React.createElement("div", {
    className: "panel-body ".concat(style ? style : '')
  }, children && children);
};

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  style: PropTypes.string
};

exports.Button = Button;
exports.Form = index;
exports.Icon = Icon;
exports.Navigator = index$1;
exports.Panel = Panel;
