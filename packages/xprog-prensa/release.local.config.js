/**
 * Exports configuration module.
 * Order of plugins matter - Commit analyzer must be first.
 */
module.exports = {
  tagFormat: 'pds-local-v${version}',
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
      '@semantic-release/npm', {
        npmPublish: false,
        pkgRoot: 'dist',
        tarballDir: 'dist'
      }
    ],
    [
      '@semantic-release/git', {
        message: 'local-release(pdsv2): ${nextRelease.version} [skip ci]'
      }
    ]
  ]
}