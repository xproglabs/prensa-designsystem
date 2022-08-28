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
  '.pdsnews-Drawer-content[data-open-state=true]': {
    animationName: Prensa_Drawer_slideInLeft,
    animationDuration: '233ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)'
  },
  '.pdsnews-Drawer-content[hidden]': {
    animationName: Prensa_Drawer_slideOutLeft,
    animationDuration: '300ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)',
    top: '-8000px',
    transform: 'translateX(-100%)',
    transition: 'top 0.01s 1s'
  },
  '.pdsnews-Drawer-backdrop[data-open-state=true]': {
    animationName: Prensa_Drawer_backdropIn,
    animationDuration: '233ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)'
  },
  '.pdsnews-Drawer-backdrop[hidden]': {
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
  top: '0px',
  left: '0px',
  zIndex: 100,

  variants: {
    size: {
      maxcontent: { width: '$sideMenu$sizeMaxcontent' },
      sm: { width: '$sideMenu$sizeSm' },
      md: { width: '$sideMenu$sizeMd' },
      lg: { width: '$sideMenu$sizeLg' },
      fullwidth: { width: '$sideMenu$sizeFullwidth' }
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
  zIndex: 10
})

export const DrawerSpacer = PrensaEngine.styled('div', {
  variants: {
    innerSpace: {
      sm: { padding: '$sideMenu$innerSpaceSm' },
      md: { padding: '$sideMenu$innerSpaceMd' },
      lg: { padding: '$sideMenu$innerSpaceLg' }
    }
  }
})

export type DrawerContainerType = typeof DrawerContainer
export type DrawerContentType = typeof DrawerContent
export type DrawerBackdropType = typeof DrawerBackdrop
export type DrawerSpacerType = typeof DrawerSpacer