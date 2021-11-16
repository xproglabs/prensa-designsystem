import { AuthorBio } from 'prensa'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'AuthorBio'
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthorBio
        authorBio='Mineiro de Muriaé, Leandro Mazzini é jornalista pós-graduado em Ciência Política pela UnB e escritor reportagem@colunaesplanada.com.br'
        authorBioProps={{
          color: 'neutral2',
          fontSize: '12px',
          fontWeight: 400
        }}
        authorTitle='Aldecir Xavier'
        authorTitleProps={{
          color: 'neutral2',
          fontSize: '18px',
          fontWeight: 700
        }}
        containerProps={{
          b: '1px',
          bgColor: 'white',
          borderColor: 'neutral9'
        }}
        columnTitleProps={{
          color: 'neutral2',
          fontSize: '18px',
          fontWeight: 700,
          mb: 1
        }}
        hasFacebook={true}
        hasInstagram={true}
        hasLinkedin={true}
        hasTwitter={true}
      />
    </ThemeProvider>
  )
}

