import PropTypes from 'prop-types';
import React from 'react';
import styled, {withTheme} from 'styled-components';

const Container = styled.div`
  height: max-content;
  width: max-content;
`;
const Svg = styled.svg`
  fill: ${props => props.theme.colors[props.color]};
  margin: ${props => props.margin};
`;

const Icon = ({ampClass, children, color, height, margin, viewBox, width}) => {
  return (
    <Container data-amp-bind-class={ampClass}>
      <Svg xmlns="http://www.w3.org/2000/svg" color={color} height={height} margin={margin} viewBox={viewBox} width={width}>
        {children}
      </Svg>
    </Container>
  );
};

Icon.defaultProps = {
  color: 'neutral3',
  height: '24px',
  margin: '8px',
  viewBox: '0 0 24 24',
  width: '24px',
};

Icon.propTypes = {
  ampClass: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
};

export default withTheme(Icon);