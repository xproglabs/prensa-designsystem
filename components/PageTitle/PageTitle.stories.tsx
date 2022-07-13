import { PageTitle } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'PageTitle'
}

export const PageTitleDefault = () => {
  const handleChange = event => {
    if (event.target.value) {
      location.href = event.target.value
    } 
  }
  return (
    <ThemeProvider theme={theme}>
      <PageTitle
        containerProps={{
          mb: 5
        }}
        items={[
          {
            'title': 'Uberaba',
            'link': '/uberaba'
          },
          {
            'title': 'Goiânia',
            'link': '/goiania'
          }
        ]}
        hasSelect={true}
        selectChange={handleChange}
        titleProps={{
          color: 'primary1',
          fontSize: '24px',
          fontWeight: 700,
          mb: 2,
          transform: 'uppercase'
        }}
        title='TESTE DE TÍTULO DE EDITORIA'>
      </PageTitle>
    </ThemeProvider>
  )
}