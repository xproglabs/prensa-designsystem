//Get button size (height)
const getSize = (props, theme) => {
  const {$size} = props;
  if (!$size) return '';
  const factor = theme.factors.margin;
  const size = $size;
  if (isNaN(size)) return `height: ${size}`;
  if (size < 4) return `height: ${factor * 4}px`;
  return `height: ${factor * $size}px`;
};

//Get button width variations from props
const getWidth = (props, theme) => {
  const {$width} = props;
  if (!$width) return '';
  const factor = theme.factors.margin;
  if (typeof $width === 'string') return `width: ${$width}`;
  if ($width) return `width: ${factor * $width}px`;
  if (props.fullWidth) return 'width: 100%;';
  return 'width: max-content;';
};

//Get button variations from props (return style matching the variation)
const getOutlinedCSS = (props, theme) => `
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.parseColorValue(props, theme, '$color')};
  &:disabled {
    border-color: ${theme.colors.neutral8};
  }
`;
const getGhostCSS = () => `
  background-color: transparent;
`;
const getFilledCSS = (props, theme) =>`
  background-color: ${theme.parseColorValue(props, theme, '$color')};
  &:disabled {
    background-color: ${theme.colors.neutral8};
  }
`;
const parseVariation = (props, theme) => {
  const {$variant} = props;
  if (!$variant) return '';
  if ($variant === 'outlined') return getOutlinedCSS(props, theme);
  if ($variant === 'ghost') return getGhostCSS();
  return getFilledCSS(props, theme);
};

//parse typography
const parseFontColor = (props, theme) => {
  const {fontColor, $variant, disabled} = props;
  if (disabled && $variant !== 'filled') return theme.colors.neutral8;
  if (fontColor) return theme.parseColorValue(props, theme, 'fontColor');
  if ($variant === 'outlined' || $variant === 'ghost') return theme.parseColorValue(props, theme, '$color');
  return theme.colors.white;
};
const parseFontFamily = (props, theme) => {
  const {inheritFontStyle, $fontFamily} = props;
  const selected = theme.fonts[$fontFamily];
  if (!$fontFamily || !selected || inheritFontStyle) return 'inherit';
  return selected;
};
const parseTypography = (props, theme) => {
  return `
    span {
      margin-left: 8px;
      margin-right: 8px;
      color: ${parseFontColor(props, theme)};
      font-size: 14px;
      font-weight: 400;
      font-family: ${parseFontFamily(props, theme)};
    }
  `;
};

const parseRemoveText = (props) => {
  if (!props.removeText) return '';
  return `
    span {
      display: none;
    }
  `;
};

const parseIcon = (props, theme) => {
  return `
    svg {
      fill: ${parseFontColor(props, theme)};
      width: 24px;
      height: 24px;
    }
  `;
};

//main function
const parseStyle = (props, theme) => {
  const {parsePadding, parseRadius} = theme;
  if (!props) return '';
  return `
    ${parseVariation(props, theme)};
    ${parseTypography(props, theme)};
    ${getSize(props, theme)};
    ${getWidth(props, theme)};
    ${parseRadius(props, '$radius')};
    ${parseRemoveText(props, theme)};
    ${parsePadding(theme, props)};
    ${parseIcon(props, theme)};
  `;
};

const parseProps = (media, props) => {
  const xs = `
    @media (min-width: ${props.theme.queries.xs}) {
      ${parseStyle(props.xs, props.theme)}
    }
  `;
  const sm = `
    @media (min-width: ${props.theme.queries.sm}) {
      ${parseStyle(props.sm, props.theme)}
    }
  `;
  const md = `
    @media (min-width: ${props.theme.queries.md}) {
      ${parseStyle(props.md, props.theme)}
    }
  `;
  const lg = `
    @media (min-width: ${props.theme.queries.lg}) {
      ${parseStyle(props.lg, props.theme)}
    }
  `;
  const xl = `
    @media (min-width: ${props.theme.queries.xl}) {
      ${parseStyle(props.xl, props.theme)}
    }
  `;
  const noQuery = `
    ${parseStyle(props, props.theme)}
  `;
  switch (media) {
    case 'xs':
      return xs;
    case 'sm':
      return sm;
    case 'md':
      return md;
    case 'lg':
      return lg;
    case 'xl':
      return xl;
    default:
      return noQuery;
  }
};


export {parseProps};