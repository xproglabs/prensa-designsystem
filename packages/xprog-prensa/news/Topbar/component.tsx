import React from 'react'

import * as S from './styled'
import { TopbarTypes } from './types'

export const Topbar: React.FC<TopbarTypes> = (props) => {

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
              <SlotTopLeft>
              </SlotTopLeft>
            </S.SlotTopLeftContainer>
          }
          {SlotTopCenter &&
            <S.SlotTopCenterContainer
              className='pds-Topbar-SlotTopCenterContainer'
              css={css?.cssContainerTopSlotCenter}
            >
              <SlotTopCenter>
              </SlotTopCenter>
            </S.SlotTopCenterContainer>
          }
          {SlotTopRight &&
            <S.SlotTopRightContainer
              className='pds-Topbar-SlotTopRightContainer'
              css={css?.cssContainerTopSlotRight}
            >
              <SlotTopRight>
              </SlotTopRight>
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
            <SlotMiddleLeft>
            </SlotMiddleLeft>
          </S.SlotMiddleLeftContainer>
        }
        {SlotMiddleCenter &&
          <S.SlotMiddleCenterContainer
            className='pds-Topbar-SlotMiddleCenterContainer'
            css={css?.cssContainerMiddleSlotCenter}
          >
            <SlotMiddleCenter>
            </SlotMiddleCenter>
          </S.SlotMiddleCenterContainer>
        }
        {SlotMiddleRight &&
          <S.SlotMiddleRightContainer
            className='pds-Topbar-SlotMiddleRightContainer'
            css={css?.cssContainerMiddleSlotRight}
          >
            <SlotMiddleRight>
            </SlotMiddleRight>
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
              <SlotBottomLeft>
              </SlotBottomLeft>
            </S.SlotBottomLeftContainer>
          }
          {SlotBottomCenter &&
            <S.SlotBottomCenterContainer
              className='pds-Topbar-SlotBottomCenterContainer'
              css={css?.cssContainerBottomCenter}
            >
              <SlotBottomCenter>
              </SlotBottomCenter>
            </S.SlotBottomCenterContainer>
          }
          {SlotBottomRight &&
            <S.SlotBottomRightContainer
              className='pds-Topbar-SlotBottomRightContainer'
              css={css?.cssContainerBottomRight}
            >
              <SlotBottomRight>
              </SlotBottomRight>
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