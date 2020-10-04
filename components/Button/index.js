import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weights from '../../styles/variables/weight.json';
import {ButtonTypography} from '../Typography';

const Button = ({children, className, color, disabled, fontColor, fullWidth, onClick, radius, size, style, variant, weight}) => {

  const getClass = classnames({
    'Prensa-Button-root': true,
    [`size-${size} ${variant} color-${color} radius-${radius}`]: true,
    'disabled': disabled,
    'fullWidth': fullWidth,
    [`${className}`]: className,
  });

  const getFontColor = () => {
    if (variant === 'outlined') {
      if (disabled) return 'neutral-8';
      return color; 
    }
    return fontColor;
  };

  return (
    <button
      className={getClass}
      disabled={disabled}
      onClick={!disabled && onClick}
      style={style}
    >
      <ButtonTypography color={getFontColor()} weight={weight}>
        {children}
      </ButtonTypography>
    </button>
  );
};

Button.propTypes = {
  /**
   * Permite a estilização do componente
   */
  className: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined']),
  color: PropTypes.oneOf(colors),
  fontColor: PropTypes.oneOf(colors),
  radius: PropTypes.oneOf([false, 'default', 'alternative']),
  size: PropTypes.oneOf([1, 2, 3, 4, 5]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(weights)
};

Button.defaultProps = {
  disabled: false,
  variant: 'filled',
  color: 'primary-1',
  fontColor: 'white',
  radius: 'default',
  size: 1,
  weight: 'regular'
};

export default Button;