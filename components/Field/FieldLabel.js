import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../Typography';

const FieldLabel = props => {  

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Typography element='label' {...props}>
      {capitalizeFirstLetter(props.children)}
    </Typography>
  );
};

FieldLabel.propTypes = {
  children: PropTypes.node
};

export default FieldLabel;