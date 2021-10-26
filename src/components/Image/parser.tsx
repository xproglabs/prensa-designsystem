import { get } from 'lodash'
/**
 * @description set the image dimension (i.e. 2x1, 1x1, 3x2)
 */
type DerivativeType = string
/**
 * @description set the domain for the image path prefix
 */
type DomainType = string
/**
 * @description set the policy id value aka contentid
 */
type PolicyType = string
/**
 * @description set the image width (via path param)
 */
type WidthType = number

export const parseImagePath = (
  derivative: DerivativeType,
  domain: DomainType,
  policy: PolicyType,
  width: WidthType
) => {
  /**
   * @description return the image path url
   */
  let url: string = ''
  // domain treatments
  if (domain === 'undefined') {
    domain = ''
  }
  // parse policy
  const policy_split = policy.split('.')
  const policy_version = get(policy_split, '[2]', false)
  const policy_string = policy_version ? `${policy}:${policy_version}` : policy
  // parse params
  const path_policy = `/image/policy:${policy_string}`
  const path_file = '/image.jpg'
  const params_d = derivative ? `f=${derivative}&` : ''
  const params_w = width ? `w=${width}&` : ''
  const params = `?${params_d}${params_w}`
  // final string
  url = `${domain}${path_policy}${path_file}${params}`
  return url
}