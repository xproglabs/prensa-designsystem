import { PrensaEngine } from '../../../prensa.default.config'

// const renderXPosition = ({ isNext }) => {
//   if (isNext) return 'right: 0;'
//   return 'left: 0;'
// }

// const renderYPosition = () => {
//   // calc(50% - buttonHeight / 2 - buttonMargin)
//   return 'top: calc(50% - 17px - 16px);'
// }

export const Button = PrensaEngine.styled('button', {
  align: ['row', 'center', 'top'],
  backgroundColor: 'rgba(0,0,0,.5)',
  borderRadius: '2px',
  border: 'unset',
  width: '34px',
  height: '34px',
  margin: '16px',
  position: 'absolute',
  zIndex: '10',
})
