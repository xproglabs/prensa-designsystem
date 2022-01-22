const { parseNotification } = require('./notifications/releaseNotification')
const { version } = require('./package.json')

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
        packageVersion: version,
        notifyOnSuccess: true,
        notifyOnFail: true,
        onSuccessFunction: data => parseNotification(data),
        branchesConfig: [
          {
            pattern: 'master1',
            notifyOnSuccess: true,
            notifyOnFail: true
          }
        ]
      }
    ]
  ]
}