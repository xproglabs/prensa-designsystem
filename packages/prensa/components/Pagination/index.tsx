import { Block } from 'prensa'
import React from 'react'

import { ArrowButton } from './ArrowButton'
import { PageIndicator } from './PageIndicator'
import { PaginationComponentProps } from './types'

const Pagination = ({
  indicatorLayout,
  numFound,
  path,
  query,
  rows,
  pageSlug,
  termSlug,
  showArrows,
  start
}: PaginationComponentProps) => {

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

  let termPath = ''
  if (query && query.term && query.term !== '') {
    termPath = `${termSlug}${query.term}`
  }

  if (path == '') {
    path = '/'
  }

  const RenderStart = () => {
    if (data.start === data.current) {
      return null
    }
    return (
      <PageIndicator
        href={`${path}${pageSlug}${data.start}${termPath}`}
        {...indicatorLayout}
      >
        {data.start}
      </PageIndicator>
    )
  }

  const RenderBeforeLast = () => {
    return (
      <PageIndicator
        href={`${path}${pageSlug}${data.last - 1}${termPath}`}
        {...indicatorLayout}
      >
        {data.last - 1}
      </PageIndicator>
    )
  }

  const RenderLast = () => {
    if (data.last === data.current || data.last === data.start || data.last === 0) {
      return null
    }
    if (data.current > data.end) {
      return <RenderBeforeLast/>
    }
    return (
      <PageIndicator
        href={`${path}${pageSlug}${data.last}${termPath}`}
        {...indicatorLayout}
      >
        {data.last}
      </PageIndicator>
    )
  }

  const RenderCurrent = () => {
    if (data.current > data.end) {
      return null
    }
    return (
      <PageIndicator
        bgColor='neutral5'
        color='neutral9'
        {...indicatorLayout}
      >
        {data.current}
      </PageIndicator>
    )
  }

  const RenderNext = () => {
    if (
      data.next === data.current ||
      data.next === data.end ||
      data.next === 1 ||
      data.current === data.end ||
      data.current > data.end
    ) {
      return null
    }
    return (
      <PageIndicator
        href={`${path}${pageSlug}${data.next}${termPath}`}
        {...indicatorLayout}
      >
        {data.next}
      </PageIndicator>
    )
  }

  const RenderEnd = () => {

    if (data.end === data.current) {
      return null
    }

    return (
      <PageIndicator
        href={`${path}${pageSlug}${data.end}${termPath}`}
        {...indicatorLayout}
      >
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
      {showArrows && <ArrowButton direction='left' />}
      <RenderStart />
      {data.last > data.start + 1 && <RenderSpace />}
      <RenderLast />
      <RenderCurrent />
      <RenderNext />
      {data.next < data.end - 1 && <RenderSpace />}
      <RenderEnd />
      {showArrows && <ArrowButton direction='right' />}
    </Block>
  )
}

Pagination.defaultProps = {
  pageSlug: '?page=',
  termSlug: '&term='
}

export default Pagination