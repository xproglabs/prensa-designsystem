import PropTypes from 'prop-types';
import React from 'react';
import styled, {withTheme} from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  height: 28px;
  background-color: ${props => props.theme.parseColorValue(props, 'subjectColor')};
  ${props => props.theme.parsePadding(props.theme, props)};
  ${props => props.theme.parseMargin(props.theme, props)};
  ${props => props.theme.parseRadius(props, 'borderRadius')};
`;
const SubjectTypography = styled.span`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  color: white;
  text-transform: uppercase;
`;

const Subject = ({children, color, radius, px, mb, style, theme}) => {
  if (!children) return null;
  return (
    <Container subjectColor={color} borderRadius={radius} px={px} mb={mb} style={style}>
      <SubjectTypography theme={theme}>{children}</SubjectTypography>
    </Container>
  );
};

Subject.defaultProps = {
  px: 1,
  mb: 3,
  radius: 'alternative'  
};

Subject.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  filled: PropTypes.bool,
  style: PropTypes.object,
  radius: PropTypes.oneOf([false, 'default', 'alternative']),
  theme: PropTypes.object,
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default withTheme(Subject);