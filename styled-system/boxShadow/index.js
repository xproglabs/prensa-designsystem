/**
 * Prensa Styled System | boxShadow
 * @param props Expect a string matching box-shadow css requirements
 * boxShadow: string;
 * @returns a string with CSS syntax
 */
export function boxShadow({ boxShadow }) {
  if (!boxShadow) return ''
  return `box-shadow: ${boxShadow};`
}