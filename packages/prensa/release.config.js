const { onDeploySuccess } = require('../../pipelines/DeploySuccessNotification')
/**
 * Exports configuration module.
 * Order of plugins matter - Commit analyzer must be first.
 */
module.exports = {
  tagFormat: 'v${version}',
  branches: [    
    { name: 'master' },
    { name: 'monorepo', prerelease: true },
    { name: 'qa', prerelease: true }
  ],
  plugins: [
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
      '@semantic-release/changelog', {
        changelogFile: 'CHANGELOG.md'
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
        assets: [ '!dist/**/*', 'CHANGELOG.md', 'package.json', 'package-lock.json' ],
        message: 'release(pdsv1): ${nextRelease.version} [skip ci]'
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