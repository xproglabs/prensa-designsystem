const parsePadding = (theme, {px, py, pt, pr, pb, pl}) => {
  let object = [];
  px && object.push(`padding-left: ${px}; padding-right: ${px};`);
  py && object.push(`padding-top: ${py}; padding-bottom: ${py};`);
  pt && object.push(`padding-top: ${pt};`);
  pr && object.push(`padding-right: ${pr};`);
  pb && object.push(`padding-bottom: ${pb};`);
  pl && object.push(`padding-left: ${pl};`);
  return object.join('');
};

export {parsePadding};