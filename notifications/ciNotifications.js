const axios = require('axios')
const { get } = require('lodash')

const { getGitCommit } = require('./getGitCommit')

async function onErrorCI() {

  //info search
  const commitData = await getGitCommit()
  const commitHash = get(commitData, 'hash', '')
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