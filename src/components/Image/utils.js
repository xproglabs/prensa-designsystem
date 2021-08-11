const path_absolute = (derivative, domain, policy_id, width) => {
  if (!policy_id) return null
  const w = width || 1000
  const d = derivative || '2x1'
  const path = `/image/policy:${policy_id}/image.jpg?f=${d}&w=${w}`
  const url = `${domain}${path}`
  return url
}

export { path_absolute }
