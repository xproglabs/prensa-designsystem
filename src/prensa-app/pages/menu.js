import { useAmp } from 'next/amp'
import Head from 'next/head'
import { SideMenu } from 'prensa'
import React, { useState } from 'react'

import AccordionEditorial from '../components/AccordionEditorial'
import { Main } from '../components/Container'
import mockedData from '../sidemenu_datamodel.json'
import styles from '../styles/Home.module.css'

export const config = { amp: false }

export default function Menu() {

  const [menuState, setMenuState] = useState(false)
  const amp = useAmp()

  const openMenu = () => {
    setMenuState(true)
  }

  const closeMenu = () => {
    setMenuState(false)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Prensa/Menu</title>
        <meta name="description" content="Prensa menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <button onClick={openMenu}>Abrir Menu</button>
        <SideMenu id='sideMenu' amp={amp} open={menuState} close={closeMenu}>
          <AccordionEditorial amp={amp} items={mockedData} title='teste' />
        </SideMenu>
      </Main>
    </div>
  )
}
