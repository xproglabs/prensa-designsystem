import React from 'react'

import { useComponentFromProps, ComponentFromPropsType } from '../../hooks'
import { Block } from '../../primitives/Block'
import * as S from './styled'
import { TopbarProps } from './types'

export const Topbar: React.FC<TopbarProps> = (props) => {

  const {
    children,
    css,
    slotBottomCenter,
    slotBottomLeft,
    slotBottomRight,
    slotMiddleCenter,
    slotMiddleLeft,
    slotMiddleRight,
    slotTopCenter,
    slotTopLeft,
    slotTopRight
  } = props

  const SlotTopLeft: ComponentFromPropsType = slotTopLeft
  const SlotTopCenter: ComponentFromPropsType = slotTopCenter
  const SlotTopRight: ComponentFromPropsType = slotTopRight
  const SlotMiddleLeft: ComponentFromPropsType = slotMiddleLeft
  const SlotMiddleCenter: ComponentFromPropsType = slotMiddleCenter
  const SlotMiddleRight: ComponentFromPropsType = slotMiddleRight
  const SlotBottomLeft: ComponentFromPropsType = slotBottomLeft
  const SlotBottomCenter: ComponentFromPropsType = slotBottomCenter
  const SlotBottomRight: ComponentFromPropsType = slotBottomRight

  const renderTopbarSlot = ({ name, css, SlotLeft, SlotCenter, SlotRight }) => {
    const { containerCss, leftContainerCss, centerContainerCss, rightContainerCss } = css
    return (
      <S.SlotBottomContainer className={`pds-Topbar-${name}Container`} css={containerCss}>
        <S.SlotBottomLeftContainer className={`pds-Topbar-${name}LeftContainer`} css={leftContainerCss}>
          {useComponentFromProps({ component: SlotLeft, componentProps: {} })}
        </S.SlotBottomLeftContainer>
        <S.SlotBottomCenterContainer className={`pds-Topbar-${name}CenterContainer`} css={centerContainerCss}>
          {useComponentFromProps({ component: SlotCenter, componentProps: {} })}
        </S.SlotBottomCenterContainer>
        <S.SlotBottomRightContainer className={`pds-Topbar-${name}RightContainer`} css={rightContainerCss}>
          {useComponentFromProps({ component: SlotRight, componentProps: {} })}
        </S.SlotBottomRightContainer>
      </S.SlotBottomContainer>
    )
  }

  return (
    <S.TopbarContainer className='pds-Topbar-Container' css={css?.cssContainer}>
      <Block css={css?.cssContainerTopHolder}>
        {slotTopLeft || slotTopCenter || slotTopRight ? renderTopbarSlot({
          name: 'SlotTop',
          css: {
            containerCss: css?.cssContainerTop,
            leftContainerCss: css?.cssContainerTopSlotLeft,
            centerContainerCss: css?.cssContainerTopSlotCenter,
            rightContainerCss: css?.cssContainerTopSlotRight
          },
          SlotLeft: SlotTopLeft,
          SlotCenter: SlotTopCenter,
          SlotRight: SlotTopRight
        }) : null}
      </Block>
      <Block css={css?.cssContainerMiddleHolder}>
        {renderTopbarSlot({
          name: 'SlotMiddle',
          css: {
            containerCss: css?.cssContainerMiddle,
            leftContainerCss: css?.cssContainerMiddleSlotLeft,
            centerContainerCss: css?.cssContainerMiddleSlotCenter,
            rightContainerCss: css?.cssContainerMiddleSlotRight
          },
          SlotLeft: SlotMiddleLeft,
          SlotCenter: SlotMiddleCenter,
          SlotRight: SlotMiddleRight
        })}
      </Block>
      <Block css={css?.cssContainerBottomHolder}>
        {slotBottomLeft || slotBottomCenter || slotBottomRight ? renderTopbarSlot({
          name: 'SlotBottom',
          css: {
            containerCss: css?.cssContainerBottom,
            leftContainerCss: css?.cssContainerBottomLeft,
            centerContainerCss: css?.cssContainerBottomCenter,
            rightContainerCss: css?.cssContainerBottomRight
          },
          SlotLeft: SlotBottomLeft,
          SlotCenter: SlotBottomCenter,
          SlotRight: SlotBottomRight
        }) : null}
      </Block>
      {children}
    </S.TopbarContainer>
  )
}