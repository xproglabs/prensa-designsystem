import '../styles/globals.css'
import {ThemeProvider, StyleSheetManager} from 'styled-components'
import {theme} from 'prensa'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  )
}

export default MyApp
