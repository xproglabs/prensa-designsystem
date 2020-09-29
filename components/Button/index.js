import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {ButtonTypography} from '../Typography'
import colors from '../../styles/variables/colors.json';

const Button = ({children, className, color, disabled, fontColor, fullWidth, onClick, style, variant}) => {

  const getClass = classnames({
    'Prensa-Button-root': true,
    [`${variant} ${color}`]: true,
    'disabled': disabled,
    'fullWidth': fullWidth,
    [`${className}`]: className,
  });

  return (
    <button
      className={getClass}
      disabled={disabled}
      onClick={!disabled && onClick}
      style={style}
    >
      <ButtonTypography color={fontColor}>
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
  color: PropTypes.oneOf(['primary', 'secondary']),
  fontColor: PropTypes.oneOf(colors),
  style: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  variant: 'filled',
  color: 'primary',
  fontColor: 'white'
};

export default Button;