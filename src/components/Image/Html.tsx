import React from 'react'

import * as S from './styled'
import * as T from './types'

const RenderHtmlImage = (props) => {
  if (props.renderType === 'responsive') {
    return (
      <S.HtmlBackgroundStyled
        className={props.className}
        href={props.path}
      />
    )
  }
  return (
    <S.HtmlImageStyled
      className={props.className}
      src={props.path}
    />
  )
}

const HtmlImage = ({
  custom_class,
  layout_desktop,
  layout_mobile,
  title
}: T.ImageHtmlProps) => {
  return (
    <>
      {layout_desktop.enabled && (
        <RenderHtmlImage
          className={`hide_mobile ${custom_class}`}
          renderType={layout_desktop.type}
          path={layout_desktop.path}
        />
      )}
      {layout_mobile.enabled && (
        <RenderHtmlImage
          className={`hide_desktop ${custom_class}`}
          renderType={layout_mobile.type}
          path={layout_desktop.path}
        />
      )}
    </>
  )
}

export default HtmlImage