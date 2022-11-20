const { onDeploySuccess } = require('../../pipelines/DeploySuccessNotification')

/**
 * Exports configuration module.
 * Order of plugins matter - Commit analyzer must be first.
 */
module.exports = {
  tagFormat: 'pds-v${version}',
  branches: [    
    { name: 'master' },
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
      '@semantic-release/npm', {
        npmPublish: false,
      }
    ],
    [
      '@semantic-release/npm', {
        npmPublish: true,
        pkgRoot: 'dist'
      }
    ],
    [
      '@semantic-release/git', {
        assets: [ 'CHANGELOG.md', 'package.json', 'package-lock.json' ],
        message: 'release(pdsv2): ${nextRelease.version} [skip ci]'
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