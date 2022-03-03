export const getTikTokVideoId = (url: string) => {
  if (!url) return null
  const video = url.replace(/.*tiktok\.com\/@.*\/video\/(.*)/g, '$1')
  return video
}