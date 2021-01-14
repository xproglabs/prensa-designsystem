import PropTypes from 'prop-types';
import React from 'react';
import styled, {withTheme} from 'styled-components';

const parseColorVariation = props => {
  if (props.transparent === true) return `
    color: ${props.theme.parseColorValue(props, 'subjectColor')};
  `;
  return `
    color: ${props.theme.colors.white};
  `;
};

const parseBackgroundVariation = props => {
  if (props.transparent === true) return 'background-color: transparent;';
  return `background-color: ${props.theme.parseColorValue(props, 'subjectColor')};`;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 28px;
  ${props => props.theme.parsePadding(props.theme, props)};
  ${props => props.theme.parseMargin(props.theme, props)};
  ${props => props.theme.parseRadius(props, 'borderRadius')};
  ${props => parseBackgroundVariation(props)};
`;
const Typography = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: ${props => props.fontWeight};
  ${props => parseColorVariation(props)};
`;

const Subject = ({children, color, radius, px, mb, style, transparent, weight}) => {
  if (!children) return null;
  return (
    <Container subjectColor={color} borderRadius={radius} px={px} mb={mb} transparent={transparent} style={style}>
      <Typography fontWeight={weight} transparent={transparent}>
        {children}
      </Typography>
    </Container>
  );
};

Subject.defaultProps = {
  px: 1,
  mb: 3,
  radius: 'alternative',
  transparent: false,
  weight: 700
};

Subject.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  transparent: PropTypes.bool,
  style: PropTypes.object,
  radius: PropTypes.oneOf([false, 'default', 'alternative']),
  theme: PropTypes.object,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  weight: PropTypes.oneOf([300, 400, 500, 600, 700])
};

export default withTheme(Subject);