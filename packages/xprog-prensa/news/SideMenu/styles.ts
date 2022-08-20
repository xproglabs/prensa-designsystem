import { PrensaEngine } from '../../prensa.default.config'

const Prensa_Sidemenu_slideInLeft = PrensaEngine.keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(0%)' }
})
const Prensa_Sidemenu_slideOutLeft = PrensaEngine.keyframes({
  '0%': { transform: 'translateX(0%)' },
  '100%': { transform: 'translateX(-100%)' }
})
const Prensa_Sidemenu_backdropIn = PrensaEngine.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})
const Prensa_Sidemenu_backdropOut = PrensaEngine.keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

export const SideMenuContainer = PrensaEngine.styled('div', {
  '.pdsnews-SideMenu-content[data-open-state=true]': {
    animationName: Prensa_Sidemenu_slideInLeft,
    animationDuration: '233ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)'
  },
  '.pdsnews-SideMenu-content[hidden]': {
    animationName: Prensa_Sidemenu_slideOutLeft,
    animationDuration: '300ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)',
    top: '-8000px',
    transform: 'translateX(-100%)',
    transition: 'top 0.01s 1s'
  },
  '.pdsnews-SideMenu-backdrop[data-open-state=true]': {
    animationName: Prensa_Sidemenu_backdropIn,
    animationDuration: '233ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)'
  },
  '.pdsnews-SideMenu-backdrop[hidden]': {
    animationName: Prensa_Sidemenu_backdropOut,
    animationDuration: '300ms',
    animationFillMode: 'forwards',
    animationTimingFunction: 'cubic-bezier(0,0,.21,1)',
  }  
})

export const SideMenuContent = PrensaEngine.styled('div', {
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

export const SideMenuBackdrop = PrensaEngine.styled('div', {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: '100vh',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100vw',
  zIndex: 10
})

export const SideMenuSpacer = PrensaEngine.styled('div', {
  variants: {
    innerSpace: {
      sm: { padding: '$sideMenu$innerSpaceSm' },
      md: { padding: '$sideMenu$innerSpaceMd' },
      lg: { padding: '$sideMenu$innerSpaceLg' }
    }
  }
})

export type SideMenuContainerTypes = typeof SideMenuContainer
export type SideMenuContentTypes = typeof SideMenuContent
export type SideMenuBackdropTypes = typeof SideMenuBackdrop
export type SideMenuSpacerTypes = typeof SideMenuSpacer