const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("colour")
    .setDescription("Asks your favourite color"),
  async execute(interaction, client) {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("colour-select")
        .setPlaceholder("Nothing is selected.")
        .setMinValues(1)
        .setMaxValues(2)
        .addOptions([
          {
            label: `Red`,
            description: `Your favourite color is red.`,
            value: `Red`,
          },
          {
            label: `Blue`,
            description: `Your favourite color is blue.`,
            value: `blue`,
          },
          {
            label: `Yellow`,
            description: `Your favourite color is yellow.`,
            value: `yellow`,
          },
          {
            label: `white`,
            description: `Your favourite color is white.`,
            value: `white`,
          },
        ])
    );
    await interaction.reply({
      content: `what is your fav color? `,
      components: [row],
    });
  },
};
