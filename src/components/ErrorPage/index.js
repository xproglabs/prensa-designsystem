import React from 'react'

import * as S from './styled'

const ErrorPage = ({
  buttonAction,
  buttonText,
  color,
  message,
  title
}) =>{
  return(
    <S.ContainerError>
      <S.ContentError>
        <S.PageTitle 
          color = {color}
          text={title} >
          {title}
        </S.PageTitle>
        <S.Message text={message}>
          {message}
        </S.Message>
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
