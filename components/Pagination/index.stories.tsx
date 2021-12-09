import { TemplateContainer } from 'prensa'
import { Pagination } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

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
        mt={[2, 2]}>
        <Pagination
          numFound={12}
          rows={10}
          start={1}
          path='/'
          query={{ term: '' }}
        />
        <Pagination
          numFound={76}
          rows={10}
          start={10}
          path='/'
          query={{ term: '' }}
        />
        <Pagination
          numFound={48}
          rows={10}
          start={30}
          path='/'
          query={{ term: '' }}
        />
        <Pagination
          numFound={323}
          rows={10}
          start={40}
          path='/'
          query={{ term: '' }}
        />
      </TemplateContainer>
    </ThemeProvider>
  )
}
