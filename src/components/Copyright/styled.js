import { Block } from 'prensa'
import React from 'react'

import { 
  CONTAINER_ATEX, 
  CONTAINER_BOTTOM, 
  CONTAINER_COPYRIGHT, 
  CONTAINER_COPYRIGHT_ITEMS, 
  CONTAINER_COMPANIES, 
  CONTAINER_FOOTER, 
  CONTAINER_LEFT,
  CONTAINER_RIGHT,
  CONTAINER_TEXT,
  CONTAINER_XPROG, 
  CONTENT_FOOTER, 
} from './consts'

export const ContainerAtex = ({ children }) =>
  <Block
    {...CONTAINER_ATEX}>
    {children}
  </Block>

export const ContainerBottom = ({ children }) =>
  <Block
    {...CONTAINER_BOTTOM}>
    {children}
  </Block>

export const ContainerCopyright = ({ children }) =>
  <Block
    {...CONTAINER_COPYRIGHT}>
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

export const ContainerText = ({ children }) =>
  <Block
    {...CONTAINER_TEXT}>
    {children}
  </Block>

export const ContainerLeft = ({ children }) =>
  <Block
    {...CONTAINER_LEFT}>
    {children}
  </Block>  

export const ContainerFooter = ({ children }) =>
  <Block
    {...CONTAINER_FOOTER}>
    {children}
  </Block>

export const ContainerRight = ({ children }) =>
  <Block
    {...CONTAINER_RIGHT}>
    {children}
  </Block>
   
export const ContainerXprog = ({ children }) =>
  <Block
    {...CONTAINER_XPROG}>
    {children}
  </Block>  

export const ContentFooter = ({ children }) =>
  <Block
    {...CONTENT_FOOTER}>
    {children}
  </Block>

