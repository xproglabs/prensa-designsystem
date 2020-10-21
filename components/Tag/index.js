import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weights from '../../styles/variables/weight.json';
import {TagTypography} from '../Typography';

const Tag = ({content, color, onClick, radius, weight}) => {
  const classes = classnames({
    'Prensa-Tag-root': true,
    [`color-${color} radius-${radius} ${weight}`]: true,
  });

  const handleClick = () => {
    onClick(content);
  };

  return (
    <div className={classes} onClick={handleClick}>
      <TagTypography weight={weight} color={color}>{content}</TagTypography>
    </div>
  );
};

Tag.defaultProps = {
  color: 'primary-1',
  weight: 'regular',
  radius: 'default'
};

Tag.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.oneOf(colors),
  onClick: PropTypes.func.isRequired,
  radius: PropTypes.oneOf([false, 'default', 'alternative']),
  weight: PropTypes.oneOf(weights)
};

export default Tag;