const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testie")
    .setDescription("Replies with testie!"),
  async execute(interaction) {
    await interaction.reply("tesiteee!");
  },
};
