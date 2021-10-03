import React from 'react'
import { ErrorPageProps } from './types'

import * as S from './styled'

const ErrorPage = ({
  buttonAction,
  buttonText,
  colorButton,
  colorTitle,
  message,
  title
}: ErrorPageProps) => {
  return (
    <S.ContainerError>
      <S.ContentError>
        <S.PageTitle color={colorTitle}>
          {title}
        </S.PageTitle>
        <S.Message>
          {message}
        </S.Message>
        <S.ButtonGoBack
          buttonAction={buttonAction}
          color={colorButton}
        >
          {buttonText}
        </S.ButtonGoBack>
      </S.ContentError>
    </S.ContainerError>
  )
}

ErrorPage.defaultProps = {
  buttonText: 'Voltar',
  buttonAction: '/',
  message: 'Página não encontrada.',
  title: 'Ops!',
  colorButton: 'black',
  colorTitle: 'black'
}

export { ErrorPage }