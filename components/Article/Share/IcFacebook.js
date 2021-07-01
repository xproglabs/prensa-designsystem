import PropTypes from 'prop-types';
import React from 'react';

import {IconContainer} from './styled';

const IcFaceboook = ({color, height, width}) => {
  return (
    <IconContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" $color={color} $height={height} $width={width}>
      <path d="M22.23,4.15H19.16c-3.45,0-5.69,2.29-5.69,5.83v2.69H10.38a.49.49,0,0,0-.48.48v3.9a.49.49,0,0,0,.48.49h3.09v9.83a.48.48,0,0,0,.49.48h4a.47.47,0,0,0,.48-.48V17.54h3.62a.49.49,0,0,0,.48-.49v-3.9a.49.49,0,0,0-.14-.34.48.48,0,0,0-.34-.14H18.47V10.39c0-1.1.26-1.65,1.69-1.65h2.07a.49.49,0,0,0,.49-.49V4.63A.49.49,0,0,0,22.23,4.15Z"/>
    </IconContainer>
  );
};

IcFaceboook.defaultProps = {
  width: '24',
  height: '24',
  color: 'primary1'
};

IcFaceboook.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export default IcFaceboook;