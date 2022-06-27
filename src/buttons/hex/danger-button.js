module.exports = {
  data: {
    name: `danger-button`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Color Danger: #ED4245`,
      ephemeral: true,
    });
  },
};
