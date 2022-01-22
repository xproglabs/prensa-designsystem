function parseNotification(pluginConfig, context) {

  const message = []

  message.push('```')
  message.push(`${pluginConfig}`)
  message.push(`${context}`)
  message.push('```')

  console.log(message)

  return {
    text: '',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: message.join('')
        }
      }
    ]
  }
}

module.exports = {
  parseNotification
}