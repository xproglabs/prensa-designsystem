import { IPrensaThemeProps } from '@prensa_tokens'

export const PrensaDefaultTheme: IPrensaThemeProps = {
  fonts: {
    primary: 'Work Sans',
    secondary: 'Nunito Sans'
  },
  factors: {
    dimensions: 10,
    fontSize: 8,
    lineHeight: 8,
    letterSpacing: 2,
    margin: 8,
    padding: 8
  },
  queries: {
    xs: '360px',
    sm: '460px',
    md: '768px',
    lg: '1016px',
    xl: '1280px'
  },
  radius: {
    unset: '0px',
    default: '3px',
    alternative: '5px',
    rounded: '99px',
    circle: '50%'
  }
}