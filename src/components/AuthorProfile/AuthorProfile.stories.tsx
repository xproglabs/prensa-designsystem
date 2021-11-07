import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import AuthorProfile from '../AuthorProfile'

export default {
  component: AuthorProfile,
  title: 'AuthorProfile',
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorProfile
        containerProps={{ mb: 1 }}
        authorTitle='Aldecir Xavier'
        columnTitle='Preto no Branco'
        image={{
          desktop_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          mobile_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          title: 'Imagem de perfil do colunista'
        }}
      />
      <AuthorProfile
        authorTitle='Aldecir Xavier'
        columnTitle='Preto no Branco'
        image={{
          desktop_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          mobile_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          title: 'Imagem de perfil do colunista'
        }}
        newsTitle='Conspiração'
      />
    </ThemeProvider>
  )
}

