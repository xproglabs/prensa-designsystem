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
      case 'article':
        return 'xp-article';

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
  style: PropTypes.oneOf(['article', '3-col', '4-col'])
};
Block.defaultProps = {
  functions: {},
  p: '0'
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

      case 'article-paragraph':
        return 'xp-article-paragraph';

      case 'article-tag':
        return 'xp-article-tag';

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

var BreakingNews = function BreakingNews(props) {
  var _props$blockData = props.blockData,
      content = _props$blockData.content,
      status = _props$blockData.status;
  return /*#__PURE__*/React.createElement(Block, {
    row: true,
    style: "breaking-news"
  }, /*#__PURE__*/React.createElement(Grid, {
    columns: 12
  }, /*#__PURE__*/React.createElement(TeaserFeatured, {
    content: content[0],
    status: status
  })));
};

BreakingNews.propTypes = {
  blockData: PropTypes.shape({
    content: PropTypes.array,
    status: PropTypes.object
  })
};

var FourCol = function FourCol(props) {
  var _props$blockData = props.blockData,
      content = _props$blockData.content,
      status = _props$blockData.status;
  return /*#__PURE__*/React.createElement(Block, {
    row: true,
    style: "3-col"
  }, lodash.map(content, function (teaser, k) {
    return /*#__PURE__*/React.createElement(Grid, {
      key: k,
      xs: 100,
      md: 33,
      columns: 3
    }, /*#__PURE__*/React.createElement(Teaser, {
      content: teaser,
      status: status
    }));
  }));
};

FourCol.propTypes = {
  blockData: PropTypes.shape({
    content: PropTypes.array,
    image: PropTypes.array,
    status: PropTypes.object
  })
};

var FourCol$1 = function FourCol(props) {
  var _props$blockData = props.blockData,
      content = _props$blockData.content,
      status = _props$blockData.status;
  return /*#__PURE__*/React.createElement(Block, {
    row: true,
    style: "4-col"
  }, lodash.map(content, function (teaser, k) {
    return /*#__PURE__*/React.createElement(Grid, {
      key: k,
      xs: 100,
      md: 50,
      columns: 3
    }, /*#__PURE__*/React.createElement(Teaser, {
      content: teaser,
      status: status
    }));
  }));
};

FourCol$1.propTypes = {
  blockData: PropTypes.shape({
    content: PropTypes.array,
    image: PropTypes.array,
    status: PropTypes.object
  })
};

exports.BreakingNews = BreakingNews;
exports.FourCol = FourCol$1;
exports.ThreeCol = FourCol;
