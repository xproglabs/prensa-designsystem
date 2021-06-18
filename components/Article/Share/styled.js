// import {get} from 'lodash';
import styled from 'styled-components';

// import {margin} from '../../../styled-system/margin';

// const getColor = props => {
//   const theme = get(props, 'theme.colors');
//   const value = get(theme, props.$color);
//   return value;
// };

// const IconContainer = styled.svg`
//   width: ${props => props.$width}px;
//   height: ${props => props.$height}px;
//   fill: ${getColor};
// `;

// const IconLink = styled.a`
//   ${margin};
//   height: max-content;
//   width: max-content;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  amp-social-share[type="facebook"] {
    background-image: ${props => `url(${props.facebookPath})`};
    background-color: transparent;
    margin-right: 32px;
    &:hover {
      opacity: 80%;
    }
  }
  amp-social-share[type="twitter"] {
    background-image: ${props => `url(${props.twitterPath})`};
    background-color: transparent;
    margin-right: 32px;
    &:hover {
      opacity: 80%;
    }
  }
  amp-social-share[type="whatsapp"] {
    background-image: ${props => `url(${props.whatsappPath})`};
    background-color: transparent;
    margin-right: 32px;
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