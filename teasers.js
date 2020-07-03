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
        return 'xp-article-title';

      case 'article-subtitle':
        return 'xp-article-subtitle';

      case 'title':
        return "xp-title-".concat(size);

      case 'subtitle':
        return "xp-subtitle-".concat(size);

      case 'paragraph':
        return "xp-paragraph-".concat(size);

      case 'subject':
        return "xp-subject-".concat(size);

      case 'system':
        return "xp-system-".concat(size);

      case 'system-bold':
        return "xp-system-".concat(size, " bold");

      default:
        return '';
    }
  };

  var classes = classnames((_classnames = {
    'xp-typography-root': true
  }, _defineProperty(_classnames, getTokenVariant(), true), _defineProperty(_classnames, "".concat(custom), custom), _classnames));

  switch (tokenVariant) {
    case 'article-title':
    case 'title':
      return /*#__PURE__*/React.createElement("h1", {
        className: classes
      }, children);

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
  tokenVariant: PropTypes.oneOf(['article-title', 'article-subtitle', 'title', 'subtitle', 'paragraph', 'subject', 'system', 'system-bold'])
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
    className: "xp-teaser"
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
    className: "xp-teaser-featured ".concat(teaserHasImage)
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

exports.Teaser = Teaser;
exports.TeaserFeatured = TeaserFeatured;
