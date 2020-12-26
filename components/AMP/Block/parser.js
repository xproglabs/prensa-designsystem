const parseAlign = ({align, alignx, aligny}) => {
  let object = []
  let ai = ''
  let di = 'flex'
  let fd = ''
  let jc = ''
  // check if is column
  if(align === 'col') {
    fd = 'column'
    // x axys
    if(alignx === 'left') {
      ai = 'flex-start'
    }
    if(alignx === 'center') {
      ai = 'center'
    }
    if(alignx === 'right') {
      ai = 'flex-end'
    }
    if(alignx === 'evenly') {
      jc = 'space-evenly'
    }
    if(alignx === 'between') {
      jc = 'space-between'
    }
    // y axis
    if(aligny === 'top') {
      jc = 'flex-start'
    }
    if(aligny === 'middle') {
      jc = 'center'
    }
    if(aligny === 'bottom') {
      jc = 'flex-end'
    }
    if(aligny === 'evenly') {
      jc = 'space-evenly'
    }
    if(aligny === 'between') {
      jc = 'space-between'
    }
  }
  // check if is row
  if(align === 'row') {
    fd = 'row'
    if(alignx === 'left') {
      ai = 'flex-start'
    }
    if(alignx === 'center') {
      jc = 'center'
    }
    if(alignx === 'right') {
      jc = 'flex-end'
    }
    if(alignx === 'evenly') {
      jc = 'space-evenly'
    }
    if(alignx === 'between') {
      jc = 'space-between'
    }
    if(aligny === 'top') {
      ai = 'flex-start'
    }
    if(aligny === 'middle') {
      ai = 'center'
    }
    if(aligny === 'bottom') {
      ai = 'flex-end'
    }
    if(aligny === 'evenly') {
      jc = 'space-evenly'
    }
    if(aligny === 'between') {
      jc = 'space-between'
    }
  }
  // define strings
  ai !== "" && object.push(`align-items: ${ai};`)
  di !== "" && object.push(`display: ${di};`)
  fd !== "" && object.push(`flex-direction: ${fd};`)
  jc !== "" && object.push(`justify-content: ${jc};`)
  // end
  return object.join('')
}

const parseCustom = (custom) => {
  if(!custom)
    return null
  let object = []
  object.push(`
    ${custom}
  `)
  return object.join('')
}

const parseTheme = (theme) => {
  let object = []
  switch (theme) {
    case 'demo':
      object.push(`
        background-color: rgba(1, 22, 39, 0.2);
        color: rgba(255, 55, 255, 1);
        font-weight: bold;
        height: 100px;
        span { 
          border: 1px solid rgba(255, 55, 255, 1);
          font-size: 11px;
          padding: 3px;
          margin: 0px; 
        }
      `)
  }
  return object.join('')
}

export {parseAlign, parseCustom, parseTheme}