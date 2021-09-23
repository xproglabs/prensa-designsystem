import PropTypes from 'prop-types'
import React from 'react'

import { theme } from '../../styles/theme.ts'
import Block from '../Block'
import Button from '../Button'
import Typography from '../Typography'

export const Area = ({ children }) =>
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

Area.propTypes = {
  children: PropTypes.object
}

export const ButtonSubmit = ({ buttonAction, children }) =>
  <Button
    align='row'
    aligny='middle'
    alignx='center'
    bgColor='primary1'
    onClick={buttonAction}
    width='100%'
    sm={{
      width: 'auto'
    }}
  >
    {children}
  </Button>

ButtonSubmit.propTypes = {
  buttonAction: PropTypes.func,
  children: PropTypes.string
}

export const Container = ({ children }) =>
  <Block
    align='column'
    aligny='middle'
    alignx='center'
    py={2}
    px={2}
    width='calc(100% - 32px)'
    custom={`
      min-height: calc(72px - 32px);
      max-width: 1024px;
    `}
    sm={{
      align: 'row',
      aligny: 'middle',
      alignx: 'center'
    }}
  >
    {children}
  </Block>

Container.propTypes = {
  children: PropTypes.array
}

export const Content = ({ children }) =>
  <Block
    align='row'
    aligny='middle'
    alignx='center'
    custom={`
      a {
        color: ${theme.colors['primary3']};
        cursor: pointer;
        text-decoration: underline;
      }
    `}
    width='100%'
  >
    {children}
  </Block>

Content.propTypes = {
  children: PropTypes.object
}

export const Message = ({ text }) =>
  <Typography 
    color="neutral2"
    dangerouslySetInnerHTML={text}
    element="p"
    fontFamily="secondary"
    fontSize="12px"
    fontWeight={400}
    lineHeight="14px"
    sm={{
      mb: '0'
    }}
    mb={2}
    mr={2} />

Message.propTypes = {
  text: PropTypes.string
}