const parseMargin = (props, theme) => {

  if (!props) return ''
  const { mx, my, mt, mr, mb, ml } = props

  let object = []
  let factor = theme.factors.margin

  mx !== undefined && isNaN(mx) ?
    object.push(`
      margin-left: ${mx}; 
      margin-right: ${mx};`
    ) :
    mx && object.push(`
      margin-left: ${factor * mx}px; 
      margin-right: ${factor * mx}px;
    `)

  my !== undefined && isNaN(my) ?
    object.push(`
      margin-top: ${my}; 
      margin-bottom: ${my};`
    ) :
    my && object.push(`
      margin-top: ${factor * my}px; 
      margin-bottom: ${factor * my}px;
    `)

  mt !== undefined && isNaN(mt) ?
    object.push(`
      margin-top: ${mt};`
    ) :
    mt && object.push(`
      margin-top: ${factor * mt}px;
    `)

  mr !== undefined && isNaN(mr) ?
    object.push(`
      margin-right: ${mr};`
    ) :
    mr && object.push(`
      margin-right: ${factor * mr}px;
    `)

  mb !== undefined && isNaN(mb) ?
    object.push(`
      margin-bottom: ${mb};`
    ) :
    mb && object.push(`
      margin-bottom: ${factor * mb}px;
    `)

  ml !== undefined && isNaN(ml) ?
    object.push(`
      margin-left: ${ml};`
    ) :
    ml && object.push(`
      margin-left: ${factor * ml}px;
    `)

  return object.join('')
}

export { parseMargin }