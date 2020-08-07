import {distanceInWords} from 'date-fns'
import {pt} from 'date-fns/locale'
import {map} from 'lodash'

const convertDateFromPtBrToDistance = (date) => {
  const a = date ? date.trim().split(".") : ``
  const b = a[2] ? a[2].split(" ") : ``
  const c = b[1] ? b[1].split(":") : ``
  const new_date = new Date(b[0], a[1], a[0], c[0], c[1])
  const distanteInWords = distanceInWords(new_date, new Date(), {locale: pt})
  const replaces = [
    ["less than a minute", "menos de 1 minuto"],
    ["about", ""],
    ["over", ""],
    ["almost", ""],
    ["hour", "hora"],
    ["hours", "horas"],
    ["month", "meses"],
    ["months", "meses"],
    ["minute", "minuto"],
    ["minutes", "minutos"],
    ["year", "ano"],
    ["years", "anos"],
    ["day", "dia"],
    ["days", "dias"],
  ]
  let date_string = distanteInWords
  map(replaces, (r, k) => {
    date_string = date_string.replace(r[0], r[1])
  })
  return `Há ${date_string}`
}
export {convertDateFromPtBrToDistance}