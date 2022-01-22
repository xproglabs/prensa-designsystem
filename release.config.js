// const { parseNotification } = require('./notifications/releaseNotification')
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
        // onSuccessFunction: data => parseNotification(data),
        onSuccessTemplate: {
          text: 'A new version of $package_name with version $npm_package_version has been released at $repo_url!'
        },
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