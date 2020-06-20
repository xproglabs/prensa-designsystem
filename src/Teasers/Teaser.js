import PropTypes from 'prop-types';
import React from 'react';

import Subject from '../Subject';
import Typography from '../Typography';

const Teaser = props => {
  const {subject, subtitle, title} = props;
  return (
    <div className='xp-teaser'>
      {subject && <Subject>{subject}</Subject>}
      <Typography title>
        {title}
      </Typography>
      <Typography subtitle>
        {subtitle}
      </Typography>
    </div>
  );
};

Teaser.propTypes = {
  subject: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Teaser;