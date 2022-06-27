const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const intents = new Intents(32767);
const client = new Client({ intents });
const { TwitterApi } = require("twitter-api-v2");

client.commands = new Collection();
client.buttons = new Collection();
client.embeds = new Collection();
client.menus = new Collection();

require("dotenv").config();

const functions = fs
  .readdirSync("./src/functions")
  .filter((file) => file.endsWith(".js"));
const eventsFiles = fs
  .readdirSync("./src/events")
  .filter((file) => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client);
  }

  client.handleEvents(eventsFiles, "../events");
  client.handleCommands(commandFolders, "./src/commands");
  client.handleButtons();
  client.handleEmbeds();
  client.login(process.env.DISCORD_TOKEN);
  client.dbLogin();
})();
