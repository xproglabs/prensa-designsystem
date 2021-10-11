import React from 'react'
import styled from 'styled-components'

import Block from '../Block'
import { Title } from './styled'
import { SectionTitleProps } from './types'

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Block>
      <Title>
        {title}
      </Title>
    </Block>
  )
}

export const SectionTitleBlank = styled.div`
  height: 18px;
  width: 100%;
`

export default SectionTitle