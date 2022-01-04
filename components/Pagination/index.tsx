import { Block } from 'prensa'
import React from 'react'

import { PaginationNumber } from './number'

const Pagination = ({ numFound, rows, start, path, query }) => {
  const data = {
    current: 0,
    end: 0,
    last: 0,
    next: 0,
    start: 0,
  }

  if (!numFound || numFound == 0 || numFound < rows) {
    return <></>
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
      <PaginationNumber href={`${href}&page=${data.start}`}>
        {data.start}
      </PaginationNumber>
    )
  }

  const RenderLast = () => {
    if (data.last === data.current || data.last === data.start || data.last === 0) {
      return null
    }
    return (
      <PaginationNumber href={`${href}&page=${data.last}`}>
        {data.last}
      </PaginationNumber>
    )
  }

  const RenderCurrent = () => {
    return (
      <PaginationNumber
        bgColor="neutral5"
        color="neutral9">
        {data.current}
      </PaginationNumber>
    )
  }

  const RenderNext = () => {
    if (data.next === data.current || data.next === data.end || data.next === 1) {
      return null
    }
    return (
      <PaginationNumber href={`${href}&page=${data.next}`}>
        {data.next}
      </PaginationNumber>
    )
  }

  const RenderEnd = () => {
    if (data.end === data.current) {
      return null
    }
    return (
      <PaginationNumber href={`${href}&page=${data.end}`}>
        {data.end}
      </PaginationNumber>
    )
  }

  const RenderSpace = () => {
    return (
      <PaginationNumber>...</PaginationNumber>
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