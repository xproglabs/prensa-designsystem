import PropTypes from 'prop-types';
import React from 'react';

import {Container, Svg} from './styled';

const Icon = ({children, containerProps, color, height, viewBox, width, ...otherProps}) => {
  return (
    <Container {...containerProps}>
      <Svg xmlns="http://www.w3.org/2000/svg" $color={color} height={height} viewBox={viewBox} width={width} {...otherProps}>
        {children}
      </Svg>
    </Container>
  );
};

Icon.defaultProps = {
  color: 'neutral3',
  height: '24px',
  m: '8px',
  viewBox: '0 0 24 24',
  width: '24px',
};

Icon.propTypes = {
  children: PropTypes.node,
  containerProps: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.string,
  m: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  otherProps: PropTypes.any
};

export default Icon;