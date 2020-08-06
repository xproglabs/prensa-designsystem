'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var classnames = _interopDefault(require('classnames'));
var lodash = require('lodash');
var html2json = require('html2json');

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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
        return 'grid-1-col';

      case 2:
        return 'grid-2-col';

      case 3:
        return 'grid-3-col';

      case 4:
        return 'grid-4-col';

      case 5:
        return 'grid-5-col';

      case 6:
        return 'grid-6-col';

      case 7:
        return 'grid-7-col';

      case 8:
        return 'grid-8-col';

      case 9:
        return 'grid-9-col';

      case 10:
        return 'grid-10-col';

      case 11:
        return 'grid-11-col';

      case 12:
        return 'grid-12-col';

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

var Image = function Image(_ref) {
  var domain = _ref.domain,
      value = _ref.value;
  if (!value || !value['image-contentId']) return false;
  var contentid = value['image-contentId'];
  var captionAndByline = value['image-subtitle'] ? "".concat(value['image-subtitle'], " (").concat(value['image-byline'], ")") : "".concat(value['image-subtitle-original'], " (").concat(value['image-byline'], ")");
  var width = 1000;
  var derivative = '2x1';
  var imagePath = "".concat(domain, "/image/policy:").concat(contentid, "/image.jpg?f=").concat(derivative, "&w=").concat(width);
  return /*#__PURE__*/React.createElement(Block, {
    custom: "article-image-box",
    w: "100p"
  }, /*#__PURE__*/React.createElement("img", {
    className: "image-article",
    src: imagePath,
    alt: captionAndByline ? captionAndByline : "Imagem ".concat(contentid)
  }), /*#__PURE__*/React.createElement(Block, {
    custom: "label"
  }, captionAndByline));
};

Image.propTypes = {
  value: PropTypes.object.isRequired
};
Image.defaultProps = {
  value: {}
};

var SocialMedias = function SocialMedias(props) {
  var content = props.content;
  if (!content) return null;
  var propsSocialMedia = {
    align: 'row evenly'
  };
  var propsSocialCirlce = {
    mr: '1',
    custom: 'social-circle',
    'md': {
      mr: '0',
      ml: '1'
    }
  };
  return /*#__PURE__*/React.createElement(Block, propsSocialMedia, lodash.map(content, function (item, k) {
    return /*#__PURE__*/React.createElement("a", {
      href: item.path,
      key: k
    }, /*#__PURE__*/React.createElement(Block, propsSocialCirlce, item.icon));
  }));
};

SocialMedias.propTypes = {
  content: PropTypes.array.isRequired
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

var Tags = function Tags(props) {
  var custom = props.custom,
      content = props.content,
      _onClick = props.onClick;

  var renderTag = function renderTag(tag, k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "tag",
      onClick: function onClick() {
        return _onClick(tag);
      }
    }, /*#__PURE__*/React.createElement(Typography, {
      tokenVariant: "article-tag"
    }, tag));
  };

  var propsWrap = _objectSpread2({
    align: 'row wrap',
    w: '100p'
  }, custom);

  return /*#__PURE__*/React.createElement(Block, propsWrap, lodash.map(content, function (item, k) {
    return renderTag(item, k);
  }));
};

Tags.propTypes = {
  custom: PropTypes.string,
  content: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

var Paragraph = function Paragraph(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "article-paragraph"
  }, value);
};

Paragraph.propTypes = {
  value: PropTypes.string.isRequired
};
Paragraph.defaultProps = {
  value: {}
};

