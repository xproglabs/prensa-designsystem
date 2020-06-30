'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var classnames = _interopDefault(require('classnames'));
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
  p: '0'
};

var Article = function Article() {
  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-article"
  }, "Article");
};
/* required props */


Article.propTypes = {
  content: PropTypes.object
};
Article.defaultProps = {
  content: {}
};

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

var Grid = function Grid(props) {
  var xs = props.xs,
      sm = props.sm,
      md = props.md,
      columns = props.columns;

  var handlexs = function handlexs() {
    switch (xs) {
      case 25:
        return 'xs-25';

      case 33:
        return 'xs-33';

      case 50:
        return 'xs-50';

      case 75:
        return 'xs-75';

      case 100:
      default:
        return 'xs-100';
    }
  };

  var handlesm = function handlesm() {
    switch (sm) {
      case 25:
        return 'sm-25';

      case 33:
        return 'sm-33';

      case 50:
        return 'sm-50';

      case 75:
        return 'sm-75';

      case 100:
      default:
        return 'sm-100';
    }
  };

  var handlemd = function handlemd() {
    switch (md) {
      case 25:
        return 'md-25';

      case 33:
        return 'md-33';

      case 50:
        return 'md-50';

      case 75:
        return 'md-75';

      case 100:
      default:
        return 'md-100';
    }
  };

  var getColumns = function getColumns() {
    switch (columns) {
      case 1:
        return 'xp-1-col';

      case 2:
        return 'xp-2-col';

      case 3:
        return 'xp-3-col';

      case 4:
        return 'xp-4-col';

      case 5:
        return 'xp-5-col';

      case 6:
        return 'xp-6-col';

      case 7:
        return 'xp-7-col';

      case 8:
        return 'xp-8-col';

      case 9:
        return 'xp-9-col';

      case 10:
        return 'xp-10-col';

      case 11:
        return 'xp-11-col';

      case 12:
        return 'xp-12-col';

      default:
        return null;
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classnames(getColumns(), handlexs(), handlesm(), handlemd())
  }, props.children);
};

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xs: PropTypes.oneOf([25, 33, 50, 75, 100]),
  sm: PropTypes.oneOf([25, 33, 50, 75, 100]),
  md: PropTypes.oneOf([25, 33, 50, 75, 100])
};

var SideMenu = function SideMenu(_ref) {
  var children = _ref.children,
      functions = _ref.functions,
      status = _ref.status;
  var menuIsOpen = status.opened ? 'opened' : 'closed';
  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-menu-modal ".concat(menuIsOpen),
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
  }, children && children));
};

SideMenu.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
SideMenu.defaultProps = {
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

var SideMenuItems = function SideMenuItems(_ref) {
  var content = _ref.content,
      functions = _ref.functions;

  var SubItem = function SubItem(_ref2) {
    var item = _ref2.item;
    return /*#__PURE__*/React.createElement(Block, {
      custom: "subitem",
      functions: {
        handleClick: function handleClick() {
          return functions.onMenuItem(item.path);
        }
      },
      mt: "xs"
    }, /*#__PURE__*/React.createElement("a", {
      href: item.path
    }, item.name));
  };

  SubItem.propTypes = {
    item: PropTypes.object
  };

  var Item = function Item(_ref3) {
    var item = _ref3.item;
    return /*#__PURE__*/React.createElement(Block, {
      custom: "listitem",
      mt: "md"
    }, /*#__PURE__*/React.createElement(Block, {
      custom: "item",
      functions: {
        handleClick: function handleClick() {
          return functions.onMenuItem(item.path);
        }
      },
      mb: "md",
      mt: "md"
    }, /*#__PURE__*/React.createElement("a", {
      href: item.path
    }, item.name)), /*#__PURE__*/React.createElement(Block, {
      custom: "subitems"
    }, lodash.map(item.subitems, function (item, key) {
      return /*#__PURE__*/React.createElement(SubItem, {
        item: item,
        key: key
      });
    })));
  };

  Item.propTypes = {
    item: PropTypes.object
  };
  return /*#__PURE__*/React.createElement(Block, {
    custom: 'xp-menu-left-items'
  }, lodash.map(content.items, function (item, key) {
    return /*#__PURE__*/React.createElement(Item, {
      item: item,
      key: key
    });
  }));
};
/* required props */


SideMenuItems.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onMenuItem: PropTypes.func
  })
};
SideMenuItems.defaultProps = {
  content: {}
};

