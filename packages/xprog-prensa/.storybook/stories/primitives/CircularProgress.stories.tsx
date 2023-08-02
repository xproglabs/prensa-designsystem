import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { CircularProgress } from '../../../primitives/CircularProgress/component'
import { CircularProgressProps } from '../../../primitives/CircularProgress/types'
import { StorybookTheme } from '../../StorybookTheme'

export default {
  title: 'Primitives/CircularProgress',
  component: CircularProgress,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable
            components={{ CircularProgress }}
          />
        </>
      )
    }
  }
}

const Template = (args) => {
  return (
    <div className={StorybookTheme.className}>
      <CircularProgress {...args} />
    </div>
  )
}

export const Default: { args: CircularProgressProps } = (args) => <Template {...args} />
Default.args = {
  color: 'basicBlackAlpha500'
}