var parseBody = function parseBody(content) {
  var bodyItems = [];

  var switchNode = function switchNode(_ref) {
    var attr = _ref.attr,
        child = _ref.child,
        node = _ref.node,
        tag = _ref.tag;
    node === 'element' && tag !== 'a' && lodash.map(child, function (item) {
      return switchNode(item);
    });
    var enabledTags = ['p', 'em', 'h2'];
    var embedTags = ['facebook.com', 'youtube.com', 'twitter.com', 'instagram.com'];

    if (enabledTags.indexOf(tag) > -1) {
      var contentText = '';
      lodash.map(child, function (children) {
        // render h2, em and pure text
        if (children.node === 'text' && tag === 'h2') {
          contentText = "".concat(contentText, "<span class=\"paragraph-title\">").concat(children.text, "</span>");
        } else if (children.node === 'text' && tag === 'em') {
          contentText = "".concat(contentText, "<i>").concat(children.text, "</i>");
        } else if (children.node === 'text') {
          contentText = "".concat(contentText).concat(children.text);
        } // render a


        if (children.tag === 'a' && children.attr["class"] !== 'p-smartembed') {
          var text = children.child && children.child.length > 0 ? children.child[0].text : children.attr['aria-label']; // check if is not an embed

          var isEmbed = false;

          if (text) {
            lodash.map(embedTags, function (tag) {
              if (text.indexOf(tag) > -1) {
                isEmbed = true;
              }
            });
          }

          if (!isEmbed) {
            var _attr = '';
            lodash.map(children.attr, function (value, key) {
              _attr = "".concat(_attr, " ").concat(key, "=").concat(value);
            });
            contentText = "".concat(contentText, "<a ").concat(_attr, ">").concat(text, "</a>");
          }
        }
      }); // add paragraph

      if (contentText && contentText !== '') {
        bodyItems.push({
          type: 'Paragraph',
          value: contentText
        });
      }
    } // render image


    if (tag === 'a' && attr["class"] && attr["class"] === 'p-smartembed') {
      var childImage = lodash.find(child, {
        tag: 'img'
      });

      if (childImage) {
        var subtitle = childImage && childImage.attr && childImage.attr['alt'] && childImage.attr['alt'].toString();
        subtitle = lodash.replace(subtitle, new RegExp(',', 'g'), ' ');
        var propsImage = {
          'image-contentId': attr['data-onecms-id'].replace('policy:', ''),
          'image-subtitle': subtitle,
          'image-byline': ''
        };
        bodyItems.push({
          type: 'Image',
          value: propsImage
        });
      }
    } // render embed


    if (tag === 'a' && attr.href && !attr["class"] && attr.href !== '') {
      if (attr['href'].indexOf('facebook.com') > -1) {
        bodyItems.push({
          type: 'Facebook',
          value: attr['href']
        });
      } else if (attr['href'].indexOf('instagram.com') > -1) {
        bodyItems.push({
          type: 'Instagram',
          value: attr['href']
        });
      } else if (attr['href'].indexOf('twitter.com') > -1) {
        bodyItems.push({
          type: 'Tweet',
          value: attr['href']
        });
      } else if (attr['href'].indexOf('youtube.com') > -1) {
        bodyItems.push({
          type: 'Youtube',
          value: attr['href']
        });
      }
    }
  }; // convert html


  var parsed = html2json.html2json(content);
  var elements = lodash.filter(parsed.child, {
    node: 'element'
  }); // parse elements

  lodash.map(elements, function (item) {
    return switchNode(item);
  });
  return bodyItems;
};

var TextBody = function TextBody(_ref) {
  var content = _ref.content,
      embeds = _ref.embeds;
  if (!content) return null;
  var bodyItems = parseBody(content);
  return lodash.map(bodyItems, function (_ref2, key) {
    var type = _ref2.type,
        value = _ref2.value;

    switch (type) {
      case 'Paragraph':
        return /*#__PURE__*/React.createElement(Paragraph, {
          key: key,
          value: value
        });

      case 'Facebook':
        return embeds && embeds.Facebook && /*#__PURE__*/React.createElement(embeds.Facebook, {
          key: key,
          value: value
        });

      case 'Image':
        return /*#__PURE__*/React.createElement(Block, {
          custom: "article-image-embed"
        }, /*#__PURE__*/React.createElement(Image, {
          key: key,
          value: value
        }));

      case 'Instagram':
        return embeds && embeds.Instagram && /*#__PURE__*/React.createElement(embeds.Instagram, {
          key: key,
          value: value
        });

      case 'Tweet':
        return embeds && embeds.Tweet && /*#__PURE__*/React.createElement(embeds.Tweet, {
          key: key,
          value: value
        });

      case 'Youtube':
        return embeds && embeds.Youtube && /*#__PURE__*/React.createElement(embeds.Youtube, {
          key: key,
          value: value
        });
    }
  });
};

TextBody.propTypes = {
  content: PropTypes.string.isRequired,
  embeds: PropTypes.object
};
TextBody.defaultProps = {
  content: {}
};

var _PropTypes$shape;

