const { onDeploySuccess } = require('./pipelines/DeploySuccessNotification')

module.exports = {
  branches: [    
    { name: 'monorepo', prerelease: true },
    { name: 'qa', prerelease: true }
  ],
  plugins: [
    [
      '@semantic-release/release-notes-generator',
    ],
    [
      '@semantic-release/changelog', {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/commit-analyzer', {
        releaseRules: [
          { type: 'breaking', release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'add', release: 'patch' },
          { type: 'remove', release: 'patch' },
        ],
      }
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
      'semantic-release-slack-bot', {
        notifyOnSuccess: true,
        notifyOnFail: true,
        onSuccessFunction: onDeploySuccess,
      }
    ]
  ]
}