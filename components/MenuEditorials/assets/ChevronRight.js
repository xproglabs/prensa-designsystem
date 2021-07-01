import React from 'react';

import Icon from '../../Icon';

const ChevronRight = props => {
  return (
    <Icon {...props}>
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/>
    </Icon>
  );
};

export default ChevronRight;