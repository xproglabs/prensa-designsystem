import styled from 'styled-components';

import {margin} from '../../../styled-system/margin';

const getMinWidthValue = ({$size}) => {
  if (!$size) return '';
  return `min-width: ${$size}px`;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  amp-social-share[type="facebook"] {
    ${getMinWidthValue};
    ${margin};
    background-image: ${props => `url(${props.facebookPath})`};
    background-color: transparent;
    &:hover {
      opacity: 80%;
    }
  }
  amp-social-share[type="twitter"] {
    ${getMinWidthValue};
    ${margin};
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