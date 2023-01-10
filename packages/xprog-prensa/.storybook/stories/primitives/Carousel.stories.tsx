import React from 'react'
import { ArgsTable, Title } from '@storybook/addon-docs'

import { Carousel } from '../../../primitives/Carousel'
import { StorybookTheme } from '../../StorybookTheme'

export default {
  title: 'Primitives/Carousel',
  component: Carousel,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <ArgsTable
            components={{
              Carousel
            }}
          />
        </>
      )
    }
  }
}

const Template = (args) => {
  return (
    <div className={StorybookTheme.className}>
      <Carousel
        animationHandler='slide'
        centerSlidePercentage={0}
        axis='horizontal'
        showStatus={false}
        thumbWidth={80}
        width='800px'
      >
        <div key='slide1'>
          <img src='https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3926&q=80' />
        </div>
        <div key='slide2'>
          <img src='https://images.unsplash.com/photo-1574125083784-abddaa066ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80' />
        </div>
        <div key='slide3'>
          <img src='https://images.unsplash.com/photo-1554168848-228452c09d60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80' />
        </div>
      </Carousel>
    </div>
  )
}

export const Default = Template.bind({})