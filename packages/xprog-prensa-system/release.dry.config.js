module.exports = {
  branches: [
    { name: '*', prerelease: true },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer", {
        releaseRules: [
          { type: 'breaking', release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'add', release: 'patch' },
          { type: 'remove', release: 'patch' },
        ]
      }
    ],
    [
      "@semantic-release/release-notes-generator",
    ],
    [
      "@semantic-release/changelog",
    ],
    [
      '@semantic-release/npm', {
        npmPublish: false,
        pkgRoot: 'dist',
        tarballDir: 'dist'
      }
    ],
    [
      "@semantic-release/git", {
        assets: ["CHANGELOG.md", "package.json"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      }
    ]
  ]
};
