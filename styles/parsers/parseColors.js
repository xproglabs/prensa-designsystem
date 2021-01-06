const parseBgColor = (theme, {bgColor}) => {
  const selected = theme.colors[bgColor];
  if(!selected)
    return '';
  return `background-color: ${selected};`;
};

const parseFontColor = (theme, {fontColor}) => {
  const selected = theme.colors[fontColor];
  if(!selected)
    return '';
  return `color: ${selected};`;
};

export {parseBgColor, parseFontColor};