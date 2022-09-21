import React from 'react'

import * as S from './styles'
import * as t from './types'

const Item: React.FC<t.ItemProps> = (props) => {
  return (
    <S.Item
      className={props.className}
      customCss={{ ...props.defaultCss, ...props.customCss }}
      {...props.customProps}
    >
      <a href={props.path}>
        <S.ItemLabel name={props.name} path={props.path}>
          {props.name}
        </S.ItemLabel>
      </a>
    </S.Item>
  )
}

export { Item }