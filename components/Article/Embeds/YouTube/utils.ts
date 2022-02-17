export const getYoutubePlaylistId = (url: string) => {
  if (!url) return null
  const playlistId = url.replace(/^.*list=/, '').replace(/\\&.*$/, '')
  return playlistId
}
export const getYoutubeVideoId = url => {
  if (!url) return null
  let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  let match = url.match(regExp)
  return (match && match[7].length == 11) ? match[7] : false
}