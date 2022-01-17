import { generatePT, generatePR, generatePB, generatePL, generatePX, generatePY, generateP } from './parsers'
import { marginResponsive } from './responsive'
import { PaddingStyledFunctionParam0 } from './types'

/**
 * Prensa Styled System | margin
 * @param props Expect an Object containing props from component that is invoking this function
 * mt: string | number | Array<string|number>;
 * mr: string | number | Array<string|number>;
 * mb: string | number | Array<string|number>;
 * ml: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
export function padding(props: PaddingStyledFunctionParam0) {

  if (!props) return ''

  const { pt, pr, pb, pl, px, py, p, theme }: PaddingStyledFunctionParam0 = props
  const factor = theme.factors.margin
  const styles = []

  if (pt) styles.push( generatePT(pt, factor) )
  if (pr) styles.push( generatePR(pr, factor) )
  if (pb) styles.push( generatePB(pb, factor) )
  if (pl) styles.push( generatePL(pl, factor) )
  if (px) styles.push( generatePX(px, factor) )
  if (py) styles.push( generatePY(py, factor) )
  if (p) styles.push( generateP(p, factor) )

  styles.push(
    marginResponsive(
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      p,
      theme
    )
  )

  return styles.join('')
}