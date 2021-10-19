import { cloneElement } from 'react'
import { PageBlockPreview } from './types'

//ToDo: Improvement in preview.render props
export interface PreviewProviderProps {
  preview: PageBlockPreview;
  children: any;
  text: any;
  subject: any;
}

/**
 * Prensa | PreviewProvider
 * @param props Expects an Object with matching props for PreviewProviderProps interface
 * @returns |
 * - preview.enabled === false => children component
 * - preview.enabled === true => Children component with preview.render wrapper
 */
const PreviewProvider = ({ children, preview, text, subject }: PreviewProviderProps & Object) => {

  function render_preview_enabled() {
    return cloneElement(preview.render, { children, text, subject })
  }

  function render_preview_disabled() {
    return cloneElement(children)
  }

  return preview?.enabled ? render_preview_enabled() : render_preview_disabled()

}

export { PreviewProvider }