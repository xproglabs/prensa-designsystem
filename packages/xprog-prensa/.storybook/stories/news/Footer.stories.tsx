import React from 'react'

import { PrensaThemeProvider } from '../../../providers/PrensaThemeProvider'
import { Footer } from '../../../news/Footer'
import { FooterProps } from '../../../news/Footer/types'
import { Block } from '../../../primitives/Block'

export default {
  title: 'News/Footer',
  component: Footer
}

const Template: React.FC<FooterProps> = (props) => {
  return (
    <PrensaThemeProvider>
      <Footer {...props} />
    </PrensaThemeProvider>
  )
}

const PinkBox = ({ title = 'teste' }) => (
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

export const Default: { args: FooterProps } = Template.bind({})
Default.args = {
  slotMiddle: <PinkBox title='slotMiddle' />,
}

export const Expanded: { args: FooterProps } = Template.bind({})
Expanded.args = {
  slotTop: <PinkBox title='slotTop' />,
  slotMiddle: <PinkBox title='slotMiddle' />,
  slotBottom: <PinkBox title='slotBottom' />,
}