const parseFontFamily = (theme, {typography}) => {
  const selected = theme.fonts[typography];
  if(!selected)
    return '';
  return `font-family: ${selected};`;
};

export {parseFontFamily};