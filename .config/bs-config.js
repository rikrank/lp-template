module.exports = {
  "ui": {
    "port": 3001,
    "weinre": {
      "port": 8080
    }
  },
  "files": ['./dist/**/*', './**/*.php'],
  "watch": true,
  "proxy": "azabutailortop.local"
}
