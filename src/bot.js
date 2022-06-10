const { Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const intents = new Intents(32767);
const client = new Client({ intents });

client.commands = new Collection();

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
  client.login(process.env.DISCORD_TOKEN);
})(); //Hello
