import React from 'react'
import { ErrorPageProps } from './types'

import * as S from './styled'

const ErrorPage = ({
  buttonText,
  color,
}: ErrorPageProps) => {
  return(
    <S.ContainerError>
      <S.ContentError>
        <S.PageTitle 
          color='black'
          text='Ops!'>
        </S.PageTitle>
        <S.Message text='Página não encontrada.' />
        <S.ButtonGoBack
          buttonAction='./'
          color={color}>
          {buttonText}
        </S.ButtonGoBack>
      </S.ContentError>
    </S.ContainerError>
  )
}

export { ErrorPage }

ErrorPage.defaultProps = {
  buttonText: 'Voltar',
  message: 'Página não encontrada.',
  title: 'Ops!',
  color: 'black'
}
