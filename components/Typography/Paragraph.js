import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';

const Paragraph = props => {

  const {
    className,
    color,
    gutter,
    style,
    size,
    weight,
    maxWidth,
    setInnerHtml
  } = props;

  const classes = classnames({
    'Typography-Paragraph-root': true,
    [`size-${size} ${weight} color-${color} ${maxWidth}`]: true,
    [`gutter-${gutter}`]: gutter,
    [className]: className,
  });

  return <p className={classes} style={style} gutter={gutter} dangerouslySetInnerHTML={{__html: setInnerHtml}} />;
};

export default Paragraph;

Paragraph.defaultProps = {
  color: 'black',
  size: 1,
  weight: 'regular',
  maxWidth: 'md'
};

Paragraph.propTypes = {  
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  gutter: PropTypes.oneOf([1, 2, 3]),
  size: PropTypes.oneOf([1]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weight),
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg']),
  setInnerHtml: PropTypes.string,
};