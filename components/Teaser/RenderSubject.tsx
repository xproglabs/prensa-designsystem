import { ColorTokens } from '@prensa_tokens'
import { get } from 'lodash'
import React from 'react'

import { EditArea } from '../EditArea'
import * as S from './styled'
import { LayoutProps, SpacingType  } from './types'
import { Block } from 'prensa'

export type VariantTypes = 'default' | 'filled'

export type SubjectLayout = {
  bg_color?: ColorTokens;
  color?: ColorTokens;
  enabled?: boolean;
  font_size?: [string, string];
  hasIcon?: boolean,
  iconComponent?: any
  line_height?: [string, string];
  mb?: SpacingType;
  variant: VariantTypes;
}

export type RenderSubjectProps = {
  color?: ColorTokens | string;
  editable?: any;
  hasIcon?: boolean,
  iconComponent?: any
  item?: any;
  layout?: LayoutProps;
}

const RenderSubject = ({
  color,
  editable,
  item,
  layout,
}: RenderSubjectProps) => {

  const font_size = get(layout, 'subject.font_size', ['14px', '14px'])
  const line_height = get(layout, 'subject.line_height', ['16px', '16px'])
  const mb = get(layout, 'subject.mb', ['0px', '0px'])
  const subject_enabled = get(layout, 'subject.enabled', false)
  const subject_variant = get(layout, 'subject.variant', '')
  const hasIcon = get(layout, 'subject.hasIcon', false)
  const iconComponent = get(layout, 'subject.iconComponent', false)
  
  let subject_value = get(item, 'subject', '')

  if (!subject_enabled) {
    return null
  }

  if (editable && editable.enabled) {
    if (!subject_value || subject_value == '') {
      subject_value = ' '
    }
  }

  if (!subject_value) {
    return null
  }

  const parseBgColor = () => {
    if (subject_variant === 'default') {
      return 'transparent'
    }
    if (subject_variant === 'filled') {
      return color ? color : get(layout, 'subject.bg_color', 'primary1')
    }
  }

  const parseFontColor = () => {
    if (subject_variant === 'default') {
      return color ? color : get(layout, 'subject.color', 'white')
    }
    if (subject_variant === 'filled') {
      return 'white'
    }
  }

  const bg_color = parseBgColor()
  const font_color = parseFontColor()

  if (hasIcon) {
    return (
      <Block
      align='row'
      alignx='center'
      >
        {iconComponent()}
        <S.Subject
          bg_color={bg_color}
          color={font_color}
          font_size={font_size}
          line_height={line_height}
          hasIcon={hasIcon}
          mb={mb}
        >
          <EditArea {...editable}>
            {subject_value}
          </EditArea>
        </S.Subject>
      </Block>
    )
  }

  return (
    <S.Subject
      bg_color={bg_color}
      color={font_color}
      font_size={font_size}
      line_height={line_height}
      hasIcon={hasIcon}
      mb={mb}
    >
      <EditArea {...editable}>
        {subject_value}
      </EditArea>
    </S.Subject>
  )
}

export { RenderSubject }