import { format } from 'date-fns'

const datePtBrFull = (date) => {
  
  if(!date) return false
  let d = date.replace('T', ' ')
  let _y = d.split('-')
  let _d = _y[2].split(' ')
  let _t = _d.length > 1 ? _d[1].split(':') : [0, 0]
  let _date = new Date(_y[0], _y[1] - 1, _d[0], _t[0], _t[1])
  
  if(!(_date instanceof Date))
    return false
  
  return `${format(_date, 'dd/MM/yyyy')} às ${format(_date, 'HH:mm')}`
}
export default datePtBrFull