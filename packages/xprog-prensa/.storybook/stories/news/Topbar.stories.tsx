import React from 'react'

import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'
import { Topbar } from '../../../news/Topbar'
import { TopbarProps } from '../../../news/Topbar/types'
import { Block } from '../../../primitives/Block'

export default {
  title: 'News/Topbar',
  component: Topbar
}

const Template: React.FC<TopbarProps> = (props) => {
  return (
    <PrensaThemeProvider>
      <Topbar {...props} />
    </PrensaThemeProvider>
  )
}

const PinkBox = ({ title }) => (
  <Block css={{
    height: 'calc(100% - 2px)',
    borderColor: 'rgba(239, 71, 111, 1)',
    borderStyle: 'solid',
    borderWidth: '1px',
    backgroundColor: 'rgba(239, 71, 111, 0.5)',
  }}>
    {title}
  </Block>
)

export const Default: { args: TopbarProps } = Template.bind({})
Default.args = {
  slotMiddleLeft: () => PinkBox({ title: 'slotMiddleLeft' }),
  slotMiddleCenter: () => PinkBox({ title: 'slotMiddleCenter' }),
  slotMiddleRight: () => PinkBox({ title: 'slotMiddleRight' })
}

export const Expanded: { args: TopbarProps } = Template.bind({})
Expanded.args = {
  slotTopCenter: () => PinkBox({ title: 'slotTopCenter' }),
  slotTopLeft: () => PinkBox({ title: 'slotTopLeft' }),
  slotTopRight: () => PinkBox({ title: 'slotTopRight' }),
  slotMiddleLeft: () => PinkBox({ title: 'slotMiddleLeft' }),
  slotMiddleCenter: () => PinkBox({ title: 'slotMiddleCenter' }),
  slotMiddleRight: () => PinkBox({ title: 'slotMiddleRight' }),
  slotBottomCenter: () => PinkBox({ title: 'slotBottomCenter' }),
  slotBottomLeft: () => PinkBox({ title: 'slotBottomLeft' }),
  slotBottomRight: () => PinkBox({ title: 'slotBottomRight' })
}