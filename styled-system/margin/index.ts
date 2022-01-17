import { generateMT, generateMR, generateMB, generateML } from './parsers'
import { marginResponsive } from './responsive'
import { MarginStyledFunctionParam0 } from './types'

/**
 * Prensa Styled System | margin
 * @param props Expect an Object containing props from component that is invoking this function
 * mt: string | number | Array<string|number>;
 * mr: string | number | Array<string|number>;
 * mb: string | number | Array<string|number>;
 * ml: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
export function margin(props: MarginStyledFunctionParam0) {

  if (!props) return ''

  const { mt, mr, mb, ml, theme }: MarginStyledFunctionParam0 = props
  const factor = theme.factors.margin
  const styles = []

  if (mt) styles.push( generateMT(mt, factor) )
  if (mr) styles.push( generateMR(mr, factor) )
  if (mb) styles.push( generateMB(mb, factor) )
  if (ml) styles.push( generateML(ml, factor) )

  styles.push(
    marginResponsive(
      mt,
      mr,
      mb,
      ml,
      theme
    )
  )

  return styles.join('')
}