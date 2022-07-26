import React from 'react'

import { Block } from '../primitives/Block/index'
import { PrensaThemeProvider } from '../providers/PrensaThemeProvider'

export default { title: 'PrensaDS/Alignment', component: Block }

const Circle = () => {
  return (
    <Block
      css={{
        background: 'rgba(100,100,100,0.6)',
        borderRadius: '$circle',
        height: '12px',
        width: '12px'
      }}>
    </Block>
  )
}

const blockDefaultProps = {
  background: '#CCC',
  height: '96px',
  width: '96px'
}

const blockErrorProps = {
  background: 'rgba(255,100,100,0.2)'
}

export const AlignColumn = () => {
  return (
    <PrensaThemeProvider theme='dark-theme'>
      <h3>column, left, top</h3>
      <Block css={{ align: ['column', 'left', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, left, middle</h3>
      <Block css={{ align: ['column', 'left', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, left, bottom</h3>
      <Block css={{ align: ['column', 'left', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, left, between</h3>
      <Block css={{ align: ['column', 'left', 'between'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, left, evenly</h3>
      <Block css={{ align: ['column', 'left', 'evenly'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, center, top</h3>
      <Block css={{ align: ['column', 'center', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, center, middle</h3>
      <Block css={{ align: ['column', 'center', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, center, bottom</h3>
      <Block css={{ align: ['column', 'center', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, center, between</h3>
      <Block css={{ align: ['column', 'center', 'between'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, center, evenly</h3>
      <Block css={{ align: ['column', 'center', 'evenly'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, right, top</h3>
      <Block css={{ align: ['column', 'right', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, right, middle</h3>
      <Block css={{ align: ['column', 'right', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, right, bottom</h3>
      <Block css={{ align: ['column', 'right', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, right, between</h3>
      <Block css={{ align: ['column', 'right', 'between'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, right, evenly</h3>
      <Block css={{ align: ['column', 'right', 'evenly'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, between, top</h3>
      <Block css={{ align: ['column', 'between', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, between, middle</h3>
      <Block css={{ align: ['column', 'between', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, between, bottom</h3>
      <Block css={{ align: ['column', 'between', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, between, between</h3>
      <Block css={{ align: ['column', 'between', 'between'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>column, between, evenly</h3>
      <Block css={{ align: ['column', 'between', 'evenly'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
    </PrensaThemeProvider>
  )
}

export const AlignRow = () => {
  return (
    <PrensaThemeProvider theme='dark-theme'>
      <h3>row, left, top</h3>
      <Block css={{ align: ['row', 'left', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, left, middle</h3>
      <Block css={{ align: ['row', 'left', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, left, bottom</h3>
      <Block css={{ align: ['row', 'left', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, left, between</h3>
      <Block css={{ align: ['row', 'left', 'between'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, left, evenly</h3>
      <Block css={{ align: ['row', 'left', 'evenly'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, center, top</h3>
      <Block css={{ align: ['row', 'center', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, center, middle</h3>
      <Block css={{ align: ['row', 'center', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, center, bottom</h3>
      <Block css={{ align: ['row', 'center', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, center, between</h3>
      <Block css={{ align: ['row', 'center', 'between'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, center, evenly</h3>
      <Block css={{ align: ['row', 'center', 'evenly'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, right, top</h3>
      <Block css={{ align: ['row', 'right', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, right, middle</h3>
      <Block css={{ align: ['row', 'right', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, right, bottom</h3>
      <Block css={{ align: ['row', 'right', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, right, between</h3>
      <Block css={{ align: ['row', 'right', 'between'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, right, evenly</h3>
      <Block css={{ align: ['row', 'right', 'evenly'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, between, top</h3>
      <Block css={{ align: ['row', 'between', 'top'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, between, middle</h3>
      <Block css={{ align: ['row', 'between', 'middle'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, between, bottom</h3>
      <Block css={{ align: ['row', 'between', 'bottom'], ...blockDefaultProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, between, between</h3>
      <Block css={{ align: ['row', 'between', 'between'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
      <h3>row, between, evenly</h3>
      <Block css={{ align: ['row', 'between', 'evenly'], ...blockDefaultProps, ...blockErrorProps }}>
        <Circle /><Circle /><Circle />
      </Block>
    </PrensaThemeProvider>
  )
}