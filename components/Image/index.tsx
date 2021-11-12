import React from 'react'

import AmpImage from './Amp'
import HtmlImage from './Html'
import * as T from './types'

const Image = ({
  amp,
  custom_class,
  layout_desktop,
  layout_mobile,
  title
}: T.ImageProps) => {
  if (!amp) {
    return (
      <HtmlImage
        custom_class={custom_class}
        layout_desktop={layout_desktop}
        layout_mobile={layout_mobile}
        title={title}
      />
    )
  }
  return (
    <AmpImage
      custom_class={custom_class}
      desktop_height={layout_desktop.height}
      desktop_layout={layout_desktop.type}
      desktop_path={layout_desktop.path}
      desktop_width={layout_desktop.width}
      mobile_height={layout_mobile.height}
      mobile_layout={layout_mobile.type}
      mobile_path={layout_mobile.path}
      mobile_width={layout_mobile.width}
      title={title}
    />
  )
}

Image.defaultProps = {
  amp: false
}

export default Image