var Article = function Article(_ref) {
  var content = _ref.content,
      embeds = _ref.embeds,
      handleTagClick = _ref.handleTagClick,
      socialMedias = _ref.socialMedias;
  var author = content.author,
      images = content.images,
      metadata = content.metadata,
      subject = content.subject,
      subtitle = content.subtitle,
      text = content.text,
      title = content.title;
  var createdAt = content['time-created'];
  var updatedAt = content['time-modified'];
  var propsArticle = {
    align: 'center',
    custom: 'article'
  };
  var propsArticleHead = {
    align: 'center',
    custom: 'article-head',
    w: '100p'
  };
  var propsArticleData = {
    align: 'center',
    custom: 'article-data',
    w: '100p'
  };
  var propsArticleBody = {
    align: 'center',
    custom: 'article-body',
    w: '100p'
  };
  var propsArticleInfo = {
    align: 'column left middle',
    custom: 'article-media has-border-bottom',
    mb: '4',
    w: '100p',
    'md': {
      align: 'row between middle'
    }
  };
  var propsArticleAuthor = {
    align: 'col',
    custom: '',
    w: '100p'
  };
  var customArticleTag = {
    custom: 'article-tag'
  };
  return /*#__PURE__*/React.createElement(Block, propsArticle, /*#__PURE__*/React.createElement(Block, propsArticleHead, /*#__PURE__*/React.createElement(Grid, {
    columns: 12
  }, /*#__PURE__*/React.createElement(Subject, {
    filled: true
  }, subject), /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "article-title"
  }, title), /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "article-subtitle"
  }, subtitle))), /*#__PURE__*/React.createElement(Block, propsArticleData, /*#__PURE__*/React.createElement(Grid, {
    columns: 12
  }, /*#__PURE__*/React.createElement(Block, propsArticleInfo, /*#__PURE__*/React.createElement(Block, propsArticleAuthor, /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "system-bold"
  }, author), /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "system"
  }, "Criado em: ", createdAt), updatedAt && /*#__PURE__*/React.createElement(Typography, {
    tokenVariant: "system"
  }, "Atualizado em: ", updatedAt)), /*#__PURE__*/React.createElement(SocialMedias, {
    content: socialMedias
  })))), /*#__PURE__*/React.createElement(Block, propsArticleBody, /*#__PURE__*/React.createElement(Grid, {
    columns: 12
  }, images['image-contentId'] && /*#__PURE__*/React.createElement(Image, {
    value: images
  })), /*#__PURE__*/React.createElement(Grid, {
    columns: 10
  }, /*#__PURE__*/React.createElement(TextBody, {
    content: text,
    embeds: embeds
  }))), /*#__PURE__*/React.createElement(Grid, {
    columns: 10
  }, /*#__PURE__*/React.createElement(Tags, {
    custom: customArticleTag,
    content: metadata,
    onClick: handleTagClick
  })));
};

Article.propTypes = {
  content: PropTypes.shape((_PropTypes$shape = {
    author: PropTypes.string.isRequired,
    images: PropTypes.object.isRequired,
    metadata: PropTypes.array.isRequired,
    subject: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }, _defineProperty(_PropTypes$shape, 'time-created', PropTypes.string.isRequired), _defineProperty(_PropTypes$shape, 'time-modified', PropTypes.string.isRequired), _PropTypes$shape)),
  handleTagClick: PropTypes.func.isRequired,
  socialMedias: PropTypes.array,
  embeds: PropTypes.object
};
Article.defaultProps = {
  content: {}
};

var Button = function Button(props) {
  var style = classnames(_defineProperty({
    'button': true,
    'bg-primary-1': props.style === 'primary' && !props.disabled,
    'fc-white': props.style === 'primary' && !props.disabled,
    'secondary': props.style === 'secondary' && !props.disabled,
    'tertiary': props.style === 'tertiary' && !props.disabled,
    'disabled': props.disabled
  }, "".concat(props.custom), props.custom));
  return /*#__PURE__*/React.createElement("button", {
    className: style,
    onClick: props.disabled ? null : props.onClick
  }, props.children);
};

Button.propTypes = {
  children: PropTypes.node,
  custom: PropTypes.string,
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

var SearchForm = function SearchForm(_ref) {
  var functions = _ref.functions,
      state = _ref.state;
  var fieldValue = state.fieldValue,
      setFieldValue = state.setFieldValue;

  var handleSubmit = function handleSubmit() {
    var string = fieldValue;
    string = string.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    functions.onSubmit(string);
  };

  var fieldController = {
    type: 'text',
    className: 'search-field',
    placeholder: 'O que você está procurando?',
    onChange: function onChange(event) {
      return setFieldValue(event.target.value);
    },
    onKeyPress: function onKeyPress(event) {
      return event.key === 'Enter' && handleSubmit();
    }
  };
  return /*#__PURE__*/React.createElement(Block, {
    align: "right",
    custom: 'search-form'
  }, /*#__PURE__*/React.createElement("input", fieldController), /*#__PURE__*/React.createElement(Button, {
    disabled: false,
    onClick: function onClick() {
      return handleSubmit();
    },
    style: "primary"
  }, "Buscar"));
};

SearchForm.propTypes = {
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    onSubmit: PropTypes.func
  }),
  state: PropTypes.shape({
    fieldValue: PropTypes.string,
    setFieldValue: PropTypes.func
  })
};
SearchForm.defaultProps = {
  content: {},
  functions: {
    onSubmit: function onSubmit() {
      return null;
    }
  },
  state: {
    fieldValue: '',
    setFieldValue: function setFieldValue() {
      return null;
    }
  }
};

