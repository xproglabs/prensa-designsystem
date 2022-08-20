/* eslint-disable */
export const getInstagramShortcode = (url: string) => {
  if (!url) return null
  let regExp = '^https?:\/\/(?:www\.)?instagram\.com\/[^\/]+(?:\/[^\/]+)?\/([^\/]{11})\/.*$'
  let match = url.match(regExp)
  return match[1]
}