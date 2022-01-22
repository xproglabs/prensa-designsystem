function parseNotification() {

  const message = 'A new version of $package_name with version $npm_package_version has been released at $repo_url!'

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