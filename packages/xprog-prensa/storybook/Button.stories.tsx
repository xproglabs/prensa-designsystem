import React from 'react'

import { Block } from '../primitives/Block/index'
import { Button } from '../primitives/Button/index'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'

export default { title: 'PrensaDS/Button', component: Button }

export const Sizes = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          size='xs'
          variant='filled'
          roundedCorners
        >
          Extra Small fox
        </Button>
        <Button
          size='sm'
          variant='filled'
          roundedCorners
        >
          Small fox
        </Button>
        <Button
          size='md'
          variant='filled'
          roundedCorners
        >
          Medium fox
        </Button>
        <Button
          size='lg'
          variant='filled'
          roundedCorners
        >
          Large fox
        </Button>
        <Button
          size='xl'
          variant='filled'
          roundedCorners
        >
          Extra Large fox
        </Button>
      </Block>
    </PrensaThemeProvider>
  )
}

export const Filled = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          size='md'
          variant='filled'
          roundedCorners
        >
          Medium fox
        </Button>
      </Block>
    </PrensaThemeProvider>
  )
}

export const Outlined = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          size='md'
          textColor='neutral2'
          variant='outlined'
          roundedCorners
        >
          Medium fox
        </Button>
      </Block>
    </PrensaThemeProvider>
  )
}

export const Disabled = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          disabled
          roundedCorners
          size='md'
          variant='filled'
        >
          Medium fox
        </Button>
      </Block>
    </PrensaThemeProvider>
  )
}