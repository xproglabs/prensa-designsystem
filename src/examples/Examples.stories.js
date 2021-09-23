import { get } from 'lodash'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import PageBlock from '../components/PageBlocks'
import DATA_7030 from '../mockup/hojeemdia/7.172.json'
import DATA_LINE1 from '../mockup/hojeemdia/7.186.json'
import DATA_LINE2 from '../mockup/hojeemdia/7.204.json'
import { theme } from '../styles/demo/hojeemdia'
import TemplateContainer from '../templates/TemplateContainer'

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
  return (
    <TemplateContainer
      mb={[2, 2]}
      mt={[2, 2]}>
      <PageBlock
        {...DATA_LINE1}
      />
    </TemplateContainer>
  )
}