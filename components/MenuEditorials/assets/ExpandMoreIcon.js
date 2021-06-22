import React from 'react';

import Icon from '../../Icon';

const ExpandMoreIcon = props => {
  return (
    <Icon {...props}>
      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
    </Icon>
  );
};

export default ExpandMoreIcon;