function parseNotification() {

  const message = '* $npm_package_version * publicada com sucesso'

  return {
    text: '',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'plain_text',
          text: message
        }
      },
    ]
  }
}

module.exports = {
  parseNotification
}