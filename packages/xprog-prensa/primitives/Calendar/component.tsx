import React, { useState } from 'react'

import { PrensaEngine } from '../../prensa.default.config'
import { Block } from '../Block'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'
import { CalendarProps } from './types'

const Ol = PrensaEngine.styled('ol', {})
const Li = PrensaEngine.styled('li', {})

function parseMonthToLocale(d) {
  switch (d) {
    case 0:
      return 'Janeiro'
    case 1:
      return 'Fevereiro'
    case 2:
      return 'Março'
    case 3:
      return 'Abril'
    case 4:
      return 'Maio'
    case 5:
      return 'Junho'
    case 6:
      return 'Julho'
    case 7:
      return 'Agosto'
    case 8:
      return 'Setembro'
    case 9:
      return 'Outubro'
    case 10:
      return 'Novembro'
    case 11:
      return 'Dezembro'
  }
}

function getAllDaysInMonth(year, month) {
  const date = new Date(year, month, 1)
  const dates: Array<Date> = []
  while (date.getMonth() === month) {
    dates.push(new Date(date))
    date.setDate(date.getDate() + 1)
  }
  return dates
}

function calculateDaysElements(daysOfMonth, daysOfLastMonth, firstDayGap) {
  const dayElements: Array<Date> = [...daysOfMonth]
  if (firstDayGap > 0) {
    let lastMonthGapDays: Array<Date> = []
    let i = firstDayGap
    while (i > 0) {
      lastMonthGapDays.push(daysOfLastMonth[daysOfLastMonth.length - i])
      i = i - 1
    }
    lastMonthGapDays.reverse().forEach((i) => dayElements.unshift(i))
  }
  return dayElements
}

function calculateDatesForPicker(d) {
  const date = new Date(d)
  const month = date.getMonth()
  const year = date.getFullYear()
  const daysOfLastMonth = getAllDaysInMonth(month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1)
  const daysOfMonth = getAllDaysInMonth(year, month)
  const daysOfNextMonth = getAllDaysInMonth(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1)
  const firstDayOfMonth = daysOfMonth[0]
  const lastDayOfMonth = daysOfMonth[daysOfMonth.length - 1]
  const firstDayGap = firstDayOfMonth.getDay()
  const lastDayGap = lastDayOfMonth.getDay()
  const renderDays = calculateDaysElements(daysOfMonth, daysOfLastMonth, firstDayGap)
  return {
    date,
    month,
    year,
    daysOfLastMonth,
    daysOfMonth,
    daysOfNextMonth,
    firstDayGap,
    lastDayGap,
    renderDays
  }
}

const LOCALE_DAYS_OF_WEEK = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export const Calendar: React.FC<CalendarProps> = ({ date, selectedDate, onChange }) => {

  const rendertime = Date.now()
  const dates = calculateDatesForPicker(rendertime)
  const [state, setState] = useState(dates)

  const handleChange = (e: React.MouseEvent, d: Date) => {
    onChange(d)
  }

  const renderHeader = () => {
    const handlePrev = () => {
      const newState = calculateDatesForPicker(state.daysOfLastMonth[state.daysOfLastMonth.length - 1])
      setState({ ...newState })
    }
    const handleNext = () => {
      const newState = calculateDatesForPicker(state.daysOfNextMonth[state.daysOfNextMonth.length - 1])
      setState({ ...newState })
    }
    return (
      <Block
        as='header'
        css={{
          align: ['row', 'between', 'middle'],
          width: '100%'
        }}
      >
        <IconButton
          variant='ghost'
          css={{
            button: {
              align: ['row', 'center', 'middle'],
              // backgroundColor: '$basicBlackAlpha400',
              borderRadius: '$circle',
              height: '$11',
              width: '$11'
            }
          }}
          onClick={handlePrev}
        >
          {'<'}
        </IconButton>
        <Typography
          as='span'
          css={{
            fontFamily: '$primary'
          }}
        >
          {parseMonthToLocale(state.month)} de {state.year}
        </Typography>
        <IconButton
          variant='ghost'
          css={{
            button: {
              align: ['row', 'center', 'middle'],
              // backgroundColor: '$basicBlackAlpha400',
              borderRadius: '$circle',
              height: '$11',
              width: '$11'
            }
          }}
          onClick={handleNext}
        >
          {'>'}
        </IconButton>
      </Block>
    )
  }

  const renderDaysOfWeek = () => {
    return (
      <Block css={{ align: ['row', 'between', 'middle'] }}>
        {LOCALE_DAYS_OF_WEEK.map((d, k) => (
          <Typography
            as='span'
            key={`${d}-${k}`}
            css={{
              align: ['row', 'center', 'middle'],
              height: '39px', width: '39px',
              fontFamily: '$primary'
            }}
          >
            {d}
          </Typography>
        ))}
      </Block>
    )
  }

  const renderDays = () => {
    return (
      <Ol
        css={{
          align: ['row', 'left', 'top'],
          flexWrap: 'wrap',
          padding: '0px',
          maxWidth: 'calc(273px + $8)',
          mt: '$0',
          mb: '$4',
          'list-style-type': 'none'
        }}
      >
        {state.renderDays.map((d) => {
          return (
            <Li
              key={d.getTime()}
              css={{
                align: ['row', 'center', 'middle'],
                height: '39px',
                width: '39px'
              }}
            >
              <IconButton
                variant='ghost'
                data-selected-state={d === selectedDate}
                disabled={d.getMonth() !== state.month}
                onClick={(e) => handleChange(e, d)}
                css={{
                  button: {
                    borderRadius: '$circle',
                    color: '$brandNeutral800',
                    '&[data-selected-state=true]': {
                      backgroundColor: '$brandPrimary400'
                    },
                    '&:hover': {
                      backgroundColor: '$basicBlackAlpha300'
                    },
                    '&:active': {
                      backgroundColor: '$basicBlackAlpha400'
                    },
                    '&:disabled': {
                      backgroundColor: 'none',
                      color: '$brandNeutral400',
                      '&:hover': {
                        backgroundColor: 'unset',
                        cursor: 'not-allowed'
                      }
                    }
                  }
                }}
              >
                {d.getDate()}
              </IconButton>
            </Li>
          )
        })}
      </Ol>
    )
  }

  return (
    <Block
      css={{
        align: ['column', 'center', 'top'],
        borderColor: '$basicBlackAlpha500',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: 'calc($alternative * 3)',
        p: '$4',
        maxWidth: '273px'
      }}
    >
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDays()}
    </Block>
  )
}