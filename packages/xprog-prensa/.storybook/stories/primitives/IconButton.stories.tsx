import React from 'react'

import { Block } from '../../../primitives/Block/index'
import { IconButton } from '../../../primitives/IconButton/index'
import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'

export default { title: 'Primitives/IconButton', component: IconButton }

const IconComponent = () => (
  <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24' viewBox='0 0 48 48'>
    <path d='M19.95 42 22 27.9h-7.3q-.55 0-.8-.5t0-.95L26.15 6h2.05l-2.05 14.05h7.2q.55 0 .825.5.275.5.025.95L22 42Z'/>
  </svg>
)

export const Variants = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          size='md'
          variant='ghost'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          size='md'
          variant='outlined'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          size='md'
          variant='filled'
        />
      </Block>
    </PrensaThemeProvider>
  )
}

export const Sizes = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          size='sm'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          size='md'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          size='lg'
        />
      </Block>
    </PrensaThemeProvider>
  )
}

export const RoundedCorners = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          roundedCorners='unset'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          roundedCorners='default'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          roundedCorners='alternative'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          roundedCorners='rounded'
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          roundedCorners='circle'
        />
      </Block>
    </PrensaThemeProvider>
  )
}

export const UsingIconProp = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <IconButton
          variant='ghost'
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
        />
        <IconButton
          variant='outlined'
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
        />
        <IconButton
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
        />
      </Block>
    </PrensaThemeProvider>
  )
}

export const UsingChildren = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <IconButton
          onClick={e => console.log(e)}
          variant='ghost'
        >
          <path d='M9.8 31.45q-1-1.8-1.4-3.625Q8 26 8 24.1q0-6.55 4.725-11.275Q17.45 8.1 24 8.1h2.15l-4-4 1.95-1.95 7.45 7.45-7.45 7.45-2-2 3.95-3.95H24q-5.35 0-9.175 3.825Q11 18.75 11 24.1q0 1.45.275 2.75t.675 2.45ZM23.8 46l-7.45-7.45 7.45-7.45 1.95 1.95-4 4H24q5.35 0 9.175-3.825Q37 29.4 37 24.05q0-1.45-.25-2.75T36 18.85l2.15-2.15q1 1.8 1.425 3.625Q40 22.15 40 24.05q0 6.55-4.725 11.275Q30.55 40.05 24 40.05h-2.25l4 4Z'/>
        </IconButton>
        <IconButton
          onClick={e => console.log(e)}
          variant='outlined'
        >
          <path d='M11 40q-1.2 0-2.1-.9Q8 38.2 8 37v-7.15h3V37h26v-7.15h3V37q0 1.2-.9 2.1-.9.9-2.1.9Zm13-7.65-9.65-9.65 2.15-2.15 6 6V8h3v18.55l6-6 2.15 2.15Z'/>
        </IconButton>
        <IconButton
          onClick={e => console.log(e)}
        >
          <path d='M19.95 42 22 27.9h-7.3q-.55 0-.8-.5t0-.95L26.15 6h2.05l-2.05 14.05h7.2q.55 0 .825.5.275.5.025.95L22 42Z'/>
        </IconButton>
      </Block>
    </PrensaThemeProvider>
  )
}

export const Colored = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <IconButton
          color='basicError500'
          variant='ghost'
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
        />
        <IconButton
          color='basicError500'
          variant='outlined'
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
        />
        <IconButton
          color='basicError500'
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
        />
      </Block>
    </PrensaThemeProvider>
  )
}

export const Customized = () => {
  return (
    <PrensaThemeProvider>
      <Block css={{ align: ['row', 'evenly', 'middle'], height: '100vh' }}>
        <IconButton
          variant='outlined'
          icon={<IconComponent/>}
          onClick={e => console.log(e)}
          css={{ button: { background: 'yellow' }, icon: { fill: 'green' } }}
          size='lg'
        />
      </Block>
    </PrensaThemeProvider>
  )
}