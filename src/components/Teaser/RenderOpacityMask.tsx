import React from 'react'
import styled from 'styled-components'

interface OpacityMaskProps {
  height: string;
  width: string;
}

type LayoutProps = {
  enabled: boolean;
  height: string;
  path: string;
  type: string;
  width: string;
}

interface RenderOpacityMaskprops {
  enabled: boolean;
  layout_desktop: LayoutProps;
  layout_mobile: LayoutProps;
}

const get_negative_margin = (value: string) => {
  return `-${value}`
}

const OpacityMask = styled.div<OpacityMaskProps>`
  height: ${props => props.height};
  width: 100%;
  margin-top: ${props => get_negative_margin(props.height)};
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 43.75%, #000000 100%);
`

const RenderOpacityMask = ({ enabled, layout_desktop, layout_mobile }: RenderOpacityMaskprops) => {
  if (!enabled) return null
  return (
    <React.Fragment>
      <OpacityMask
        className='hide_desktop'
        width={layout_desktop.width}
        height={layout_desktop.height}
        />
      <OpacityMask
        className='hide_mobile'
        width={layout_mobile.width}
        height={layout_mobile.height}
      />
    </React.Fragment>
  )
}

export { RenderOpacityMask }