var SearchMenu = function SearchMenu(_ref) {
  var children = _ref.children,
      functions = _ref.functions,
      status = _ref.status;
  var menuIsOpen = status.opened ? 'opened' : 'closed';
  return /*#__PURE__*/React.createElement(Block, {
    custom: "menu-modal ".concat(menuIsOpen)
  }, /*#__PURE__*/React.createElement(Block, {
    custom: "menu-opacity",
    onClick: functions.onCloseModal
  }), /*#__PURE__*/React.createElement(Block, {
    bg: "neutral-10",
    custom: "menu-right",
    p: "4"
  }, children && children));
};

SearchMenu.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    onCloseModal: PropTypes.func
  }),
  status: PropTypes.shape({
    opened: PropTypes.bool
  })
};
SearchMenu.defaultProps = {
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

var SideMenu = function SideMenu(_ref) {
  var children = _ref.children,
      functions = _ref.functions,
      status = _ref.status;
  var menuIsOpen = status.opened ? 'opened' : 'closed';
  return /*#__PURE__*/React.createElement(Block, {
    custom: "menu-modal ".concat(menuIsOpen)
  }, /*#__PURE__*/React.createElement(Block, {
    custom: "menu-opacity",
    onClick: functions.onCloseModal
  }), /*#__PURE__*/React.createElement(Block, {
    bg: "white",
    custom: "menu-left",
    p: "4"
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

  var Item = function Item(_ref2) {
    var item = _ref2.item;
    var hasSubitems = item.subitems.length > 0;
    return /*#__PURE__*/React.createElement(Block, {
      custom: "sidemenu-group",
      mb: "4"
    }, /*#__PURE__*/React.createElement(Block, {
      custom: "sidemenu-group-item",
      pb: "2",
      onClick: function onClick() {
        return functions.onMenuItem(item);
      }
    }, !hasSubitems ? /*#__PURE__*/React.createElement("a", {
      href: item.path
    }, item.name) : /*#__PURE__*/React.createElement("span", {
      href: item.path
    }, item.name)));
  };

  Item.propTypes = {
    item: PropTypes.object
  };
  return /*#__PURE__*/React.createElement(Block, {
    custom: "sidemenu-items"
  }, lodash.map(content.items, function (item, key) {
    return /*#__PURE__*/React.createElement(Item, {
      item: item,
      key: key
    });
  }));
};

SideMenuItems.propTypes = {
  content: PropTypes.object,
  functions: PropTypes.shape({
    onMenuItem: PropTypes.func
  })
};
SideMenuItems.defaultProps = {
  content: {}
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

var Topbar = function Topbar(_ref) {
  var content = _ref.content,
      functions = _ref.functions;
  var LeftContent = content.LeftContent,
      CenterContent = content.CenterContent,
      RightContent = content.RightContent;
  return /*#__PURE__*/React.createElement(Block, {
    align: "row center",
    bg: "primary-1",
    color: "white",
    custom: "topbar",
    w: "100p"
  }, /*#__PURE__*/React.createElement(Block, {
    align: "row middle between",
    custom: "wrap",
    w: "100p"
  }, /*#__PURE__*/React.createElement(Block, null, LeftContent && /*#__PURE__*/React.createElement(LeftContent, {
    functions: functions
  })), /*#__PURE__*/React.createElement(Block, null, CenterContent && /*#__PURE__*/React.createElement(CenterContent, null)), /*#__PURE__*/React.createElement(Block, null, RightContent && /*#__PURE__*/React.createElement(RightContent, null))));
};

var LeftMenuIcon = function LeftMenuIcon(_ref2) {
  var functions = _ref2.functions;
  return /*#__PURE__*/React.createElement(Block, {
    custom: "menu-left-icon",
    cursor: "pointer",
    fc: "neutral-8",
    pl: "4",
    onClick: functions.handleMenuClick
  }, "MENU");
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
    LeftContent: LeftMenuIcon
  }
};

exports.Article = Article;
exports.Block = Block;
exports.Button = Button;
exports.Form = index;
exports.Grid = Grid;
exports.Image = Image;
exports.SearchForm = SearchForm;
exports.SearchMenu = SearchMenu;
exports.SectionTitle = SectionTitle;
exports.SideMenu = SideMenu;
exports.SideMenuItems = SideMenuItems;
exports.SocialMedias = SocialMedias;
exports.Subject = Subject;
exports.Tags = Tags;
exports.TextBody = TextBody;
exports.Topbar = Topbar;
exports.Typography = Typography;
