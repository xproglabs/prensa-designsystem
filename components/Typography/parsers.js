import {get} from 'lodash';
import {dimensions} from '../../styled-system/dimensions';
import {padding} from '../../styled-system/padding';
import {border} from '../../styled-system/border';
import {css} from 'styled-components';

const parseFontFamily = props => {
  const fonts = get(props, 'theme.fonts', {});
  const propValue = get(props, '$fontFamily', '');
  const selected = get(fonts, propValue, '');
  return selected;
};

const parseSize = (props, propName) => {
  const factor = get(props, 'theme.factors.margin', {});
  const propValue = get(props, `$${propName}`);
  const isNumber = typeof propValue === 'number';
  if (isNumber) return `${propValue * factor}px`;
  return propValue;
};

const handleHover = props => {
  if (props.opacityOnHover) {
    return css`
      &:hover {
        opacity: 0.8;
      }
    `
  } else {
    return ''
  }
}

const parseStyle = (props, theme) => {
  return `
    font-weight: ${props.$fontWeight};
    text-transform: ${props.$transform};
    text-align: ${props.textAlign};
    font-family: ${parseFontFamily(props)};
    font-size: ${parseSize(props, 'fontSize')};
    line-height: ${parseSize(props, 'lineHeight')};
    color: ${theme.parseColor(props, theme, '$color')};
    text-decoration: unset;
    ${theme.parseMargin(props, theme)};
    ${theme.parseCustom(props)};
    ${dimensions(props)};
    ${padding(props)};
    ${border(props)};
    ${handleHover(props)};
  `;
};

export const parseProps = (media, props) => {
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