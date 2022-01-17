import { get, isArray } from 'lodash'

import { generateNewMediaQuerie } from '../responsiveEngine'
import { generatePT, generatePR, generatePB, generatePL, generatePX, generatePY, generateP } from './parsers'

export function marginResponsive(mt, mr, mb, ml, mx, my, m, theme) {

  const factor = get(theme, 'factors.padding', 1)
  const queries = get(theme, 'queries', {})
  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(mt) && mt.length === 2) {
    mobileStyles.push( generatePT(mt[0], factor) )
    desktopStyles.push( generatePT(mt[1], factor) )
  }
  if (isArray(mt) && mt.length === 3) {
    mobileStyles.push( generatePT(mt[0], factor) )
    tabletStyles.push( generatePT(mt[1], factor) )
    desktopStyles.push( generatePT(mt[2], factor) )
  }

  if (isArray(mr) && mr.length === 2) {
    mobileStyles.push( generatePR(mr[0], factor) )
    desktopStyles.push( generatePR(mr[1], factor) )
  }
  if (isArray(mr) && mr.length === 3) {
    mobileStyles.push( generatePR(mr[0], factor) )
    tabletStyles.push( generatePR(mr[1], factor) )
    desktopStyles.push( generatePR(mr[2], factor) )
  }

  if (isArray(mb) && mb.length === 2) {
    mobileStyles.push( generatePB(mb[0], factor) )
    desktopStyles.push( generatePB(mb[1], factor) )
  }
  if (isArray(mb) && mb.length === 3) {
    mobileStyles.push( generatePB(mb[0], factor) )
    tabletStyles.push( generatePB(mb[1], factor) )
    desktopStyles.push( generatePB(mb[2], factor) )
  }

  if (isArray(ml) && ml.length === 2) {
    mobileStyles.push( generatePL(ml[0], factor) )
    desktopStyles.push( generatePL(ml[1], factor) )
  }
  if (isArray(ml) && ml.length === 3) {
    mobileStyles.push( generatePL(ml[0], factor) )
    tabletStyles.push( generatePL(ml[1], factor) )
    desktopStyles.push( generatePL(ml[2], factor) )
  }

  if (isArray(mx) && mx.length === 2) {
    mobileStyles.push( generatePX(mx[0], factor) )
    desktopStyles.push( generatePX(mx[1], factor) )
  }
  if (isArray(mx) && mx.length === 3) {
    mobileStyles.push( generatePX(mx[0], factor) )
    tabletStyles.push( generatePX(mx[1], factor) )
    desktopStyles.push( generatePX(mx[2], factor) )
  }

  if (isArray(my) && my.length === 2) {
    mobileStyles.push( generatePY(my[0], factor) )
    desktopStyles.push( generatePY(my[1], factor) )
  }
  if (isArray(my) && my.length === 3) {
    mobileStyles.push( generatePY(my[0], factor) )
    tabletStyles.push( generatePY(my[1], factor) )
    desktopStyles.push( generatePY(my[2], factor) )
  }

  if (isArray(m) && m.length === 2) {
    mobileStyles.push( generateP(m[0], factor) )
    desktopStyles.push( generateP(m[1], factor) )
  }
  if (isArray(m) && m.length === 3) {
    mobileStyles.push( generateP(m[0], factor) )
    tabletStyles.push( generateP(m[1], factor) )
    desktopStyles.push( generateP(m[2], factor) )
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