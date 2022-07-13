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
SelectOption.defaultProps = {
  title: '',
  link: ''
}

const PageTitle = ({
  containerProps,
  titleProps,
  title,
  hasSelect,
  items
}: PageTitleProps) => {
  const handleChange = event => {
    if (event.target.value) {
      location.href = event.target.value
    } 
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
            <select onChange={handleChange}>
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