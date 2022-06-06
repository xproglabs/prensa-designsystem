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
  hasSelect
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
            <select name='' id=''>
              <option>Item1</option>
              <option>Item2</option>
              <option>Item3</option>
            </select>
          </ContentSelect>   
        </ContainerSelect>  
      } 
    </Container>
  )
}


export { PageTitle }