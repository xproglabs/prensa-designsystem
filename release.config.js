const { onSuccessCI } = require('./notifications/cdNotification')

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
      '@semantic-release/commit-analyzer', {
        releaseRules: [
          { type: 'feat', release: 'patch' },
          { type: 'feat:major', release: 'minor' },
          { type: 'fix', release: 'patch' }
        ],
      }
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
        onSuccessFunction: onSuccessCI,
      }
    ]
  ]
}