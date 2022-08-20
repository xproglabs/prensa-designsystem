import { generateWidth } from './parsers'
import { widthResponsive } from './responsive'
import { WidthStyledFunctionParam0 } from './types'

/**
 * Prensa Styled System | width
 * @param props Expect an Object containing props from component that is invoking this function
 * $width: string | number | Array<string|number>;
 * @returns a string with CSS syntax
 */
export function width(props: WidthStyledFunctionParam0) {

  if (!props) return ''

  const { $width, theme }: WidthStyledFunctionParam0 = props
  const factor = theme.factors.dimensions
  const styles = []

  if ($width) styles.push( generateWidth($width, factor) )

  styles.push(
    widthResponsive(
      $width,
      theme
    )
  )

  return styles.join('')
}