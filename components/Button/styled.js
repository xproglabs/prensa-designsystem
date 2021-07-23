import styled, {css} from 'styled-components';

import {parseProps} from './propsParser';

const getDisabledStyle = () => {
  return css`
    &:disabled {
      cursor: unset;
      &:hover {
        animation-name: none;
      }
    }
  `;
};
const getHoverStyle = () => {
  return css`
    @keyframes buttonHover {
      from {opacity: 100%;}
      to {opacity: 80%;}
    }
    &:hover {
      animation-name: buttonHover;
      animation-duration: 0.3s;
      animation-fill-mode: forwards;
    }
  `;
};
const getParsePropsValue = () => {
  return css`
    ${props => parseProps('', props)};
    ${props => props.xs && parseProps('xs', props)};
    ${props => props.sm && parseProps('sm', props)};
    ${props => props.md && parseProps('md', props)};
    ${props => props.lg && parseProps('lg', props)};
    ${props => props.xl && parseProps('xl', props)};
  `;
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  text-transform: uppercase;
  border: unset;
  cursor: pointer;
  ${getDisabledStyle}
  ${getHoverStyle}
  ${getParsePropsValue}
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  text-transform: uppercase;
  border: unset;
  cursor: pointer;
  ${getDisabledStyle}
  ${getHoverStyle}
  ${getParsePropsValue}
`;

export {Button, Link};