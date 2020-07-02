import PropTypes from 'prop-types';
import React from 'react';

const Paragraph = ({value}) => 
  <p>{value}</p>;

Paragraph.propTypes = {
  value: PropTypes.string.isRequired
};
Paragraph.defaultProps = {
  value: {}
};

export default Paragraph;