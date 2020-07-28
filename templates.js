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
  var value = _ref.value;
  if (!value || !value['image-contentId']) return false;
  var contentid = value['image-contentId'];
  var width = 1000;
  var derivative = '2x1';
  var imagePath = "/image/policy:".concat(contentid, "/image.jpg?f=").concat(derivative, "&w=").concat(width);
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

var Teaser = function Teaser(_ref) {
  var content = _ref.content,
      hasImageTop = _ref.hasImageTop,
      hasSubjectFilled = _ref.hasSubjectFilled,
      hasSubtitle = _ref.hasSubtitle,
      status = _ref.status;
  var image = content.image,
      name = content.name,
      path = content.path,
      subject = content.subject,
      subtitle = content.subtitle;
  var loading = status.loading,
      error = status.error;
  var propsTeaser = {
    align: 'col',
    custom: 'teaser-default',
    mb: '4',
    md: {
      align: hasImageTop ? 'col' : 'row left'
    }
  };
  var propsImage = {
    align: 'row',
    custom: "teaser-image ".concat(hasImageTop ? 'image-top' : 'image-left')
  };
  var propsContent = {
    custom: 'teaser-content',
    mt: '3',
    mb: '3',
    ml: '2',
    mr: '2',
    w: '100p-4'
  };
  var propsDate = {
    custom: 'teaser-date',
    mt: '4',
    w: '100p'
  };
  var propsSubject = {
    custom: 'teaser-subject'
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
      value: image
    })));
  };

  return /*#__PURE__*/React.createElement(Block, propsTeaser, /*#__PURE__*/React.createElement(TeaserImage, null), /*#__PURE__*/React.createElement(Block, propsContent, subject && /*#__PURE__*/React.createElement(Block, propsSubject, /*#__PURE__*/React.createElement(Subject, {
    filled: hasSubjectFilled
  }, subject)), /*#__PURE__*/React.createElement(Block, propsTitle, /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: path,
    "aria-label": "Abrir mat\xE9ria ".concat(name)
  }, /*#__PURE__*/React.createElement(Typography, {
    custom: "teaser-title"
  }, name))), subtitle && hasSubtitle && /*#__PURE__*/React.createElement(Typography, {
    custom: "teaser-subtitle"
  }, subtitle), content['time-published'] && /*#__PURE__*/React.createElement(Block, propsDate, /*#__PURE__*/React.createElement(Typography, {
    custom: "teaser-datetime"
  }, content['time-published']))));
};

Teaser.propTypes = {
  content: PropTypes.shape(_defineProperty({
    image: PropTypes.object,
    name: PropTypes.string,
    path: PropTypes.string,
    subtitle: PropTypes.string,
    subject: PropTypes.string
  }, 'time-published', PropTypes.string)),
  hasImageTop: PropTypes.bool,
  hasSubtitle: PropTypes.bool,
  hasSubjectFilled: PropTypes.bool,
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};
Teaser.defaultProps = {
  hasImageTop: false,
  hasSubtitle: false,
  hasSubjectFilled: false
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
      status = props.status;
  var items = content.items;

  if (items.length === 1) {
    return /*#__PURE__*/React.createElement(Block, {
      custom: "templates-featured one"
    }, /*#__PURE__*/React.createElement(Teaser, {
      content: items[0],
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
      hasSubjectFilled: true,
      status: status
    })), /*#__PURE__*/React.createElement(Block, {
      custom: "block-right"
    }, /*#__PURE__*/React.createElement(Teaser, {
      content: items[1],
      status: status
    }), /*#__PURE__*/React.createElement(Teaser, {
      content: items[2],
      status: status
    })));
  }

  return null;
};

Featured.propTypes = {
  content: PropTypes.object,
  status: PropTypes.object
};

var GridNews = function GridNews(props) {
  var content = props.content,
      status = props.status;
  var items = content.items;
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

  return /*#__PURE__*/React.createElement(Block, propsTemplate, lodash.map(items, function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      key: key,
      content: item,
      hasImageTop: true,
      status: status
    });
  }));
};

GridNews.propTypes = {
  content: PropTypes.object,
  status: PropTypes.object
};

var ListNews = function ListNews(_ref) {
  var content = _ref.content,
      status = _ref.status;

  if (!content || content.length === 0) {
    return /*#__PURE__*/React.createElement("pre", null, "Items not found");
  }

  return /*#__PURE__*/React.createElement(Block, {
    custom: "list-news"
  }, lodash.map(content, function (item, key) {
    return /*#__PURE__*/React.createElement(Teaser, {
      content: item,
      hasSubjectFilled: true,
      status: status,
      key: key
    });
  }));
};

ListNews.propTypes = {
  content: PropTypes.array.isRequired,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

exports.Featured = Featured;
exports.GridNews = GridNews;
exports.NewsList = ListNews;
