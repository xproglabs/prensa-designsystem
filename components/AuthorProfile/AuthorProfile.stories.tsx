import { get, map } from 'lodash'
import React from 'react'
import { theme } from 'storybook/theme'
import { ThemeProvider } from 'styled-components'

import DATA_OPINIAO from '../../styles/demo/hed/data/opiniao.json'
import AuthorProfile from '../AuthorProfile'
import { parseImagePath } from '../Image/parser'
import TemplateContainer from '../Templates/TemplateContainer'

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

const domain = 'http://177.107.132.35:3000'

export const Default = () => {
  return (
    <React.Fragment>
      <AuthorProfile
        containerProps={{ mb: 1 }}
        name='Aldecir Xavier'
        href='/opiniao'
        title='Preto no Branco'
        image={{
          desktop_path: `${domain}/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600`,
          mobile_path: `${domain}/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600`,
          title: 'Imagem de perfil do colunista'
        }}
      />
      <AuthorProfile
        date='18/02/2021 - 00h46 - Atualizado 10h06'
        href='/opiniao/pretonobranco'
        title='Preto no Branco'
        image={{
          desktop_path: `${domain}/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600`,
          mobile_path: `${domain}/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600`,
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
        desktop_path: `${domain}/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600`,
        mobile_path: `${domain}/image/policy:1.787226.1628829880:1628829880/image.jpg?f=1x1&w=600`,
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

export const List = () => {
  return (
    <TemplateContainer
      background='neutral10'
      mb={[2, 2]}
      mt={[2, 2]}>
      {map(get(DATA_OPINIAO, 'slot2.list1', []), (content, key) => {
        const image_id = get(content, 'img', false)
        let image_path
        if (image_id && image_id !== '') {
          image_path = parseImagePath('false', domain, image_id, 120)
        }
        if (!image_path || image_path == '') {
          const fallback_id = '1.787226.1628829880'
          image_path = parseImagePath('false', domain, fallback_id, 120)
        }
        return (
          <AuthorProfile
            image={{
              desktop_path: image_path,
              mobile_path: image_path,
              title: content.name
            }}
            href={content.path}
            key={key}
            name={content.subtitle}
            title={content.name}
          />
        )
      })}
    </TemplateContainer>
  )
}