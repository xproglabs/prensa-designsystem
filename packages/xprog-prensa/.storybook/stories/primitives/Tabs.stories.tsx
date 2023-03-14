import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Tab } from '../../../primitives/Tabs/Tab'
import { Tabs } from '../../../primitives/Tabs'
import { TabList } from '../../../primitives/Tabs/TabsList'
import { TabSlot } from '../../../primitives/Tabs/TabSlot'
import { TabSlots } from '../../../primitives/Tabs/TabSlots'
import { StorybookTheme } from '../../StorybookTheme'

export default { title: 'Primitives/Tabs', component: Tabs }

const Template: ComponentStory<any> = (args) => {
  const data = [
    {
      title: 'Opção 1',
      children: <pre>Conteudo 1</pre>
    },
    {
      title: 'Opção 2',
      children: <pre>Conteudo 2</pre>
    },
    {
      title: 'Opção 3',
      children: <pre>Conteudo 3</pre>
    }
  ]
  return (
    <div className={StorybookTheme.className}>
      <Tabs
        id='brown-fox-tabs'
        css={{
          container: {
            margin: '$4',
            borderColor: '$brandNeutral500',
            borderStyle: 'solid',
            borderWidth: '1px'
          }
        }}
      >
        <TabList>
          {data.map((i, k) => <Tab key={i.title}>{i.title}</Tab>)}
        </TabList>
        <TabSlots>
          {data.map((i, k) => <TabSlot key={k}>{i.children}</TabSlot>)}
        </TabSlots>
      </Tabs>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}