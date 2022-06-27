module.exports = {
  data: {
    name: `primary-button`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `Color primary: #ED4245`,
      ephemeral: true,
    });
  },
};
