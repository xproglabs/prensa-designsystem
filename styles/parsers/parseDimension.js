const parseDimension = (theme, {height, width}) => {
  let object = [];
  height && object.push(`height: ${height};`);
  width && object.push(`width: ${width};`);
  return object.join('');
};

export {parseDimension};