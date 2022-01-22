function parseNotification() {
  return {
    text: '',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: '*v$npm_package_version* publicada com sucesso'
        }
      },
    ]
  }
}

module.exports = {
  parseNotification
}