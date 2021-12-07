import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import AuthorProfile from '../AuthorProfile'

export default {
  title: 'AuthorProfile',
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const Default = () => {
  return (
    <React.Fragment>
      <AuthorProfile
        containerProps={{ mb: 1 }}
        name='Aldecir Xavier'
        title='Preto no Branco'
        image={{
          desktop_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          mobile_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          title: 'Imagem de perfil do colunista'
        }}
      />
      <AuthorProfile
        date='18/02/2021 - 00h46 - Atualizado 10h06'
        title='Preto no Branco'
        image={{
          desktop_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          mobile_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
          title: 'Imagem de perfil do colunista'
        }}
        imageWrapProps={{
          mr: 1,
          height: '32px',
          minWidth: '32px',
          width: '32px'
        }}
        newsTitle='Conspiração'
        newsTitleProps={{
          mb: 2
        }}
        titleProps={{
          fontSize: '14px',
          mb: '0px'
        }}
      />
    </React.Fragment>
  )
}

export const NoData = () => {
  return (
    <AuthorProfile
      date={undefined}
      title={undefined}
      image={{
        desktop_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
        mobile_path: 'https://qa.hojeemdia.com.br/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600',
        title: 'Imagem de perfil do colunista'
      }}
      imageWrapProps={{
        mr: 1,
        height: '32px',
        minWidth: '32px',
        width: '32px'
      }}
      newsTitle={undefined}
      newsTitleProps={{
        mb: 2
      }}
      titleProps={{
        fontSize: '14px',
        mb: '0px'
      }}
    />
  )
}

