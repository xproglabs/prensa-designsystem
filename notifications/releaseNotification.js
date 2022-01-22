const { chunkifyString } = require('semantic-release-slack-bot/lib/chunkifier')
const slackifyMarkdown = require('slackify-markdown')

function parseNotification(pluginConfig, context) {

  console.log(context)

  const releaseNotes = slackifyMarkdown(context.nextRelease.notes)
  const text = `Updates to ${
    pluginConfig.packageName
  } has been released to *Stage!*`
  const headerBlock = {
    type: 'section',
    text: {
      type: 'mrkdwn',
      text
    }
  }

  return {
    text,
    blocks: [
      headerBlock,
      ...chunkifyString(releaseNotes, 2900).map(chunk => {
        return {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: chunk
          }
        }
      })
    ]
  }
}

module.exports = {
  parseNotification
}