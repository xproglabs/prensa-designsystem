'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var classnames = _interopDefault(require('classnames'));

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
    'filled': filled
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

var Teaser = function Teaser(props) {
  var _props$content = props.content,
      articleUrl = _props$content.articleUrl,
      image = _props$content.image,
      subject = _props$content.subject,
      subtitle = _props$content.subtitle,
      title = _props$content.title;
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

  return /*#__PURE__*/React.createElement("div", {
    className: "teaser"
  }, subject && /*#__PURE__*/React.createElement(Subject, null, subject), image && /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: articleUrl,
    "aria-label": "Imagem da mat\xE9ria ".concat(title)
  }, getImageFromProps()), /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: articleUrl,
    "aria-label": "Abrir mat\xE9ria ".concat(title)
  }, /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "title"
  }, title)), /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "title"
  }, subtitle));
};

Teaser.propTypes = {
  content: PropTypes.shape({
    articleUrl: PropTypes.string,
    image: PropTypes.object,
    subtitle: PropTypes.string,
    subject: PropTypes.string,
    title: PropTypes.string
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};

var TeaserFeatured = function TeaserFeatured(props) {
  var _props$content = props.content,
      title = _props$content.title,
      subject = _props$content.subject,
      articleUrl = _props$content.articleUrl,
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
    href: articleUrl,
    "aria-label": "Imagem da mat\xE9ria ".concat(title)
  }, getImageFromProps()), /*#__PURE__*/React.createElement("div", {
    className: "teaser-content"
  }, subject && /*#__PURE__*/React.createElement(Subject, {
    filled: true
  }, subject), /*#__PURE__*/React.createElement("a", {
    className: "teaser-aria",
    href: articleUrl,
    "aria-label": "Abrir mat\xE9ria ".concat(title)
  }, /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "title",
    size: "xl"
  }, title))));
};

TeaserFeatured.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    subject: PropTypes.string,
    articleUrl: PropTypes.string,
    image: PropTypes.object
  }),
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
};

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

var NewsListTeaser = function NewsListTeaser(props) {
  var _props$content = props.content,
      path = _props$content.path,
      image = _props$content.image,
      subtitle = _props$content.subtitle,
      name = _props$content.name;
  var _props$status = props.status,
      loading = _props$status.loading,
      error = _props$status.error;

  var getImageFromProps = function getImageFromProps() {
    if (loading || error || !image) return /*#__PURE__*/React.createElement("div", {
      className: "image-box skeleton"
    });
    return /*#__PURE__*/React.createElement(RenderImageBackground, {
      data: image
    });
  };

  var wrapperProps = {
    align: 'row',
    mb: '4',
    'md': {
      mb: '2'
    }
  };
  var imageWrapperProps = {
    align: 'row',
    'md': {
      p: '2'
    }
  };
  var contentWrapperProps = {
    p: '4',
    'md': {
      p: '2',
      pr: '1'
    }
  };
  return /*#__PURE__*/React.createElement(Block, wrapperProps, /*#__PURE__*/React.createElement(Block, imageWrapperProps, /*#__PURE__*/React.createElement("a", {
    href: path,
    "aria-label": "Imagem da mat\xE9ria ".concat(name)
  }, getImageFromProps())), /*#__PURE__*/React.createElement(Block, contentWrapperProps, /*#__PURE__*/React.createElement("a", {
    href: path,
    "aria-label": "Abrir mat\xE9ria ".concat(name)
  }, /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "title"
  }, name)), subtitle && /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "title"
  }, subtitle)));
};

NewsListTeaser.propTypes = {
  content: PropTypes.shape({
    path: PropTypes.string,
    image: PropTypes.object,
    subtitle: PropTypes.string,
    name: PropTypes.string
  }),
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
};

exports.NewsListTeaser = NewsListTeaser;
exports.Teaser = Teaser;
exports.TeaserFeatured = TeaserFeatured;
