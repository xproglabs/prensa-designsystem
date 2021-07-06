import {useAmp} from 'next/amp';
import Head from 'next/head';
import {MenuEditorials, SideMenu} from 'prensa';
import React from 'react';

import {Main} from '../components/Container';
import mockedData from '../sidemenu_datamodel.json';
import styles from '../styles/Home.module.css';

export const config = {amp: true};

export default function Menu() {

  const amp = useAmp();

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
        <button on="tap:sideMenu.open,AMP.setState({})">Abrir Menu</button>
        <SideMenu backgroundColor='white' id='sideMenu' amp={amp}>
          <MenuEditorials amp={amp} items={mockedData} title='testando' />
        </SideMenu>
      </Main>
    </div>
  );
}
