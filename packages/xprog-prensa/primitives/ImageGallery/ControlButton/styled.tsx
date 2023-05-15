import { PrensaEngine } from '@xprog/prensa-system'
import { PrensaEngineCSS } from '@xprog/prensa-system/types'

const buttonProps: PrensaEngineCSS = {
  align: ['row', 'center', 'middle'],
  backgroundColor: 'white',
  borderColor: 'rgba(0,0,0,0.8)',
  borderStyle: 'solid',
  borderRadius: '2px',
  borderWidth: '1px',
  border: 'unset',
  width: '34px',
  height: '34px',
  margin: '16px',
  position: 'absolute',
  top: 'calc(50% - 64px)',
  zIndex: '10',
}

export const ButtonLeft = PrensaEngine.styled('button', {
  ...buttonProps,
  left: '0px'
})

export const ButtonRight = PrensaEngine.styled('button', {
  ...buttonProps,
  right: '0px'
})
