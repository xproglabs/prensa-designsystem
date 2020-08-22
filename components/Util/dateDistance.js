import {map} from 'lodash'
import {pt} from 'date-fns/locale'
import formatDistance from 'date-fns/formatDistance'
import differenceInHours from 'date-fns/differenceInHours'
import datePtBrFull from './datePtBrFull'

const dateDistance = (date, limit) => {

  const _now = new Date()
  const _date = new Date(date)
  
  const distanteInWords = formatDistance(_date, _now, {locale: pt})
  const diffHours = differenceInHours(_now, _date, {locale: pt})

  if(diffHours > limit)
    return datePtBrFull(date)

  const replaces = [
    ["aproximadamente ", ""],
  ]
  let date_string = distanteInWords
  map(replaces, (r, k) => {
    date_string = date_string.replace(r[0], r[1])
  })
  return `Há ${date_string}`
}
export default dateDistance