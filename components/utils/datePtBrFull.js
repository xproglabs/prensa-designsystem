import format from 'date-fns/format'

const datePtBrFull = (date) => {
  const _date = new Date(date)
  return `${format(_date, "dd/MM/yyyy")} às ${format(_date, "HH:mm")}`
}
export default datePtBrFull