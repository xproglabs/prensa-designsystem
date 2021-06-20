import PropTypes from 'prop-types';
import React from 'react';

const AmpMenu = ({children, className, id, layout}) => {
  return (
    <amp-sidebar className={className} id={id} layout={layout}>
      {children}
    </amp-sidebar>
  );
};

AmpMenu.defaultProps = {
  layout: 'nodisplay'
};

AmpMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  layout: PropTypes.string,
};

export default AmpMenu;