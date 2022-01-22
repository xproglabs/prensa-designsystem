function parseNotification(pluginConfig) {

  console.log(JSON.stringify(pluginConfig))

  return {
    text: '',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'text',
          text: `Teste ${pluginConfig.packageVersion}`
        }
      }
    ]
  }
}

module.exports = {
  parseNotification
}