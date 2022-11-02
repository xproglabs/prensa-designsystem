import React from 'react'

import { useComponentFromProps } from '../../hooks'
import { Block } from '../../primitives/Block'
import * as S from './styled'
import { FooterProps } from './types'

export const Footer: React.FC<FooterProps> = ({
  css,
  slotTop,
  slotTopProps,
  slotMiddle,
  slotMiddleProps,
  slotBottom,
  slotBottomProps,
}) => {
  return (
    <S.Footer css={css?.containerCss}>
      {slotTop &&
        <Block css={css?.slotTopCss}>
          {useComponentFromProps({
            component: slotTop,
            componentProps: slotTopProps
          })}
        </Block>
      }
      <Block css={css?.slotMiddleCss}>
        {useComponentFromProps({
          component: slotMiddle,
          componentProps: slotMiddleProps,
        })}
      </Block>
      {slotBottom &&
        <Block css={css?.slotBottomCss}>
          {useComponentFromProps({
            component: slotBottom,
            componentProps: slotBottomProps
          })}
        </Block>
      }
    </S.Footer>
  )
}