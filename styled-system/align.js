import { get } from 'lodash'

export const align = (props) => {

  const align = get(props, 'align', undefined)
  const alignx = get(props, 'alignx', undefined)
  const aligny = get(props, 'aligny', undefined)

  let object = []
  let alignItems = ''
  let display = 'flex'
  let flexDirection = ''
  let justifyContent = ''
  
  // check if is column
  if (align === 'column') {
    flexDirection = align
    // x axys
    if(alignx === 'left') {
      alignItems = 'flex-start'
    }
    if(alignx === 'center') {
      alignItems = 'center'
    }
    if(alignx === 'right') {
      alignItems = 'flex-end'
    }
    if(alignx === 'evenly') {
      justifyContent = 'space-evenly'
    }
    if(alignx === 'between') {
      justifyContent = 'space-between'
    }
    // y axis
    if(aligny === 'top') {
      justifyContent = 'flex-start'
    }
    if(aligny === 'middle') {
      justifyContent = 'center'
    }
    if(aligny === 'bottom') {
      justifyContent = 'flex-end'
    }
    if(aligny === 'evenly') {
      justifyContent = 'space-evenly'
    }
    if(aligny === 'between') {
      justifyContent = 'space-between'
    }
  }
  // check if is row
  if (align === 'row') {
    flexDirection = align
    if(alignx === 'left') {
      alignItems = 'flex-start'
    }
    if(alignx === 'center') {
      justifyContent = 'center'
    }
    if(alignx === 'right') {
      justifyContent = 'flex-end'
    }
    if(alignx === 'evenly') {
      justifyContent = 'space-evenly'
    }
    if(alignx === 'between') {
      justifyContent = 'space-between'
    }
    if(aligny === 'top') {
      alignItems = 'flex-start'
    }
    if(aligny === 'middle') {
      alignItems = 'center'
    }
    if(aligny === 'bottom') {
      alignItems = 'flex-end'
    }
    if(aligny === 'evenly') {
      justifyContent = 'space-evenly'
    }
    if(aligny === 'between') {
      justifyContent = 'space-between'
    }
  }
  // define strings
  alignItems !== '' && object.push(`align-items: ${alignItems};`)
  display !== '' && object.push(`display: ${display};`)
  flexDirection !== '' && object.push(`flex-direction: ${flexDirection};`)
  justifyContent !== '' && object.push(`justify-content: ${justifyContent};`)

  // end
  return object.join('')
}