import React from 'react'

import {
  ButtonPdf,
  ButtonWrap,
  Container,
  ContentWrap,
  Subject,
  Subtitle,
  TextWrap,
  Title
} from './styled'

import { NoticeProps } from './types'

const Notice = ({
  buttonProps,
  containerProps,
  subject,
  subjectProps,
  subtitle,
  subtitleProps,
  title,
  titleProps
}: NoticeProps) => {
  return (
    <Container {...containerProps}>
      <ContentWrap>
        <TextWrap>
          {subject &&
            <Subject {...subjectProps}>
              {subject}
            </Subject>
          }
          {title &&
            <Title {...titleProps}>
              {title}
            </Title>
          }
          {subtitle &&
            <Subtitle {...subtitleProps}>
              {subtitle}
            </Subtitle>
          }
        </TextWrap>
        <ButtonWrap>
          <ButtonPdf {...buttonProps}>
            VER PDF
          </ButtonPdf>
        </ButtonWrap>
      </ContentWrap>
    </Container>
  )
} 

export { Notice } 