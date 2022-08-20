import { map } from 'lodash'
import React from 'react'

import {
  Container,
  ContainerSelect,
  ContentSelect,
  Title
} from './styled'
import { PageTitleProps } from './types'

const PageTitle = ({
  containerProps,
  titleProps,
  title,
  hasSelect,
  items
}: PageTitleProps) => {
  const SelectOption = ({ item }) => {
    return (
      <>
        <option>{item}</option>
      </>
    )
  }
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
            <select>
              {map(items, (item, key) => {
                return <SelectOption item={item} key={key}  />
              })}
            </select>
          </ContentSelect>   
        </ContainerSelect>  
      } 
    </Container>
  )
}


export { PageTitle }