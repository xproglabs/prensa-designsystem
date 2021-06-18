import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  amp-social-share[type="facebook"] {
    background-image: ${'url(assets/facebook-product1.svg)'};
    background-color: transparent;
    margin-right: 32px;
    &:hover {
      opacity: 80%;
    }
  }
  amp-social-share[type="twitter"] {
    background-image: ${'url(assets/twitter-product1.svg)'};
    background-color: transparent;
    margin-right: 32px;
    &:hover {
      opacity: 80%;
    }
  }
  amp-social-share[type="whatsapp"] {
    background-image: ${'url(assets/whatsapp-product1.svg)'};
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

const Share = ({fbappid}) => {
  return (
    <Container>
      <amp-social-share type='facebook' width='24' height='24' data-param-app_id={fbappid} />
      <amp-social-share type='twitter' width='24' height='24' />
      <amp-social-share type='whatsapp' width='24' height='24' />
    </Container>
  );
};

Share.propTypes = {
  fbappid: PropTypes.string.isRequired,
};

export default Share;