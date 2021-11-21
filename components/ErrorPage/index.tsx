import React from 'react'

import * as S from './styled'
import { ErrorPageProps } from './types'


const ErrorPage = ({
  alignx,
  buttonAction,
  buttonColor,
  buttonText,
  message,
  title,
  titleColor
}: ErrorPageProps) => {
  return (
    <S.ContainerError>
      <S.ContentError alignx={alignx}>
        <S.PageTitle 
          color={titleColor}>
          {title}
        </S.PageTitle>
        <S.Message>
          {message}
        </S.Message>
        <S.ButtonGoBack
          buttonAction={buttonAction}
          color={buttonColor}>
          {buttonText}
        </S.ButtonGoBack>
      </S.ContentError>
    </S.ContainerError>
  )
}

ErrorPage.defaultProps = {
  alignx: 'left',
  buttonAction: '/',
  buttonColor: 'black',
  buttonText: 'Voltar',
  message: 'Página não encontrada.',
  title: 'Ops!',
  titleColor: 'black'
}

export default ErrorPage 