var Topbar = function Topbar(_ref) {
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
      handleClick: functions.handleMenuClick
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

LeftMenuIcon.propTypes = {
  functions: PropTypes.shape({
    handleMenuClick: PropTypes.func
  })
};
Topbar.propTypes = {
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    handleMenuClick: PropTypes.func
  })
};
Topbar.defaultProps = {
  content: {
    LeftContent: LeftMenuIcon,
    CenterContent: CenterContentMockup,
    RightContent: RightContentMockup
  }
};

var List = function List(_ref) {
  var content = _ref.content;

  var Item = function Item(_ref2) {
    var item = _ref2.item;
    return /*#__PURE__*/React.createElement(Block, {
      custom: "item",
      mt: "xs"
    }, /*#__PURE__*/React.createElement("a", {
      href: item.path
    }, item.name));
  };

  Item.propTypes = {
    item: PropTypes.object
  };

  if (!content.items || content.items.length === 0) {
    return /*#__PURE__*/React.createElement(Block, {
      custom: "xp-news-list"
    }, /*#__PURE__*/React.createElement("pre", null, "Items not found"));
  }

  return /*#__PURE__*/React.createElement(Block, {
    custom: "xp-news-list"
  }, lodash.map(content.items, function (item, key) {
    return /*#__PURE__*/React.createElement(Item, {
      item: item,
      key: key
    });
  }));
};
/* required props */


List.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
List.defaultProps = {
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

var Typography = function Typography(props) {
  var _classnames;

  var children = props.children,
      custom = props.custom,
      size = props.size,
      title = props.title,
      subtitle = props.subtitle,
      paragraph = props.paragraph,
      subject = props.subject;
  var classes = classnames((_classnames = {
    'xp-typography-root': true
  }, _defineProperty(_classnames, "xp-title-".concat(size), title), _defineProperty(_classnames, "xp-subtitle-".concat(size), subtitle), _defineProperty(_classnames, "xp-paragraph-".concat(size), paragraph), _defineProperty(_classnames, "xp-subject-".concat(size), subject), _defineProperty(_classnames, "".concat(custom), custom), _classnames));
  if (title) return /*#__PURE__*/React.createElement("h1", {
    className: classes
  }, children);
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, children);
};

Typography.defaultProps = {
  weight: 'regular',
  size: 'sm'
};
Typography.propTypes = {
  /**
   * Texto que será inserido na tela
   */
  children: PropTypes.string.isRequired,

  /**
   * Permite a passagem de class customizado para o componente
   */
  custom: PropTypes.string,

  /**
   * Modifica o tamanho da fonte de acordo com as guias do design
   */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,

  /**
   * Ativa o layout de título no componente
   */
  title: PropTypes.bool,

  /**
   * Ativa o layout de subtítulo no componente
   */
  subtitle: PropTypes.bool,

  /**
   * Ativa o layout de parágrafo no componente
   */
  paragraph: PropTypes.bool,
  subject: PropTypes.bool
};

var Subject = function Subject(props) {
  var children = props.children,
      custom = props.custom,
      filled = props.filled;
  if (!children) return null;
  var classes = classnames(_defineProperty({
    'xp-subject-root': true,
    'filled': filled
  }, "".concat(custom), custom));
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement(Typography, {
    subject: true
  }, children));
};

Subject.propTypes = {
  children: PropTypes.string.isRequired,
  custom: PropTypes.string,
  filled: PropTypes.bool // size: PropTypes.oneOf([
  //   'sm', 'md', 'lg'
  // ])

};

exports.Article = Article;
exports.Block = Block;
exports.Button = Button;
exports.Form = index;
exports.Grid = Grid;
exports.NewsList = List;
exports.Panel = Panel;
exports.SideMenu = SideMenu;
exports.SideMenuItems = SideMenuItems;
exports.Subject = Subject;
exports.Topbar = Topbar;
exports.Typography = Typography;
