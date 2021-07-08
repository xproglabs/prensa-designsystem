//Get button size (height)
const getSize = (props, theme) => {
  const {$size, iconSize} = props;
  if (!$size) return '';
  const factor = theme.factors.margin;
  const size = $size;
  if (isNaN(size)) return `height: ${size}`;
  if (size < 4) return `height: ${factor * 4}px`;
  if (iconSize) return 'height: max-content';
  return `height: ${factor * $size}px`;
};

//Get button width variations from props
const getWidth = (props, theme) => {
  const {$width} = props;
  if (props.fullWidth) return 'width: 100%;';
  if (!$width) return '';
  const factor = theme.factors.margin;
  if (typeof $width === 'string') return `width: ${$width}`;
  if ($width) return `width: ${factor * $width}px`;
  return 'width: max-content;';
};

//Get button variations from props (return style matching the variation)
const getOutlinedCSS = (props, theme) => `
  background-color: transparent;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.parseColor(props, theme, '$color')};
  &:disabled {
    border-color: ${theme.colors.neutral8};
  }
`;
const getGhostCSS = () => `
  background-color: transparent;
  border-width: none;
  border-style: none;
  border-color: none;
`;
const getFilledCSS = (props, theme) =>`
  background-color: ${theme.parseColor(props, theme, '$color')};
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
  if (fontColor) return theme.parseColor(props, theme, 'fontColor');
  if ($variant === 'outlined' || $variant === 'ghost') return theme.parseColor(props, theme, '$color');
  return theme.colors.white;
};
const parseFontFamily = (props, theme) => {
  const {$fontFamily} = props;
  const selected = theme.fonts[$fontFamily];
  if (!$fontFamily || !selected) return theme.fonts.primary;
  return selected;
};
const parseFontWeight = (props) => {
  const {$fontWeight} = props;
  if (!$fontWeight) return 400;
  return $fontWeight;
};
const parseFontSize = (props) => {
  const {$fontSize} = props;
  if (!$fontSize) return 14;
  return $fontSize;
};
const parseTypography = (props, theme) => {
  if (props.removeText === true) return `
    span {
      display: none;
    }
  `;
  else return `
    span {
      display: inline;
      margin-left: 8px;
      margin-right: 8px;
      color: ${parseFontColor(props, theme)};
      font-size: ${parseFontSize(props, theme)}px;
      font-weight: ${parseFontWeight(props, theme)};
      font-family: ${parseFontFamily(props, theme)};
    }
  `;
};

const parseIcon = (props, theme) => {
  return `
    svg {
      fill: ${parseFontColor(props, theme)};
      width: ${props.iconSize ? props.iconSize : '24px'};
      height: ${props.iconSize ? props.iconSize : '24px'};
    }
  `;
};

//main function
const parseStyle = (props, theme) => {
  const {parsePadding, parseRadius, parseCustom} = theme;
  if (!props) return '';
  return `
    ${parseVariation(props, theme)};
    ${parseTypography(props, theme)};
    ${getSize(props, theme)};
    ${getWidth(props, theme)};
    ${parseRadius(props, '$radius')};    
    ${parsePadding(props, theme)};
    ${parseIcon(props, theme)};
    ${parseCustom(props)};
  `;
};

const parseProps = (media, props) => {
  switch (media) {
    case 'xs':
      return `
        @media (min-width: ${props.theme.queries.xs}) {
          ${parseStyle(props.xs, props.theme)}
        }
      `;
    case 'sm':
      return `
        @media (min-width: ${props.theme.queries.sm}) {
          ${parseStyle(props.sm, props.theme)}
        }
      `;
    case 'md':
      return `
        @media (min-width: ${props.theme.queries.md}) {
          ${parseStyle(props.md, props.theme)}
        }
      `;
    case 'lg':
      return `
        @media (min-width: ${props.theme.queries.lg}) {
          ${parseStyle(props.lg, props.theme)}
        }
      `;
    case 'xl':
      return `
        @media (min-width: ${props.theme.queries.xl}) {
          ${parseStyle(props.xl, props.theme)}
        }
      `;
    default:
      return `${parseStyle(props, props.theme)}`;
  }
};


export {parseProps};