import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Button = props => {

  const style = classnames({
    'button': true,
    'primary': props.style === 'primary' && !props.disabled,
    'secondary': props.style === 'secondary' && !props.disabled,
    'tertiary': props.style === 'tertiary' && !props.disabled,
    'disabled': props.disabled
  });

  return (
    <button className={style} onClick={props.disabled ? null : props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: 'Label',
  style: 'primary'
};

export default Button;