const axios = require('axios')
const { get } = require('lodash')

const { getGitCommit } = require('./getGitCommit')

async function onBuildError() {

  //info search
  const commitData = await getGitCommit()
  const commitHash = get(commitData, 'hash', '')
  const commitAuthor = get(commitData, 'author.email', '')
  const branchName = get(commitData, 'branch', '')
  const slackWebhook = process.env.SLACK_WEBHOOK

  //info mount
  const notificationMessage = '⛔ Build do Prensa falhou'
  const commitUrl = `https://github.com/xproglabs/prensa-designsystem/commit/${commitHash}`
  const triggeredBy = `Committer: ${commitAuthor}`
  const currentBranch = `Branch: ${branchName}`
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
        text: triggeredBy
      }
    ]
  }
  const thirdInformation = {
    type: 'context',
    elements: [
      {
        type: 'mrkdwn',
        text: currentBranch
      }
    ]
  }
  const fourthInformation = {
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
      secondInformation,
      thirdInformation,
      fourthInformation
    ]
  })
}

onBuildError()