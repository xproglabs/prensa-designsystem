const axios = require('axios')
const { getLastCommit } = require('git-last-commit')
const { get } = require('lodash')

function onErrorCI() {

  let lastCommitData = {}

  getLastCommit(
    function (err, commit) {
      if (err) {
        console.error('err', err)
        throw new Error(err)
      } else {
        lastCommitData = commit
      }
    }
  )

  //info search
  const commitHash = get(lastCommitData, 'hash', '')
  const slackWebhook = process.env.SLACK_WEBHOOK

  //info mount
  const notificationMessage = '⛔ Falha ao buildar o Prensa'
  const commitUrl = `https://github.com/xproglabs/prensa-designsystem/commit/${commitHash}`
  const goToCommit = `Ver mais: ${commitUrl}`

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
        text: goToCommit
      }
    ]
  }

  axios.post(slackWebhook, {
    text: notificationMessage,
    blocks: [
      mainInformation,
      secondInformation
    ]
  })
}

onErrorCI()

module.exports = {
  onErrorCI
}