import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';

const SectionTitle = ({name}) => {
  return (
    <Block mb="2">
      <Typography custom="section-title">{name}</Typography>
    </Block>
  );
};
SectionTitle.propTypes = {
  name: PropTypes.string
};
export default SectionTitle;