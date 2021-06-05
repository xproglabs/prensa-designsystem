import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from 'react'
import {ServerStyleSheet} from 'styled-components'

class MyDocument extends Document {

  //ADICIONA TAG DE ESTILO DO STYLED_COMPONENTS NAS PROPS
  static getInitialProps({renderPage}) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet()
    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement()
    // Step 4: Pass styleTags as a prop
    return {...page, styleTags}
  }

  render() {
    return (
      <Html lang='ptBR'>
        <Head>
          <style amp-custom='' dangerouslySetInnerHTML={{__html: `${this.props.styleTags[0].props.dangerouslySetInnerHTML.__html}`}} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
