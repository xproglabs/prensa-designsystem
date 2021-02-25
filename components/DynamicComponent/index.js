import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Styled = styled.div``;

const DynamicComponent = props => {
  const Component = Styled.withComponent(props.element);
  return <Component {...props} />;
};

DynamicComponent.propTypes = {
  element: PropTypes.string.isRequired
};

export default DynamicComponent;