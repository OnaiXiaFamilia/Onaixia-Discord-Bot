module.exports = {
  data: {
    name: `colour-select`,
  },
  async execute(interaction, client) {
    let color = "";
    await interaction.value.forEach(async (value) => {
      color += `${value}`;
    });
    await interaction.reply({
      content: `wow your fav color are: ${color}`,
    });
  },
};
