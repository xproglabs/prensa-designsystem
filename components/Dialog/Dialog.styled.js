import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../Block/index.ts'
import Button from '../Button'
import Typography from '../Typography'

export const Area = ({ children }) => (
  <Block
    align='row'
    aligny='middle'
    alignx='center'
    bgColor='neutral9'
    width='100%'
    custom={`
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
    `}
  >
    {children}
  </Block>
)

Area.propTypes = {
  children: PropTypes.object
}

export const ButtonSubmit = ({ buttonAction, children }) => (
  <Button
    align='row'
    aligny='middle'
    alignx='center'
    bgColor='primary1'
    onClick={buttonAction}
    width={['auto', '100%', '100%']}
  >
    {children}
  </Button>
)

ButtonSubmit.propTypes = {
  buttonAction: PropTypes.func,
  children: PropTypes.string
}

export const Container = ({ children }) => (
  <Block
    align={['column', 'row', 'row', 'row']}
    aligny='middle'
    alignx='center'
    py={2}
    px={2}
    minHeight='calc(72px - 32px)'
    maxWidth='1024px'
    width='calc(100% - 32px)'
  >
    {children}
  </Block>
)

Container.propTypes = {
  children: PropTypes.array
}

const ThemedContent = ({ children, theme }) => {

  const custom_style = `
    a {
      color: ${theme.colors['primary3']};
      cursor: pointer;
      text-decoration: underline;
    }
  `

  return (
    <Block
      align='row'
      aligny='middle'
      alignx='center'
      custom={custom_style}
      width='100%'
    >
      {children}
    </Block>
  )
}

export const Content = withTheme(ThemedContent)

Content.propTypes = {
  children: PropTypes.object
}

export const Message = ({ text }) => (
  <Typography 
    color="neutral2"
    dangerouslySetInnerHTML={{ __html: text }}
    element="p"
    fontFamily="secondary"
    fontSize="12px"
    fontWeight={400}
    lineHeight="14px"
    mb={[0, 2, 2]}
    mr={2}
  />
)

Message.propTypes = {
  text: PropTypes.string
}