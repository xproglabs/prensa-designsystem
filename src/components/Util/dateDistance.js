import { differenceInHours } from 'date-fns'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { map } from 'lodash'

import datePtBrFull from './datePtBrFull'

const dateDistance = (date, limit) => {

  if(!date) return false
  let d = date.replace('T', ' ')
  let _y = d.split('-')
  let _d = _y[2].split(' ')
  let _t = _d.length > 1 ? _d[1].split(':') : [0, 0]
  let _now = new Date().getTime()
  let _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1]).getTime()

  const distanteInWords = formatDistance(_now, _date, { locale: ptBR })
  const diffHours = differenceInHours(_now, _date, { locale: ptBR })

  if(diffHours > limit)
    return datePtBrFull(date)

  const replaces = [
    ['aproximadamente ', ''],
  ]
  let date_string = distanteInWords
  map(replaces, r => {
    date_string = date_string.replace(r[0], r[1])
  })
  return `Há ${date_string}`
}
export default dateDistance