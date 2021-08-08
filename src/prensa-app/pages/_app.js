import '../styles/globals.css'
import { theme } from 'prensa'
import React from 'react'
import { ThemeProvider, StyleSheetManager } from 'styled-components'

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
