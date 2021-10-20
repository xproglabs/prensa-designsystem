import React, { cloneElement } from 'react'
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
 * @param props Expects an Object with matching props for PreviewProviderProps interface and custom props
 * @returns |
 * - preview.enabled === false => children component
 * - preview.enabled === true => Children component with preview.render wrapper
 */
const PreviewProvider = ({ children, preview, text, subject }: PreviewProviderProps & Object) => {

  function render_preview_enabled() {
    const PreviewRender = preview.render
    return (
      <PreviewRender
        text={text}
        subject={subject}
      >
        {children}
      </PreviewRender>
    )
  }

  function render_preview_disabled() {
    return children
  }

  return preview?.enabled && preview?.render ? render_preview_enabled() : render_preview_disabled()

}

export { PreviewProvider }