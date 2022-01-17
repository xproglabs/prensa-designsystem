import { get, isArray } from 'lodash'

import { generateNewMediaQuerie } from '../responsiveEngine'
import { generatePT, generatePR, generatePB, generatePL, generatePX, generatePY, generateP } from './parsers'

export function paddingResponsive(pt, pr, pb, pl, px, py, p, theme) {

  const factor = get(theme, 'factors.padding', 1)
  const queries = get(theme, 'queries', {})
  const styles = []
  const mobileStyles = []
  const tabletStyles = []
  const desktopStyles = []

  if (isArray(pt) && pt.length === 2) {
    mobileStyles.push( generatePT(pt[0], factor) )
    desktopStyles.push( generatePT(pt[1], factor) )
  }
  if (isArray(pt) && pt.length === 3) {
    mobileStyles.push( generatePT(pt[0], factor) )
    tabletStyles.push( generatePT(pt[1], factor) )
    desktopStyles.push( generatePT(pt[2], factor) )
  }

  if (isArray(pr) && pr.length === 2) {
    mobileStyles.push( generatePR(pr[0], factor) )
    desktopStyles.push( generatePR(pr[1], factor) )
  }
  if (isArray(pr) && pr.length === 3) {
    mobileStyles.push( generatePR(pr[0], factor) )
    tabletStyles.push( generatePR(pr[1], factor) )
    desktopStyles.push( generatePR(pr[2], factor) )
  }

  if (isArray(pb) && pb.length === 2) {
    mobileStyles.push( generatePB(pb[0], factor) )
    desktopStyles.push( generatePB(pb[1], factor) )
  }
  if (isArray(pb) && pb.length === 3) {
    mobileStyles.push( generatePB(pb[0], factor) )
    tabletStyles.push( generatePB(pb[1], factor) )
    desktopStyles.push( generatePB(pb[2], factor) )
  }

  if (isArray(pl) && pl.length === 2) {
    mobileStyles.push( generatePL(pl[0], factor) )
    desktopStyles.push( generatePL(pl[1], factor) )
  }
  if (isArray(pl) && pl.length === 3) {
    mobileStyles.push( generatePL(pl[0], factor) )
    tabletStyles.push( generatePL(pl[1], factor) )
    desktopStyles.push( generatePL(pl[2], factor) )
  }

  if (isArray(px) && px.length === 2) {
    mobileStyles.push( generatePX(px[0], factor) )
    desktopStyles.push( generatePX(px[1], factor) )
  }
  if (isArray(px) && px.length === 3) {
    mobileStyles.push( generatePX(px[0], factor) )
    tabletStyles.push( generatePX(px[1], factor) )
    desktopStyles.push( generatePX(px[2], factor) )
  }

  if (isArray(py) && py.length === 2) {
    mobileStyles.push( generatePY(py[0], factor) )
    desktopStyles.push( generatePY(py[1], factor) )
  }
  if (isArray(py) && py.length === 3) {
    mobileStyles.push( generatePY(py[0], factor) )
    tabletStyles.push( generatePY(py[1], factor) )
    desktopStyles.push( generatePY(py[2], factor) )
  }

  if (isArray(p) && p.length === 2) {
    mobileStyles.push( generateP(p[0], factor) )
    desktopStyles.push( generateP(p[1], factor) )
  }
  if (isArray(p) && p.length === 3) {
    mobileStyles.push( generateP(p[0], factor) )
    tabletStyles.push( generateP(p[1], factor) )
    desktopStyles.push( generateP(p[2], factor) )
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