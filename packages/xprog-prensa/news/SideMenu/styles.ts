import { PrensaEngine } from '../../stitches.config'

export const SideMenuHeader = PrensaEngine.styled('header', {})
export const SideMenuContent = PrensaEngine.styled('section', {})
export const SideMenuFooter = PrensaEngine.styled('footer', {})

export type SideMenuHeaderType = typeof SideMenuHeader
export type SideMenuContentType = typeof SideMenuContent
export type SideMenuFooterType = typeof SideMenuFooter