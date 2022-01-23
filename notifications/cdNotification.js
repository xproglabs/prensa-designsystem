const { get } = require('lodash')

function onSuccessCI(pluginConfig, context) {

  //info search
  const branchName = get(context, 'branch.name', false)
  const releaseVersion = get(context, 'nextRelease.version', '')
  const commitHead = get(context, 'nextRelease.gitHead', '')

  //info mount
  const isQa = branchName === 'qa'
  const prodMessage = `🗳️ Prensa atualizado - *v${releaseVersion}*`
  const qaMessage = `📦 Prensa QA atualizado - *v${releaseVersion}*`
  const notificationMessage = isQa !== false ? qaMessage : prodMessage
  const commitUrl = `Ver mais: https://github.com/xproglabs/prensa-designsystem/commit/${commitHead}`
  
  //slack based block mount
  const mainInformation = {
    type: 'section',
    text: {
      type: 'mrkdwn',
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
  onSuccessCI
}