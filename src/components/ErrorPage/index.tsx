import React from 'react'
import { ErrorPageProps } from './types'

import * as S from './styled'

const ErrorPage = ({
  buttonText,
  colorButton,
  colorTitle,
  message,
  title
}: ErrorPageProps) => {
  return(
    <S.ContainerError>
      <S.ContentError>
        <S.PageTitle 
          color={colorTitle}
          text={title}>
        </S.PageTitle>
        <S.Message text={message} />
        <S.ButtonGoBack
          buttonAction='./'
          color={colorButton}>
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
  colorButton: 'black',
  colorTitle: 'black'
}
