import { get, isArray } from 'lodash'

import { generateNewMediaQuerie } from '../responsiveEngine'
import { generateMT, generateMR, generateMB, generateML, generateMX, generateMY, generateM } from './parsers'

export function marginResponsive(mt, mr, mb, ml, mx, my, m, theme) {

  const factor = get(theme, 'factors.margin', 1)
  const queries = get(theme, 'queries', {})
  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(mt) && mt.length === 2) {
    mobileStyles.push( generateMT(mt[0], factor) )
    desktopStyles.push( generateMT(mt[1], factor) )
  }
  if (isArray(mt) && mt.length === 3) {
    mobileStyles.push( generateMT(mt[0], factor) )
    tabletStyles.push( generateMT(mt[1], factor) )
    desktopStyles.push( generateMT(mt[2], factor) )
  }

  if (isArray(mr) && mr.length === 2) {
    mobileStyles.push( generateMR(mr[0], factor) )
    desktopStyles.push( generateMR(mr[1], factor) )
  }
  if (isArray(mr) && mr.length === 3) {
    mobileStyles.push( generateMR(mr[0], factor) )
    tabletStyles.push( generateMR(mr[1], factor) )
    desktopStyles.push( generateMR(mr[2], factor) )
  }

  if (isArray(mb) && mb.length === 2) {
    mobileStyles.push( generateMB(mb[0], factor) )
    desktopStyles.push( generateMB(mb[1], factor) )
  }
  if (isArray(mb) && mb.length === 3) {
    mobileStyles.push( generateMB(mb[0], factor) )
    tabletStyles.push( generateMB(mb[1], factor) )
    desktopStyles.push( generateMB(mb[2], factor) )
  }

  if (isArray(ml) && ml.length === 2) {
    mobileStyles.push( generateML(ml[0], factor) )
    desktopStyles.push( generateML(ml[1], factor) )
  }
  if (isArray(ml) && ml.length === 3) {
    mobileStyles.push( generateML(ml[0], factor) )
    tabletStyles.push( generateML(ml[1], factor) )
    desktopStyles.push( generateML(ml[2], factor) )
  }

  if (isArray(mx) && mx.length === 2) {
    mobileStyles.push( generateMX(mx[0], factor) )
    desktopStyles.push( generateMX(mx[1], factor) )
  }
  if (isArray(mx) && mx.length === 3) {
    mobileStyles.push( generateMX(mx[0], factor) )
    tabletStyles.push( generateMX(mx[1], factor) )
    desktopStyles.push( generateMX(mx[2], factor) )
  }

  if (isArray(my) && my.length === 2) {
    mobileStyles.push( generateMY(my[0], factor) )
    desktopStyles.push( generateMY(my[1], factor) )
  }
  if (isArray(my) && my.length === 3) {
    mobileStyles.push( generateMY(my[0], factor) )
    tabletStyles.push( generateMY(my[1], factor) )
    desktopStyles.push( generateMY(my[2], factor) )
  }

  if (isArray(m) && m.length === 2) {
    mobileStyles.push( generateM(m[0], factor) )
    desktopStyles.push( generateM(m[1], factor) )
  }
  if (isArray(m) && m.length === 3) {
    mobileStyles.push( generateM(m[0], factor) )
    tabletStyles.push( generateM(m[1], factor) )
    desktopStyles.push( generateM(m[2], factor) )
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