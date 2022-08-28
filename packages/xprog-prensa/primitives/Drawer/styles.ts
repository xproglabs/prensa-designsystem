import { PrensaEngine } from '../../prensa.default.config'

const Prensa_Drawer_slideInLeft = PrensaEngine.keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0%)' }
})
const Prensa_Drawer_slideOutLeft = PrensaEngine.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' }
})
const Prensa_Drawer_backdropIn = PrensaEngine.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})
const Prensa_Drawer_backdropOut = PrensaEngine.keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

export const DrawerContainer = PrensaEngine.styled('div', {
  '.pds-Drawer-content[data-open-state=true]': {
    animationName: Prensa_Drawer_slideInLeft,
    animationDuration: '233ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)'
  },
  '.pds-Drawer-content[hidden]': {
    animationName: Prensa_Drawer_slideOutLeft,
    animationDuration: '300ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)',
    top: '-8000px',
    transform: 'translateX(-100%)',
    transition: 'top 0.01s 1s'
  },
  '.pds-Drawer-backdrop[data-open-state=true]': {
    animationName: Prensa_Drawer_backdropIn,
    animationDuration: '233ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)'
  },
  '.pds-Drawer-backdrop[hidden]': {
    animationName: Prensa_Drawer_backdropOut,
    animationDuration: '300ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)',
  }  
})

export const DrawerContent = PrensaEngine.styled('aside', {
  backgroundColor: '$white',
  display: 'block',
  height: '100vh',
  overflowY: 'auto',
  position: 'fixed',
  zIndex: '$drawer$contentZIndex',

  variants: {
    size: {
      maxcontent: { width: '$drawer$sizeMaxcontent' },
      sm: { width: '$drawer$sizeSm' },
      md: { width: '$drawer$sizeMd' },
      lg: { width: '$drawer$sizeLg' },
      fullwidth: { width: '$drawer$sizeFullwidth' }
    },
    anchor: {
      left: {
        top: '0px',
        left: '0px'
      },
      right: {
        top: '0px',
        right: '0px'
      }
    }
  }
})

export const DrawerBackdrop = PrensaEngine.styled('div', {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: '100vh',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  zIndex: '$drawer$backdropZIndex'
})

export const DrawerSpacer = PrensaEngine.styled('div', {
  variants: {
    innerSpace: {
      sm: { padding: '$drawer$innerSpaceSm' },
      md: { padding: '$drawer$innerSpaceMd' },
      lg: { padding: '$drawer$innerSpaceLg' }
    }
  }
})

export type DrawerContainerType = typeof DrawerContainer
export type DrawerContentType = typeof DrawerContent
export type DrawerBackdropType = typeof DrawerBackdrop
export type DrawerSpacerType = typeof DrawerSpacer