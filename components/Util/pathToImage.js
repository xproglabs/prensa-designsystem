const pathToImage = (derivative, domain, policy_id, width) => {
  if(!policy_id) 
    return null
  let w = width || 1000
  let r = domain || 'https://costanorte.com.br'
  let d = derivative || '2x1'
  let id = policy_id.split(".")
  let string = id.length > 2 ? `${policy_id}:${id[2]}` : `${policy_id}`
  let path = `${r}/image/policy:${string}/image.jpg?f=${d}&w=${w}`
  return path
}
export {pathToImage}