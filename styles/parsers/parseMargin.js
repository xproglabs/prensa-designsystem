const parseMargin = (theme, {mx, my, mt, mr, mb, ml}) => {
  let object = [];
  let factor = 8;

  isNaN(mx) ?
    object.push(`margin-left: ${mx}; margin-right: ${mx};`) :
    object.push(`margin-left: ${factor * mx}px; margin-right: ${factor * mx}px;`);

  isNaN(my) ?
    object.push(`margin-top: ${my}; margin-bottom: ${my};`) :
    object.push(`margin-top: ${factor * my}px; margin-bottom: ${factor * my}px;`);

  isNaN(mt) ?
    object.push(`margin-top: ${mt};`) :
    object.push(`margin-top: ${factor * mt}px;`);

  isNaN(mr) ?
    object.push(`margin-right: ${mr};`) :
    object.push(`margin-right: ${factor * mr}px;`);

  isNaN(mb) ?
    object.push(`margin-bottom: ${mb};`) :
    object.push(`margin-bottom: ${factor * mb}px;`);

  isNaN(ml) ?
    object.push(`margin-left: ${ml};`) :
    object.push(`margin-left: ${factor * ml}px;`);

  return object.join('');
};

export {parseMargin};