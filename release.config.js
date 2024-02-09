/* eslint-disable @typescript-eslint/no-var-requires */
const jsonData = require('./package.json')

module.exports = {
  branches: ['main', { name: 'develop', channel: 'develop', prerelease: true }],
  repositoryUrl: jsonData.repository,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['docs/CHANGELOG.md', 'package.json']
      }
    ],
    [
      '@semantic-release/github'
    ]
  ]
}