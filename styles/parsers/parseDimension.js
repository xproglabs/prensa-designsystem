const parseDimension = (theme, {height, width}) => {
  let object = [];
  let factor = theme.factors.dimensions;

  height !== undefined && isNaN(height) ?
    object.push(`height: ${height};`) :
    object.push(`height: ${factor * height}px;`);

  width !== undefined && isNaN(width) ?
    object.push(`width: ${width};`) :
    object.push(`width: ${factor * width}px;`);

  return object.join('');
};

export {parseDimension};