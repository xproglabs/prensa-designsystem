function parseNotification(pluginConfig) {

  const message = `*v${pluginConfig.packageVersion}* publicada com sucesso`

  return {
    text: '',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'text',
          text: message
        }
      }
    ]
  }
}

module.exports = {
  parseNotification
}