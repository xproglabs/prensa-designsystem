import styled from 'styled-components';

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