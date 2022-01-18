/**
 * Prensa Styled System | boxShadow
 * @param props Expect a string matching box-shadow css requirements
 * boxShadow: string;
 * @returns a string with CSS syntax
 */
export function boxShadow(props) {
  const { boxShadow } = props
  return `box-shadow: ${boxShadow};`
}