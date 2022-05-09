const fs = require('fs')
const chalk = require('chalk')

global.token = '' // Put Your Token Here or Put In .env
global.applicationid = '964702297726799922'
global.status = 'dnd'
global.type = 'PLAYING' // PLAYING, LISTENING, WATCHING, STREAMING
global.name = 'Lunar Client'
global.title = 'Lunar Client'
global.toptext = 'Playing Minecraft 1.18.2' // Optional
global.bottomtext = '' // Optional
global.largeimage = 'lunar' // Required
global.smallimage = 'vsc' // Required
global.smallimageenable = false
global.elapse = true

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})