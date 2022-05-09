const chalk = require('chalk');
const express = require('express');
const fs = require('fs');
const server = express();

server.all('/', (req, res) => {
    res.send("DISCORD RPC BY FOXYCODEX 🦊")
})

function keepAlive() {
    server.listen(process.env.PORT, () => {
        console.log(chalk.hex("#00FF00")("⏳ Booting..."))
    });
}
module.exports = keepAlive

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})