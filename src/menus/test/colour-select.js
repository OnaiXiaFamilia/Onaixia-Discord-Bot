module.exports = {
  data: {
    name: `colour-select`,
  },
  async execute(interaction, client) {
    let colours = "";
    await interaction.values.forEach(async (value) => {
      colours += `${value}`;
    });

    await interaction.reply({
      content: `wow your fav color are: ${colours}`,
    });
  },
};
