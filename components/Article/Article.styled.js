import PropTypes from 'prop-types'
import React from 'react'

import Block from '../Block/index.tsx'

export const Container = ({
  children,
  maxWidth
}) => 
  <Block
    align='column'
    alignx='center'
    maxWidth={maxWidth}
    width='100%'
  >
    {children}
  </Block>

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
}

export const Content = ({ children }) => (
  <Block
    px={[2, 0]}
    width={['calc(100% - 32px)', '100%']}
  >
    {children}
  </Block>
)

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
  
export const ContainerFeatured = ({ children }) => (
  <Block
    align='column'
    aligny='bottom'
    alignx='center'
    bgColor='neutral2'
    mb={4}
    width='100%'
  >
    {children}
  </Block>
)

ContainerFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
  
export const ContentFeatured = ({ children, maxWidth }) => (
  <Block
    alignx='left'
    custom={'position: absolute;'}
    maxWidth={maxWidth}
    px={3}
    pb={2}
    width='calc(100% - 48px)'
  >
    {children}
  </Block>
)

ContentFeatured.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
}

export const ContentImage = ({ children }) => (
  <Block
    custom={'opacity: 0.5;'}
    height={['420px', '520px']}
    width='100%'
  >
    {children}
  </Block>
)

ContentImage.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export const MaxWidth = ({
  children, 
  maxWidth
}) => {
  return (
    <Block
      maxWidth={maxWidth}
      width='100%'
    >
      {children}
    </Block>
  )
}
MaxWidth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  maxWidth: PropTypes.string
}

export const Page = ({ children }) => (
  <Block
    align={['column', 'column']}
    alignx={['left', 'center']}
    width='100%'
  >
    {children}
  </Block>
)

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
