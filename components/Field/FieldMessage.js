import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../Typography';

const FieldErrorMessage = props => {
  return (
    <Typography element='p' {...props}>
      {props.children}
    </Typography>
  );
};

FieldErrorMessage.propTypes = {
  children: PropTypes.string
};

export default FieldErrorMessage;