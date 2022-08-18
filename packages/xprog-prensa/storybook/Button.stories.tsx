import React from 'react'

import { Block } from '../primitives/Block/index'
import { Button } from '../primitives/Button/index'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'

export default { title: 'PrensaDS/Button', component: Button }

const IconComponent = () => (
  <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 48 48'>
    <path d='M19.95 42 22 27.9h-7.3q-.55 0-.8-.5t0-.95L26.15 6h2.05l-2.05 14.05h7.2q.55 0 .825.5.275.5.025.95L22 42Z'/>
  </svg>
)

export const Variants = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          size='md'
          variant='ghost'
          roundedCorners
        >
          Medium fox
        </Button>
        <Button
          size='md'
          variant='outlined'
          roundedCorners
        >
          Medium fox
        </Button>
        <Button
          size='md'
          roundedCorners
        >
          Medium fox
        </Button>
      </Block>
    </PrensaThemeProvider>
  )
}

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

export const Disabled = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          disabled
          roundedCorners
          size='md'
          variant='ghost'
        >
          Medium fox
        </Button>
        <Button
          disabled
          roundedCorners
          size='md'
          variant='outlined'
        >
          Medium fox
        </Button>
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

export const UsingWithIcon = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          roundedCorners
          size='md'
          variant='outlined'
          iconLeft={<IconComponent/>}
        />
        <Button
          roundedCorners
          size='md'
          variant='outlined'
          iconLeft={<IconComponent/>}
        >
          Brown Fox
        </Button>
      </Block>
    </PrensaThemeProvider>
  )
}

export const Colored = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <Button
          roundedCorners
          size='md'
          variant='ghost'
          iconLeft={<IconComponent/>}
          color='errorMain'
        >
          Brown Fox
        </Button>
        <Button
          roundedCorners
          size='md'
          variant='outlined'
          iconLeft={<IconComponent/>}
          color='errorMain'
        >
          Brown Fox
        </Button>
        <Button
          roundedCorners
          size='md'
          variant='filled'
          iconLeft={<IconComponent/>}
          color='errorMain'
        >
          Brown Fox
        </Button>
      </Block>
    </PrensaThemeProvider>
  )
}