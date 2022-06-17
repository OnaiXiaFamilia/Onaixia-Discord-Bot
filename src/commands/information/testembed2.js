const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("testembed2")
    .setDescription("this is joq's testembed2 command"),
  async execute(interaction, client) {
    await interaction.reply({ embeds: [TestEmbed2] });
    await client.executeCommand("testembed2");
  },
};
