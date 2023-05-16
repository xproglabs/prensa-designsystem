import { PrensaEngineCSS, PrensaEngineTypeof } from '@xprog/prensa-system'
import { TypographyType } from './styles'

export type TypographyProps = TypographyType['propTypes'];
export type TypographyVariantKeys = { [K in keyof PrensaEngineTypeof['config']['theme']['fontSizes']]: PrensaEngineCSS };
export type TypographyVariant = Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'cite' | 'li'>;