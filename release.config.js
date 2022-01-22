const { successNotification } = require('./notifications/releaseNotification')

module.exports = {
  branches: [
    { name: 'master' },
    { name: 'qa', prerelease: true }
  ],
  plugins: [
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/commit-analyzer',
    ],
    [
      '@semantic-release/release-notes-generator',
    ],
    [
      '@semantic-release/npm'
    ],
    [
      '@semantic-release/git', {
        assets: [
          '!dist/**/*'
        ]
      }
    ],
    [
      'semantic-release-slack-bot',
      {
        notifyOnSuccess: true,
        notifyOnFail: true,
        onSuccessFunction: successNotification,
      }
    ]
  ]
}