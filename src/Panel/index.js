import PropTypes from 'prop-types';
import React from 'react';

const Panel = ({children, style}) => {
  return (
    <div className={`panel-body ${style ? style : ''}`}>
      {children && children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.object,
  style: PropTypes.string
};

export default Panel;