import React, { useEffect, useState } from 'react'

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

export const Calendar: React.FC<CalendarProps> = ({ css, selectedDate, onChange, icBackward, icForward }) => {

  const dates = calculateDatesForPicker(selectedDate)
  const [state, setState] = useState(dates)

  const handleChange = (e: React.MouseEvent, d: Date) => {
    onChange(d)
  }

  function isSameDay(first, second): boolean {
    return first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
  }

  useEffect(() => {
    const dates = calculateDatesForPicker(selectedDate)
    setState(dates)
  }, [selectedDate])

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
        className='pds-Calendar-headerGroup'
        css={{
          align: ['row', 'between', 'middle'],
          width: '100%',
          ...css?.headerGroup
        }}
      >
        <IconButton
          className='pds-Calendar-headerButton'
          variant='ghost'
          css={{
            button: {
              align: ['row', 'center', 'middle'],
              // backgroundColor: '$basicBlackAlpha400',
              borderRadius: '$circle',
              height: '$11',
              width: '$11',
              ...css?.headerButton
            }
          }}
          onClick={handlePrev}
        >
          {icBackward ? icBackward : '<'}
        </IconButton>
        <Typography
          as='span'
          className='pds-Calendar-headerTitle'
          css={{
            fontFamily: '$primary',
            ...css?.headerTitle
          }}
        >
          {parseMonthToLocale(state.month)} de {state.year}
        </Typography>
        <IconButton
          className='pds-Calendar-headerButton'
          variant='ghost'
          css={{
            button: {
              align: ['row', 'center', 'middle'],
              // backgroundColor: '$basicBlackAlpha400',
              borderRadius: '$circle',
              height: '$11',
              width: '$11',
              ...css?.headerButton
            }
          }}
          onClick={handleNext}
        >
          {icForward ? icForward : '>'}
        </IconButton>
      </Block>
    )
  }

  const renderDaysOfWeek = () => {
    return (
      <Block
        className='pds-Calendar-weekGroup'
        css={{
          align: ['row', 'between', 'middle'],
          ...css?.weekGroup
        }}
      >
        {LOCALE_DAYS_OF_WEEK.map((d, k) => (
          <Typography
            as='span'
            className='pds-Calendar-weekDay'
            key={`${d}-${k}`}
            css={{
              align: ['row', 'center', 'middle'],
              height: '39px', width: '39px',
              fontFamily: '$primary',
              ...css?.weekDay
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
        className='pds-Calendar-dayGroup'
        css={{
          align: ['row', 'left', 'top'],
          flexWrap: 'wrap',
          padding: '0px',
          maxWidth: 'calc(273px + $8)',
          mt: '$0',
          mb: '$4',
          'list-style-type': 'none',
          ...css?.dayGroup
        }}
      >
        {state.renderDays.map((d) => {
          return (
            <Li
              className='pds-Calendar-day'
              key={d.getTime()}
              css={{
                align: ['row', 'center', 'middle'],
                height: '39px',
                width: '39px',
                ...css?.day
              }}
            >
              <IconButton
                className='pds-Calendar-dayButton'
                variant='ghost'
                data-selected-state={isSameDay(d, selectedDate)}
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
                    },
                    ...css?.dayButton
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
      className='pds-Calendar-container'
      css={{
        align: ['column', 'center', 'top'],
        borderColor: '$basicBlackAlpha500',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: 'calc($alternative * 3)',
        p: '$4',
        maxWidth: '273px',
        ...css?.container
      }}
    >
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderDays()}
    </Block>
  )
}