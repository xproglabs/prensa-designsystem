export const getTikTokVideoId = (url: string) => {
  const match = url.match(/(@[a-zA-z0-9]*|.*)(\/.*\/|trending.?shareId=)([\d]*)/gm)
  if (match) {
    return match[0].split('/')[3]
  }
}