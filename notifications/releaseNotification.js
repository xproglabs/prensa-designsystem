const { get } = require('lodash')

function successNotification(pluginConfig, context) {

  //info search
  const isQA = get(context, 'branch.name', false)
  const releaseVersion = get(context, 'nextRelease.version', '')
  const commitHead = get(context, 'nextRelease.gitHead', '')

  //info mount
  const prodMessage = `📮 Prensa atualizado - *v${releaseVersion}*`
  const qaMessage = `📦 Prensa QA atualizado - *v${releaseVersion}*`
  const notificationMessage = isQA ? qaMessage : prodMessage
  const commitUrl = `https://github.com/xproglabs/prensa-designsystem/commit/${commitHead}`
  
  //slack based block mount
  const mainInformation = {
    type: 'section',
    text: {
      type: 'plain_text',
      text: notificationMessage
    }
  }
  const secondInformation = {
    type: 'context',
    elements: [
      {
        type: 'mrkdwn',
        text: commitUrl
      }
    ]
  }
  
  const message = {
    text: notificationMessage,
    blocks: [
      mainInformation,
      secondInformation
    ]
  }  

  return message
}

module.exports = {
  successNotification
}