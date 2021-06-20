import {useAmp} from 'next/amp';
import Head from 'next/head';
import React, {useState} from 'react';

import {Main} from '../components/Container';
import SideMenu from '../components/SideMenu';
import sideMenuMockedData from '../components/SideMenu/datamodel.json';
import styles from '../styles/Home.module.css';

export const config = {amp: false};

export default function Menu() {

  const [menuState, setMenuState] = useState(false);
  const amp = useAmp();

  const openMenu = () => {
    setMenuState(true);
  };

  const closeMenu = () => {
    setMenuState(false);
  };

  const buttonProps = {
    children: 'Abrir menu',
    on: amp ? 'tap:sideMenu.open,AMP.setState({})' : undefined,
    onClick: amp ? undefined : openMenu,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Prensa/Menu</title>
        <meta name="description" content="Prensa menu" />
        <link rel="icon" href="/favicon.ico" />
        <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"/>
        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"/>
      </Head>

      <Main>
        <button {...buttonProps} />
        <SideMenu
          id='sideMenu'
          amp={amp}
          content={sideMenuMockedData}
          footer={<pre>testando footer</pre>}
          header={<pre>testando header</pre>}
          open={menuState}
          close={closeMenu}
        />
      </Main>
    </div>
  );
}
