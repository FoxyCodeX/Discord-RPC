require("./config.js");
require('dotenv').config();
const discord = require('discord.js-selfbot-v11');
const fs = require('fs');
const chalk = require('chalk');

const client = new discord.Client();
const keepAlive = require('./server.js');

const events = fs.readdirSync('./events/');
events.forEach(file => {
    const eventname = file.split('.')[0];
    const event = require(`./events/${file}`);
    client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login(process.env.token || global.token);

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})