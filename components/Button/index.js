import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import styled, {withTheme} from 'styled-components';

// import {ButtonTypography} from '../Typography';

//Get button size (height)
const getSize = props => {
  const factor = props.theme.factors.margin;
  const size = props.buttonSize;
  if (isNaN(size)) return `height: ${size}`;
  if (size < 4) return `height: ${factor * 4}px`;
  return `height: ${factor * props.buttonSize}px`;
};

//Get button width variations from props
const getWidth = props => {
  if (props.fullWidth) return 'width: 100%;';
  return 'width: max-content;';
};

//Get button variations from props (return style matching the variation)
const getVariations = props => {
  switch(props.buttonVariant) {
    case 'outlined':
      return `
        background-color: transparent;
        border-width: 1px;
        border-style: solid;
        border-color: ${props.theme.parseColorValue(props, 'buttonColor')};
      `;
    case 'ghost':
      return `
        background-color: transparent;
      `;
    case 'filled':
    default: 
      return `
        background-color: ${props.theme.parseColorValue(props, 'buttonColor')};
      `;
  }
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: max-content;
  text-transform: uppercase;
  border: unset;
  cursor: pointer;
  svg {
    fill: ${props => props.theme.parseColorValue(props, 'fontColor')};
    width: 24px;
    height: 24px;
  }
  ${props => props.theme.parsePadding(props.theme, props)};
  ${props => props.theme.parseRadius(props, 'borderRadius')};
  ${props => getVariations(props)};
  ${props => getSize(props)};
  ${props => getWidth(props)};
`;

const Button = ({
  children,
  color,
  disabled,
  fontColor,
  fullWidth,
  leftIcon,
  onClick,
  radius,
  rightIcon,
  size,
  style,
  variant,
  loading,
  enterKey,
  px
}) => {

  // Trigger to Handle enter keydown for forms
  const handleKeyPress = event => {
    if (event.keyCode === 13) enterKey();
  };
  useEffect(() => {
    enterKey && window.addEventListener('keydown', handleKeyPress);
    return () => enterKey && window.removeEventListener('keydown', handleKeyPress);
  });

  return (
    <StyledButton
      onClick={onClick}
      px={px}
      disabled={disabled}
      buttonColor={color}      
      fontColor={fontColor}
      borderRadius={radius}
      buttonVariant={variant}
      buttonSize={size}
      fullWidth={fullWidth}
      style={style}
    >
      {loading && 'Carregando...'}
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  leftIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost']),
  color: PropTypes.string,
  fontColor: PropTypes.string,
  radius: PropTypes.oneOf([false, 'default', 'alternative']),
  rightIcon: PropTypes.oneOf([PropTypes.object, PropTypes.element]),
  size: PropTypes.number,
  style: PropTypes.object,
  loading: PropTypes.bool,
  enterKey: PropTypes.func,
  px: PropTypes.number,
};

Button.defaultProps = {
  px: 2,
  disabled: false,
  variant: 'filled',
  color: 'primary1',
  fontColor: 'white',
  radius: 'default',
  size: 4,
  loading: false
};

export default withTheme(Button);