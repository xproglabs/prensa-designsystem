import { Block } from 'prensa'
import React from 'react'

import { PageIndicator } from './PageIndicator'

const Pagination = ({ numFound, rows, start, path, query }) => {

  const data = {
    current: 0,
    end: 0,
    last: 0,
    next: 0,
    start: 0,
  }

  if (!numFound || numFound == 0 || numFound < rows) {
    return null
  }

  data.current = Math.floor(start / rows) + 1
  data.end = Math.floor(numFound / rows) + 1
  data.last = data.current - 1
  data.next = data.current + 1
  data.start = 1

  const href = `${path || '/'}?term=${query?.term || ''}`

  const RenderStart = () => {
    if (data.start === data.current) {
      return null
    }
    return (
      <PageIndicator href={`${href}&page=${data.start}`}>
        {data.start}
      </PageIndicator>
    )
  }

  const RenderLast = () => {
    if (data.last === data.current || data.last === data.start || data.last === 0) {
      return null
    }
    return (
      <PageIndicator href={`${href}&page=${data.last}`}>
        {data.last}
      </PageIndicator>
    )
  }

  const RenderCurrent = () => {
    return (
      <PageIndicator
        bgColor="neutral5"
        color="neutral9">
        {data.current}
      </PageIndicator>
    )
  }

  const RenderNext = () => {
    if (data.next === data.current || data.next === data.end || data.next === 1) {
      return null
    }
    return (
      <PageIndicator href={`${href}&page=${data.next}`}>
        {data.next}
      </PageIndicator>
    )
  }

  const RenderEnd = () => {
    if (data.end === data.current) {
      return null
    }
    return (
      <PageIndicator href={`${href}&page=${data.end}`}>
        {data.end}
      </PageIndicator>
    )
  }

  const RenderSpace = () => {
    return (
      <PageIndicator>...</PageIndicator>
    )
  }

  return (
    <Block
      align='row'
      custom='flex-wrap: wrap;'
      mb={2}
      width='100%'
    >
      <RenderStart />
      {data.last > data.start + 1 && <RenderSpace />}
      <RenderLast />
      <RenderCurrent />
      <RenderNext />
      {data.next < data.end - 1 && <RenderSpace />}
      <RenderEnd />
    </Block>
  )
}

export default Pagination