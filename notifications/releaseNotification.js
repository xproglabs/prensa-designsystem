const { get } = require('lodash')
const { chunkifyString } = require('semantic-release-slack-bot/lib/chunkifier')
const slackifyMarkdown = require('slackify-markdown')

function successNotification(pluginConfig, context) {

  //info search
  const isQA = get(context, 'branch.name', false)
  const releaseVersion = get(context, 'nextRelease.version', '')
  const releaseNotes = get(context, 'nextRelease.notes', '')

  //info mount
  const prodMessage = `📮 Prensa atualizado - ${releaseVersion}`
  const qaMessage = `📦 Prensa QA atualizado - ${releaseVersion}`
  const parsedReleaseNotes = slackifyMarkdown(releaseNotes)
  const notificationMessage = isQA ? prodMessage : qaMessage
  
  //slack based block mount
  const mainInformation = {
    type: 'header',
    text: {
      type: 'plain_text',
      text: notificationMessage
    }
  }
  const secondInformation = chunkifyString(parsedReleaseNotes, 2900)
    .map(chunk => {
      const text = []
      text.push('```')
      text.push(chunk)
      text.push('```')
      return {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: text.join('')
        }
      }
    })
  const divider = {
    type: 'divider'
  }
  
  const message = {
    text: notificationMessage,
    blocks: [
      mainInformation,
      divider,
      ...secondInformation
    ]
  }

  console.log(message)

  return message
}

module.exports = {
  successNotification
}