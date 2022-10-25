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
        {renderTopbarSlot({
          name: 'SlotTop',
          css: {
            containerCss: css?.cssContainerTop,
            leftContainer: css?.cssContainerTopSlotLeft,
            centerContainer: css?.cssContainerTopSlotCenter,
            rightContainer: css?.cssContainerTopSlotRight
          },
          SlotLeft: SlotTopLeft,
          SlotCenter: SlotTopCenter,
          SlotRight: SlotTopRight
        })}
      </Block>
      <Block css={css?.cssContainerMiddleHolder}>
        {renderTopbarSlot({
          name: 'SlotMiddle',
          css: {
            containerCss: css?.cssContainerMiddle,
            leftContainer: css?.cssContainerMiddleSlotLeft,
            centerContainer: css?.cssContainerMiddleSlotCenter,
            rightContainer: css?.cssContainerMiddleSlotRight
          },
          SlotLeft: SlotMiddleLeft,
          SlotCenter: SlotMiddleCenter,
          SlotRight: SlotMiddleRight
        })}
      </Block>
      <Block css={css?.cssContainerBottomHolder}>
        {renderTopbarSlot({
          name: 'SlotBottom',
          css: {
            containerCss: css?.cssContainerBottom,
            leftContainer: css?.cssContainerBottomLeft,
            centerContainer: css?.cssContainerBottomCenter,
            rightContainer: css?.cssContainerBottomRight
          },
          SlotLeft: SlotBottomLeft,
          SlotCenter: SlotBottomCenter,
          SlotRight: SlotBottomRight
        })}
      </Block>
      {children}
    </S.TopbarContainer>
  )
}