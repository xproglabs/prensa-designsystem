import React from 'react'

import Block from '../NewBlock/index.tsx'

export const ContainerCopyright = ({ bgColor, children, pb }) => (
  <Block
    align={['column', 'row']}
    alignx={['left', 'center']}
    aligny={['middle', 'middle']}
    bgColor={bgColor}
    pb={pb}
    pt={[5, 3]}
    px={2}
    width='calc(100% - 32px)'
  >
    {children}
  </Block>
)

ContainerCopyright.defaultProps = {
  bgColor: 'neutral9',
  pb: [3, 3]
}

export const ContainerCopyrightBox = ({ children }) => (
  <Block 
    align={['column', 'row']}
    alignx={['left', 'between']}
    aligny={['top', 'top']}
    custom='max-width: 1280px;'
    width='100%'
  >
    {children}
  </Block>
)

export const ContainerCopyrightItems = ({ children }) => (
  <Block alignx='center' mb={[3, 0]}>
    {children}
  </Block>
)

export const ContainerCompanies = ({ children }) => (
  <Block align={['column', 'row']}>
    {children}
  </Block>  
)

export const ContainerLogo = ({ children }) => (
  <Block align='column' mb={[2, 0]} mr={[0, 5]}>
    {children}
  </Block>
)

export const ContainerLogoXprog = ({ children }) => (
  <Block align='column'>
    {children}
  </Block>
)



