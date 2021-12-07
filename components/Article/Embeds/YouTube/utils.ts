export const getYoutubeVideoId = url => {
  let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
  let match = url.match(regExp)
  return (match && match[1].length == 11) ? match[1] : false
}