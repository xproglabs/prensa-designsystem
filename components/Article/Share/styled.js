import styled from 'styled-components';

import {align} from '../../../styled-system/align';
import {margin} from '../../../styled-system/margin';

const getMinWidthValue = ({$size}) => {
  if (!$size) return '';
  return `min-width: ${$size}px`;
};

const getItemMarginStyle = ({theme, itemProps}) => {
  return margin({theme, ...itemProps});
};

const Container = styled.div`
  ${align};
  ${margin};
  width: 100%;
  amp-social-share[type="facebook"] {
    ${getMinWidthValue};
    ${getItemMarginStyle};
    background-image: ${props => `url(${props.facebookPath})`};
    background-color: transparent;
    &:hover {
      opacity: 80%;
    }
  }
  amp-social-share[type="twitter"] {
    ${getMinWidthValue};
    ${getItemMarginStyle};
    background-image: ${props => `url(${props.twitterPath})`};
    background-color: transparent;
    &:hover {
      opacity: 80%;
    }
  }
  amp-social-share[type="whatsapp"] {
    ${getMinWidthValue};
    background-image: ${props => `url(${props.whatsappPath})`};
    background-color: transparent; 
    &:hover {
      opacity: 80%;
    }
  }
  @media (min-width: ${props => props.theme.queries.md}) {
    width: 50%;
    justify-content: flex-end;
  }
`;

export {Container};