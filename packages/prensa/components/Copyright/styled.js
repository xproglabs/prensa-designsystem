import React from 'react'

import Block from '../Block'

export const ContainerCopyright = ({ bgColor, children, pb }) =>
  <Block
    align='column'
    aligny='middle'
    bgColor={bgColor}
    pb={pb[0]}
    pt={5}
    px={2}
    width='calc(100% - 32px)'
    lg={{
      align: 'row',
      alignx: 'center',
      pb: pb[1],
      pt: 3
    }}
  >
    {children}
  </Block>

ContainerCopyright.defaultProps = {
  bgColor: 'neutral9',
  pb: [3, 3]
}

export const ContainerCopyrightBox = ({ children }) => 
  <Block 
    align='column'
    alignx='left'
    aligny='top'
    custom='max-width: 1280px'
    width='100%'
    lg={{
      align: 'row',
      alignx: 'between'
    }}
  >
    {children}
  </Block>

export const ContainerCopyrightItems = ({ children }) =>
  <Block
    alignx='center'
    mb={3}
    lg={{ mb: '0px' }}
  >
    {children}
  </Block>

export const ContainerCompanies = ({ children }) =>
  <Block
    align='column'
    lg={{ align: 'row' }}
  >
    {children}
  </Block>  

export const ContainerLogo = ({ children }) =>
  <Block
    align='column'
    mb={2}
    lg={{
      mb: '0px',
      mr: 5
    }}
  >
    {children}
  </Block>

export const ContainerLogoXprog = ({ children }) =>
  <Block
    align='column'
    lg={{
      mr: '0px'
    }}
  >
    {children}
  </Block>



