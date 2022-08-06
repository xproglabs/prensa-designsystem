import { get, isArray } from 'lodash'

import { generateNewMediaQuerie } from '../responsiveEngine'
import { parseAlign, parseAlignX, parseAlignY } from './parsers'

export function alignResponsive(align, alignx, aligny, theme) {

  const queries = get(theme, 'queries', {})
  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(align) && align.length === 2) {
    mobileStyles.push(parseAlign(align[0]))
    desktopStyles.push(parseAlign(align[1]))
  }
  if (isArray(align) && align.length === 3) {
    mobileStyles.push(parseAlign(align[0]))
    tabletStyles.push(parseAlign(align[1]))
    desktopStyles.push(parseAlign(align[2]))
  }

  if (isArray(alignx) && alignx.length === 2) {
    mobileStyles.push(parseAlignX(align[0], alignx[0]))
    desktopStyles.push(parseAlignX(align[1], alignx[1]))
  }
  if (isArray(alignx) && alignx.length === 3) {
    mobileStyles.push(parseAlignX(align[0], alignx[0]))
    tabletStyles.push(parseAlignX(align[1], alignx[1]))
    desktopStyles.push(parseAlignX(align[2], alignx[2]))
  }

  if (isArray(aligny) && aligny.length === 2) {
    mobileStyles.push(parseAlignY(align[0], aligny[0]))
    desktopStyles.push(parseAlignY(align[1], aligny[1]))
  }
  if (isArray(aligny) && aligny.length === 3) {
    mobileStyles.push(parseAlignY(align[0], aligny[0]))
    tabletStyles.push(parseAlignY(align[1], aligny[1]))
    desktopStyles.push(parseAlignY(align[2], aligny[2]))
  }

  styles.push(
    mobileStyles.join('')
  )

  styles.push(
    generateNewMediaQuerie(
      tabletStyles.join(''),
      queries.md
    )
  )

  styles.push(
    generateNewMediaQuerie(
      desktopStyles.join(''),
      queries.lg
    )
  )

  return styles.join('')
}