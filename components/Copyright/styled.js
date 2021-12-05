import React from 'react'

import Block from '../Block'
import { 
  CONTAINER_ATEX, 
  CONTAINER_COPYRIGHT, 
  CONTAINER_COPYRIGHT_BOX,
  CONTAINER_COPYRIGHT_ITEMS, 
  CONTAINER_COMPANIES, 
  CONTAINER_XPROG, 
} from './consts'

export const ContainerAtex = ({ children }) =>
  <Block
    {...CONTAINER_ATEX}>
    {children}
  </Block>

export const ContainerCopyright = ({ bgColor, children }) =>
  <Block
    {...CONTAINER_COPYRIGHT}
    bgColor={bgColor}>
    {children}
  </Block>

export const ContainerCopyrightBox = ({ children }) => 
  <Block 
    {...CONTAINER_COPYRIGHT_BOX}
  >
    {children}
  </Block>

export const ContainerCopyrightItems = ({ children }) =>
  <Block
    {...CONTAINER_COPYRIGHT_ITEMS}>
    {children}
  </Block>

export const ContainerCompanies = ({ children }) =>
  <Block
    {...CONTAINER_COMPANIES}>
    {children}
  </Block>  
   
export const ContainerXprog = ({ children }) =>
  <Block
    {...CONTAINER_XPROG}>
    {children}
  </Block>  

