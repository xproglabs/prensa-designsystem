import {get} from 'lodash';
import {css} from 'styled-components';

import {border} from '../../styled-system/border';
import {dimensions} from '../../styled-system/dimensions';
import {margin} from '../../styled-system/margin';
import {padding} from '../../styled-system/padding';

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
    `;
  } else {
    return '';
  }
};

const parseTextDecoration = ({textDecoration}) => {
  if (!textDecoration) return '';
  return `text-decoration: ${textDecoration};`;
};
const parseTextTransform = ({$transform}) => {
  if (!$transform) return '';
  return `text-transform: ${$transform};`;
};
const parseTextAlign = ({textAlign}) => {
  if (!textAlign) return '';
  return `text-align: ${textAlign};`;
};
const parseFontWeight = ({$fontWeight}) => {
  if (!$fontWeight) return '';
  return `font-weight: ${$fontWeight};`;
};

const parseStyle = (props, theme) => {
  return `
    font-family: ${parseFontFamily(props)};
    font-size: ${parseSize(props, 'fontSize')};
    line-height: ${parseSize(props, 'lineHeight')};
    color: ${theme.parseColor(props, theme, '$color')};
    ${theme.parseCustom(props)};
    ${dimensions(props)};
    ${padding(props)};
    ${margin(props)};
    ${border(props)};
    ${handleHover(props)};
    ${parseTextDecoration(props)};
    ${parseTextTransform(props)};
    ${parseTextAlign(props)};
    ${parseFontWeight(props)};
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