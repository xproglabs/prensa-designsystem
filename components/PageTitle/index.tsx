import { map } from 'lodash'
import React from 'react'

import {
  Container,
  ContainerSelect,
  ContentSelect,
  Title
} from './styled'
import { PageTitleProps } from './types'

const SelectOption = ({ title, link }) => {
  return (
    <option value={link}>{title}</option>
  )
}

const PageTitle = ({
  containerProps,
  hasSelect,
  items,
  selectChange,
  title,
  titleProps
}: PageTitleProps) => {
  return (
    <Container {...containerProps}>
      {title &&
        <Title {...titleProps}>
          {title}
        </Title>
      }
      {hasSelect &&
        <ContainerSelect>
          <ContentSelect>
            <select onChange={selectChange}>
              {map(items, (item, key) => {
                return <SelectOption {...item} key={key}  />
              })}
            </select>
          </ContentSelect>   
        </ContainerSelect>  
      } 
    </Container>
  )
}


export { PageTitle }