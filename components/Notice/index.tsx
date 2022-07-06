import React from 'react'

import { NoticeProps } from './props'
import {
  ButtonFile,
  ButtonWrap,
  Container,
  Subject,
  Subtitle,
  TextWrap,
  Title
} from './styled'

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
        <ButtonFile {...buttonProps}>
          VER PDF
        </ButtonFile>
      </ButtonWrap>
    </Container>
  )
} 

export { Notice } 