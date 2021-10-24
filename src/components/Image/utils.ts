/**
 * Prensa | Image path generator for Polopoly CMS
 * @param {string} derivative 
 * @param {string} domain 
 * @param {string} policy_id 
 * @param {string} width 
 * @returns parsed image url as a string
 */
export function path_absolute(
  derivative: string,
  domain: string,
  policy_id: string,
  width: string
) {
  if (!policy_id) return null
  const w = width || 1000
  const d = derivative || '2x1'
  const path = `/image/policy:${policy_id}/image.jpg?f=${d}&w=${w}`
  const url = domain && domain !== 'undefined' ? `${domain}${path}` : path
  return url
}