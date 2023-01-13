import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Block } from '../../../primitives/Block'
import { Carousel } from '../../../primitives/Carousel'
import { StorybookTheme } from '../../StorybookTheme'

export default { title: 'Primitives/Carousel', component: Carousel }

const Template: ComponentStory<any> = (args) => {
  return (
    <div className={StorybookTheme.className}>
      <Carousel
        axis='horizontal'
        labels={{ item: 'Item', leftArrow: 'Retroceder', rightArrow: 'Avançar' }}
        {...args}
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
        <div key='slide4'>
          <img src='https://images.unsplash.com/photo-1623511792208-9339352198cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80' />
        </div>
      </Carousel>
    </div>
  )
}
const TemplateWithDivs: ComponentStory<any> = (args) => {
  return (
    <div className={StorybookTheme.className}>
      <Carousel
        axis='horizontal'
        labels={{ item: 'Item', leftArrow: 'Retroceder', rightArrow: 'Avançar' }}
        showStatus={false}
        showThumbs={false}
        swipeable={true}
        {...args}
      >
        <Block key='1' css={{ backgroundColor: '$basicError500', borderRadius: '$alternative', height: '200px', width: '200px' }} />
        <Block key='2' css={{ backgroundColor: '$basicError400', borderRadius: '$alternative', height: '200px', width: '200px' }} />
        <Block key='3' css={{ backgroundColor: '$basicError300', borderRadius: '$alternative', height: '200px', width: '200px' }} />
        <Block key='4' css={{ backgroundColor: '$basicError200', borderRadius: '$alternative', height: '200px', width: '200px' }} />
      </Carousel>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
export const WithThumbs = Template.bind({})
WithThumbs.args = {
  showThumbs: true,
  css: {
    container: {
      backgroundColor: '$basicBlackAlpha500'
    },
    controlArrow: {
      backgroundColor: 'red'
    }
  }
}
export const Customized = TemplateWithDivs.bind({})
Customized.args = {  
  height: '600px',
  width: '400px',
  showArrows: false,
  centerMode: true,
  centerSlidePercentage: 60,
  css: {
    controlDotsDot: {
      backgroundColor: '$basicError500',
      opacity: 0.8,
      height: '12px',
      width: '12px'
    }
  }
}