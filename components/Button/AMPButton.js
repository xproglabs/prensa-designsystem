import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from './index';

const StyledAria = styled.a`
  max-width: max-content;
  text-decoration: unset;
`;

const AMPButton = props => {
  return (
    <StyledAria href={props.path} target='_blank'>
      <Button {...props}>{props.children}</Button>
    </StyledAria>
  );
};

AMPButton.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default AMPButton;