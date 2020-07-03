import PropTypes from 'prop-types';
import React from 'react';

const Link = ({value}) => {
  
  return (
    <p>{value}</p>
  );
};

Link.propTypes = {
  value: PropTypes.string.isRequired
};
Link.defaultProps = {
  value: {}
};

export default Link;