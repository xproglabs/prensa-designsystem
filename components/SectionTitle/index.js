import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Typography from '../Typography';

const SectionTitle = ({custom, name}) => {
  return (
    <Block custom="section-title-block" mt="2" mb="4">
      <Typography custom={`section-title ${custom}`}>{name}</Typography>
    </Block>
  );
};
SectionTitle.propTypes = {
  custom: PropTypes.string,
  name: PropTypes.string
};
export default SectionTitle;