const parseDimension = (theme, {height, width}) => {
  let object = [];
  let factor = 8;

  isNaN(height) ?
    object.push(`height: ${height};`) :
    object.push(`height: ${factor * height}px;`);

  isNaN(width) ?
    object.push(`width: ${width};`) :
    object.push(`width: ${factor * width}px;`);

  return object.join('');
};

export {parseDimension};