require("../config")
const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const fs = require('fs');

module.exports = async (client) => {
    const small = await rpc.getRpcImage(global.applicationid, global.smallimage);

    rpc.getRpcImage(global.applicationid, global.largeimage)
        .then(large => {
            let presence = new rpc.Rpc()
            if (global.smallimageenable) {
              if (global.type == "LISTENING" || global.type == "WATCHING") {
                presence.setUrl('https://www.twitch.tv/')
                presence.setApplicationId(global.applicationid)
                presence.setType(global.type)
                presence.setName(global.name)
                presence.setDetails(global.title)
                presence.setAssetsLargeImage(large.id)
                presence.setAssetsSmallImage(small.id)
                if (!global.toptext == "") {
                  presence.setState(global.toptext)
                }
                if (!global.bottomtext == "") {
                  presence.setAssetsLargeText(global.bottomtext)
                }
                if (global.elapse) {
                  presence.setStartTimestamp(global.time || Date.now())
                }
              } else if (global.type == "PLAYING") {
                presence.setUrl('https://www.twitch.tv/')
                presence.setApplicationId(global.applicationid)
                presence.setType(global.type)
                presence.setName(global.name)
                presence.setAssetsLargeImage(large.id)
                presence.setAssetsSmallImage(small.id)
                if (!global.toptext == "") {
                  presence.setDetails(global.toptext)
                }
                if (!global.bottomtext == "") {
                  presence.setState(global.bottomtext)
                }
                if (global.elapse) {
                  presence.setStartTimestamp(global.time || Date.now())
                }
              } else if (global.type == "STREAMING") {
                presence.setUrl('https://www.twitch.tv/hml_cp0')
                presence.setApplicationId(global.applicationid)
                presence.setType(global.type)
                presence.setName(global.name)
                presence.setDetails(global.title)
                presence.setAssetsLargeImage(large.id)
                presence.setAssetsSmallImage(small.id)
                if (!global.toptext == "") {
                  presence.setState(global.toptext)
                }
                if (!global.bottomtext == "") {
                  presence.setAssetsLargeText(global.bottomtext)
                }
                if (global.elapse) {
                  presence.setStartTimestamp(Date.now())
                }
              }
            } else if (!global.smallimageenable) {
              if (global.type == "LISTENING" || global.type == "WATCHING") {
                presence.setUrl('https://www.twitch.tv/hml_cp0')
                presence.setApplicationId(global.applicationid)
                presence.setType(global.type)
                presence.setName(global.name)
                presence.setDetails(global.title)
                presence.setAssetsLargeImage(large.id)
                if (!global.toptext == "") {
                  presence.setState(global.toptext)
                }
                if (!global.bottomtext == "") {
                  presence.setAssetsLargeText(global.bottomtext)
                }
                if (global.elapse) {
                  presence.setStartTimestamp(Date.now())
                }
              } else if (global.type == "PLAYING") {
                presence.setUrl('https://www.twitch.tv/hml_cp0')
                presence.setApplicationId(global.applicationid)
                presence.setType(global.type)
                presence.setName(global.name)
                presence.setAssetsLargeImage(large.id)
                if (!global.toptext == "") {
                  presence.setDetails(global.toptext)
                }
                if (!global.bottomtext == "") {
                  presence.setState(global.bottomtext)
                }
                if (global.elapse) {
                  presence.setStartTimestamp(Date.now())
                }
              } else if (global.type == "STREAMING") {
                presence.setUrl('https://www.twitch.tv/hml_cp0')
                presence.setApplicationId(global.applicationid)
                presence.setType(global.type)
                presence.setName(global.name)
                presence.setDetails(global.title)
                presence.setAssetsLargeImage(large.id)
                if (!global.toptext == "") {
                  presence.setState(global.toptext)
                }
                if (!global.bottomtext == "") {
                  presence.setAssetsLargeText(global.bottomtext)
                }
                if (global.elapse) {
                  presence.setStartTimestamp(Date.now())
                }
              }
            }
                
            console.log(presence.toDiscord())
            client.user.setStatus(global.status);
            client.user.setPresence(presence.toDiscord()).catch(console.error);
        })
    console.log(chalk.hex("#00DDFF")("▶ Succesfully Enabled RPC"))
    console.log(chalk.hex("#FFFF00")("☣ By FoxyCodeX"))
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})