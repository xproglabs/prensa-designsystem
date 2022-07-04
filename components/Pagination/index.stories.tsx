import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import Pagination from '../Pagination'
import TemplateContainer from '../Templates/TemplateContainer'

export default {
  title: 'Pagination',
  component: Pagination,
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <TemplateContainer
        background='neutral10'
        mb={[2, 2]}
        mt={[2, 2]}
      >
        <Pagination
          numFound={12}
          rows={10}
          start={1}
          path='/geral'
          query={{ term: 'teste' }}
        />
        <Pagination
          numFound={76}
          rows={10}
          start={10}
          path='/'
          query={{ term: '' }}
        />
        <Pagination
          numFound={800}
          rows={10}
          start={30}
          path='/'
          query={{ term: '' }}
        />
        <Pagination
          numFound={1000}
          rows={10}
          start={40}
          path='/'
          query={{ term: '' }}
        />
        <Pagination
          numFound={13000}
          rows={10}
          start={40}
          path='/'
          query={{ term: '' }}
        />
      </TemplateContainer>
    </ThemeProvider>
  )
}
