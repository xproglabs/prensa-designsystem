
/**
 * Prensa | getTweetId
 * @param url Expects an https tweet url
 * @example 
 * https://twitter.com/${user}/status/${tweetId}
 * https://twitter.com/${user}/status/${tweetId}?ref_src=${...}
 * @returns tweetId
 */
export function getTweetId(url: string) {
  let split_a = url.split('/')
  let split_b = split_a[split_a.length - 1].split('?')
  return split_b[0]
}