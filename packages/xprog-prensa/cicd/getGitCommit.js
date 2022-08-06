const { getLastCommit } = require('git-last-commit')

function getGitCommit() {
  return new Promise(
    function(res, rej) {
      getLastCommit(
        function(err, data) {
          if (err) return rej(err)
          return res(data)
        }
      )
    }
  )
}

module.exports = {
  getGitCommit
}