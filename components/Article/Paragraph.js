import PropTypes from 'prop-types';
import React from 'react';

import Typography from '../Typography';

const Paragraph = ({value}) => {
  return (
    <Typography tokenVariant='paragraph-inner'>{value}</Typography>
  );
};

Paragraph.propTypes = {
  value: PropTypes.string.isRequired
};
Paragraph.defaultProps = {
  value: {}
};

export default Paragraph;