import { generatePT, generatePR, generatePB, generatePL, generatePX, generatePY, generateP } from './parsers'
import { paddingResponsive } from './responsive'
import { PaddingStyledFunctionParam0 } from './types'

/**
 * Prensa Styled System | padding
 * @param props Expect an Object containing props from component that is invoking this function
 * pt: string | number | Array<string|number>;
 * pr: string | number | Array<string|number>;
 * pb: string | number | Array<string|number>;
 * pl: string | number | Array<string|number>;
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
    paddingResponsive(
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