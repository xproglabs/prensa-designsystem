const parseFontFamily = (props, theme) => {
  if (!props) return '';
  const selected = theme.fonts[props.typography];
  if (!selected) return '';
  return `font-family: ${selected};`;
};

export {parseFontFamily};