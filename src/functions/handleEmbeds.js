const fs = require("fs");

module.exports = (client) => {
  client.handleEmbeds = async () => {
    const embedFolders = fs.readdirSync("./src/embeds");
    for (const folder of embedFolders) {
      const embedFiles = fs
        .readdirSync(`./src/embeds/${folder}`)
        .filter((file) => file.endsWith(".js"));
      for (const file of embedFiles) {
        const embed = require(`../embeds/${folder}/${file}`);
        client.embeds.set(embed.data.name, embed);
      }
    }
  };
};
