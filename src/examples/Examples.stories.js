import { get } from 'lodash'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import PAGEBLOCK_DATA from '../mockup/hojeemdia/7.127.json'
import { theme } from '../styles/demo/hojeemdia'
import Container from '../templates/Container'
import { PageBlock } from '../templates/PageBlock'

export default {
  title: 'Examples',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story/>
      </ThemeProvider>
    )
  ]
}

export const HojeEmDiaHome = () => {
  const teasers = get(theme, 'teasers', {})
  return (
    <Container
      mb={[2, 2]}
      mt={[2, 2]}
      theme={theme}>
      <PageBlock
        content={PAGEBLOCK_DATA}
        teasers={teasers}
      />
    </Container>
  )
}