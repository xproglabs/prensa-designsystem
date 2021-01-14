import React, {useState} from 'react';

import SideMenuComponent from './index';

const SideMenu = () => {

  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(true);
  };

  const handleClose = () => {
    setMenu(false);
  };

  return (
    <React.Fragment>
      <SideMenuComponent isOpen={menu} onClose={handleClose}>
        <pre>testando 123</pre>
        <pre>teste 123</pre>
        <pre>dkoansodnao</pre>
      </SideMenuComponent>
      <button onClick={() => handleClick()}>Abrir Menu</button>
    </React.Fragment>
  );
};

export default SideMenu;