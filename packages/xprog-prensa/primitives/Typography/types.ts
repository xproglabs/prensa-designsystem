import { PrensaEngineTypeof } from '@xprog/prensa-system'
import { ITypographyStyled } from './styled'

export type TypographyVariantKeys = keyof PrensaEngineTypeof['config']['theme']['fontSizes'];
export type TypographyElementKeys = keyof Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'cite' | 'li'>;

export interface ITypography extends ITypographyStyled {
  as?: TypographyElementKeys;
  variant?: TypographyVariantKeys;
}
