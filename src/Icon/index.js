import PropTypes from 'prop-types';
import React from 'react';

const Icon = data => <svg {...data}>{data.children}</svg>;

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

Icon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24'
};

export default Icon;
