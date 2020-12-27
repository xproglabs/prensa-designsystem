const parserRender = (theme, props) => {
  return `
    ${theme.parseAlign(theme, props)}
    ${theme.parseBgColor(theme, props)}
    ${theme.parseFontColor(theme, props)}
    ${theme.parseFontFamily(theme, props)}
    ${theme.parseCustomDef(theme, props)}
    ${theme.parseCustom(theme, props)}
  `;
};

const parseProps = (media, theme, props) => {
  switch (media) {
    case 'xs':
      return `@media (min-width: ${theme.queries.xs}) {
        ${parserRender(theme, props)}
      }`;
    case 'sm':
      return `@media (min-width: ${theme.queries.sm}) {
        ${parserRender(theme, props)}
      }`;
    case 'md':
      return `@media (min-width: ${theme.queries.md}) {
        ${parserRender(theme, props)}
      }`;
    case 'lg':
      return `@media (min-width: ${theme.queries.lg}) {
        ${parserRender(theme, props)}
      }`;
    case 'xl':
      return `@media (min-width: ${theme.queries.xl}) {
        ${parserRender(theme, props)}
      }`;
    default:
      return `${parserRender(theme, props)}`;
  }
};

export {parseProps};