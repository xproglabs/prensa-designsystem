import { boxShadow } from '../../styled-system'
import { border } from '../../styled-system/border'
import { dimensions } from '../../styled-system/dimensions'
import { parseAlign } from './parseAlign'
import { parseHeight } from './parseDimensions'

const parseStyle = (props, theme) => {
  return `
    ${border({ ...props, radius: props.$radius, theme })};
    ${boxShadow({ ...props, boxShadow: props.boxShadow })};
    ${dimensions({ ...props, theme })};
    ${parseAlign(props, theme)};
    ${parseHeight(props, theme)};
    ${theme.parseBgColor(props, theme)};
    ${theme.parseFontColor(props, theme)};
    ${theme.parseFontFamily(props, theme)};
    ${theme.parseCustomDef(props, theme)};
    ${theme.parseCustom(props, theme)};
    ${theme.parseMargin(props, theme)};
    ${theme.parsePadding(props, theme)};
  `
}

const parseProps = (media, props) => {
  switch (media) {
    case 'xs':
      return `
        @media (min-width: ${props.theme.queries.xs}) {
          ${parseStyle(props.xs, props.theme)}
        }
      `
    case 'sm':
      return `
        @media (min-width: ${props.theme.queries.sm}) {
          ${parseStyle(props.sm, props.theme)}
        }
      `
    case 'md':
      return `
        @media (min-width: ${props.theme.queries.md}) {
          ${parseStyle(props.md, props.theme)}
        }
      `
    case 'lg':
      return `
        @media (min-width: ${props.theme.queries.lg}) {
          ${parseStyle(props.lg, props.theme)}
        }
      `
    case 'xl':
      return `
        @media (min-width: ${props.theme.queries.xl}) {
          ${parseStyle(props.xl, props.theme)}
        }
      `
    default:
      return `${parseStyle(props, props.theme)}`
  }
}

export { parseProps }