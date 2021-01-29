'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PropTypes = require('prop-types');
var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: max-content;\n  text-transform: uppercase;\n  border: unset;\n  cursor: pointer;\n  svg {\n    fill: ", ";\n    width: 24px;\n    height: 24px;\n  }\n  span {\n    margin-left: 8px;\n    margin-right: 8px;\n    color: ", ";\n    font-size: 14px;\n    font-weight: 400;\n    font-family: ", ";\n  }\n  &:disabled {\n    cursor: unset;\n    &:hover {\n      animation-name: none;\n    }\n  }\n  &:hover {\n    animation-name: buttonHover;\n    animation-duration: 0.3s;\n    animation-fill-mode: forwards;\n  }\n  @keyframes buttonHover {\n    from {opacity: 100%;}\n    to {opacity: 80%;}\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var parseFontColor = function parseFontColor(props) {
  var fontColor = props.fontColor,
      buttonVariant = props.buttonVariant,
      disabled = props.disabled,
      theme = props.theme;
  if (disabled && buttonVariant !== 'filled') return theme.colors.neutral8;
  if (fontColor) return theme.parseColorValue(props, 'fontColor');
  if (buttonVariant === 'outlined' || buttonVariant === 'ghost') return theme.parseColorValue(props, 'buttonColor');
  return theme.colors.white;
};

var parseFontFamily = function parseFontFamily(props) {
  var inheritFontStyle = props.inheritFontStyle,
      theme = props.theme;
  if (inheritFontStyle) return 'inherit';
  return "".concat(theme.fonts.primary);
}; //Get button size (height)


var getSize = function getSize(props) {
  var factor = props.theme.factors.margin;
  var size = props.buttonSize;
  if (isNaN(size)) return "height: ".concat(size);
  if (size < 4) return "height: ".concat(factor * 4, "px");
  return "height: ".concat(factor * props.buttonSize, "px");
}; //Get button width variations from props


var getWidth = function getWidth(props) {
  if (props.fullWidth) return 'width: 100%;';
  return 'width: max-content;';
}; //Get button variations from props (return style matching the variation)


var getVariations = function getVariations(props) {
  switch (props.buttonVariant) {
    case 'outlined':
      return "\n        background-color: transparent;\n        border-width: 1px;\n        border-style: solid;\n        border-color: ".concat(props.theme.parseColorValue(props, 'buttonColor'), ";\n        &:disabled {\n          border-color: ").concat(props.theme.colors.neutral8, ";\n        }\n      ");

    case 'ghost':
      return "\n        background-color: transparent;\n      ";

    case 'filled':
    default:
      return "\n        background-color: ".concat(props.theme.parseColorValue(props, 'buttonColor'), ";\n        &:disabled {\n          background-color: ").concat(props.theme.colors.neutral8, ";\n        }\n      ");
  }
};

var StyledButton = styled__default['default'].button(_templateObject(), function (props) {
  return parseFontColor(props);
}, function (props) {
  return parseFontColor(props);
}, function (props) {
  return parseFontFamily(props);
}, function (props) {
  return props.theme.parsePadding(props.theme, props);
}, function (props) {
  return props.theme.parseRadius(props, 'borderRadius');
}, function (props) {
  return getVariations(props);
}, function (props) {
  return getSize(props);
}, function (props) {
  return getWidth(props);
});

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      disabled = _ref.disabled,
      fontColor = _ref.fontColor,
      fullWidth = _ref.fullWidth,
      leftIcon = _ref.leftIcon,
      onClick = _ref.onClick,
      radius = _ref.radius,
      rightIcon = _ref.rightIcon,
      size = _ref.size,
      style = _ref.style,
      variant = _ref.variant,
      loading = _ref.loading,
      enterKey = _ref.enterKey,
      px = _ref.px;

  // Trigger to Handle enter keydown for forms
  var handleKeyPress = function handleKeyPress(event) {
    if (event.keyCode === 13) enterKey();
  };

  React.useEffect(function () {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return function () {
      return enterKey && window.removeEventListener('keydown', handleKeyPress);
    };
  });
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, {
    onClick: onClick,
    px: px,
    disabled: disabled,
    buttonColor: color,
    fontColor: fontColor,
    borderRadius: radius,
    buttonVariant: variant,
    buttonSize: size,
    fullWidth: fullWidth,
    style: style
  }, loading && 'Carregando...', leftIcon && leftIcon, /*#__PURE__*/React__default['default'].createElement("span", null, children), rightIcon && rightIcon);
};

Button.propTypes = {
  /**
   * Corresponde ao texto escrito do botão
   */
  children: PropTypes__default['default'].string.isRequired,

  /**
   * Altera a cor geral do componente
   */
  color: PropTypes__default['default'].string,

  /**
   * Ativa/desativa o estado disabed nativo do elemento
   */
  disabled: PropTypes__default['default'].bool,

  /**
   * Permite a troca da cor da fonte para casos específicos
   */
  fontColor: PropTypes__default['default'].string,

  /**
   * Ativa o estilo com largura máxima para o botão (cresce 100% do width disponível)
   */
  fullWidth: PropTypes__default['default'].bool,

  /**
   * Permite a passagem de um componente SVG para ícone no lado esquerdo
   */
  leftIcon: PropTypes__default['default'].element,

  /**
   * Lida com o evento de clique do botão
   */
  onClick: PropTypes__default['default'].func,

  /**
   * Permite a escolha do token para border-radius
   */
  radius: PropTypes__default['default'].oneOf([false, 'default', 'alternative']),

  /**
   * Permite a passagem de um ícone à direita
   */
  rightIcon: PropTypes__default['default'].element,

  /**
   * Permite a escolha de um tamanho (height) para o botão
   */
  size: PropTypes__default['default'].oneOfType([PropTypes__default['default'].number, PropTypes__default['default'].string]),

  /**
   * Passagem de estilos customizados inline
   */
  style: PropTypes__default['default'].object,

  /**
   * Permite a escolha de uma das variações de estrutura do componente
   */
  variant: PropTypes__default['default'].oneOf(['filled', 'outlined', 'ghost']),

  /**
   * Ativa a informação "Carregando"
   */
  loading: PropTypes__default['default'].bool,

  /**
   * Recebe o evento de clique na tecla enter | return através de uma função
   */
  enterKey: PropTypes__default['default'].func,

  /**
   * Permite alterar o espacamento interno no botão
   */
  px: PropTypes__default['default'].oneOfType([PropTypes__default['default'].string, PropTypes__default['default'].number])
};
Button.defaultProps = {
  px: 2,
  disabled: false,
  variant: 'filled',
  color: 'primary1',
  radius: 'default',
  size: 4,
  loading: false
};
var Button$1 = styled.withTheme(Button);

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  max-width: max-content;\n  text-decoration: unset;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledAria = styled__default['default'].a(_templateObject$1());

var AMPButton = function AMPButton(props) {
  return /*#__PURE__*/React__default['default'].createElement(StyledAria, {
    href: props.path,
    target: "_blank"
  }, /*#__PURE__*/React__default['default'].createElement(Button$1, props, props.children));
};

AMPButton.propTypes = {
  path: PropTypes__default['default'].string.isRequired,
  children: PropTypes__default['default'].string.isRequired
};

exports.Button = AMPButton;
