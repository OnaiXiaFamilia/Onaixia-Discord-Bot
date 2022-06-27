module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this command!",
          ephemeral: true,
        });
      }
    } else if (interaction.isSelectMenu()) {
      const menu = client.menus.get(interaction.customId);

      if (!menu)
        return await interaction.reply({
          content: `There was no menu code found for this select menu.`,
        });
      try {
        await menu.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this menu!",
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()) {
      const button = client.buttons.get(interaction.customId);
      if (!button)
        return await interaction.reply({
          content: `There was no button code found for this button.`,
        });

      try {
        await button.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "There was an error while executing this button!",
          ephemeral: true,
        });
      }
    }
  },
};
