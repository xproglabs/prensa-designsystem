import React from 'react'

import * as S from './styled'

const ErrorPage = ({
  buttonAction,
  buttonText,
  color,
  message,
  title
}) => {
  return(
    <S.ContainerError>
      <S.ContentError>
        <S.PageTitle 
          color={color}
          text={title}>
        </S.PageTitle>
        <S.Message text={message}/>
        <S.ButtonGoBack
          buttonAction={buttonAction}
          color={color}>
          {buttonText}
        </S.ButtonGoBack>
      </S.ContentError>
    </S.ContainerError>
  )
}

export { ErrorPage }
