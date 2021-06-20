import PropTypes from 'prop-types';
import React from 'react';

const AmpMenu = ({children, className, id, layout, menuAnchor}) => {
  return (
    <amp-sidebar className={className} id={id} layout={layout} side={menuAnchor}>
      {children}
    </amp-sidebar>
  );
};

AmpMenu.defaultProps = {
  layout: 'nodisplay',
  menuAnchor: 'left'
};

AmpMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  layout: PropTypes.string,
  menuAnchor: PropTypes.oneOf(['left', 'right'])
};

export default AmpMenu;