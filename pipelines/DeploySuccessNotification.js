function onDeploySuccess(pluginConfig, context) {

  //info search
  const branchName = context && context.branch ? context.branch.name : false
  const releaseVersion = context && context.nextRelease ? context.nextRelease.version : ''
  const commitHead = context && context.nextRelease ? context.nextRelease.gitHead : ''

  //info mount
  const isQa = branchName === 'qa'
  const prodMessage = `💿 Prensa atualizado - *v${releaseVersion}*`
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

module.exports = { onDeploySuccess }