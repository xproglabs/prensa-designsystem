import React from 'react'

import { useComponentFromProps } from '../../hooks'
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

  const SlotTopLeft: any = slotTopLeft
  const SlotTopCenter: any = slotTopCenter
  const SlotTopRight: any = slotTopRight
  const SlotMiddleLeft: any = slotMiddleLeft
  const SlotMiddleCenter: any = slotMiddleCenter
  const SlotMiddleRight: any = slotMiddleRight
  const SlotBottomLeft: any = slotBottomLeft
  const SlotBottomCenter: any = slotBottomCenter
  const SlotBottomRight: any = slotBottomRight

  const renderTopContainer = () => {
    if (slotTopCenter || slotTopLeft || slotTopRight) {
      return (
        <S.SlotTopContainer
          className='pds-Topbar-SlotTopContainer'
          css={css?.cssContainerTop}
        >
          {SlotTopLeft &&
            <S.SlotTopLeftContainer
              className='pds-Topbar-SlotTopLeftContainer'
              css={css?.cssContainerTopSlotLeft}
            >
              {useComponentFromProps({ component: SlotTopLeft, componentProps: {} })}
            </S.SlotTopLeftContainer>
          }
          {SlotTopCenter &&
            <S.SlotTopCenterContainer
              className='pds-Topbar-SlotTopCenterContainer'
              css={css?.cssContainerTopSlotCenter}
            >
              {useComponentFromProps({ component: SlotTopCenter, componentProps: {} })}
            </S.SlotTopCenterContainer>
          }
          {SlotTopRight &&
            <S.SlotTopRightContainer
              className='pds-Topbar-SlotTopRightContainer'
              css={css?.cssContainerTopSlotRight}
            >
              {useComponentFromProps({ component: SlotTopRight, componentProps: {} })}
            </S.SlotTopRightContainer>
          }
        </S.SlotTopContainer>
      )
    }
  }

  const renderMainContainer = () => {
    return (
      <S.SlotMiddleContainer
        className='pds-Topbar-SlotMiddleContainer'
        css={css?.cssContainerMiddle}
      >
        {SlotMiddleLeft &&
          <S.SlotMiddleLeftContainer
            className='pds-Topbar-SlotMiddleLeftContainer'
            css={css?.cssContainerMiddleSlotLeft}
          >
            {useComponentFromProps({ component: SlotMiddleLeft, componentProps: {} })}
          </S.SlotMiddleLeftContainer>
        }
        {SlotMiddleCenter &&
          <S.SlotMiddleCenterContainer
            className='pds-Topbar-SlotMiddleCenterContainer'
            css={css?.cssContainerMiddleSlotCenter}
          >
            {useComponentFromProps({ component: SlotMiddleCenter, componentProps: {} })}
          </S.SlotMiddleCenterContainer>
        }
        {SlotMiddleRight &&
          <S.SlotMiddleRightContainer
            className='pds-Topbar-SlotMiddleRightContainer'
            css={css?.cssContainerMiddleSlotRight}
          >
            {useComponentFromProps({ component: SlotMiddleRight, componentProps: {} })}
          </S.SlotMiddleRightContainer>
        }
      </S.SlotMiddleContainer>
    )
  }

  const renderBottomContainer = () => {
    if (slotBottomCenter || slotBottomLeft || slotBottomRight) {
      return (
        <S.SlotBottomContainer
          className='pds-Topbar-SlotBottomContainer'
          css={css?.cssContainerBottom}
        >
          {SlotBottomLeft &&
            <S.SlotBottomLeftContainer
              className='pds-Topbar-SlotBottomLeftContainer'
              css={css?.cssContainerBottomLeft}
            >
              {useComponentFromProps({ component: SlotBottomLeft, componentProps: {} })}
            </S.SlotBottomLeftContainer>
          }
          {SlotBottomCenter &&
            <S.SlotBottomCenterContainer
              className='pds-Topbar-SlotBottomCenterContainer'
              css={css?.cssContainerBottomCenter}
            >
              {useComponentFromProps({ component: SlotBottomCenter, componentProps: {} })}
            </S.SlotBottomCenterContainer>
          }
          {SlotBottomRight &&
            <S.SlotBottomRightContainer
              className='pds-Topbar-SlotBottomRightContainer'
              css={css?.cssContainerBottomRight}
            >
              {useComponentFromProps({ component: SlotBottomRight, componentProps: {} })}
            </S.SlotBottomRightContainer>
          }
        </S.SlotBottomContainer>
      )
    }
  }

  return (
    <S.TopbarContainer className='pds-Topbar-Container' css={css?.cssContainer}>
      {renderTopContainer()}
      {renderMainContainer()}
      {renderBottomContainer()}
      {children}
    </S.TopbarContainer>
  )
}