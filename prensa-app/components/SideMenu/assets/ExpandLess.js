import React from 'react';

import Icon from './icon';

const ExpandLessIcon = props => {
  return (
    <Icon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
    </Icon>
  );
};

export default ExpandLessIcon;