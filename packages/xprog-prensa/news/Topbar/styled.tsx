import { PrensaEngine } from '../../prensa.default.config'

export const TopbarContainer = PrensaEngine.styled('header', {
  align: ['column', 'center', 'middle'],
  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  width: '100%'
})
export const SlotTopContainer = PrensaEngine.styled('div', {
  align: ['row', 'center', 'between'],
  height: '$10',
  width: '100%',
})
export const SlotMiddleContainer = PrensaEngine.styled('div', {
  align: ['row', 'center', 'between'],
  height: '$10',
  width: '100%'
})
export const SlotBottomContainer = PrensaEngine.styled('div', {
  align: ['row', 'center', 'between'],
  height: '$10',
  width: '100%',
})

export const SlotTopLeftContainer = PrensaEngine.styled('div', {})
export const SlotTopCenterContainer = PrensaEngine.styled('div', {})
export const SlotTopRightContainer = PrensaEngine.styled('div', {})
export const SlotMiddleLeftContainer = PrensaEngine.styled('div', {})
export const SlotMiddleCenterContainer = PrensaEngine.styled('div', {})
export const SlotMiddleRightContainer = PrensaEngine.styled('div', {})
export const SlotBottomLeftContainer = PrensaEngine.styled('div', {})
export const SlotBottomCenterContainer = PrensaEngine.styled('div', {})
export const SlotBottomRightContainer = PrensaEngine.styled('div', {})