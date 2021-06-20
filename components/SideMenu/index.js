import React from 'react';

import AmpMenu from './AmpMenu';
import Menu from './Menu';

const SideMenu = props => {
  const {amp} = props;
  if (amp) return <AmpMenu {...props} />;
  else return <Menu {...props} />;
};

export default SideMenu;