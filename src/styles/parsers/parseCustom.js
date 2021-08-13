const parseCustom = (props) => {
  if (!props || !props.custom) return ''
  let object = []
  object.push(`${props.custom}`)
  return object.join('')
}

const parseCustomDef = (props) => {
  if (!props || !props.customDef) return ''
  let object = []
  switch (props.customDef) {
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

export { parseCustom, parseCustomDef }