import React from 'react'

import Block from '../Block'
import { 
  CONTAINER_COPYRIGHT, 
  CONTAINER_COPYRIGHT_BOX,
  CONTAINER_COPYRIGHT_ITEMS, 
  CONTAINER_COMPANIES, 
  CONTAINER_LOGO, 
  CONTAINER_LOGO_XPROG, 
} from './consts'

export const ContainerCopyright = ({ bgColor, children }) =>
  <Block
    {...CONTAINER_COPYRIGHT}
    bgColor={bgColor}
  >
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
    {...CONTAINER_COPYRIGHT_ITEMS}
  >
    {children}
  </Block>

export const ContainerCompanies = ({ children }) =>
  <Block
    {...CONTAINER_COMPANIES}
  >
    {children}
  </Block>  

export const ContainerLogo = ({ children }) =>
<Block
  {...CONTAINER_LOGO}
>
  {children}
</Block>

export const ContainerLogoXprog = ({ children }) =>
<Block
  {...CONTAINER_LOGO_XPROG}
>
  {children}
</Block>



