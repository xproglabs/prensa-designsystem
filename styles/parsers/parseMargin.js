const parseMargin = (theme, {mx, my, mt, mr, mb, ml}) => {
  let object = [];
  mx && object.push(`margin-left: ${mx}; margin-right: ${mx};`);
  my && object.push(`margin-top: ${my}; margin-bottom: ${my};`);
  mt && object.push(`margin-top: ${mt};`);
  mr && object.push(`margin-right: ${mr};`);
  mb && object.push(`margin-bottom: ${mb};`);
  ml && object.push(`margin-left: ${ml};`);
  return object.join('');
};

export {parseMargin};