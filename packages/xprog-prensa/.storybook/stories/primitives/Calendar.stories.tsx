import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Calendar } from '../../../primitives/Calendar'
import { StorybookTheme } from '../../StorybookTheme'

export default { title: 'Primitives/Calendar', component: Calendar }

const Template: ComponentStory<any> = (args) => {
  const [selected, setSelected] = React.useState(new Date)

  const handleChange = (d) => {
    setSelected(d)
  }

  return (
    <div className={StorybookTheme.className}>
      <Calendar
        selectedDate={selected}
        onChange={handleChange}
        css={{
          dayButton: {
            fontWeight: 700
          }
        }}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}