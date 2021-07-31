import PropTypes from 'prop-types';
import React from 'react';

import AmpShare from './AmpShare';
import Share from './Share';

const SocialShare = props => {
  const {amp} = props;
  if (amp) return <AmpShare {...props} />;
  return <Share {...props} />;
};

SocialShare.propTypes = {
  amp: PropTypes.bool
};

export default SocialShare;