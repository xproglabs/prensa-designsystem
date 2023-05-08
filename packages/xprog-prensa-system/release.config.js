module.exports = {
  branches: [
    { name: 'master' },
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
      }
    ],
    [
      '@semantic-release/npm', {
        npmPublish: true,
        pkgRoot: 'dist'
      }
    ],
    [
      "@semantic-release/git", {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json", "yarn.lock"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      }
    ]
  ]
};
